# Cresta Bella Vineyards

Website for **Cresta Bella Vineyards**, a family-owned small batch winery in La Cresta, California on the Santa Rosa Plateau.

**Domain**: [crestabellawinery.com](https://crestabellawinery.com)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond (headings) + DM Sans (body) via Google Fonts
- **Deployment**: Vercel
- **Forms**: Formspree (contact + grape inquiry)

## Pages

- `/` — Home (hero, intro, feature cards, quote section)
- `/about` — Our Vineyard (story, terroir, winemaking, photo gallery)
- `/contact` — Contact & Grape Inquiries (two forms, location info)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setup Checklist

Before going live, complete these steps:

1. **Formspree**: Create two forms at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in:
   - `src/components/ContactForm.tsx`
   - `src/components/GrapeInquiryForm.tsx`

2. **Images**: Replace placeholder gradients with real photos. Look for `TODO: Replace` comments throughout the components.

3. **Email**: Update `info@crestabellawinery.com` with the actual contact email in:
   - `src/components/Footer.tsx`
   - `src/components/ContactForm.tsx`
   - `src/components/GrapeInquiryForm.tsx`
   - `src/app/layout.tsx` (JSON-LD schema)

4. **Logo**: Add `logo.png` to `public/images/` and update the Header component to use it.

5. **OG Image**: Add `og-image.jpg` (1200x630) to `public/images/` for social sharing.

6. **Domain**: Connect `crestabellawinery.com` via GoDaddy DNS to Vercel.

## Build

```bash
npm run build
```

## Deployment

Push to GitHub. Vercel auto-deploys from the main branch.
