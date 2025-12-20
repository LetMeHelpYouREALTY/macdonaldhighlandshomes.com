# Quick Start: Using MacDonald Highlands Content

## Quick Import Examples

### Homepage Hero
```javascript
import { heroSection } from '@/data/componentContent';

<h1>{heroSection.headline}</h1>
<p>{heroSection.subheading}</p>
<button>{heroSection.primaryCTA}</button>
```

### Property Listings
```javascript
import { macdonaldHighlandsProperties } from '@/data/macdonaldHighlandsProperties';

{macdonaldHighlandsProperties.map(property => (
  <div key={property.id}>
    <h2>{property.name}</h2>
    <p>{property.price}</p>
    <p>{property.description}</p>
  </div>
))}
```

### Site Config
```javascript
import { siteConfig } from '@/config/siteConfig';

<title>{siteConfig.seo.title}</title>
<p>{siteConfig.contact.phone}</p>
```

### Community Overview
```javascript
import { communityOverview } from '@/data/macdonaldHighlandsContent';

<h1>{communityOverview.title}</h1>
<p>{communityOverview.introduction}</p>
```

### Amenities
```javascript
import { amenitiesSection } from '@/data/componentContent';

<h2>{amenitiesSection.title}</h2>
{amenitiesSection.mainAmenity.features.map(feature => (
  <li key={feature}>{feature}</li>
))}
```

### Testimonials
```javascript
import { testimonialsSection } from '@/data/componentContent';

{testimonialsSection.testimonials.map((testimonial, i) => (
  <div key={i}>
    <p>"{testimonial.quote}"</p>
    <p>- {testimonial.author}, {testimonial.location}</p>
  </div>
))}
```

### Contact Form
```javascript
import { contactPageContent } from '@/data/componentContent';

<form>
  <label>{contactPageContent.form.fields.name.label}</label>
  <input placeholder={contactPageContent.form.fields.name.placeholder} />
  {/* ... other fields ... */}
</form>
```

## Content Files Reference

| File | Exports | Use Case |
|------|---------|----------|
| `config/siteConfig.js` | `siteConfig` | Site-wide config, branding, contact |
| `data/componentContent.js` | `heroSection`, `featuresSection`, etc. | Ready-to-use component content |
| `data/macdonaldHighlandsContent.js` | `homepageHero`, `communityOverview`, etc. | Detailed page content |
| `data/macdonaldHighlandsProperties.js` | `macdonaldHighlandsProperties` | 5 luxury property listings |

## Property Object Example

```javascript
{
  id: 1,
  name: "SkyVu Panoramic Estate",
  location: "SkyVu, MacDonald Highlands, Henderson, NV 89012",
  price: "$4,850,000",
  bedrooms: 5,
  bathrooms: 5,
  squareFeet: 6800,
  lotSize: "0.85 acres",
  description: "Experience the pinnacle...",
  highlights: [...],
  features: {
    exterior: [...],
    interior: [...],
    views: [...]
  }
}
```

## Common Patterns

### Page Metadata
```javascript
import { seoMetadata } from '@/data/macdonaldHighlandsContent';

export const metadata = {
  title: seoMetadata.homepage.title,
  description: seoMetadata.homepage.description,
};
```

### Features Grid
```javascript
import { featuresSection } from '@/data/componentContent';

{featuresSection.features.map(feature => (
  <div key={feature.title}>
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
))}
```

### Statistics
```javascript
import { communityStats } from '@/data/componentContent';

{communityStats.stats.map(stat => (
  <div key={stat.label}>
    <h2>{stat.number}</h2>
    <p>{stat.label}</p>
    <p>{stat.description}</p>
  </div>
))}
```


