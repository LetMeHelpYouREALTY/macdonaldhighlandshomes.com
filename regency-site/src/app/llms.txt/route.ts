const body = `# MacDonald Highlands Homes | Dr. Jan Duffy

> Luxury homes in the guard-gated MacDonald Highlands community in Henderson, NV, by Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties.

## Pages
- [Home](https://www.macdonaldhighlandshomes.com/)
- [Services](https://www.macdonaldhighlandshomes.com/services)
- [Buying in MacDonald Highlands](https://www.macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands)
- [Investment Advisory](https://www.macdonaldhighlandshomes.com/services/investment-advisory)
- [Luxury Home Valuation](https://www.macdonaldhighlandshomes.com/services/luxury-home-valuation)
- [Off-Market Opportunities](https://www.macdonaldhighlandshomes.com/services/off-market-opportunities)
- [Relocation Concierge](https://www.macdonaldhighlandshomes.com/services/relocation-concierge)
- [Selling Your MacDonald Highlands Home](https://www.macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home)
- [Contact](https://www.macdonaldhighlandshomes.com/contact)
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
