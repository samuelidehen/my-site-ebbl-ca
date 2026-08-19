# EBBL — Église Baptiste

Marketing site for EBBL, built with React + Vite. Deploys automatically to
GitHub Pages on every push to `main`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. The `public/CNAME` file points
Pages at `ebbl.ca` — once GitHub Pages is enabled for this repo (Settings →
Pages → Source: GitHub Actions) and `ebbl.ca`'s DNS is pointed at GitHub
Pages, the domain will serve this site directly.

## Newsletter form

The newsletter signup (`src/components/Newsletter.jsx`) submits to
Formspree. Replace `FORMSPREE_ENDPOINT` in that file with your real
Formspree form endpoint before going live — https://formspree.io.

## Content

All page copy lives in `src/content.js` — edit there rather than in the
components directly.
