# SBU Express Landing Page — Fanatik Digital Agency

High-conversion Google Ads landing page for "Jasa SBU Kilat".  
Built with **Astro 4 · Tailwind CSS 3 · Swiper.js 11 · AOS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install        # or: pnpm install

# 2. Start dev server
npm run dev        # → http://localhost:4321

# 3. Production build
npm run build      # → ./dist/

# 4. Preview production build locally
npm run preview
```

---

## ☁️ Deploy to Vercel (one command)

```bash
npx vercel --prod
```

Or connect the repo at **vercel.com/new** — Vercel auto-detects Astro.

---

## 📋 Pre-Deploy Checklist

| Task | File |
|------|------|
| ✅ Replace `GTM-XXXXXXXX` with real GTM container ID | `src/layouts/Layout.astro` |
| ✅ Replace `G-XXXXXXXXXX` with real GA4 measurement ID | `src/layouts/Layout.astro` |
| ✅ Replace `6280000000000` with real WhatsApp number | All components (global search) |
| ✅ Add real `og-image.png` (1200×630) | `public/images/` |
| ✅ Add `apple-touch-icon.png` (180×180) | `public/` |
| ✅ Update business schema (name, URL, phone) | `src/layouts/Layout.astro` |
| ✅ Set real canonical URL | `src/layouts/Layout.astro` |

---

## 📁 Project Structure

```
astro-sbu/
├── astro.config.mjs          # Astro config (Tailwind + Vercel adapter)
├── tailwind.config.cjs       # Tailwind theme (custom navy palette)
├── vercel.json               # Cache headers & build config
├── public/
│   ├── favicon.svg
│   └── images/               # Add og-image.png here
└── src/
    ├── layouts/
    │   └── Layout.astro      # <head>, GTM/GA4 placeholders, AOS init
    ├── pages/
    │   └── index.astro       # Page — renders all 8 components in order
    ├── components/
    │   ├── Navbar.astro          # Sticky, scroll-aware, mobile hamburger
    │   ├── HeroSection.astro     # H1, CTA with pulse animation, cert visual
    │   ├── ClientLogos.astro     # Grayscale logos, AOS fade-in
    │   ├── ProblemSection.astro  # ❌ bullet problem cards
    │   ├── SolutionSection.astro # 3 USP cards (shield/bolt/headset)
    │   ├── WorkflowSection.astro # Dashed 3-step timeline
    │   ├── TestimonialsSection.astro # Swiper.js WA-style cards (aspect-[9/16])
    │   ├── FAQSection.astro      # Native <details>/<summary> accordion
    │   ├── FinalCTASection.astro # Navy bg, urgency CTA with pulse
    │   ├── Footer.astro
    │   └── FloatingWA.astro      # Sticky WA bubble with ping animation
    └── styles/
        └── global.css            # Tailwind directives + custom animations
```

---

## ⚡ Performance Notes (targeting 95+ PSI)

- **Static Site Generation (SSG)** — zero server runtime on Vercel Edge
- **CSS inlined automatically** for critical above-the-fold styles (`inlineStylesheets: 'auto'`)
- **Swiper** lazy-loaded per component via Astro's bundler (only on pages that need it)
- **AOS** initialized after DOM ready; `once: true` prevents re-animation
- **Google Fonts** loaded via `preconnect` for minimal render-blocking
- **Immutable cache headers** for all static assets (1 year)
- **HTML compressed** by Astro at build time

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Primary (Navy) | `#0d2b55` |
| CTA Orange | `#f97316` |
| CTA Emerald | `#10b981` |
| WA Green | `#25d366` |
| Font | Inter (Google Fonts) |
