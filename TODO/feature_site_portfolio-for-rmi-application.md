---
title: Portfolio pages on dogoodstuff.org — linkable proof for the RMI application
type: feature
component: frontend
domain:
status: in_progress
created: 2026-08-07
completed:
spawned_from: rmi-application/TODO/application.md
spawns: TODO/feature_site_ogo-marketing-demo-page.md, ~/development/dogoodgroceries/TODO/feature_frontend_public-marketing-page.md
related: rmi-application/TODO/application.md
---

# dogoodstuff.org — portfolio buildout

**Why this exists.** The RMI resume describes software James built but links to none of it. Four blog
posts are deep-linked; the actual engineering is unreachable. This TODO makes the work linkable.

**Two horizons, deliberately split:**

- **Before Sunday Aug 9** (RMI deadline) — make the *existing* single page accurate and honest, so
  the resume can link to one URL that doesn't embarrass anything.
- **After submitting** — the per-project portfolio subdomains. There is a ~10-week screening window
  between submission and the Oct 20 cohort start; a reviewer clicking the link in September lands on
  the fuller version. Same reasoning as the blog post in `rmi-application/TODO/application.md` #13.

## Assigned Reading

- `~/development/dogoodstuff/index.html` — the whole site; single static page, GitHub Pages via
  `CNAME`, remote `chase1124/dogoodstuff`
- `rmi-application/TODO/application.md` — the parent; the resume link depends on this work
- Live sites that already exist: `groceries.dogoodstuff.org` (DoGoodGroceries — **auth-walled**, see 4b),
  `dance.dogoodstuff.org`
- `screenshots/ogo/README.md` — provenance + per-file guide for the 29 OGO captures, and the two
  caveats that constrain what a caption may claim. 📖 Prereq for any task that writes site copy
  about OffGridOperator.
- The portal itself: `https://portal.ogo.elm.therain.website` — LAN-only, internal TLS cert (so
  `curl` needs `-k`), no auth. Panels have stable `section` / `#id` hooks, which is what made the
  scripted captures cheap.

## Ground truth on project status — established 2026-08-07

The site currently presents three projects at equal weight. That is not accurate.

| Project | Reality | Site should say |
|---|---|---|
| **OffGridOperator** | Real, running, in production at 46elm. Works on limited hardware configurations. | Running system + the hardware caveat |
| **DoGoodGroceries** | Real, live at `groceries.dogoodstuff.org`. **Named GreenCart in older notes and still branded GreenCart in the deployed app — the product name is DoGoodGroceries** (James, 2026-08-09). | Live, with link |
| **TrashRangers** | **PoC artwork only.** Nothing built. Ironically the only project with a screenshot on disk. | Concept — do not imply it is software |
| **dance.dogoodstuff.org** | Real and live, but off-message for a clean-energy application | James's call whether it appears |
| **StorageCommander** | Real, not on the site at all | James's call whether it appears |

## Before Sunday — the RMI-blocking slice

- [x] **1. Correct the three project cards on `index.html` — DONE 2026-08-07.** Status pills now
      say what is true: TrashRangers **Concept** (quiet outline pill), GreenCart **Live** and
      OffgridOperator **In production** (both green, with a live dot). Previously all three read as
      unfinished side projects — the two running systems understated, the concept overstated.
      TrashRangers' modal now opens by saying it is a concept with no code written, and its
      feature list is relabelled "What it would do".
      **Also replaced the two hand-drawn SVG mockups with real screenshots.** GreenCart's and
      OffgridOperator's cards had fake drawings; the only real image on the site was TrashRangers,
      the project that doesn't exist. GreenCart's fake even drew a populated CO₂ chart — the one
      feature that renders empty in reality. Card art is generated into `screenshots/cards/`,
      cropped to the frame's measured 1.146 aspect so no panel is sliced.
      **Amended 2026-08-09 on James's direction:** card order is now OffgridOperator →
      DoGoodGroceries → TrashRangers, so the running systems lead and the concept comes last. And
      **the product is DoGoodGroceries, not GreenCart** — renamed throughout the page, and
      `screenshots/dogoodgroceries/` moved to `screenshots/dogoodgroceries/`. ⚠ The deployed app still
      brands itself GreenCart, so the two now disagree; that rename is task 2 of the child TODO.
- [x] **2. Link GreenCart to `groceries.dogoodstuff.org` — DONE 2026-08-07.** The modal template
      grew an optional `link`/`linkLabel` field; GreenCart's renders an "Open GreenCart →" button
      beside the status pill. OffgridOperator deliberately has no link — see 4d, the portal is
      LAN-only and its explorer grid is full of placeholders.
