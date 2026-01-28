# Buchanan Plumbing & Gas - Website Rebuild

## Overview
This is a website rebuild for **Buchanan Plumbing & Gas**, a trades business.

## Quick Start
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint
npm run dev
```

## Design Direction
- **Aesthetic:** Aussie Tradesman Pro
- **Display Font:** Bebas Neue
- **Body Font:** Work Sans
- **Primary Color:** #1B365D
- **Accent Color:** #FF6B35
- **Effects:** geometric shapes, bold shadows, grain texture, decorative lines

## Design Variations Available
This site has 4 unique design variations to choose from. The recommended variation is applied below, but you can switch by updating `selectedVariation` in prd.json.

### Aussie Tradesman Pro (variation-1) - RECOMMENDED
- **Rationale:** This design captures the rugged, reliable nature of Buchanan Plumbing & Gas with industrial navy tones that reflect their technical expertise and trustworthy family-run heritage. The bold typography and utilitarian aesthetic perfectly suits their comprehensive gas and plumbing services across the rural Tweed Valley region.
- **Palette:** Primary #1B365D, Accent #FF6B35
- **Fonts:** Bebas Neue / Work Sans
- **Mood:** industrial, trustworthy, professional, robust

### Modern Utility (variation-2)
- **Rationale:** Reflecting Buchanan's commitment to 'modern plumbing solutions,' this sleek charcoal and teal design emphasizes their innovative approach while maintaining the technical credibility essential for gas fitting and commercial services. The contemporary aesthetic appeals to both residential and commercial clients in the growing Murwillumbah area.
- **Palette:** Primary #2C3639, Accent #17A2B8
- **Fonts:** Space Grotesk / DM Sans
- **Mood:** modern, sleek, technical, innovative

### Country Craftsman (variation-3)
- **Rationale:** Designed for Buchanan's rural Stokers Siding location and family-operated values, this warm forest green and yellow palette evokes the natural Tweed Valley landscape while maintaining professional credibility. The robust typography reflects their hands-on approach to septic tanks, renovations, and rural property services.
- **Palette:** Primary #2D4A22, Accent #F4D03F
- **Fonts:** Oswald / Source Sans Pro
- **Mood:** natural, reliable, family-friendly, grounded

### Industrial Edge (variation-4)
- **Rationale:** This bold slate and copper design emphasizes Buchanan's comprehensive commercial services and technical expertise in gas leak detection and appliance repairs. The high-contrast aesthetic projects confidence and capability, perfect for their diverse client base from sporting venues to real estate agents across the region.
- **Palette:** Primary #34495E, Accent #E67E22
- **Fonts:** Archivo Black / Inter
- **Mood:** bold, confident, industrial, authoritative


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

### Gas Fitting
Professional gas fitting services

### Hot Water Systems
Installation and repair of electric and gas hot water systems, heat pumps, and hydro therm heat pumps

### Water Leaks
Water leak detection and repair services

### Hot Water Installations
Professional hot water installation services

### Hot Water Repairs
Professional hot water repair services

### Gas Appliance Repairs
Professional gas appliance repair services

### Toilet Replacement
Professional toilet replacement services

### Septic Tank Repairs
Professional septic tank repair services

### Renovations
Professional renovation services

### Water Filters
Professional water filter services

### Pure Tec Water filters
Professional Pure Tec water filter services

### Gas Hot Water Installation
Professional gas hot water installation services

### Gas Stove Installations
Professional gas stove installation services

### Gas Heater Servicing
Professional gas heater servicing

### Gas Cook Top Installations
Professional gas cook top installation services

### All General Gas Repairs
Professional general gas repair services

### Gas Leak Detection & Repairs
Professional gas leak detection and repair services

### Electric Hot Water Systems
Professional electric hot water system services

### Instant Gas Hot Water
Professional instant gas hot water services

### Heat Pumps
Professional heat pump services

### Hydro Therm Heat pump
Professional hydro therm heat pump services

### Water Filter System
Supply and installation of water filter systems that kill 99% of ecoli, giardia and cryptosporidium cysts.

### Gasfitting
Gasfitting maintenance repairs and appliance installations

## Available Images
**IMPORTANT:** Use these downloaded images from the original website. Do NOT use placeholder images.

- `assets/images/b.png`
- `assets/images/banner-1.png`
- `assets/images/banner-1_16.png`
- `assets/images/banner-1_20.png`
- `assets/images/banner-1_orig.png`
- `assets/images/bath_orig.png`
- `assets/images/d22c05bf2ba3acea8019cfe3ccb1378f.png`
- `assets/images/faucet.png`
- `assets/images/gas_orig.jpg`
- `assets/images/gashws_orig.jpg`
- `assets/images/hws1_orig.png`
- `assets/images/hws2_orig.png`
- `assets/images/luke_orig.png`
- `assets/images/maintenance_orig.png`
- `assets/images/mixer_orig.jpg`
- `assets/images/plumbing_orig.jpg`
- `assets/images/pump_orig.png`
- `assets/images/shower-rose_orig.png`
- `assets/images/stove_orig.jpg`
- `assets/images/stovetop_orig.png`
- `assets/images/toilet-pipe_orig.png`
- `assets/images/toilet.png`
- `assets/images/toilet1_orig.png`
- `assets/images/water-filtration_orig.png`
- `assets/images/waterfilter.png`

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
