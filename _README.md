# junseng-site — ACTIVE · LIVE

"Jun Seng" guides-library brand site (Astro, parallax hero). Built 2026-07-07. **PRIMARY URL since 2026-07-14: https://junsengai.com** (custom domain on Cloudflare Registrar, $10.46/yr flat, account edwardphangwork8@, attached to Pages project `junseng`, apex CNAME → junseng.pages.dev proxied). Also live: https://junseng.pages.dev + https://nickphang97-collab.github.io/ (canonical tags point at junsengai.com). Launch record + funnel captures: `../junseng-site-internal/`. Second working clone pushing content to the same repo: `../posting/posting-kit/site/` — keep them from drifting (its `worker/` copy was already stale pre-2026-07-14).
Real-name builder brand — same identity as FB/IG/Threads "Jun Seng". Firewall: never touches dog / faceless / illustration brands.

- Build: `bun install` then `bun run build` → `dist/`
- Entry: `src/` · style refs in `style-refs/`
- Deploy: `bunx wrangler pages deploy dist --project-name junseng` (Cloudflare = primary); push to main = GitHub Pages deploy (kept in sync). github.io stays up — Meta app URLs (`/ig-callback/`, `/legal/*`) point there, never retire it. `worker/` = Cloudflare Worker for forms (`cd worker && bunx wrangler deploy`; origin allowlist = junsengai.com + pages.dev + github.io).
- DNS/domain hardening 2026-07-15: www CNAME live + attached to Pages; SPF `v=spf1 -all` + DMARC `p=reject` + null MX (domain sends no email — spoof-locked); auto-renew ON (expiry 2027-07-14). GSC property `https://junsengai.com` verified + sitemap Success (18 pages) under nickphang97@. DNS edits need the CF dashboard (wrangler OAuth has no DNS scope) — web-open profile `cloudflare` is logged in.
