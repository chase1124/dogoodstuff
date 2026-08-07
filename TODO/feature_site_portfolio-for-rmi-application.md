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
- [ ] **4. Screenshots.** One real screenshot per shipped project beats three paragraphs. The only
      image on disk is `screenshots/trashrangers.png`, for the project that doesn't exist.
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

## Open decisions — James's, not Claude's

- Whether TrashRangers stays on the site at all, or is held until it's built
- Whether dance and StorageCommander appear
- The email address the collaborator asks point to

## Session Notes

**2026-08-07** — Spun up from the RMI application session. The trigger: the resume's projects section
describes real software with no links, while the blog gets four deep links. Established the project
status table above from James directly; the site's current equal-weight presentation of all three
projects predates that. Site is a single 42KB `index.html`, last touched 2026-04-09, with an apps
showcase section and modals already built — the structure to hold this exists, the content is stale.
