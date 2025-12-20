# MacDonald Highlands Website Pages Structure

Based on the official website at [macdonaldhighlands.com](https://macdonaldhighlands.com/), this document outlines all pages and content structure.

## Navigation Structure

### Real Estate
- **Luxury Lots** (`/luxury-lots`)
- **Luxury Home Listings** (`/luxury-home-listings`)
- **The Developer** (`/the-developer`)
- **Real Estate Sales Team** (`/real-estate-sales-team`)
- **Request Real Estate Info** (`/request-real-estate-info`)

### Amenities
- **Tennis & Athletic Center** (`/tennis-athletic-center`)
- **Dog Parks** (`/dog-parks`)
- **Parks** (`/parks`)
- **Feng Shui** (`/feng-shui`)
- **Vortex** (`/vortex`)
- **Living Art** (`/living-art`)

### DragonRidge
- **Country Club** (`/dragonridge-country-club`)
- **The Clubhouse** (`/the-clubhouse`)

### Community
- **Community Map** (`/community-map`)
- **Home Owners Assoc** (`/home-owners-assoc`)
- **Utilities and Services** (`/utilities-and-services`)
- **FAQs** (`/faqs`)
- **Request Community Info** (`/request-community-info`)
- **Testimonials** (`/testimonials`)

### About
- **MacDonald Highlands** (`/macdonald-highlands`)
- **Our History** (`/our-history`)
- **The Highlander Magazine** (`/the-highlander-magazine`)

### Contact
- **Directions** (`/directions`)
- **Numbers to Remember** (`/numbers-to-remember`)
- **Request Information** (`/request-information`)

## Key Information from Official Website

### Contact Details
- **Phone**: (702) 614-9100
- **Email**: info@macdonaldhighlands.com
- **Address**: 552 South Stephanie Street, Henderson, NV 89012

### Community Facts
- **Size**: 1,320 acres (not 1,200+)
- **Location**: Henderson, Nevada 89012
- **Entries**: Two beautifully landscaped, 24-hour guard-gated entries
- **Architecture**: Glass-sheathed houses with disappearing walls, floating terraces, protruding decks, and copper roofs

### Awards
- **Best Golf Course**: DragonRidge Country Club – Gold Winner!
- **Best Place to Get Married**: DragonRidge Country Club – Bronze Winner!
- **Best Master Planned Community**: MacDonald Highlands – Bronze Winner!

### Unique Features
- Natural rock formations
- Lush landscaping
- Cascading waterfalls
- Pathways for exploration, exercise, and enjoyment
- Feng Shui principles
- Energy vortex locations
- Living Art installations

## Content Files Created

All page content is available in:
- `data/websitePages.js` - Complete content for all pages
- `data/communityDescription.js` - Updated with accurate 1,320 acres
- `config/siteConfig.js` - Updated with correct contact information

## Implementation Notes

1. **Create page components** in `src/app/` for each page
2. **Import content** from `data/websitePages.js`
3. **Use navigation structure** from `navigationStructure` export
4. **Update existing pages** with accurate information
5. **Add unique amenities** (Feng Shui, Vortex, Living Art) to amenities page

## Next Steps

1. Create page components for each navigation item
2. Implement routing structure
3. Add forms for "Request Information" pages
4. Create community map component
5. Add testimonials section
6. Implement FAQ accordion
7. Create The Highlander Magazine section


