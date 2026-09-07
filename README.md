# XQUISITE

Official website for **XQUISITE** — a Nigerian fashion house designing contemporary womenswear for the modern woman.

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

Copy `.env.example` to `.env.local`.

```bash
# Nigeria international format, no + or spaces.
NEXT_PUBLIC_WHATSAPP_NUMBER=2349110383545
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/pinnaclecrypt
```

Displayed WhatsApp: `+234 911 038 3545`. Instagram: `Pinnaclecrypt`. Configuration lives in `src/lib/config.ts`.

## Replace photography

All campaign imagery is catalogued in `src/data/images.ts` — alt text, intended usage, and file paths in one place.

Drop XQUISITE photography into `public/images/v2/` using the same filenames, or update the `src` values in that catalog.

| Path | Use |
| --- | --- |
| `public/images/v2/hero.png` | Homepage hero |
| `public/images/v2/editorial.png` | Campaign statement |
| `public/images/v2/about.png` | Brand story |
| `public/images/v2/brand-portrait.png` | About page hero |
| `public/images/v2/collections/` | Shop category panels |
| `public/images/v2/products/` | Product galleries |
| `public/images/v2/lookbook/` | Lookbook |
| `public/images/v2/instagram/` | Instagram grid |

Current files are temporary women's fashion campaign stills, structured so they can be replaced without touching layout.

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/shop` | Collection, with `?collection=` filters |
| `/product/[slug]` | Product detail |
| `/bag` | Your Edit — selected pieces and WhatsApp enquiry |
| `/lookbook` | Editorial lookbook |
| `/about` | The XQUISITE woman — house story and approach |
| `/contact` | Contact and WhatsApp |

## Your Edit

Pieces are collected client-side in **Your Edit** (not a checkout). Select a size on the product page, add to bag, continue browsing or open `/bag`, then send one WhatsApp enquiry. A single-piece WhatsApp enquiry remains on the product page.

The edit persists in `localStorage` under `xquisite-edit`. There is no payment, account, or order confirmation.

The enquiry message lists each piece, size, quantity, and an estimated total. WhatsApp uses `+234 911 038 3545` via `src/lib/config.ts`.

## Contact

`/contact` is the enquiry close: WhatsApp, Instagram (`Pinnaclecrypt`), and **Notes from XQUISITE** — a frontend-only email list for the demo. Nothing is stored remotely.

## Footer

```
© 2026 XQUISITE-FASHION. Portfolio Demo by Pinnacle
Developed by Pinnacle
```
