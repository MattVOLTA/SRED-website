# SRED Website

Canonical agent instructions for this folder. `CLAUDE.md` is a generated pointer to this file (`outwork sync`); edit here.

Static Volta-styled website and setup dashboard for the SR&ED operating-system toolkit. Plain HTML/CSS/JS — no build step, no backend, no secrets. Dashboard task completion is saved in browser `localStorage`.

## Pages

- `index.html` — public-facing overview that points back to the toolkit repo.
- `dashboard.html` — 14-day setup dashboard (state in `localStorage`).

## Toolkit source

The operating kit, artifacts, agents, and skills live in https://github.com/MattVOLTA/SRED-toolkit. This repo is only the website surface. The sibling `SRED` folder is a separate repo with its own manifest.

## Deployment

Netlify static site published from the repository root with no build command (`netlify.toml`). Deploys run automatically on push to `main` via `.github/workflows/deploy-netlify.yml`, using `NETLIFY_AUTH_TOKEN` / `NETLIFY_SITE_ID` stored as GitHub Actions repo secrets — local sessions receive no credentials.
