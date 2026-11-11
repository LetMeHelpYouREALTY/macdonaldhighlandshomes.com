# MacDonald Highlands Site — Recommendations (implemented + next)

Date-stamped for this Listing Specialist upgrade (America/Los_Angeles).

## Implemented in this pass

1. **Listing Specialist positioning** — H1s, titles, nav, footer, and `siteConfig` now lead with Dr. Jan Duffy as MacDonald Highlands Listing Specialist.
2. **Section-matched imagery** — Hero/section images remapped to licensed MacDonald Highlands community photography under `public/photos/community/` (+ optimized WebP variants). Mid-page marketing `<img>` tags converted to `OptimizedImage`.
3. **SEO** — Stronger titles/descriptions/canonicals/OG images; NAP + map block sitewide; FAQPage on every marketing page; monthly listing-market Article.
4. **GEO** — Stable `@id` entity graph (`#organization`, `#person`, `#website`, `#macdonald-highlands`); E.164 phone; areaServed Place hierarchy.
5. **AEO** — Visible FAQ sections + matching `FAQPage` JSON-LD with `SpeakableSpecification` on homepage, services, about, contact, community, listings, sold, testimonials, investment, relocation, off-market, and market note; expanded `/llms.txt`; robots AI crawler allowlist.
6. **Schemas** — Restored Person schema; enriched LocalBusiness `@graph` including verified GBP `AggregateRating` (5.0 / 6); WebSite; Service; Article + `dateModified` on market note.
7. **Calendly** — Confirmed booking URLs wired sitewide; Calendly CTA placed beside phone in NAP + footer.
8. **Agent portrait** — Official circular portrait as favicon + `AgentPortrait` / `AgentIntroStrip` across nav, heroes, listings, NAP, FAQs, consultation bands, footer, and About bio.
9. **PageSpeed** — `next/image` enabled; third-party scripts deferred; Calendly CSS idle-loaded.
10. **GSC redirects** — Apex→www and case-path redirects forced to **308 permanent**.

## Priority checklist status

| Priority | Action | Status |
|----------|--------|--------|
| A | Confirm GBP NAP matches `(702) 500-1955` + `3185 St Rose Pkwy, Suite 101` and submit updated sitemap in GSC | **NAP confirmed**. **GSC sitemap submit still requires human** after production deploy → `https://www.macdonaldhighlandshomes.com/sitemap.xml`. |
| A | Replace AI lifestyle images with licensed community/agent photography | **Done** — community heroes + official agent portrait sitewide. |
| B | Add SpeakableSpecification on FAQ answers | **Done in code** — re-validate Rich Results after deploy. |
| B | Publish monthly listing-market Article | **Done** — `/insights/macdonald-highlands-listing-market`. |
| C | Calendly beside phone | **Done**. |
| C | AggregateRating only if GBP-verified | **Done** — `5.0` / `6` in `siteConfig.reviews`. |

## Still human / ops (cannot do in repo alone)

- Submit sitemap in Google Search Console after production deploy.
- Validate GSC **Redirect error** for `/listings` + `/favicon.ico` after deploy.
- Update **regencyvegas.com** backlinks from apex → `https://www.macdonaldhighlandshomes.com`.
- Re-run Rich Results Test + mobile PageSpeed on production URL after deploy.

## Fair Housing reminder

Avoid “safe / family-friendly / good schools” language. Prefer sqft, amenities, commute times, and named schools without quality judgments.
