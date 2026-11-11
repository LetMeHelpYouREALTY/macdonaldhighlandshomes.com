# MacDonald Highlands Site — Recommendations (implemented + next)

Date-stamped for this Listing Specialist upgrade (America/Los_Angeles).

## Implemented in this pass

1. **Listing Specialist positioning** — H1s, titles, nav, footer, and `siteConfig` now lead with Dr. Jan Duffy as MacDonald Highlands Listing Specialist.
2. **Section-matched imagery** — Generated and wired hero/section images for selling, buying, valuation, relocation, investment, off-market, services overview, and why-list.
3. **SEO** — Stronger titles/descriptions/canonicals/OG images; NAP + map block on homepage; selling/services FAQs.
4. **GEO** — Stable `@id` entity graph (`#organization`, `#person`, `#website`, `#macdonald-highlands`); E.164 phone; areaServed Place hierarchy.
5. **AEO** — Visible FAQ sections + matching `FAQPage` JSON-LD; expanded `/llms.txt`; robots AI crawler allowlist (18 UAs); answer-first FAQ copy.
6. **Schemas** — Restored Person schema (was returning `null`); enriched LocalBusiness `@graph`, WebSite, Service (+ image/broker).

## Recommended next (ops / content)

| Priority | Action |
|----------|--------|
| A | Confirm GBP NAP matches `(702) 500-1955` + `3185 St Rose Pkwy, Suite 101` and submit updated sitemap in GSC |
| A | Replace AI lifestyle images with licensed community/agent photography where available |
| B | Add SpeakableSpecification on FAQ answers after Rich Results validation |
| B | Publish 1 monthly “MacDonald Highlands listing market” note with `Article` + `dateModified` |
| C | Wire Calendly booking CTA beside phone if link is confirmed |
| C | Add AggregateRating only if GBP review count/rating is verified (never fabricate) |

## Fair Housing reminder

Avoid “safe / family-friendly / good schools” language. Prefer sqft, amenities, commute times, and named schools without quality judgments.