- [x] **3. Describe OffGridOperator honestly — DONE 2026-08-07.** The old copy ("track
      generation, monitor battery state, catch anomalies") described a monitoring dashboard. It now
      says what actually runs: expected-vs-actual modelling from solar geometry and measured
      irradiance, per-array-hour classification into shade / fault / under-production / diffuse,
      and a daily P&L. Carries the limited-hardware caveat with the collaborator ask. **Curtailment
      is deliberately not claimed** — only the classification ships, not the priced ledger.
- [x] **4a. OffGridOperator screenshots — DONE 2026-08-07.** 28 retina PNGs + one animated GIF in
      `screenshots/ogo/`, captured from the live portal at `portal.ogo.elm.therain.website`.
      Provenance, a per-file table, and two honesty caveats are in `screenshots/ogo/README.md`
      — **read it before writing any caption.** Deliberately over-collected; pare down when the
      page is built. Strongest four: `replay-day-animation.gif`,
      `explorer-model-fidelity-full.png`, `replay-day-pnl.png`, `replay-shade-by-array.png`.
- [x] **4b. GreenCart screenshots — DONE 2026-08-07.** Four captures + the login page in
      `screenshots/dogoodgroceries/`, taken through the Claude-in-Chrome extension against James's
      signed-in Chrome (the app is behind email/password + passkey auth; no credential passed
      through Claude). Quality caveat: viewport JPEGs, not retina PNGs like the OGO set.
      **⚠ This repo is PUBLIC and serves the site via GitHub Pages**, so the two admin captures —
      the best engineering evidence GreenCart has, and the only ones exposing real purchases and
      `james@dogoodstuff.org` — are held in `screenshots/dogoodgroceries/UNPUBLISHED/`, which is
      gitignored. They exist on disk; they are not in git history. `README.md` there lays out
      three ways to use them. **James's call**, and nothing publishes them by accident.
      **Two things the app told us that the resume doesn't say:** the product's own tagline is
      **"Receipt Intelligence"**, and it ships **passkey/WebAuthn sign-in** plus a deploy webhook
      with a live status panel.
- [ ] **4b-i. Decide what to do about the empty CO₂ Emissions page.** It reads 0.0 kg across 27
      receipts with a flat chart and no high-impact items — the feature is built but the product
      enrichment that populates it has never been run. **This is the single page a clean-energy
      reviewer would most want to see**, so it is the highest-leverage thing to fix if GreenCart
      is to carry any weight in an energy application. Options: run the enrichment backlog (the
      Overview page's "Enrichment opportunities" queue is the same backlog) and re-shoot; or
      leave it and don't feature emissions in the site copy. **Do not screenshot it as-is.**
      📖 Prereq: `screenshots/dogoodgroceries/README.md`
- [x] **4c. TrashRangers' image — RESOLVED 2026-08-07.** James's call: "conceptual is more
      correct." The artwork stays; the card and modal now label it Concept, so a mockup reads as
      design work rather than a running app. Note the artwork still shows invented user data
      (a named ranger, 47 bags, a 12-day streak) — coherent now that it's labelled, but if the
      post-submission page gives TrashRangers more room, that's the thing to revisit.
- [x] **4d. RESOLVED 2026-08-09 — no reviewer is ever sent into the portal, so the tiles don't
      matter before the deadline.** The demo page at `dogoodstuff.org/ogo/` shows *screenshots of*
      the portal and deliberately links nowhere near it; the OffgridOperator card links to that
      page, not to `portal.ogo.elm.therain.website`. This resolves the decision **without touching
      OGO's own code on deadline day**, which is what the parent RMI TODO asked for. The tiles are
      still placeholders and still want fixing — that is now a post-submission job, not a blocker.
      Original decision text, kept for the post-submission pass:
      If the resume link leads a reviewer into `portal.ogo.elm.therain.website`, the dashboard's
      "All explorers" grid shows eight tiles — Plan, Forecast, Production forecast, Simulation,
      Operational, Weather, Circuit, Cost — that are all `href="#"` with nothing behind them.
      Clicking one and getting nothing is a worse first impression than never advertising it.
      Options: hide the unbuilt tiles behind a flag for the review window; mark them visibly as
      roadmap; or leave as-is and don't link a reviewer into the portal at all. **James's call**,
      and it's the only one of these that touches OGO's own code rather than this site's.
- [x] **5. Link target SETTLED 2026-08-09: `https://dogoodstuff.org/ogo/`.** This is the URL the
      resume's OffGridOperator entry should carry. It is better than the `#apps` anchor on the main
      page (which exists and works) because the RMI ask is specifically for *analysis evidence*, and
      the main page has room for one thumbnail. `/ogo/` shows five screens of actual output.
      A path, not the `ogo.dogoodstuff.org` subdomain from task 7 — no DNS and no new hosting
      decision on deadline day, and the subdomain can redirect here whenever it is built.
- [x] **6. Deployed and verified live 2026-08-09.** `dogoodstuff.org` returns 200 with the
      DoGoodGroceries rename and the reordered cards already serving; `/ogo/` deployed in the same
      GitHub Pages push. All five image paths verified resolving. **Not verified: how it looks.**
      No browser exists on `dirt5`, the aarch64 Pi this was built on — see Session Notes.

## After submitting — the fuller portfolio

- [ ] **7. `ogo.dogoodstuff.org` — marketing / demo page for OffGridOperator.**
      **[delegated → `TODO/feature_site_ogo-marketing-demo-page.md`]**
      This is where the other 28 OGO captures earn their place; the main site uses only one.
      **Partly landed 2026-08-09 as `dogoodstuff.org/ogo/`** — a deadline-shaped reviewer page
      using five captures. The child TODO now carries what the fuller version still owes: the
      collaborator ask, the subdomain, and the other 23 captures.
- [ ] **8. `groceries.dogoodstuff.org` pre-login page should be marketing, not a bare sign-in form.**
      **[delegated → `~/development/dogoodgroceries/TODO/feature_frontend_public-marketing-page.md`]**
      Carries the collaborator ask, the GreenCart→DoGoodGroceries rename, and the warning not to
      advertise CO₂ until the enrichment has been run.
- [ ] **9. Decide dance + StorageCommander.** Both real. Both arguably off-message for an energy
      audience, but a portfolio that shows range is not automatically weaker. James's call.

## What the OGO portal actually ships — established 2026-08-07 by walking it

Relevant because task 3 says "describe OffGridOperator honestly", and the portal itself is the
best evidence of what "honestly" means.

**Real, running, screenshotted:** the live dashboard (battery + cell-level safety, inverter
gauges, power quality, battery trajectory vs committed plan, net value vs utility), the array
explorer (peak sun hours, performance index, model fidelity, capture heatmap), the array day
replay (yard, actual-vs-POA, Day P&L, shade-by-array), the sessions explorer, grid-charge and
EV-charging consoles.

**Placeholders — `href="#"`, no page behind them.** The dashboard's "All explorers" grid lists
Plan, Forecast, Production forecast, Simulation, Operational, Weather, and Circuit explorers, and
the "Cost explorer →" link. None of these resolve. **The site copy must not imply they exist**,
and a reviewer who clicks into the portal will see the same grid.

**Curtailment detection is half-shipped.** Classifying each array-hour as full / shade /
under-production / diffuse is live and visible. The *priced* curtailment ledger is not — the Day
P&L panel says "Curtailment: none drawn — the priced curtailment ledger lands with B-R3", and the
dashboard's "lost to curtailment" reads $0.00. Claim the detection, not the P&L attribution.

**The product marks its own uncertainty.** Capture-ratio grades carry a `PROVISIONAL` badge
because panel tilt/azimuth aren't measured at 46elm. Keep that visible — for an energy audience a
system that states its error bars reads as more credible, not less.

## Open decisions — James's, not Claude's

- ~~Whether the OGO portal's eight placeholder explorer tiles get hidden~~ — **no longer
  time-sensitive.** Nothing links a reviewer into the portal (task 4d). Still worth fixing after
  submission.
- ~~The email address the collaborator ask points to~~ — **not needed before the deadline.**
  `/ogo/` was built as a reviewer page, and a reviewer page carries no collaborator ask. The
  question returns with the fuller subdomain build (child TODO task 5).
- Whether dance and StorageCommander appear
- **The 60 kWh figure — worth one look before a reviewer reads it.** `/ogo/` mirrors the main
  page's existing "20 kW / 60 kWh" wording, but the RMI project's pinned facts say 60 kWh is
  **30 kWh at each of two sites**. If `/ogo/` describes one production instance, "60 kWh" may
  overstate that site. Claude deliberately did not change it unilaterally — the number is already
  published and James-approved on the main page, and editing one of two published pages would put
  them in conflict. Fix both or neither.

## Session Notes

**2026-08-09 — built and shipped `dogoodstuff.org/ogo/`, the deadline slice of task 7.**

The before-Sunday slice is closed. What actually drove it was not this file's own task list but the
**parent RMI TODO's item 2**: add OffGridOperator analysis evidence to the resume, *stating what the
system produced rather than what it can do*. That is named there as the one gap all four blind
recruiter screens found and none could close by rewording. There was nowhere for that link to point
— the OffgridOperator card deliberately had no link, and 29 captures sat unreachable on disk.

**Three decisions, all made by Claude with the reasoning stated rather than escalated**, because
each had an obvious answer under a same-day deadline:

1. **A path (`/ogo/`), not the `ogo.dogoodstuff.org` subdomain.** No DNS, no hosting decision, ships
   on the push that already works, and the subdomain can redirect here later. James confirmed.
2. **Reviewer page, not collaborator page** — the child TODO's task 1 says pick one and everything
   follows. This dissolved the open email-address decision.
3. **No link into the portal**, which dissolved task 4d without touching OGO's code on deadline day.

**Both honesty caveats are visible in the shipped captures rather than cropped out** — the P&L panel
states "Curtailment: none drawn" itself, and every capture grade carries its PROVISIONAL badge. The
page also has a "What it doesn't do yet" section that says so in prose. This was treated as a
credibility asset for an energy reader, per the README's own guidance.

**Captions were written from the images, not from the README.** Reading the four captures directly
produced specifics the summary did not carry — the suspected-fault array peaking at 72% of expected
in every clear hour, the 501 W/m² / 39% cloud / 30 °C sky reading, capture ratios spanning 33–60%
across seven arrays, and the fact that the callouts are generated in code and recompute on new data.
That last one is the strongest line on the page and it is nowhere in the README.

⚠ **Built on `dirt5`, an aarch64 Pi, which has no browser and no PDF tooling** — no Chrome or
Chromium, no poppler, no ghostscript, no `osascript`, no Python PDF library. Consequences worth
carrying: the page's **visual rendering has never been looked at by anyone**, only its HTML and its
asset paths (all verified 200 live). And a session on this box **cannot read the resume or cover
PDFs at all** — the RMI project's `CLAUDE.md` prescribes a macOS PDFKit/JXA recipe without saying it
is macOS-only. Do the letter/resume work on the Mac.

Page weight: ~2.9 MB of imagery, hero GIF eager, the other four lazy.

**2026-08-07 (second session)** — Collected the OffGridOperator screenshots (task 4a). Drove the
live portal with headless Chrome over CDP; the Claude-in-Chrome extension was disconnected, but
Chrome + Node were both present, so this needed no user intervention and no npm installs. Two
things worth keeping: the portal's own clock was ~09:00, so every replay capture was re-shot
against **08-06, a completed day** — shooting "today" gives near-empty charts and would have
undersold the system. And walking the portal surfaced the placeholder-explorers and
curtailment-not-priced findings recorded above, which directly constrain tasks 1 and 3.

**Resolved same day:** James reconnected the Claude-in-Chrome extension and signed in, and 4b was
captured against his live session. Worth keeping for next time: **a fresh Chrome profile does not
inherit passkeys** — WebAuthn credentials scoped to Chrome's per-profile store exist only in the
profile that created them — and **recent Chrome refuses `--remote-debugging-port` against the
default profile directory**, deliberately. Those two facts together mean there is no CDP route
into an authenticated app; the extension is the only tool for that job. Use CDP for public pages
(retina, scriptable, no user in the loop) and the extension for anything behind a login.

Earlier in the session, before that: went for GreenCart (task 4b) and hit an auth wall — the app is entirely behind
email/password + passkey sign-in. Captured the login page only and stopped there rather than
attempting to get around the auth. This is the one piece of the screenshot work that genuinely
needs James, and it's small: reconnect the browser extension against an already-signed-in Chrome
and the rest is a few minutes. Note the tooling asymmetry worth remembering — headless Chrome
over CDP is strictly better than the extension for *public* pages (scriptable, repeatable,
retina, no user in the loop), and strictly worse for *authenticated* ones (no session). Pick by
whether the target needs a login.

**2026-08-07** — Spun up from the RMI application session. The trigger: the resume's projects section
describes real software with no links, while the blog gets four deep links. Established the project
status table above from James directly; the site's current equal-weight presentation of all three
projects predates that. Site is a single 42KB `index.html`, last touched 2026-04-09, with an apps
showcase section and modals already built — the structure to hold this exists, the content is stale.
