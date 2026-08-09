---
title: ogo.dogoodstuff.org — marketing / demo page for OffGridOperator
type: feature
component: frontend
domain:
status: not_started
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

## Tasks

- [ ] **1. Decide the page's job.** Two different pages are possible and they are not compatible:
      a *recruiter/reviewer* page that argues "this person builds real systems," or a *user/
      collaborator* page that argues "you should run this on your array." The parent TODO's task 7
      leans toward the second (it specifies the collaborator ask). The RMI deadline leans toward
      the first. **Pick one and say so at the top of this file** — the screenshots, the copy and
      the call to action all follow from it.
- [ ] **2. Draft the narrative spine before touching HTML.** The strongest story the captures
      support, in order: *(a)* it knows what the sky did — measured GHI, cloud, temp; *(b)* it
      knows what the panels **should** have made — solar-geometry POA, not a guess; *(c)* it
      knows why they didn't — shade vs fault vs diffuse, per array-hour; *(d)* it prices the gap —
      day P&L, dollars left on the table. That is a genuinely unusual capability and it is what
      the page should be built around.
- [ ] **3. Choose the hero.** Recommend `replay-day-animation.gif` (543KB, 1100px) — it shows
      shade detection happening rather than describing it, and around 2:53 PM two arrays flip to
      `shade` while a third stays `full`. Check the weight budget before committing to it.
- [ ] **4. Build the page.** New file; decide whether it shares `index.html`'s stylesheet or gets
      its own. 🛠 Skill: `/prototype` to preview on the MacBook before deploying.
- [ ] **5. Include the collaborator ask** (from parent task 7): works on a limited range of
      hardware configurations; if you'd like to help extend it to others, reach out.
      📖 Prereq: the email address is still an open decision in the parent.
- [ ] **6. Wire up DNS + hosting for `ogo.dogoodstuff.org`.** The apex site is GitHub Pages via
      `CNAME`; a subdomain needs its own decision — second Pages repo, a path on this one, or
      hosting on the k3s cluster alongside `dance` and `dogoodgroceries`.
      🛠 Skill: `/dns-entry`, and `/deploy-app` if it lands on the cluster.
- [ ] **7. Link it from the main site** — the OffgridOperator card currently has **no link**, on
      purpose, because the only URL was the LAN-only portal full of placeholder tiles. This page
      is the link that card has been waiting for.

## Open decisions

- Reviewer page or collaborator page (task 1) — everything else depends on it
- Where it is hosted (task 6)
- Whether it embeds the GIF or links to it, given page weight
- Whether it links onward into the live portal at all — see parent task 4d, the placeholder
  explorer tiles

## Session Notes

**2026-08-09** — Spun off from the portfolio TODO when James said "ogo.dogoodstuff.org should be a
demo / marketing page for OGO." The captures already exist and are documented; the missing pieces
are the page's job, its narrative, and its hosting. Nothing here is blocked on more screenshotting.
