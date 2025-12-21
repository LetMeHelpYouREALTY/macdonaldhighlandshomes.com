# Required Images Checklist

This document lists all images needed for the MacDonald Highlands real estate website.

## ✅ Critical (Required for Launch)

### Agent Photos
- [ ] `/photos/agent/dr-jan-duffy-headshot.jpg` - Professional headshot (400x400px minimum)
  - Used in: Schema markup, About page, homepage "Why Dr. Jan" section
  - **Priority: HIGHEST**

### Hero Images
- [ ] `/images/hero/hero-macdonald-highlands-main.webp` - Main homepage hero (1920x1080px)
  - Used in: Homepage hero section
  - **Priority: HIGH**

### Logos
- [ ] `/logos/brand/favicon.ico` - Site favicon (16x16, 32x32, 48x48 sizes)
- [ ] `/logos/brokerage/berkshire-hathaway-logo.svg` - Brokerage logo
  - Used in: Footer, About page

## 📸 Recommended (Important for UX)

### Community Images
- [ ] `/images/community/macdonald-highlands-aerial.webp` - Aerial community view
- [ ] `/images/community/dragonridge-golf-course.webp` - Golf course photo
- [ ] `/images/community/guard-gate-entrance.webp` - Guard gate entrance
- [ ] `/images/community/community-amenities.webp` - Community amenities

### Service Page Images
- [ ] `/images/services/selling-service.webp` - Selling service illustration
- [ ] `/images/services/buying-service.webp` - Buying service illustration
- [ ] `/images/services/valuation-service.webp` - Home valuation illustration
- [ ] `/images/services/relocation-service.webp` - Relocation service illustration
- [ ] `/images/services/investment-service.webp` - Investment advisory illustration
- [ ] `/images/services/off-market-service.webp` - Off-market opportunities illustration

### Property Images (Placeholders)
- [ ] `/images/properties/placeholder-luxury-home.webp` - Generic luxury home image
  - Used for: Property listings without photos

## 🎨 Nice to Have (Enhancement)

### Additional Hero Images
- [ ] `/images/hero/hero-macdonald-highlands-2.webp` - Alternative hero image
- [ ] `/images/hero/hero-macdonald-highlands-3.webp` - Alternative hero image

### Testimonial Photos
- [ ] `/images/testimonials/client-1.jpg` - Client photo (with permission)
- [ ] `/images/testimonials/client-2.jpg` - Client photo (with permission)
- [ ] `/images/testimonials/client-3.jpg` - Client photo (with permission)

### Team Photos (if applicable)
- [ ] `/photos/team/team-member-1.jpg` - Team member photo

### Partner Logos
- [ ] `/logos/partners/realscout-logo.svg` - RealScout logo
- [ ] `/logos/partners/follow-up-boss-logo.svg` - Follow Up Boss logo

## 📋 Image Specifications

### Dimensions & Formats

| Image Type | Recommended Size | Format | Max File Size |
|------------|------------------|--------|---------------|
| Hero Images | 1920x1080px | WebP/AVIF | 500KB |
| Agent Headshot | 800x800px | JPG/WebP | 200KB |
| Property Photos | 1200x800px | WebP | 300KB |
| Service Images | 800x600px | WebP | 200KB |
| Community Photos | 1600x900px | WebP | 400KB |
| Logos | Variable | SVG (preferred) | 50KB |
| Favicon | 16x16, 32x32, 48x48 | ICO/PNG | 10KB |

## 🔗 Current Image References in Code

Based on the codebase, these images are currently referenced:

1. **Schema Markup** (`RealEstateAgentSchema.tsx`):
   - `https://macdonaldhighlandshomes.com/images/dr-jan-duffy-headshot.jpg`
   - **Action**: Update path to `/photos/agent/dr-jan-duffy-headshot.jpg`

2. **Legacy Images** (in `/public/Image/` folder):
   - `hero_bg_1.jpg`, `hero_bg_2.jpg`, `hero_bg_3.jpg` → Move to `/images/hero/`
   - `agent1.jpg`, `person1.jpeg`, etc. → Review and organize
   - `house.jpeg` → Move to `/images/properties/` or replace

## 📝 Next Steps

1. **Immediate**: Add Dr. Jan Duffy headshot to `/photos/agent/`
2. **Update Schema**: Update image path in `RealEstateAgentSchema.tsx`
3. **Organize Legacy**: Move existing images from `/Image/` to new structure
4. **Optimize**: Compress and convert all images to WebP format
5. **Test**: Verify all images load correctly after deployment

## 🛠️ Image Optimization Tools

- **Online**: [Squoosh.app](https://squoosh.app/) - Free image compression
- **CLI**: [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing
- **Desktop**: [ImageOptim](https://imageoptim.com/) - Mac image optimization

## 📍 Image Sources

Consider sourcing images from:
- Professional photographer for agent/team photos
- MacDonald Highlands HOA (with permission) for community photos
- Stock photos (Unsplash, Pexels) for generic real estate imagery
- Custom photography for property listings

