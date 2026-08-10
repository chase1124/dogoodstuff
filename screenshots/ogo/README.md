# OffGridOperator portal captures

Source: `https://portal.ogo.elm.therain.website` (the live 46elm production instance, LAN-only,
internal TLS cert). Captured **2026-08-07** with headless Chrome over CDP at
`deviceScaleFactor: 2`, so every PNG is retina-density.

**Which day the data is from.** The site's own clock was ~09:00 when these were taken, so
"today" (08-07) was a half-empty morning. Every replay capture therefore uses **08-06, a
completed day**; the array-explorer captures use its rolling **7-day window** (Jul 31 – Aug 7)
and needed no day switch.

## Files

| Capture | Shows |
|---|---|
| `replay-day-animation.gif` | The day replay playing 08-06, 8 AM → 10 PM. Playhead sweeps the timeline while panel fills, per-array class badges (full / shade / under-prod / diffuse) and site output update live. |
| `replay-yard-midday.png` · `replay-yard.png` | The yard at 13:05 (midday, 4.20 kW) and at the 8 AM default. Per-array `now` vs `vs exp`, plus GHI / cloud / air temp. |
| `replay-actual-vs-poa*.png` | Per-array actual vs POA-expected — the expectation is solar-geometry POA from *measured* GHI, so a gap is a real capture loss, never "it was cloudy". |
| `replay-day-pnl.png` | Day P&L for 08-06: $4.80 captured, $4.83 left on the table, 50% of POA potential. Loss split into shade / under-production / diffuse per array. |
| `replay-shade-by-array.png` | Per-array shade profile with generated callouts ("Faulty array suspected", "Afternoon fade", "Under-producing in 1 of its 6 clear hours"). |
| `explorer-model-fidelity-full.png` | The forecast-vs-reality centrepiece: capture ratio per array, expected-vs-actual curves (solid = actual, dashed = physical expectation), and a per-array × per-day capture heatmap. |
| `explorer-expected-vs-actual.png` · `explorer-capture-ratio.png` · `explorer-capture-heatmap.png` | The three panels above, cropped individually. |
| `explorer-psh-index.png` | Peak sun hours by array — same sky, different positions. |
| `explorer-performance-index.png` | Utilization normalized to each array's own 7-day peak, so weather cancels and shading stays. |
| `explorer-subarrays.png` · `explorer-ac-vs-dc.png` | Enphase per-panel breakdown; AC vs DC daily totals. |
| `dashboard-*.png` | Live site state: battery + cell-level safety, state of power, inverter gauges & power quality, battery trajectory vs committed plan, net value vs utility. |
| `sessions-*.png` | Smart-load session timeline, money flow by load, and a self-audit "capture health" panel. |
| `*-FULLPAGE.png` | Whole-page versions of each surface. |

## ⚠ THREE CAPTURES CARRY CLAIMS THAT ARE WRONG — added 2026-08-09 by James

These are not style notes. The captures are accurate recordings of what the product displayed;
the **product's own conclusions** in them are wrong, and a caption that repeats them ships a
falsehood. This was caught only after a page had already gone live quoting one as a headline.

1. **`replay-shade-by-array.png` — the "Faulty array suspected" diagnosis on `mopowa` is a FALSE
   POSITIVE.** That array is **two physical arrays wired in parallel at different locations with
   different tilt and azimuth**, which defeats the grader: it compares a combined output against a
   single-geometry expectation, so it reads permanent under-production where there is none. **Do
   not present this as the system correctly finding a fault.** It is a real limitation of
   single-geometry modelling on a parallel string.
2. **Same capture — `bluesolar` flagged "under-producing in 1 of its 6 clear hours" is a GOOD
   result, not a problem.** Five of six hours graded correctly. Reading the one flagged hour as a
   defect inverts the meaning.
3. **`replay-day-pnl.png` and `dashboard-net-value-vs-utility.png` show curtailment at zero —
   that is a 46elm data artefact, not a product limit.** The Kingman install reports **active
   curtailment with real figures**. See the site note below.

**A caption may describe what a screen DOES. It may not repeat a specific diagnosis as if it were
confirmed** unless someone has checked that instance. Ask.

## ⚠ These captures are all from ONE site. There is a second, and it is better.

`ogo.kingman.therain.website` (192.168.50.57) is a **live second OffGridOperator install**,
reachable from `dirt5`, running the same build. It is the better demo source and nothing has ever
been captured from it:

- **Panel tilt and azimuth are measured there.** At 46elm they are not, which is why every capture
  ratio in `explorer-model-fidelity-full.png` carries a `PROVISIONAL` badge. Kingman's grades should
  be real, which makes the model-fidelity story far stronger.
- **Curtailment is live there.** Its dashboard payload carried
  `curtailment: {active: true, kwh: 2.62, window: "3–5 pm"}` on 2026-08-09 — the exact feature that
  reads $0.00 at 46elm and therefore had to be described as unshipped.
- The provisional banner is **data-driven** (`FID_PROVISIONAL`, hidden when empty), so which arrays
  are graded provisionally can only be determined by loading the page, not by reading the HTML.

