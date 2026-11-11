const body = `# MacDonald Highlands Homes | Dr. Jan Duffy, Listing Specialist

> Hyperlocal luxury real estate for MacDonald Highlands, Henderson, NV.
> Listing Specialist: Dr. Jan Duffy, REALTOR® (S.0197614.LLC), Berkshire Hathaway HomeServices Nevada Properties.
> Phone: (702) 500-1955 | Email: DrDuffy@MacDonaldHighlandsHomes.com
> Office: 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052 | Daily 8:00 AM–8:00 PM

## Primary entity
- Name: Dr. Jan Duffy
- Role: MacDonald Highlands Listing Specialist
- Focus: Selling, valuing, and representing buyers for $1M–$15M+ guard-gated estate homes
- Community: MacDonald Highlands (DragonRidge Championship Course, Strip & mountain views)

## Pages
- [Home](https://www.macdonaldhighlandshomes.com/): Listing Specialist overview, services, FAQs
- [Services](https://www.macdonaldhighlandshomes.com/services): Full luxury service portfolio
- [Selling Your MacDonald Highlands Home](https://www.macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home): Listing strategy, staging, photography, negotiation
- [Buying in MacDonald Highlands](https://www.macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands): Guard-gate tours, view premiums, DragonRidge guidance
- [Luxury Home Valuation](https://www.macdonaldhighlandshomes.com/services/luxury-home-valuation): Comps-based confidential valuations
- [Relocation Concierge](https://www.macdonaldhighlandshomes.com/services/relocation-concierge): Executive relocation support
- [Investment Advisory](https://www.macdonaldhighlandshomes.com/services/investment-advisory): Portfolio and 1031 guidance
- [Off-Market Opportunities](https://www.macdonaldhighlandshomes.com/services/off-market-opportunities): Pocket listings and private buyer list
- [MacDonald Highlands Community](https://www.macdonaldhighlandshomes.com/macdonald-highlands-community): Amenities, lifestyle, neighborhoods
- [About Dr. Jan Duffy](https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy): Credentials and hyperlocal expertise
- [Listings](https://www.macdonaldhighlandshomes.com/listings): Current inventory
- [Sold](https://www.macdonaldhighlandshomes.com/sold): Recent results
- [Testimonials](https://www.macdonaldhighlandshomes.com/testimonials): Client feedback
- [Contact](https://www.macdonaldhighlandshomes.com/contact): Schedule a listing consultation

## NAP (matches site + schema)
- Business: Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy
- Address: 3185 St Rose Pkwy, Suite 101, Henderson, NV 89052
- Phone: (702) 500-1955
- Hours: Daily 8:00 AM–8:00 PM

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
