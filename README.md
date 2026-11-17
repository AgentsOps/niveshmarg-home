# Niveshmarg Edge website

Marketing site for Niveshmarg Edge, built with Next.js 16 (App Router) from the design prototype in `UI_PROTO/`.

## Pages

| Route           | Source design                   |
| --------------- | ------------------------------- |
| `/`             | `UI_PROTO/Home.dc.html`         |
| `/builder`      | `UI_PROTO/Builder.dc.html`      |
| `/charts`       | `UI_PROTO/Charts.dc.html`       |
| `/backtesting`  | `UI_PROTO/Backtesting.dc.html`  |
| `/live`         | `UI_PROTO/Live.dc.html`         |
| `/research`     | `UI_PROTO/Research.dc.html`     |
| `/integrations` | `UI_PROTO/Integrations.dc.html` |
| `/strategies`   | `UI_PROTO/Strategies.dc.html`   |
| `/docs`         | `UI_PROTO/Docs.dc.html`         |
| `/contact`      | `UI_PROTO/Contact.dc.html`      |

Old `/features/*` URLs from the previous site redirect permanently to the closest new page (`next.config.ts`).

## How it is put together

- `src/components/pages/*Page.tsx` and `src/app/hover.css` are **generated** from the prototype by
  `scripts/convert-proto.mjs`. When the design changes, update `UI_PROTO/` and run `npm run convert-proto`
  instead of hand-editing those files.
- `src/components/pages/DocsState.ts` and `ContactState.ts` hold the interactive state for those two pages
  (search/filter, form, FAQ). They are hand-written.
- `src/lib/siteMotion.ts` is the animation engine (scroll reveals, count-ups, live candle chart, equity curve,
  risk-gate loop, parallax). Pages opt in with `data-*` attributes; `MotionRoot` boots it per page.
- `SiteNav`, `SiteFooter` and `BrandMark` are hand-written shared components.

## SEO

`src/lib/seo.ts` is the single source of truth. Each entry in `PAGES` sets a page's title, meta description, keywords,
share-image text, and sitemap `changefreq`/`priority`. From that one entry the site generates:

- `<title>`, description, keywords, canonical URL, Open Graph and Twitter card tags (`pageMetadata`)
- a 1200×630 share image at `/<page>/opengraph-image` (`src/lib/shareImage.tsx`, rendered at build time)
- JSON-LD: Organization, WebSite, SoftwareApplication and WebPage on the home page; WebPage and BreadcrumbList on
  every other page; FAQPage on `/contact` (from `src/lib/content.ts`, the same copy the page shows)
- `/sitemap.xml` (same `loc`/`lastmod`/`changefreq`/`priority` format as the previous site), `/robots.txt` and
  `/manifest.webmanifest`

To add a page: add it to `PAGES`, create `src/app/<route>/page.tsx` using `pageMetadata` and `pageJsonLd` (copy an
existing route), and copy an `opengraph-image.tsx`.

## Error pages

All four share `src/components/ErrorScreen.tsx` and are marked `noindex`.

| Status | File                                     | When                                                                         |
| ------ | ---------------------------------------- | ---------------------------------------------------------------------------- |
| 404    | `src/app/not-found.tsx`                  | Unknown URLs, or `notFound()`                                                |
| 403    | `src/app/forbidden.tsx` (+ `/403` route) | `forbidden()` (enabled by `experimental.authInterrupts`), or visiting `/403` |
| 500    | `src/app/error.tsx`                      | A page throws while rendering                                                |
| 500    | `src/app/global-error.tsx`               | The root layout itself fails                                                 |

Behind nginx you can reuse the branded 403 page, e.g. `error_page 403 /403;` with `/403` proxied to the app.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

The build uses `output: "standalone"`, which produces a self-contained Node server in `.next/standalone`.

### Plain Node (e.g. with pm2 or systemd)

```bash
npm ci
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
PORT=3000 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```

Copy the whole `.next/standalone` folder to the server if you build elsewhere; it needs Node 20+ and nothing else.
Put nginx (or similar) in front for TLS.

### Docker

```bash
docker build -t niveshmarg-site .
docker run -p 3000:3000 niveshmarg-site
```

## Not wired up yet

- The **Request a demo** form (`/contact`) only shows a thank-you message; it does not send the details anywhere.
- The guide cards on `/docs` link to `#`; there are no guide pages yet.
