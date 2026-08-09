#!/usr/bin/env node
// Scripted page capture over the Chrome DevTools Protocol. Zero dependencies — Node 22's
// global WebSocket is the whole client, which is what keeps this runnable on a box where
// `npm install` is not an allowed move.
//
// WHY THIS FILE EXISTS AT ALL: the first OGO capture set was shot with throwaway drivers
// that were deleted afterwards, so `screenshots/ogo/README.md` had to tell the next person
// to re-derive them. Re-deriving is cheap the first time and expensive every time after,
// because the thing you actually lose is the SETTINGS — scale factor, viewport, which day
// the UI was pinned to, how long to wait for a chart to animate in. Those live here now.
//
// Usage:
//   node tools/capture.mjs --url https://host/page --out shot.png
//   node tools/capture.mjs --url … --out … --selector "#panel"     # clip to one element
//   node tools/capture.mjs --url … --out … --click "button.day"    # click, then shoot
//   node tools/capture.mjs --url … --out … --full                  # whole scrollable page
//
// Flags: --width (default 1600 CSS px) --scale (default 2, i.e. retina) --wait (ms after load)

import { spawn } from 'node:child_process';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const arg = (name, fallback = null) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : (argv[i + 1]?.startsWith('--') ? true : argv[i + 1]);
};
const flag = (name) => argv.includes(`--${name}`);

const URL_ = arg('url');
const OUT = arg('out');
const SELECTOR = arg('selector');
const CLICK = arg('click');
const WIDTH = Number(arg('width', 1600));
const SCALE = Number(arg('scale', 2));
const WAIT = Number(arg('wait', 2500));
const FULL = flag('full');

if (!URL_ || !OUT) {
  console.error('need --url and --out');
  process.exit(2);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- launch ---------------------------------------------------------------------------
// --ignore-certificate-errors: our internal surfaces use an internal CA. This driver only
// ever points at hosts we run, so trusting them is the intent, not a shortcut.
const profile = await mkdtemp(join(tmpdir(), 'cap-'));
const PORT = 9500 + Math.floor(Math.random() * 400);
const chrome = spawn('chromium', [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  '--ignore-certificate-errors',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--disable-dev-shm-usage',
  'about:blank',
], { stdio: 'ignore' });

const cleanup = async () => {
  try { chrome.kill('SIGKILL'); } catch {}
  try { await rm(profile, { recursive: true, force: true }); } catch {}
};
process.on('exit', () => { try { chrome.kill('SIGKILL'); } catch {} });

// ---- connect --------------------------------------------------------------------------
let wsUrl = null;
for (let i = 0; i < 60 && !wsUrl; i++) {
  await sleep(250);
  try {
    const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
    wsUrl = (await r.json()).webSocketDebuggerUrl;
  } catch {}
}
if (!wsUrl) { await cleanup(); throw new Error('chromium never opened its debug port'); }

const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 0;
const pending = new Map();
const events = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  } else if (msg.method) {
    events.push(msg.method);
  }
};
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });

// ---- drive ----------------------------------------------------------------------------
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

// Height is generous rather than exact: captureBeyondViewport handles anything taller, and
// a short viewport makes lazy/in-view-triggered charts render blank.
await send('Emulation.setDeviceMetricsOverride',
  { width: WIDTH, height: 1400, deviceScaleFactor: SCALE, mobile: false }, sessionId);
await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send('Page.navigate', { url: URL_ }, sessionId);

for (let i = 0; i < 80 && !events.includes('Page.loadEventFired'); i++) await sleep(100);
await sleep(WAIT); // charts animate in after load; this is the setting worth keeping

if (CLICK) {
  await send('Runtime.evaluate', {
    expression: `(()=>{const el=document.querySelector(${JSON.stringify(CLICK)});
                  if(!el) throw new Error('no element for --click');
                  el.click(); return true;})()`,
    awaitPromise: true,
  }, sessionId);
  await sleep(WAIT);
}

let clip;
if (SELECTOR) {
  // Scroll to the TOP before measuring, never scrollIntoView. captureBeyondViewport shoots
  // absolute page coordinates, but a position:sticky header still paints wherever the current
  // scroll leaves it — so scrolling the target into view is exactly what drops the header on
  // top of the thing being captured. At scroll 0 the header sits in its own place and every
  // absolute rect below it is clean. (Cost one silently-corrupted capture to learn.)
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)' }, sessionId);
  await sleep(300);
  const { result } = await send('Runtime.evaluate', {
    expression: `(()=>{const el=document.querySelector(${JSON.stringify(SELECTOR)});
                  if(!el) return null;
                  const r=el.getBoundingClientRect();
                  return JSON.stringify({x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height});})()`,
    returnByValue: true,
  }, sessionId);
  if (!result.value) { await cleanup(); throw new Error(`selector not found: ${SELECTOR}`); }
  const r = JSON.parse(result.value);
  clip = { ...r, scale: 1 };
}

const shot = await send('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: true,
  ...(clip ? { clip } : {}),
  ...(FULL && !clip ? { captureBeyondViewport: true } : {}),
}, sessionId);

await writeFile(OUT, Buffer.from(shot.data, 'base64'));
console.log(`${OUT}  ${(Buffer.from(shot.data, 'base64').length / 1024 | 0)}KB` +
            (clip ? `  clip ${Math.round(clip.width)}x${Math.round(clip.height)} @${SCALE}x` : ''));

ws.close();
await cleanup();
process.exit(0);
