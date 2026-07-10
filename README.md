# Nagulan Water Purifier — Website

Next.js 15 (App Router) + React + Tailwind CSS site for Nagulan Water
Purifier, built as a **programmatic local SEO platform** per the FRD's final
recommendation: one dedicated page per **service × city** combination, plus
city landing pages, structured data (JSON-LD), and an auto-generated
sitemap.

## 1. Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. Before going live — update these

| What | File |
|---|---|
| Phone number, WhatsApp number, email | `data/business.js` |
| Address (already set to Telungupalayam, Selvapuram North, Coimbatore 641039) | `data/business.js` |
| Exact GPS coordinates (get from Google Business Profile) | `data/business.js` → `geo` |
| Business hours | `data/business.js` → `hours` |
| Google Search Console verification code | `app/layout.jsx` → `metadata.verification.google` |
| Social + Google Review links | `data/business.js` → `social` |
| Real logo, OG image (`/public/logo.png`, `/public/og-image.jpg`) | `public/` |
| Lead form storage/notifications | `app/api/enquiry/route.js` |

## 3. How the programmatic SEO pages work

- `data/services.js` — 10 services (RO Installation, RO Repair, AMC, etc.)
- `data/cities.js` — 5 cities (**Coimbatore, Tiruppur, Erode, Pollachi**
  primary + Perundurai), each with a list of localities.
- `app/services/[service]/[city]/page.jsx` auto-generates one static page
  per service × city pair (10 × 5 = 50 pages), e.g.:
  - `/services/ro-repair/coimbatore`
  - `/services/ro-installation/tiruppur`
  - `/services/amc/pollachi`
  - `/services/filter-replacement/erode`
- `app/service-areas/[city]/page.jsx` generates one page per city listing
  every service offered there.
- **To add a new city or service**, just add an entry to `data/cities.js` or
  `data/services.js` — every page, the sitemap, and the footer links update
  automatically on the next build.

## 4. SEO / AEO / GEO built in

- Per-page `generateMetadata` (title, description, canonical URL) — unique
  per service × city combination, targeting queries like *"RO repair
  Coimbatore"*, *"RO service Tiruppur"*, *"water purifier service Pollachi"*.
- JSON-LD structured data: `LocalBusiness`, `Service`, `FAQPage`,
  `BreadcrumbList` (see `components/SchemaOrg.jsx`).
- `app/sitemap.js` — auto-generated `sitemap.xml` covering every static and
  dynamic page.
- `app/robots.js` — auto-generated `robots.txt`.
- 30 FAQs in `data/faqs.js` written to directly answer common voice/AI
  search queries (ChatGPT, Gemini, Perplexity, Google AI Overview), per FRD
  section 15 (AEO) and 16 (GEO).
- Semantic heading structure (H1 per page, H2 for sections), descriptive
  internal links between service ↔ city pages for link equity.

## 5. Ranking for "Tiruppur, Coimbatore, Pollachi" searches

Getting your dedicated pages to show up first for local searches is a
combination of on-site work (done here) and off-site/account work that
must be done outside the code:

1. **Claim & verify Google Business Profile** for the exact address used in
   `data/business.js` (Telungupalayam, Selvapuram North, Coimbatore 641039),
   and set service areas to Coimbatore, Tiruppur, Erode, Pollachi.
2. **Keep NAP identical everywhere** — website, Google Business Profile,
   Justdial, IndiaMART, Facebook — exact same name/address/phone.
3. **Collect Google reviews** consistently; ask every satisfied customer.
4. **Submit the sitemap** (`/sitemap.xml`) to Google Search Console and Bing
   Webmaster Tools after deploying.
5. **Build local citations/backlinks** from Coimbatore/Tiruppur/Pollachi
   local directories and news sites.
6. **Publish 2 blogs/week** (FRD section 17) targeting long-tail local
   queries — this repo's structure supports adding a `/blog` collection via
   Sanity/Payload CMS as recommended in the FRD tech stack.

No website can guarantee the #1 ranking — that also depends on competition,
reviews, and Google's algorithm — but this architecture gives every target
city + service combination its own optimized, indexable page, which is the
single biggest lever available on the website side.

## 6. Tech stack

- Next.js 15 (App Router), React 18
- Tailwind CSS (brand palette in `tailwind.config.js`)
- lucide-react icons
- Deploy target: Vercel (per FRD section 24)
