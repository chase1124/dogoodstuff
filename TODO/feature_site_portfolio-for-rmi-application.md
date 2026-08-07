---
title: Portfolio pages on dogoodstuff.org — linkable proof for the RMI application
type: feature
component: frontend
domain:
status: in_progress
created: 2026-08-07
completed:
spawned_from: rmi-application/TODO/application.md
spawns:
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
- Live sites that already exist: `groceries.dogoodstuff.org` (GreenCart — **auth-walled**, see 4b),
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
| **GreenCart** | Real, live at `groceries.dogoodstuff.org` | Live, with link |
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
      `screenshots/greencart/`, taken through the Claude-in-Chrome extension against James's
      signed-in Chrome (the app is behind email/password + passkey auth; no credential passed
      through Claude). Quality caveat: viewport JPEGs, not retina PNGs like the OGO set.
      **⚠ This repo is PUBLIC and serves the site via GitHub Pages**, so the two admin captures —
      the best engineering evidence GreenCart has, and the only ones exposing real purchases and
      `james@dogoodstuff.org` — are held in `screenshots/greencart/UNPUBLISHED/`, which is
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
      📖 Prereq: `screenshots/greencart/README.md`
- [x] **4c. TrashRangers' image — RESOLVED 2026-08-07.** James's call: "conceptual is more
      correct." The artwork stays; the card and modal now label it Concept, so a mockup reads as
      design work rather than a running app. Note the artwork still shows invented user data
      (a named ranger, 47 bags, a 12-day streak) — coherent now that it's labelled, but if the
      post-submission page gives TrashRangers more room, that's the thing to revisit.
- [ ] **4d. Decide whether the OGO portal's placeholder explorer tiles get hidden before Sunday.**
      If the resume link leads a reviewer into `portal.ogo.elm.therain.website`, the dashboard's
      "All explorers" grid shows eight tiles — Plan, Forecast, Production forecast, Simulation,
      Operational, Weather, Circuit, Cost — that are all `href="#"` with nothing behind them.
      Clicking one and getting nothing is a worse first impression than never advertising it.
      Options: hide the unbuilt tiles behind a flag for the review window; mark them visibly as
      roadmap; or leave as-is and don't link a reviewer into the portal at all. **James's call**,
      and it's the only one of these that touches OGO's own code rather than this site's.
- [ ] **5. Confirm the resume/letter link target** — one stable URL. Deep-link to the projects
      section if it has a stable anchor. Note this interacts with 4d: linking *into* the portal
      and linking *to a portfolio page that shows screenshots of* the portal are different risks.
- [ ] **6. Deploy and verify live** before the resume cites it. GitHub Pages; confirm the CNAME
      still resolves and the page renders.

## After submitting — the fuller portfolio

- [ ] **7. `ogo.dogoodstuff.org`** — OffGridOperator portfolio page. Include the "works on limited
      hardware configurations; if you're interested in helping expand to additional configurations,
      reach out via email" call for collaborators.
- [ ] **8. Same collaborator ask on `groceries.dogoodstuff.org`** — "interested in helping expand our
      database of products, reach out via email."
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

- **Whether the OGO portal's eight placeholder explorer tiles get hidden before a reviewer can
  click them** — see task 4d. Time-sensitive if the resume links into the portal.
- Whether dance and StorageCommander appear
- The email address the collaborator asks point to

## Session Notes

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
