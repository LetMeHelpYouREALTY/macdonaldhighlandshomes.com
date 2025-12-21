# Public Assets Directory Structure

This directory contains all static assets (images, photos, logos, icons) for the MacDonald Highlands real estate website.

## Directory Structure

```
public/
├── images/              # General website images
│   ├── hero/           # Hero section background images
│   ├── properties/      # Property listing photos
│   ├── community/      # MacDonald Highlands community photos
│   ├── services/       # Service-related images
│   └── testimonials/   # Client testimonial photos
│
├── photos/              # Agent and team photos
│   ├── agent/          # Dr. Jan Duffy professional photos
│   └── team/          # Team member photos (if applicable)
│
├── logos/              # Branding and logos
│   ├── brand/         # Site branding, favicon, etc.
│   ├── brokerage/     # Berkshire Hathaway HomeServices logos
│   └── partners/      # Partner company logos
│
└── icons/             # Icon files (SVG, PNG)
```

## Usage Guidelines

### Images

- **Hero Images** (`/images/hero/`): High-quality background images for homepage hero sections
  - Recommended: 1920x1080px or larger, WebP or AVIF format
  - Examples: `hero-macdonald-highlands-1.webp`, `hero-dragonridge-golf.webp`

- **Property Photos** (`/images/properties/`): Property listing images
  - Recommended: 1200x800px, WebP format
  - Naming: `property-[address-slug]-[number].webp`

- **Community Images** (`/images/community/`): MacDonald Highlands community photos
  - Examples: golf course, guard gates, amenities, views

- **Services Images** (`/images/services/`): Service page imagery
  - Examples: home valuation, relocation, investment advisory

- **Testimonials** (`/images/testimonials/`): Client photos (with permission)

### Photos

- **Agent Photos** (`/photos/agent/`): Dr. Jan Duffy professional headshots
  - Required: `dr-jan-duffy-headshot.jpg` (for schema markup)
  - Recommended: 800x800px, high-quality professional photo
  - Formats: JPG, WebP

- **Team Photos** (`/photos/team/`): Team member photos (if applicable)

### Logos

- **Brand Logos** (`/logos/brand/`): Site branding
  - Favicon files (favicon.ico, favicon-16x16.png, favicon-32x32.png)
  - Site logo variations

- **Brokerage Logos** (`/logos/brokerage/`): Berkshire Hathaway HomeServices Nevada Properties
  - Official brokerage logos in various sizes
  - Formats: SVG (preferred), PNG

- **Partner Logos** (`/logos/partners/`): Partner company logos
  - RealScout, Follow Up Boss, etc.

### Icons

- **Icons** (`/icons/`): Custom icon files
  - SVG format preferred for scalability
  - Social media icons, feature icons, etc.

## Image Optimization

All images should be:
- **Optimized** before upload (use tools like Squoosh, ImageOptim, or Sharp)
- **WebP or AVIF** format for modern browsers (with JPG fallback if needed)
- **Properly sized** (don't upload 5000px images if displaying at 800px)
- **Named descriptively** (use kebab-case, include context)

## Required Images

### Critical Assets Needed:

1. **`/photos/agent/dr-jan-duffy-headshot.jpg`**
   - Professional headshot for schema markup and About page
   - Minimum: 400x400px

2. **`/images/hero/hero-macdonald-highlands.webp`**
   - Main homepage hero image
   - Recommended: 1920x1080px

3. **`/logos/brand/favicon.ico`**
   - Site favicon

4. **`/images/community/macdonald-highlands-aerial.webp`**
   - Aerial view of MacDonald Highlands community

## Next.js Image Component Usage

When referencing these images in code, use:

```tsx
import Image from 'next/image';

// Example
<Image
  src="/photos/agent/dr-jan-duffy-headshot.jpg"
  alt="Dr. Jan Duffy, REALTOR®"
  width={400}
  height={400}
  priority // For above-the-fold images
/>
```

## File Naming Convention

- Use **kebab-case**: `dr-jan-duffy-headshot.jpg`
- Include **descriptive context**: `hero-macdonald-highlands-sunset.webp`
- Include **dimensions if multiple sizes**: `logo-berkshire-hathaway-200x200.png`
- Use **appropriate extensions**: `.webp`, `.avif`, `.jpg`, `.png`, `.svg`

## Git Considerations

- Large image files should be optimized before committing
- Consider using Git LFS for very large assets (>10MB)
- Placeholder files (`.gitkeep`) are included to ensure directories are tracked


