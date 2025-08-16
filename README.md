# EcoRide Detailing — mobilna myjnia rowerów i hulajnóg

Next.js 14 (App Router) + TypeScript + Tailwind. Multi‑page, blog (Markdown), SEO, obrazy AVIF/WebP, rezerwacja (Calendly/Booksy), formularz kontaktowy, mapa, sitemap/robots.

## Szybki start (dev)

```bash
npm i
npm run dev
```
Otwórz: http://localhost:3000

## Build produkcyjny

```bash
npm run build
npm start
```

## Edycja treści
- **Blog**: pliki Markdown w `content/blog/*.md` (`title`, `description`, `date`).
- **Zdjęcia**: zamień placeholdery w `public/images/*` i `public/og-image.png` (Next/Image sam poda AVIF/WebP).
- **SEO**: tytuł/opis w `app/layout.tsx`. Dodaj GA4/Plausible w `components/Analytics.tsx`.
- **Rezerwacje**: podmień link w `components/BookingCalendly.tsx` i/lub iframe Booksy w `components/BookingBooksy.tsx`.
- **Formularz**: w `app/kontakt/page.tsx` podmień adres w `action="https://formsubmit.co/..."` na swój.

## Wydajność (LCP/CLS/INP)
- **Obrazy**: zoptymalizuj źródła (1200–1600px szer.), formatuj jako **AVIF/WebP**, dodaj alt.
- **Lazy loading**: komponenty rezerwacji i część obrazów są lazy (dynamic import / loading="lazy").
- **CSS/JS**: Tailwind JIT, server components domyślnie, bez zbędnych bibliotek.

## Deploy
- **Vercel** (polecane): import repo, set `SITE_URL` → automatyczny build, edge CDN.
- **Netlify / Cloudflare Pages**: ustaw komendę build: `npm run build`, katalog publikacji: `.next` (Netlify/CF użyją adaptera).

## Struktura
- `/app` — strony: start, o nas, oferta, cennik, realizacje, FAQ, blog, kontakt.
- `/components` — UI, rezerwacje, hero, stopka.
- `/content/blog` — artykuły (Markdown).
- `/public` — statyczne assety (favicon, obrazy, sitemap/robots).

## Licencja
Do użytku komercyjnego w ramach projektu EcoRide.
