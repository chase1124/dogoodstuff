---
title: ogo.dogoodstuff.org — marketing / demo page for OffGridOperator
type: feature
component: frontend
domain:
status: in_progress
created: 2026-08-09
completed:
spawned_from: TODO/feature_site_portfolio-for-rmi-application.md
spawns:
related: TODO/feature_site_portfolio-for-rmi-application.md
---

# ogo.dogoodstuff.org — the OffGridOperator demo page

**What this is.** A marketing / demo page for OffGridOperator, not a second copy of the portal.
The portal is the product; this page is the argument for it. A visitor who cannot reach
`portal.ogo.elm.therain.website` (it is LAN-only) should still come away understanding what the
system does and believing it runs.

**Why it exists.** The parent TODO collected **29 captures of the live portal** and the main site
uses exactly one of them, as a card thumbnail. The rest are sitting in `screenshots/ogo/` waiting
for a page with room. This is that page.

## Assigned Reading

- **`screenshots/ogo/README.md`** — 📖 **read first.** Per-file guide to all 29 captures, which
  four are strongest, which are weak, and **two caveats that bound what any caption may claim**.
- `TODO/feature_site_portfolio-for-rmi-application.md` — the parent; carries the ground-truth
  project-status table and the placeholder-tiles decision (its task 4d) that this page depends on.
- `~/development/dogoodstuff/index.html` — the existing single page. Its dark editorial style
  (Playfair Display / Crimson Pro, soil-and-cream palette) is the house style to match or
  deliberately depart from.
- The live portal: `https://portal.ogo.elm.therain.website` — LAN-only, internal TLS cert (`curl -k`).
  Panels have stable `section` / `#id` hooks, which is what made scripted capture cheap. Re-shoot
  with headless Chrome over CDP; the Claude-in-Chrome extension is not needed (no auth).

## The two hard constraints — these are not style notes

1. **Curtailment is only half-shipped.** Classifying each array-hour as full / shade /
   under-production / diffuse is live and demonstrable. The **priced curtailment ledger is not** —
   the portal's own Day P&L says "Curtailment: none drawn," and the dashboard reads $0.00 lost to
   curtailment. **Claim the detection, never the money attribution.**
2. **Capture-ratio grades are marked `PROVISIONAL` in the product** because panel tilt/azimuth are
   not measured at 46elm. Keep that visible. For an energy audience a system that states its error
   bars reads as more credible, not less — cropping it out would be both dishonest and weaker.

## v2 shipped 2026-08-09 — the page's JOB changed. Read this first.

James reviewed v1 and rejected its framing. **This page is not a portfolio of his personal solar
system. It is OffGridOperator's product marketing, which happens to use a real install for real
data.** Everything follows from that:

- **No personal system specs.** v1's spec strip published capacity and array count. Gone. Generic
  capability plus "built on" only.
- **Lead with the controller, not the analysis.** *"Why would I want to use this? Because it exposes
  awesome control over your system automagically."* v1 spent all seven of its figures on one corner
  — expected-vs-actual analysis — and never showed that **the system schedules loads and drives
  charging**, which James calls a CORE CORE feature. v2 opens on smart loads, power quality, the
  committed battery plan and session profiling; the analysis screens come after.
- **Never list your gaps as gaps.** v1 had a "What it doesn't do yet" section. *"The whole 'what it
  lacks' is BAD marketing."* It is now **"Shipping next"**, framed as roadmap.
- **🔒 Do not disclose the portal's security posture.** v1 stated it runs on a LAN without an
  authentication layer. Removed and **must not come back** — it is both a marketing negative and
  nobody's business.
- **Design: not one long scroll.** v2 is a tabbed viewer with prev/next and arrow keys. James also
  floated scroll-snap panes and horizontal paging — the tab strip was chosen as the cheapest thing
  that lets a visitor pick a topic. Still open to a better answer.

**Three factual errors v1 shipped live**, all now recorded in `screenshots/ogo/README.md` — read
that file before writing another caption. Briefly: the "Faulty array suspected" diagnosis v1 used as
a **headline** is a false positive caused by two parallel arrays at different tilt/azimuth; the array
flagged in 1 of 6 clear hours was correct in the other 5, which is a *good* signal read backwards;
and "one production site" was false. `replay-shade-by-array.png` is no longer used anywhere.

## The v1 notes below are superseded on framing, still accurate on inventory

**The page exists and is live.** It was built against the RMI deadline, so it took the reviewer
fork of task 1 and the path-not-subdomain fork of task 6. Tasks 1, 2, 3, 4 and 7 are done. What is
left below is the difference between the deadline version and the fuller version this file was
written for.

