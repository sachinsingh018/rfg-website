# Rhomboid Financial - Modern Financial Services Website

A modern, premium financial services website built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Framer Motion** (animations)
- **lucide-react** (icons)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx              → Home page
  /layout.tsx            → Root layout
  /globals.css           → Global styles

/components
  Header.tsx             → Navigation header
  HeroSlider.tsx         → Hero section
  AboutSection.tsx       → About us section
  ProductsTabs.tsx       → Products with tabs
  AlliancesGrid.tsx      → Partners/alliances grid
  Testimonials.tsx       → Client testimonials
  NewsletterCTA.tsx      → Newsletter signup
  Footer.tsx             → Footer with all sections
  BackToTop.tsx          → Scroll to top button
  /ui                    → shadcn/ui components

/lib
  utils.ts               → Utility functions
```

## Features

- ✅ Modern, premium UI design
- ✅ Fully responsive (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ Accessible components
- ✅ Clean, maintainable code structure
- ✅ TypeScript for type safety

## Design Philosophy

- **Trust & Stability**: Deep navy/charcoal primary colors
- **Premium Feel**: Muted gold accents, generous spacing
- **Professional**: Clean typography, subtle shadows
- **Modern**: Rounded corners, smooth transitions

## Next Steps

- Add dark mode support
- Implement form submissions
- Add more pages (About, Contact, etc.)
- Integrate with CMS/backend
- Add analytics
- Optimize images and performance

