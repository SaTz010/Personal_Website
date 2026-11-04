# Sanskar Ananta Tiwari — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

`npm ci`

`npm run dev`

## Validate

`npm run build`

`npm test`

`npm run lint`

Project content lives in `src/data/projects.ts`; the same entries power the selected-work links and project pages. Route and contact navigation are covered by `src/test/App.test.tsx`.

Personal stats and sports favorites live in `src/data/interests.ts`. Fill in the `null` values and empty lists when ready; stat labels can also be changed for funny stats. The same sections appear on the profile page and casual landing view.

Two selected Hamro Bhasha App Store previews show the dashboard and voice practice for the upcoming app update. The gallery links to both app stores to explore more. WebP copies in `public/projects/` preserve their full 1206 × 2622 dimensions. They show the wider team's product; the project page identifies personal contributions separately.

Profile, experience, education, and project content draw on the supplied CV and prior profile details. Meltdown's website project is included based on the user's confirmation, with company context from https://meltdownnepal.com/. Research and AURA are marked ongoing.

## Cloudflare Workers

Cloudflare Workers Builds builds and deploys each push to `main` at https://personal-website.tiwarisanskar123.workers.dev. The connected project is `personal-website`, with build command `npm run build` and deploy command `npx wrangler deploy`.

`wrangler.jsonc` publishes only `dist` and enables single-page application routing so direct links to profile, contact, and project pages render the React app.

## GitHub Pages

GitHub Actions builds and deploys the website after each push to `main`. The workflow can also be started manually from the Actions tab. GitHub Pages must use **GitHub Actions** as its source, with **sanskart.com.np** as the custom domain in Settings > Pages.

The Vite asset base stays `/` because the site uses a custom domain. Deployment copies the app entry to `404.html` so direct links to profile, contact, and project pages still render the React app.

Cloudflare manages DNS. Use these records with **DNS only** (grey cloud) and TTL **Auto**:

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | satz010.github.io |

Replace conflicting website records at `@` and `www`; preserve unrelated DNS and email records. Enable **Enforce HTTPS** in GitHub Pages once GitHub has issued the domain certificate.