**What v1 is:** a reviewer page in five figures, following exactly the narrative spine task 2
specified — the sky it measured (`replay-yard-midday.png`), expectation against reality across
seven arrays and eight days (`explorer-model-fidelity-full.png`), the per-array diagnosis with its
generated callouts (`replay-shade-by-array.png`), and the day priced out
(`replay-day-pnl.png`) — with `replay-day-animation.gif` as the hero, as task 3 recommended. It
closes with a "What it doesn't do yet" section carrying both hard constraints in prose.

**What v1 is not:** it uses **5 of the 29 captures**. It carries no collaborator ask. It has no
subdomain. And **nobody has looked at it** — it was built on a Pi with no browser (see the parent's
Session Notes), and verified only by HTTP status and asset resolution.

## Tasks

- [x] **1. DONE — reviewer page.** The RMI deadline decided it. Note this is the *opposite* of what
      the parent's task 7 leaned toward, so if the subdomain version is meant to recruit
      collaborators it is a genuinely different page, not a restyle. Decide that consciously.
- [x] **2. DONE — narrative spine as specified**, and it held up well against the real captures.
- [x] **3. DONE — the GIF is the hero**, eager-loaded at 544 KB against ~2.9 MB total page imagery.
- [x] **4. DONE — `ogo/index.html`.** Its own stylesheet, deliberately: it reuses the house palette,
      the Playfair/Crimson pairing, the grain overlay and the reveal-on-scroll, but `index.html`'s
      CSS is inline in a 40 KB single file with no shareable stylesheet to link. **If a third page
      ever wants this look, extract a stylesheet then** — two copies is the point at which
      duplication is cheaper than the wrong abstraction, three is not.
- [ ] **5. Include the collaborator ask** (from parent task 7): works on a limited range of
      hardware configurations; if you'd like to help extend it to others, reach out.
      📖 Prereq: the email address is still an open decision in the parent.
      **Deliberately absent from v1** — a reviewer page asking for collaborators reads as a
      different document. This is the main thing the subdomain version adds.
- [ ] **6. Wire up DNS + hosting for `ogo.dogoodstuff.org`.** The apex site is GitHub Pages via
      `CNAME`; a subdomain needs its own decision — second Pages repo, a path on this one, or
      hosting on the k3s cluster alongside `dance` and `dogoodgroceries`.
      🛠 Skill: `/dns-entry`, and `/deploy-app` if it lands on the cluster.
      **When it lands, redirect `/ogo/` to it rather than deleting** — the URL is cited in the RMI
      resume and a reviewer may open it weeks after submission.
- [x] **7. DONE — the OffgridOperator card links to `/ogo/`**, labelled "See it running". It links
      to the demo page and never to the portal, which is what resolved the parent's task 4d.
- [ ] **8. NEW — look at the page.** It has never been rendered. Check it on the MacBook and on a
      phone: five very wide screenshots on a narrow viewport is the obvious failure mode, and the
      figures are the entire page. 🛠 Skill: `/prototype`.
- [ ] **12. NEW — re-shoot Sessions on a day that has state classification. Use 2026-08-06 or
      later; do NOT use Aug 4.** James spotted that the shipped capture shows almost no state
      classification. Confirmed against the live API (`/api/sessions?day=YYYY-MM-DD`), which is the
      cheap way to pick a day before spending a capture on it:

      | Day | State-classified loads |
      |---|---|
      | Aug 2 – Aug 5 | **1** (`car_charger` only) — every other row prints "no state classification for this load/day" |
      | Aug 6 – Aug 9 | **3** (`car_charger`, `dehumidifier_home`, `dehumidifier_lg`) |

      Session totals are identical across the window (8 sessions, 8.61 kWh — the endpoint returns
      the rolling window and the UI filters it), so **the state trace is the only thing that varies
      and the only reason to prefer a day.** The API window is 8 days rolling, so this table needs
      re-deriving rather than trusting after ~2026-08-17.
- [ ] **13. NEW — capture the EV charge wizard; it is probably a better Control pane than the
      smart-loads panel now shipping.** James raised it and could not judge it unseen. Confirmed
      present at `/ev-charging` (16 wizard hooks, 9 modal, a 123-step flow). Its actual button
      labels are the reason it is worth shooting — the whole value proposition in plain language,
      no jargon:
      *"⚡ Charge wizard"* → *"Choose which car this is"* → *"Use a saved profile"* →
      energy source **"Solar surplus only" / "Grid allowed"** → stop condition **"Car is full" /
      "A set amount" / "I unplug it"** → *"Save as a profile"* → *"Start charging"*.
      Shoot the wizard mid-flow with the options visible, not the console at rest.
      ⚠ Needs a browser — see task 8.
