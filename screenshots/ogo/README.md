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

## Two honesty notes before any of this goes on the site

1. **Curtailment is not priced yet.** The Day P&L panel says so itself: *"Curtailment: none drawn
   — the priced curtailment ledger lands with B-R3."* The dashboard's "lost to curtailment" reads
   $0.00. Detection and classification of shade vs under-production *are* live; the **priced**
   curtailment ledger is not. Don't let a portfolio caption claim it.
2. **The capture-ratio grades are marked `PROVISIONAL` in the product itself** — panel tilt and
   azimuth are not measured at this site, so the expectation uses a flat-plane estimate. That
   caveat is visible in the screenshots, which is a credibility asset for an energy reader; keep
   it rather than cropping it out.

## Reproducing

The capture scripts are throwaway CDP drivers (launch Chrome headless → navigate → click the day
chip → clip to a section → PNG). They were not kept; the portal's DOM gives every panel a stable
`section` / `#id`, so re-deriving them is a few minutes' work if these need refreshing.
