# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Production SEO configuration

The production origin is `https://benovtateknik.co.id`. It is set in `.env.production` and `.env.example` as `VITE_SITE_URL=https://benovtateknik.co.id` (without a trailing slash). The Vite configuration rejects a different value so localhost and Vercel preview URLs cannot become production canonicals.

The production build emits absolute canonical and social URLs, JSON-LD page URLs, `public/robots.txt` with its sitemap location, and a generated `sitemap.xml` containing public routes and image-backed product detail pages.

Configure the production host to serve the SPA for known routes and return an actual HTTP 404 status for unknown paths where supported. The in-app not-found page also sets `noindex, follow`.

After deployment, verify the domain in Google Search Console and submit `/sitemap.xml`.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
