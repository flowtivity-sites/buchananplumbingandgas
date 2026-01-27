# Buchanan Plumbing & Gas - Website Rebuild

## Overview
This is a website rebuild for **Buchanan Plumbing & Gas**, a trades business.

## Quick Start
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint
npm run dev
```

## Design Direction
- **Aesthetic:** Power Service
- **Display Font:** Space Grotesk
- **Body Font:** Inter
- **Primary Color:** #374151
- **Accent Color:** #3b82f6
- **Effects:** bold shadows, offset elements, micro-animations, geometric shapes, high contrast

## Design Variations Available
This site has 4 unique design variations to choose from. The recommended variation is applied below, but you can switch by updating `selectedVariation` in prd.json.

### Industrial Authority (variation-1) - RECOMMENDED
- **Rationale:** This design emphasizes Buchanan Plumbing & Gas's expertise in both residential and commercial work with strong industrial elements. The navy and orange palette conveys trust and energy, perfect for a family business that's been serving the Tweed Valley since 2010.
- **Palette:** Primary #1e3a5f, Accent #ff6b35
- **Fonts:** Bebas Neue / Work Sans
- **Mood:** authoritative, industrial, trustworthy, modern

### Utility Pro (variation-2)
- **Rationale:** Designed to reflect Buchanan's comprehensive service range from septic tanks to gas installations, this variation uses a utility-inspired color scheme and bold typography that commands attention while maintaining professionalism for their diverse clientele.
- **Palette:** Primary #2d4739, Accent #f1c40f
- **Fonts:** Archivo Black / DM Sans
- **Mood:** efficient, systematic, professional, reliable

### Coastal Craftsman (variation-3)
- **Rationale:** Reflecting Buchanan's location in Stokers Siding and service to the coastal Tweed Valley region, this design combines slate and teal colors that echo the local landscape while maintaining the sturdy, dependable feel appropriate for a trades business.
- **Palette:** Primary #475569, Accent #0d9488
- **Fonts:** Oswald / Source Sans Pro
- **Mood:** coastal, crafted, established, regional

### Power Service (variation-4)
- **Rationale:** This high-energy design reflects Buchanan's promise of prompt service and modern solutions. The charcoal and electric blue combination creates a contemporary feel that appeals to both traditional plumbing needs and modern gas appliance installations.
- **Palette:** Primary #374151, Accent #3b82f6
- **Fonts:** Space Grotesk / Inter
- **Mood:** dynamic, contemporary, energetic, tech-forward


## Business Information
- **Name:** Buchanan Plumbing & Gas
- **Phone:** 0407 119910
- **Email:** buchananplumbingandgas@gmail.com
- **Address:** Stokers Siding, NSW

- **Tagline:** "We pride ourselves on providing a prompt service with modern plumbing solutions & products"

## Services
### Plumbing
Professional plumbing services

### Gas
Professional gas services

### Water Leaks
Water leak detection and repair services

### Hot Water Installations
Hot water system installation services

### Hot Water Repairs
Hot water system repair services

### Gas Appliance Repairs
Gas appliance repair services

### Toilet Replacement
Toilet replacement services

### Septic Tank Repairs
Septic tank repair services

### Renovations
Plumbing renovation services

### Water Filters
Water filter installation and maintenance services

### Pure Tec Water filters
Pure Tec water filter services

### Gas Fitting
Professional gas fitting services

### Gas Hot Water Installation
Gas hot water system installation services

### Gas Stove Installations
Gas stove installation services

### Gas Heater Servicing
Gas heater servicing and maintenance

### Gas Cook Top Installations
Gas cook top installation services

### All General Gas Repairs
General gas repair services

### Gas Leak Detection & Repairs
Gas leak detection and repair services

### Hot Water Systems
Hot water system services

### Electric Hot Water Systems
Electric hot water system services

### Instant Gas Hot Water
Instant gas hot water system services

### Heat Pumps
Heat pump services

### Hydro Therm Heat pump
Hydro Therm heat pump services

### Water Filter System
Water filter system installation and maintenance

### Gasfitting
Professional gasfitting services

### Gas Maintenance Repairs
Professional gas maintenance repairs

### Appliance Installations
Professional appliance installations

## Available Images
**IMPORTANT:** Use these downloaded images from the original website. Do NOT use placeholder images.

No images downloaded - use placeholder images sparingly

## Content Files
- `content/pages.json` - Scraped page content
- `content/services.json` - Service offerings
- `content/about.json` - About/team information
- `content/metadata.json` - Business contact details
- `assets/images/` - Downloaded images from original website

## PRD Stories
Complete each story in `prd.json` in order. Mark `"passes": true` when done.

1. **Project setup: Next.js + Tailwind, Cloudflare config**
2. **Homepage: hero with images, services grid, trust signals, CTA**
3. **Services page with service images**
4. **About page with team/business images**
5. **Contact page: form, map, details**
6. **Design system: Apply vertical aesthetic**
7. **Motion & polish**
8. **AEO: LocalBusiness schema, meta tags, FAQ**
9. **Mobile responsive**
10. **Image optimization with next/image**
11. **Deploy to Cloudflare Pages**

## Deployment
```bash
npm run build
npx wrangler pages deploy ./out --project-name=buchananplumbingandgas
```

Preview URL: `https://buchananplumbingandgas.sites.flowtivity.com.au`

---
Generated by Website Factory
