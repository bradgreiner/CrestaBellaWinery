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

- [x] **Formspree**: Contact form → `mykdwppq`, Grape inquiry → `meelgzlj`
- [x] **Logo**: `logo.png` in `public/images/`
- [x] **Photos**: Real photos in `public/images/` (barrel-room, don-and-diane, wine bottles)
- [ ] **Videos**: Add video files to `public/videos/` and convert to MP4:
  - `IMG_8563.MOV` → Home hero (already slow-mo)
  - `IMG_8540.MOV` → About hero
  - Convert both: `ffmpeg -i INPUT.MOV -vcodec h264 -acodec aac OUTPUT.mp4`
- [ ] **Images**: Add `IMG_8081.jpeg` (grape cluster close-up) and `IMG_8538.jpeg` (sunset/plateau poster) to `public/images/`
- [ ] **OG Image**: Add `og-image.jpg` (1200x630) to `public/images/` for social sharing
- [ ] **Domain**: Connect `crestabellawinery.com` via GoDaddy DNS to Vercel

## Build

```bash
npm run build
```

## Deployment

Push to GitHub. Vercel auto-deploys from the main branch.