- [ ] **10. NEW, HIGH VALUE — capture the Kingman install.** `ogo.kingman.therain.website`
      (192.168.50.57) is a second live install running the same build, reachable from `dirt5`, and
      **nothing has ever been captured from it.** Two reasons it is the better demo source:
      **panel tilt and azimuth are measured there**, so its capture-ratio grades should be real
      rather than `PROVISIONAL`; and **curtailment is live** — its payload carried
      `curtailment: {active: true, kwh: 2.62, window: "3–5 pm"}` on 2026-08-09, the exact feature
      that reads $0.00 at 46elm and therefore had to be written up as unshipped.
      Re-shooting both those screens from Kingman would let the Model pane drop its estimate
      caveat and let "priced curtailment" move off the roadmap onto the page.
      ⚠ **Needs a machine with a browser** — see task 8.
      ⚠ Also flags an infra doc drift: `~/development/CLAUDE.md` puts `20kingman` in `ma_west` on
      `10.0.60.0/24`, but this resolves to `192.168.50.57`. Worth reconciling.
- [ ] **11. NEW — the portal's fleet view looks like a mockup; confirm before it is ever shown.**
      The dashboard carries a multi-site fleet block ("Fleet SOC (avg) 61% · 3 sites",
      "$214 fleet savings", "20 Kingman — low PSH alarm") whose rows are all `href="#"` and whose
      figures look synthetic. Multi-site is a genuinely strong marketing story **if it is real** —
      establish which it is before any capture of it goes near the page.
- [ ] **9. NEW — the other 23 captures still have no home.** The dashboard set (battery and
      cell-level safety, inverter gauges, power quality, battery trajectory against a committed
      plan, net value vs utility) and the sessions set (smart-load timeline, capture health) are
      unused. They argue a *different* claim than v1 does — v1 argues "this system does real
      analysis", they argue "this system runs a house". ⚠ `sessions-money-flow.png` should not
      ship; the README explains why.

## Open decisions

- ~~Reviewer page or collaborator page~~ — v1 chose reviewer. **Still live for the subdomain
  version**, and it is the fork that decides whether that is a new page or a restyle.
- Where it is hosted (task 6) — v1 sidestepped this with a path
- ~~Whether it embeds the GIF or links to it~~ — v1 embeds it, eager, and also links it full-size
- ~~Whether it links onward into the live portal~~ — **no, settled.** v1 links nowhere near the
  portal, and that is what let the placeholder-tiles decision be deferred safely

## Session Notes

**2026-08-09 (third) — v2, after James's review.** The lesson worth carrying, because it is the same
one twice: **Claude read the product's output as ground truth.** The "Faulty array suspected" callout
was quoted as a *headline* — it was chosen precisely because it looked like the system's most
impressive moment — and it is a false positive that only the person who wired the arrays could
identify. The same paragraph inverted a second finding, reading 1 flagged hour out of 6 as a defect
when 5 correct hours is the actual signal.

The error was not in reading the screenshot carelessly; it was **treating a generated diagnosis as a
verified fact**. Captions may describe what a screen *does*. Repeating a specific conclusion as
confirmed needs a human who knows the hardware. Both are now recorded in
`screenshots/ogo/README.md` for whoever writes the next caption.

Second lesson: **a screenshot corpus is not the product.** v1 argued from the captures that existed
rather than from what the system is for, which is how a load-scheduling controller got marketed as an
analysis tool. The captures were collected before anyone had decided what the page was arguing.

**2026-08-09 (second)** — Built v1 as `dogoodstuff.org/ogo/` and shipped it. See the block at the
top of this file for what it does and does not cover, and the parent TODO's session notes for the
three decisions and the no-browser caveat. One thing worth keeping here: **the captions came from
reading the images, not the README.** The strongest sentence on the page — that the diagnostic
callouts are generated in code from each array's capability curve and recompute on new data rather
than being hand-written — is stated in small print inside `replay-shade-by-array.png` and appears
nowhere in `screenshots/ogo/README.md`. If the fuller version reuses more captures, read them.

**2026-08-09** — Spun off from the portfolio TODO when James said "ogo.dogoodstuff.org should be a
demo / marketing page for OGO." The captures already exist and are documented; the missing pieces
are the page's job, its narrative, and its hosting. Nothing here is blocked on more screenshotting.
