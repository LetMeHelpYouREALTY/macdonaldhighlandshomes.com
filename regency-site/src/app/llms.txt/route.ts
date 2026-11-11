import { siteConfig } from "@/config/siteConfig";

const body = `# ${siteConfig.name}

> Hyperlocal luxury real estate for MacDonald Highlands, Henderson, NV 89012.
> Listing Specialist: Dr. Jan Duffy, REALTOR® (${siteConfig.agent.license}), ${siteConfig.agent.brokerage}.
> Phone: ${siteConfig.contact.phoneFormatted} | SMS: ${siteConfig.contact.smsHref} | Email: ${siteConfig.contact.email}
> Office: ${siteConfig.contact.office.full} | ${siteConfig.contact.hours}
> GBP opening date: ${siteConfig.foundingDate}
> Categories: ${siteConfig.categories.primary} (primary); ${siteConfig.categories.additional.join("; ")}

## Primary entity
- Name: Dr. Jan Duffy (also searched as Duffy, Jan Duffy, Janet Duffy)
- Business: ${siteConfig.name}
- Role: MacDonald Highlands realtor & Listing Specialist
- Focus: Buy/sell/value/relocate/invest in MacDonald Highlands; HOA-aligned leasing & property-management support for MH owners
- Not a citywide Las Vegas apartment-rental portal
- Community: MacDonald Highlands (DragonRidge Championship Course, Strip & mountain views)

## GBP description
${siteConfig.description}

## Pages
- [Home](https://www.macdonaldhighlandshomes.com/): Listing Specialist overview, services, FAQs
- [Services](https://www.macdonaldhighlandshomes.com/services): Full GBP-aligned service portfolio
- [Selling Your MacDonald Highlands Home](https://www.macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home): Listing strategy, staging, photography, negotiation
- [Buying in MacDonald Highlands](https://www.macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands): Guard-gate tours, view premiums, DragonRidge guidance
- [Luxury Home Valuation](https://www.macdonaldhighlandshomes.com/services/luxury-home-valuation): Comps-based confidential valuations
- [Relocation Concierge](https://www.macdonaldhighlandshomes.com/services/relocation-concierge): Executive relocation support
- [Investment Advisory](https://www.macdonaldhighlandshomes.com/services/investment-advisory): Portfolio, leasing comps, and 1031 guidance
- [Off-Market Opportunities](https://www.macdonaldhighlandshomes.com/services/off-market-opportunities): Pocket listings and private buyer list
- [MacDonald Highlands Community](https://www.macdonaldhighlandshomes.com/macdonald-highlands-community): Amenities, lifestyle, neighborhoods
- [About Dr. Jan Duffy](https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy): Credentials and hyperlocal expertise
- [Listings](https://www.macdonaldhighlandshomes.com/listings): Current inventory
- [Sold](https://www.macdonaldhighlandshomes.com/sold): Recent results
- [Testimonials](https://www.macdonaldhighlandshomes.com/testimonials): Client feedback
- [Contact](https://www.macdonaldhighlandshomes.com/contact): Schedule a listing consultation
- [Listing Market Note](https://www.macdonaldhighlandshomes.com/insights/macdonald-highlands-listing-market): Monthly MacDonald Highlands listing market Article

## NAP (matches site + schema + GBP)
- Business: ${siteConfig.name}
- Address: ${siteConfig.contact.office.full}
- Service area: ${siteConfig.contact.address.full}
- Phone: ${siteConfig.contact.phoneFormatted}
- Hours: ${siteConfig.contact.hours}
- Reviews: ${siteConfig.reviews.ratingValue} / ${siteConfig.reviews.bestRating} from ${siteConfig.reviews.reviewCount} Google reviews
- Social: ${Object.values(siteConfig.social).join(" | ")}

## GBP services
${siteConfig.gbpServices.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Optional
- [Sitemap](https://www.macdonaldhighlandshomes.com/sitemap.xml)
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
