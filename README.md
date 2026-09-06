# XQUISITE

Official website for **XQUISITE** — contemporary fashion for the modern woman.

An editorial, conversion-focused boutique site. Shopping is arranged on WhatsApp; there is no checkout or account system yet.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Lucide icons
- Static product data (no database)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

```bash
npm run build
npm start
```

## Configure WhatsApp and Instagram

Copy `.env.example` to `.env.local` and replace the placeholders.

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=2340000000000
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/xquisite
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` must be the international format **without** `+` or spaces (for example `2348012345678`). Defaults live in `src/lib/config.ts`.

## Replace photography

Campaign and product images live in `public/images/`. Keep the same filenames (or update the paths in `src/data/products.ts` and `src/data/editorial.ts`) when you swap in XQUISITE photography.

| Path | Use |
| --- | --- |
| `public/images/hero.jpg` | Homepage hero |
| `public/images/editorial.jpg` | Campaign statement |
| `public/images/about.jpg` | Brand story |
| `public/images/brand-portrait.jpg` | About page hero |
| `public/images/collections/` | Shop category panels |
| `public/images/products/` | Product galleries |
| `public/images/lookbook/` | Lookbook |
| `public/images/instagram/` | Instagram grid |

Current files are high-quality fashion placeholders from Unsplash, structured so they can be replaced without touching layout.

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/shop` | Collection, with `?collection=` filters |
| `/product/[slug]` | Product detail |
| `/lookbook` | Editorial lookbook |
| `/about` | The house |
| `/contact` | Contact and WhatsApp |

## Orders

`WhatsAppOrderButton` opens a pre-filled WhatsApp message:

- No size: `Hello XQUISITE, I'd like to enquire about [PRODUCT NAME].`
- With size: `Hello XQUISITE, I'd like to order [PRODUCT NAME] in size [SIZE].`
