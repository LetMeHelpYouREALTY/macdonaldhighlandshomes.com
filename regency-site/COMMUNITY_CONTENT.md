# Community Description Content Guide

## Overview

The `communityDescription.js` file contains detailed, compelling copy for all community description sections, formatted for accordion/expandable components. Each section contains 100-150 words of luxury real estate marketing copy.

## Content Structure

### 1. About the Community ✅
- **File**: `data/communityDescription.js` → `communityDescription.about`
- **Word Count**: ~150 words
- **Topics**: Premier luxury golf community, 1,200-acre master-planned development, guard-gated security, low-density design

### 2. DragonRidge Golf Course ✅
- **File**: `data/communityDescription.js` → `communityDescription.dragonRidgeGolf`
- **Word Count**: ~150 words
- **Topics**: Championship 18-hole course, Jay Morrish design, course history, membership

### 3. Amenities Overview ✅
- **File**: `data/communityDescription.js` → `communityDescription.amenities.sections`
- **5 Subsections** (each 100-150 words):
  1. **DragonRidge Country Club** - 42,000 sq ft clubhouse, mixed grills, spa
  2. **Fitness Center** - 15,000 sq ft, cardio, classes, sauna, massage studios
  3. **Recreation Facilities** - pools, tennis, pickleball courts
  4. **Parks & Trails** - hiking/biking trails, dog parks, recreation areas
  5. **Community Events** - social calendar and activities

### 4. Location Advantages ✅
- **File**: `data/communityDescription.js` → `communityDescription.location`
- **Word Count**: ~150 words
- **Topics**: 15-20 min to Strip, airport proximity, District at Green Valley Ranch, 89012 zip code

### 5. Neighborhood Communities ✅
- **File**: `data/communityDescription.js` → `communityDescription.neighborhoods.sections`
- **3 Neighborhoods** (each 100-150 words):
  1. **Vu** - Contemporary luxury, Christopher Homes, home sizes, price ranges
  2. **SkyVu** - Elevated positioning, Strip views, estate homes, premium lots
  3. **Vue Pointe** - Mediterranean-inspired, Christopher Homes, distinguishing features

## Usage Options

### Option 1: Flat Accordion (Simple)
Use `flatAccordionSections` for a simple, single-level accordion:

```javascript
import { flatAccordionSections } from '@/data/communityDescription';

{flatAccordionSections.map(section => (
  <AccordionItem key={section.id}>
    <AccordionHeader>{section.title}</AccordionHeader>
    <AccordionContent>{section.content}</AccordionContent>
  </AccordionItem>
))}
```

### Option 2: Nested Accordion (Advanced)
Use `accordionSections` for nested/parent-child accordion structure:

```javascript
import { accordionSections } from '@/data/communityDescription';

{accordionSections.map(section => (
  <AccordionItem key={section.id}>
    {section.isParent ? (
      // Render parent with children
      <NestedAccordion section={section} />
    ) : (
      // Render single section
      <AccordionContent>{section.content}</AccordionContent>
    )}
  </AccordionItem>
))}
```

### Option 3: Direct Access
Access specific sections directly:

```javascript
import { communityDescription } from '@/data/communityDescription';

// About section
<p>{communityDescription.about.content}</p>

// Specific amenity
<p>{communityDescription.amenities.sections[0].content}</p>

// Specific neighborhood
<p>{communityDescription.neighborhoods.sections[1].content}</p>
```

## Component Example

See `components/CommunityAccordion.example.tsx` for a complete working example using:
- React hooks for state management
- Tailwind CSS styling
- Expandable/collapsible functionality
- Both flat and nested accordion implementations

## Content Characteristics

✅ **100-150 words per section** - As requested
✅ **Compelling marketing copy** - Luxury real estate tone
✅ **SEO-optimized** - Natural keyword integration
✅ **Accordion-ready** - Formatted for expandable sections
✅ **Comprehensive** - All requested topics covered

## Integration Steps

1. **Import the content**:
   ```javascript
   import { flatAccordionSections } from '@/data/communityDescription';
   ```

2. **Create accordion component** (or use existing library like Radix UI, Headless UI, etc.)

3. **Map over sections**:
   ```javascript
   {flatAccordionSections.map(section => (
     // Your accordion item component
   ))}
   ```

4. **Style to match your design system**

5. **Add to your Community/About page**

## Available Exports

- `communityDescription` - Full structured object
- `accordionSections` - Nested structure with parent/child relationships
- `flatAccordionSections` - Simple flat array (recommended for most use cases)

## Notes

- All content is 100-150 words as requested
- Content is written in luxury real estate marketing tone
- Ready for immediate use in accordion components
- Can be easily customized or extended
- Includes all specific details requested (sq ft, amenities, etc.)


