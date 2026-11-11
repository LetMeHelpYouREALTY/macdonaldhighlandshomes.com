# MacDonald Highlands Site — Recommendations (implemented + next)

Date-stamped for this Listing Specialist upgrade (America/Los_Angeles).

## Implemented in this pass

1. **Listing Specialist positioning** — H1s, titles, nav, footer, and `siteConfig` now lead with Dr. Jan Duffy as MacDonald Highlands Listing Specialist.
2. **Section-matched imagery** — Hero/section images remapped to licensed MacDonald Highlands community photography under `public/photos/community/` (AI lifestyle art demoted).
3. **SEO** — Stronger titles/descriptions/canonicals/OG images; NAP + map block sitewide; selling/services FAQs; monthly listing-market Article.
4. **GEO** — Stable `@id` entity graph (`#organization`, `#person`, `#website`, `#macdonald-highlands`); E.164 phone; areaServed Place hierarchy.
5. **AEO** — Visible FAQ sections + matching `FAQPage` JSON-LD with `SpeakableSpecification`; expanded `/llms.txt`; robots AI crawler allowlist; answer-first FAQ copy.
6. **Schemas** — Restored Person schema; enriched LocalBusiness `@graph` including verified GBP `AggregateRating` (5.0 / 6); WebSite; Service; Article + `dateModified` on market note.
7. **Calendly** — Confirmed booking URLs wired sitewide; Calendly CTA placed beside phone in NAP + footer.

## Priority checklist status

| Priority | Action | Status |
|----------|--------|--------|
| A | Confirm GBP NAP matches `(702) 500-1955` + `3185 St Rose Pkwy, Suite 101` and submit updated sitemap in GSC | **NAP confirmed** against public GBP citations (phone + Suite 101 address match site/schema/`llms.txt`). **GSC sitemap submit still requires human** in Google Search Console → Sitemaps → `https://www.macdonaldhighlandshomes.com/sitemap.xml`. |
| A | Replace AI lifestyle images with licensed community/agent photography where available | **Done** — `siteConfig.images` + OG paths now use `photos/community/*`. Agent headshot kept for bio/schema only (180px — not suitable as hero). |
| B | Add SpeakableSpecification on FAQ answers after Rich Results validation | **Done in code** — `FaqSchema` + `.faq-question` / `.faq-answer` selectors. Re-validate in Google Rich Results Test after deploy. |
| B | Publish 1 monthly “MacDonald Highlands listing market” note with `Article` + `dateModified` | **Done** — `/insights/macdonald-highlands-listing-market` (published/modified `2026-11-11`). |
| C | Wire Calendly booking CTA beside phone if link is confirmed | **Done** — NAP + footer beside `(702) 500-1955`; live Calendly listing consultation URL. |
| C | Add AggregateRating only if GBP review count/rating is verified (never fabricate) | **Done** — `5.0` / `6` reviews from public GBP citations; values live in `siteConfig.reviews` for easy sync. Re-check live GBP if counts change. |

## Still human / ops

- Submit sitemap in Google Search Console after merge/deploy: `https://www.macdonaldhighlandshomes.com/sitemap.xml`.
- After deploy: in GSC → Pages → **Redirect error**, validate fix for `/listings` + `/favicon.ico` (were temporary 307 / case redirects; now 308 www + permanent).
- Update sister-site backlinks on **regencyvegas.com** from apex `https://macdonaldhighlandshomes.com` → `https://www.macdonaldhighlandshomes.com` (all 7 Regency + SMLS Advisors links currently hit apex).
- Spot-check GBP hours vs site `Daily 8:00 AM–8:00 PM` (citation sites sometimes show 6AM–9PM or weekday-only — reconcile in GBP dashboard if needed).
- Upgrade agent photography when a high-resolution licensed portrait is available.
- Re-run Rich Results Test for FAQ Speakable + AggregateRating after production deploy.
- Re-run mobile PageSpeed after production deploy of image/script deferrals.

## GSC exports (2026-11-11)

### Coverage — Redirect error (2 URLs)
- `https://www.macdonaldhighlandshomes.com/favicon.ico` (last crawl 2026-05-16)
- `https://www.macdonaldhighlandshomes.com/listings` (last crawl 2026-05-14)
- Likely causes: apex→www **307 temporary**, `/Listings`→`/listings` **307**, stale crawl. Code now forces **308** www host + permanent path redirects; `public/favicon.ico` mirrored.

### Links (Latest + More sample)
- Almost entirely **regencyvegas.com** internal network links + one SMLS Advisors blog post.
- Targets are apex homepage only — strengthen www destination after backlink update.

### Performance (Oct 28–Nov 3, 2026 vs prior week)
- Homepage only in Pages report: impressions **317** (was 18); **0 clicks**; avg position ~4.5.
- Top queries cluster on “MacDonald Highlands realtor / agent / listing agent / sellers / buyers / new construction” — many positions 1–5 with 0 CTR.
- Code response: CTR-first title/description; homepage FAQs for recommend-a-realtor, sellers, buyers, listing agent, new construction; listings meta for “homes for sale”.

## GSC query response (low-volume searches)

| Query | Intent | Site response |
|-------|--------|---------------|
| `duffy` | Brand | Homepage/About/Person schema emphasize Dr. Jan Duffy / Duffy alternate names |
| `macdonald highlands realtor` | Commercial | Title/H1/keywords/FAQ target “MacDonald Highlands realtor” |
| `realtor for sellers/buyers macdonald highlands` | Commercial | Homepage FAQs + selling/buying service pages |
| `listing agent macdonald highlands` | Commercial | Title + FAQ “listing agent” |
| `new construction realtor macdonald highlands` | Commercial | FAQ + GBP new-construction service → buying page |
| `highlandhomes in henderson nevada for rent` | Rental | FAQ + GBP services: MH leasing/property management (not LV apartment portal) |
| `rental homes in las vegas` | Rental | Same — MacDonald Highlands HOA-aligned leasing only |
| `waterfront realtor macdonald highlands` | Noise | Do not chase — MH is foothills/golf, not waterfront |

## GBP alignment

- Business name, description, phone/SMS, Suite 101 address, service area 89012, hours (Wed until 8:30 PM), founding date 2013-09-19, social profiles, attributes, and full GBP service catalog live in `siteConfig` + LocalBusiness schema + `/services` + `/llms.txt`.
- Human still needed: submit sitemap in GSC after deploy; re-validate Rich Results.

## Fair Housing reminder

Avoid “safe / family-friendly / good schools” language. Prefer sqft, amenities, commute times, and named schools without quality judgments.
