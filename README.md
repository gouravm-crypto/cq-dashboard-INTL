# CQ Dashboard — International Team · November 2026

Interactive quality-audit dashboard for CaratLane's International Team, covering **33 audits** across 7 agents for November 2026 (audit window 16 Nov – 25 Nov 2026). Devadharshini_D was on long leave (3 audits) and is shown but not ranked.

## Files
- `index.html` — main dashboard page
- `data.js` — all agent audit data (scores, cases, AOIs, error params). Charts and the agent modal are generated from this file.
- `charts.js` — Chart.js visualizations (score chart, error distribution, per-agent errors, heatmap)
- `modal.js` — click-through agent detail modal logic (supports `index.html#agent=<key>` deep links)
- `cq_newsletter_intl_november2026.html` — email newsletter for November; each agent card opens that agent's report
- `logo_full.png`, `logo_icon.png` — CaratLane branding

## Deploying to GitHub Pages
Upload all files to the repo root, then Settings → Pages → `main` branch / root.
