# MacDonald Highlands Content Guide

This guide explains how to use the comprehensive content created for the MacDonald Highlands luxury real estate website.

## Content Files Overview

### 1. `config/siteConfig.js`
**Purpose**: Site-wide configuration and branding
- Updated with MacDonald Highlands information
- Includes contact details, social links, SEO metadata
- Community facts and statistics

**Usage**:
```javascript
import { siteConfig } from '@/config/siteConfig';
// Use siteConfig.name, siteConfig.contact, etc.
```

### 2. `data/macdonaldHighlandsContent.js`
**Purpose**: Comprehensive content for all pages
- Homepage hero content
- Community overview and descriptions
- DragonRidge Golf information
- Neighborhood details (Vu, SkyVu, Vue Pointe)
- Amenities and lifestyle content
- About sections
- Contact and inquiry content
- SEO metadata

**Usage**:
```javascript
import { 
  homepageHero, 
  communityOverview, 
  dragonRidgeGolf,
  neighborhoods,
  amenities,
  aboutContent,
  contactContent,
  seoMetadata
} from '@/data/macdonaldHighlandsContent';
```

### 3. `data/macdonaldHighlandsProperties.js`
**Purpose**: 5 detailed luxury property listings
- Complete property descriptions
- Features, highlights, views
- Neighborhood information
- Price ranges from $1.85M to $6.5M

**Usage**:
```javascript
import { macdonaldHighlandsProperties } from '@/data/macdonaldHighlandsProperties';
// Use in Properties component or property listing pages
```

### 4. `data/componentContent.js`
**Purpose**: Component-ready content for UI sections
- Hero sections
- Feature grids
- Statistics
- Testimonials
- CTA sections
- Form content

**Usage**:
```javascript
import { 
  heroSection,
  featuresSection,
  communityStats,
  neighborhoodHighlights,
  amenitiesSection,
  testimonialsSection,
  ctaSection
} from '@/data/componentContent';
```

## Integration Examples

### Homepage Hero
```javascript
import { heroSection } from '@/data/componentContent';

export default function HomePage() {
  return (
    <section>
      <h1>{heroSection.headline}</h1>
      <p>{heroSection.subheading}</p>
      <button>{heroSection.primaryCTA}</button>
    </section>
  );
}
```

### Property Listings
```javascript
import { macdonaldHighlandsProperties } from '@/data/macdonaldHighlandsProperties';

export default function PropertiesPage() {
  return (
    <div>
      {macdonaldHighlandsProperties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
```

### Community Overview
```javascript
import { communityOverview } from '@/data/macdonaldHighlandsContent';

export default function AboutPage() {
  return (
    <div>
      <h1>{communityOverview.title}</h1>
      <p>{communityOverview.introduction}</p>
      {/* Use communityOverview.location, vision, etc. */}
    </div>
  );
}
```

## Content Structure

### Property Object Structure
Each property includes:
- Basic info (id, name, location, price, images)
- Detailed description
- Highlights array
- Features (exterior, interior, views)
- Neighborhood and community info
- Golf access and proximity details

### SEO Metadata
Use the `seoMetadata` object for page-specific SEO:
```javascript
import { seoMetadata } from '@/data/macdonaldHighlandsContent';

export const metadata = {
  title: seoMetadata.homepage.title,
  description: seoMetadata.homepage.description,
  keywords: seoMetadata.homepage.keywords
};
```

## Next Steps

1. **Update Components**: Import and use content in existing components
2. **Create Pages**: Use content for About, Community, Amenities pages
3. **Property Details**: Use detailed property descriptions for individual property pages
4. **Forms**: Use contactContent for contact and inquiry forms
5. **Images**: Replace placeholder images with actual MacDonald Highlands photos

## Content Customization

All content is organized in JavaScript/JSON format for easy:
- Updates and modifications
- Translation (if needed)
- Integration with CMS
- Dynamic rendering

## Notes

- All prices and details are examples - update with actual property data
- Images are placeholders - replace with professional photography
- Contact information should be verified
- SEO keywords can be expanded based on analytics

