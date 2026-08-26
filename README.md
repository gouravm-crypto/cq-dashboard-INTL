# CQ Dashboard — International Team · August 2026

Interactive quality-audit dashboard for CaratLane's International support team, covering **80 audits** across 8 agents for August 2026.

## Files
- `index.html` — main dashboard page (open this in a browser / GitHub Pages)
- `data.js` — all agent audit data (scores, cases, AOIs, error params)
- `charts.js` — Chart.js visualizations (score chart, error distribution, per-agent errors, heatmap)
- `modal.js` — click-through agent detail modal logic
- `logo_full.png`, `logo_icon.png` — CaratLane branding

## Deploying to GitHub Pages
1. Create a new repo and upload all files in this folder (keep them in the root, not a subfolder).
2. Go to **Settings → Pages**, set source to the `main` branch / root.
3. Your dashboard will be live at `https://<username>.github.io/<repo-name>/`.

## Updating for a new month
Edit `data.js` with the new `AGENTS` object, then update the corresponding numbers in `charts.js` (score chart, doughnut, per-agent errors, heatmap) and the static summary sections in `index.html` (hero stats, score table, key insights, parameter breakdown, footer).
