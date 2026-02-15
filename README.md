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
- [x] **Videos & Images**: All assets uploaded to `public/images/`
- [ ] **MP4 Conversion**: MOV files only play on Safari/iOS. For Chrome/Firefox/Edge, convert to MP4 locally and upload:
  ```bash
  ffmpeg -i public/images/IMG_8563.MOV -vcodec h264 -acodec aac public/images/IMG_8563.mp4
  ffmpeg -i public/images/IMG_8540.MOV -vcodec h264 -acodec aac public/images/IMG_8540.mp4
  ffmpeg -i public/images/IMG_0030.MOV -filter:v "setpts=3.0*PTS" -an public/images/IMG_0030_slow.mp4
  ```
  Until MP4s are added, Chrome/Firefox users see the sunset poster image instead of video.
- [ ] **OG Image**: Add `og-image.jpg` (1200x630) to `public/images/` for social sharing
- [ ] **Domain**: Connect `crestabellawinery.com` via GoDaddy DNS to Vercel

## Build

```bash
npm run build
```

## Deployment

Push to GitHub. Vercel auto-deploys from the main branch.
