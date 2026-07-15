# 2026-07-15 performance pass — what changed and why

Edward reported the homepage slow on phone + parallax lag on laptop + dot texture colliding with text at narrow widths. Remake was considered and REJECTED (Claude + Codex blind-spot passes both said no — homepage was never architecturally heavy).

## Changes (all in src/, live since 2026-07-15)
1. `public/img/hero.webp`: 922px/156KB → 720px/79KB (original kept here as `hero-922-original.webp`).
2. `public/img/hero-420.webp` (25KB) added; `Hero.astro` uses `srcset` — phones download the 25KB one.
3. `Hero.astro` img: `fetchpriority="high"`.
4. `astro.config.mjs`: `build.inlineStylesheets: 'always'` — CSS ships inside HTML, fonts/hero start one round-trip earlier.
5. `Hero.astro` parallax: movement halved (depth/4), easing 0.08→0.18 (no drag-behind feel), and disabled entirely on touch devices (was scroll+tilt driven).
6. `global.css`: `@media (max-width:960px) .halftone { opacity:.13 }` — fixes dots overlapping words on narrow screens.

## Measured (Lighthouse mobile, throttled)
- Score 76 → 95 · FCP 2.9s → 1.9s · LCP 3.1s → 2.6s · weight 299KB → 220KB (phone ~165KB after srcset).
- Frame-rate on Edward's laptop, live site, fast mouse sweeps + scroll: 60fps flat, 0 janky frames.

## Deliberately NOT done
- Font trim (5 Work Sans weights → 2): all 5 weights genuinely used; would visibly change look. Do only on Edward's OK.
- Full v2 remake: rejected — see chat 2026-07-15; budget-gate/image-pipeline can be added incrementally later if a store lands.
- `public/img/panel-*.png` (3.6MB): unreferenced by the site but possibly hotlinked by FB carousels — left in place.

## Archive contents
- `hero-922-original.webp` — pre-pass full-res hero.
- `captures-launch-2026-07-08/` — launch-day screenshots (pre-perf look).

Post-pass verify captures live in `../../captures/` (2026-07-15-*).
