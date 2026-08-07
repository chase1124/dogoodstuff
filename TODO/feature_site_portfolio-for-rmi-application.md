---
title: Portfolio pages on dogoodstuff.org — linkable proof for the RMI application
type: feature
component: frontend
domain:
status: not_started
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
- Live sites that already exist: `groceries.dogoodstuff.org` (GreenCart), `dance.dogoodstuff.org`
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

- [ ] **1. Correct the three project cards on `index.html`** to match the table above. The critical
      one is TrashRangers: a concept presented alongside shipped software makes the shipped software
      look like a concept too.
- [ ] **2. Link GreenCart to `groceries.dogoodstuff.org`.**
- [ ] **3. Describe OffGridOperator honestly** — running system, limited hardware configurations.
      The caveat is a credibility asset on a page aimed at energy readers, not a weakness.
- [x] **4a. OffGridOperator screenshots — DONE 2026-08-07.** 28 retina PNGs + one animated GIF in
      `screenshots/ogo/`, captured from the live portal at `portal.ogo.elm.therain.website`.
      Provenance, a per-file table, and two honesty caveats are in `screenshots/ogo/README.md`
      — **read it before writing any caption.** Deliberately over-collected; pare down when the
      page is built. Strongest four: `replay-day-animation.gif`,
      `explorer-model-fidelity-full.png`, `replay-day-pnl.png`, `replay-shade-by-array.png`.
- [ ] **4b. GreenCart screenshots — BLOCKED ON JAMES, needs ~2 min.** The app is behind
      email/password + passkey auth; every route except `/health` redirects to `/login`. Claude
      cannot log in (entering passwords is prohibited) and will not work around the auth. Only
      `screenshots/greencart/login.png` exists so far.
      **To unblock:** reconnect the Claude-in-Chrome extension in the Chrome where you're already
      signed in to GreenCart — then the captures happen against your live session and no
      credential ever passes through Claude. The extension was disconnected for this whole
      session (OGO was captured with headless Chrome over CDP instead, which worked because that
      portal has no auth). Failing that, take the shots by hand.
      **Two things the login page already told us, worth using in the copy:** GreenCart's own
      tagline is **"Receipt Intelligence"**, and it ships **passkey (WebAuthn) sign-in** — a
      non-trivial piece of engineering that the resume currently doesn't mention.
- [ ] **4c. Decide TrashRangers' image.** `screenshots/trashrangers.png` is the only image the
      site has ever had, for the only project that doesn't exist. Its fate follows task 1.
- [ ] **5. Confirm the resume/letter link target** — one stable URL. Deep-link to the projects
      section if it has a stable anchor.
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

- Whether TrashRangers stays on the site at all, or is held until it's built
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

**2026-08-07** — Spun up from the RMI application session. The trigger: the resume's projects section
describes real software with no links, while the blog gets four deep links. Established the project
status table above from James directly; the site's current equal-weight presentation of all three
projects predates that. Site is a single 42KB `index.html`, last touched 2026-04-09, with an apps
showcase section and modals already built — the structure to hold this exists, the content is stale.