⚠ **Re-shooting requires a machine with a browser.** `dirt5` (aarch64 Pi) has no Chrome, Chromium,
poppler or ghostscript, and installing them ad hoc is against the ansible-only rule. Capture from
the Mac with headless Chrome over CDP, as the 46elm set was.

## ⚠ The expected-vs-actual GAP does not mean what a caption would assume — verified 2026-08-10

Any caption on `explorer-expected-vs-actual.png`, `explorer-model-fidelity-full.png`,
`replay-actual-vs-poa*.png` or `replay-day-pnl.png` is describing that gap. **At 46elm nobody
currently knows what it is**, so do not call it recoverable loss, lost money, or hardware.

Measured from `array_metrics`: 46elm captures **27–68% of expected, median ~50%, every day for 30
straight days**, never near 100%, equally stable on bright and overcast days.

- The model is **not** inflated — 7.64 kW nameplate, expected implies 4.6–6.3 peak-sun-hours,
  right for western Massachusetts in August.
- It is **not curtailment**, the obvious guess for an off-grid array: the battery had not been full
  for **21 days**, the site was in active deficit, and `curtailment_events` holds **5 rows total in
  its whole history**.
- Live hypothesis is **unmeasured tilt/azimuth** — 46elm's expectation falls back to a flat-plane
  estimate, which is exactly what the `PROVISIONAL` badge is telling you. Kingman is the control:
  same build, angles measured, capture reaching **87%** with real >100% days, while its one
  unmeasured array sits at 21%.

Full workings and what would settle it:
`~/development/homeassistant/offgridoperator/TODO/research_analytics_46elm-capture-ratio-sits-at-half-expected.md`

⚠ Also: **`hour_class` is NULL for 76% of rows.** "Every array-hour is classified" overstates it.
⚠ Also: **46elm is 7.64 kW / 30.41 kWh**, not the "20 kW / 60 kWh" the main site claims — those
look like both-sites totals attributed to one system.

## Two honesty notes before any of this goes on the site

1. **Curtailment is not priced yet.** The Day P&L panel says so itself: *"Curtailment: none drawn
   — the priced curtailment ledger lands with B-R3."* The dashboard's "lost to curtailment" reads
   $0.00. Detection and classification of shade vs under-production *are* live; the **priced**
   curtailment ledger is not. Don't let a portfolio caption claim it.
2. **The capture-ratio grades are marked `PROVISIONAL` in the product itself** — panel tilt and
   azimuth are not measured at this site, so the expectation uses a flat-plane estimate. That
   caveat is visible in the screenshots, which is a credibility asset for an energy reader; keep
   it rather than cropping it out.

## Curation notes for whoever builds the page

- **Strongest four**, in order: `replay-day-animation.gif`, `explorer-model-fidelity-full.png`,
  `replay-day-pnl.png`, `replay-shade-by-array.png`. If the page only has room for one, the GIF
  carries the most — it shows shade detection happening rather than describing it.
- **`sessions-money-flow.png` is the weakest** and probably shouldn't ship: four bars across eight
  days, and the car reads 0 of a 30 kWh weekly target. Truthful, but it reads as an idle system.
- 🚫 **`sessions-capture-health.png` must never ship.** It is a self-audit panel reporting a
  *controller defect* — "1/8 sessions are fragments … the controller is splitting one physical run
  into slivers. Daily 'sessions ran' counts are inflated" — and it names an internal workstream
  ("WS4 · smart-load control plane — untracked-run session gap"). Publishing a known bug and
  internal task shorthand on a marketing page is two mistakes at once.
- ⚠ **All `sessions-*` captures are from Aug 4, which is a bad day for that screen** —
  only `car_charger` carries a state classification, so most rows print "no state classification
  for this load/day". **Aug 6 onward has three classified loads.** Verified against
  `/api/sessions?day=…`; see task 12 in `TODO/feature_site_ogo-marketing-demo-page.md`.
  Check the API before spending a capture — it costs one curl and it is the only thing that
  differs between days.
- ✅ **Prefer `explorer-expected-vs-actual.png` over `explorer-model-fidelity-full.png`** for any
  "we model the physics" claim at 46elm. The full composite bundles the capture-ratio tiles and the
  array×day heatmap, and **every grade in both carries a `PROVISIONAL` badge** because this site's
  tilt/azimuth are unmeasured. The cropped chart makes the same solid-vs-dashed argument with no
  caveat attached. (Once Kingman is captured this reverses — there the grades should be real, and
  the full composite becomes the stronger asset.)
- **`replay-yard.png` vs `replay-yard-midday.png`** — use the midday one. The other is the 8 AM
  default the page opens on, and the arrays are barely producing.

## Reproducing

The capture scripts are throwaway CDP drivers (launch Chrome headless → navigate → click the day
chip → clip to a section → PNG). They were not kept; the portal's DOM gives every panel a stable
`section` / `#id`, so re-deriving them is a few minutes' work if these need refreshing.
