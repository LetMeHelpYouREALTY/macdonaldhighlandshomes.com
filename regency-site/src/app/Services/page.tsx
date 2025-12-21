import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";

export const metadata: Metadata = {
  title: "Luxury Real Estate Services in MacDonald Highlands | Dr. Jan Duffy",
  description: "Comprehensive luxury real estate services in MacDonald Highlands, Henderson. Expert guidance for buying, selling, home valuation, relocation, investment advisory, and off-market opportunities in $1M-$15M+ estate homes.",
  keywords: "MacDonald Highlands real estate services, luxury home services Henderson, real estate agent MacDonald Highlands, home selling services, home buying services, luxury home valuation",
};

export default function ServicesPage() {
  return (
    <>
      <RealEstateAgentSchema />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/photos/community/clubhouse-full.jpg"
            alt="MacDonald Highlands luxury community"
            className="w-full h-full object-cover opacity-30"
            style={{ position: 'absolute', inset: 0 }}
          />
        </div>
        <div className="relative z-10 container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Comprehensive Luxury Real Estate Services in MacDonald Highlands
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Expert guidance for every aspect of luxury real estate in Henderson&apos;s premier guard-gated community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Dr. Jan Duffy for Your MacDonald Highlands Real Estate Needs</h2>
            <p className="text-lg text-neutral-700 mb-6">
              With over 500 families served and $127M+ in sales, <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy</Link> brings unparalleled expertise to MacDonald Highlands real estate transactions. As a neighborhood specialist with deep knowledge of Henderson&apos;s ultra-luxury guard-gated golf community, we provide comprehensive services tailored to the unique needs of luxury home buyers and sellers. Whether you&apos;re selling a $15M estate with panoramic Strip views, buying your first <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands property</Link>, or exploring investment opportunities, our team delivers results through meticulous attention to detail, market intelligence, and white-glove service.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Deep Community Knowledge</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our expertise extends beyond general real estate knowledge—we specialize exclusively in <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands</Link>. This deep community knowledge means we understand view premiums, lot positioning factors, DragonRidge Country Club membership nuances, and neighborhood-specific market dynamics that impact property values. This specialized knowledge is invaluable whether you&apos;re buying or selling, ensuring you make informed decisions based on actual community expertise rather than generic real estate advice.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Proven Track Record</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our success metrics speak for themselves: 500+ families served, $127M+ in sales volume, and a reputation built on integrity, results, and exceptional service. We don&apos;t just list properties—we strategically position them in the market, connect them with qualified buyers, and negotiate deals that maximize value for our clients. This proven track record gives you confidence that your MacDonald Highlands real estate transaction is in expert hands.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Our Comprehensive Service Portfolio</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands real estate transactions require a full spectrum of specialized services. From initial consultation through closing and beyond, we provide comprehensive support tailored to luxury market standards. Our service portfolio addresses every aspect of buying, selling, and investing in Henderson&apos;s premier guard-gated community.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Selling Your MacDonald Highlands Luxury Home</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/view-lifestyle-00024-full.jpg"
                  alt="Luxury estate home with panoramic views"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/clubhouse-full.jpg"
                  alt="MacDonald Highlands luxury community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              Selling a luxury home in MacDonald Highlands demands a sophisticated approach that goes far beyond traditional real estate marketing. Our selling services include pre-listing strategy development, professional staging consultation, architectural and twilight photography with drone aerials, private showing coordination, and access to global luxury buyer networks. We also offer discreet off-market marketing options for high-profile sellers who value privacy, ensuring your property reaches qualified buyers without public MLS exposure.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Our negotiation expertise for high-net-worth transactions ensures you receive maximum value while navigating complex deal structures. We coordinate 1031 exchanges for sellers looking to reinvest, working with qualified intermediaries and tax advisors to meet all IRS requirements. Every aspect of your sale is handled with the professionalism and attention to detail that luxury properties deserve.
            </p>
            <Link 
              href="/services/selling-your-macdonald-highlands-home"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about selling services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Buying in MacDonald Highlands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/golf-lifestyle-full.jpg"
                  alt="DragonRidge Country Club golf course"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/guard-gate-full.jpg"
                  alt="MacDonald Highlands guard-gated entrance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              Navigating MacDonald Highlands as a buyer requires insider knowledge of the community&apos;s unique characteristics. We provide private community access and tour scheduling, handling all guard-gate authorization to ensure smooth property viewings. Our DragonRidge Country Club membership guidance helps you understand transfer processes, fees, and the value of golf course frontage properties.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Whether you&apos;re considering new construction or resale properties, we offer comprehensive consultation on timeline considerations, cost comparisons, and lot selection for custom builds. Our mountain and Strip view premium analysis helps you understand how view quality impacts property values, while our inspection coordination ensures luxury features are properly evaluated by specialized professionals.
            </p>
            <Link 
              href="/services/buying-in-macdonald-highlands"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about buying services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Luxury Home Valuation Services</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Accurate property valuation in MacDonald Highlands requires deep market knowledge and sophisticated analysis. Our luxury home valuation services provide comprehensive market analysis using comparable sales data, view premium calculations, lot positioning factors, and current market trends. We evaluate architectural features, custom finishes, and unique property characteristics that impact value in the luxury market.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Whether you&apos;re considering selling, refinancing, or estate planning, our detailed valuation reports give you the data-driven insights needed to make informed decisions. We analyze recent sales in your specific MacDonald Highlands neighborhood, account for view premiums and lot size variations, and provide realistic market positioning recommendations based on current buyer demand.
            </p>
            <Link 
              href="/services/luxury-home-valuation"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about valuation services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Relocation Concierge Services</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Corporate relocations and executive moves require white-glove service that goes beyond property search. Our relocation concierge services handle every detail of your move to MacDonald Highlands, from initial virtual tours to area orientation, school recommendations, temporary housing coordination, and timeline management. We understand that relocating to a new city while managing a career requires seamless support.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Our relocation services are designed to minimize stress and maximize efficiency. We coordinate with employers, handle logistics, provide comprehensive area orientation, and ensure your transition to MacDonald Highlands living is smooth and successful. Whether you&apos;re relocating from across the country or internationally, we provide the support you need to make Henderson your new home.
            </p>
            <Link 
              href="/services/relocation-concierge"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about relocation services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Investment Advisory Services</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands properties represent significant investment opportunities, but understanding rental income potential, appreciation trends, and tax advantages requires specialized knowledge. Our investment advisory services provide comprehensive analysis of investment potential, including rental income projections, market appreciation trends, tax advantages, and 1031 exchange coordination for investors looking to optimize their real estate portfolios.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              We work with investors to identify properties that align with their investment goals, whether that&apos;s cash flow, appreciation, tax benefits, or portfolio diversification. Our market analysis includes rental market data, occupancy trends, and investment property performance metrics specific to MacDonald Highlands and the Henderson luxury market.
            </p>
            <Link 
              href="/services/investment-advisory"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about investment services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Off-Market Opportunities</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Access to off-market and pocket listings gives buyers exclusive opportunities before properties hit the MLS. Our off-market opportunity services connect qualified buyers with sellers who prefer privacy-focused marketing approaches. This exclusive access means you can view and purchase properties that never appear in public listings, giving you a competitive advantage in the MacDonald Highlands market.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              For sellers, off-market marketing provides discretion and privacy while still reaching qualified buyers through our curated network. This approach is ideal for high-profile individuals, executives, and families who value privacy during the selling process. We maintain a waiting list of qualified buyers interested in off-market opportunities, ensuring your property reaches the right audience.
            </p>
            <Link 
              href="/services/off-market-opportunities"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about off-market opportunities →
            </Link>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Service Comparison Guide</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding which services align with your goals helps you make informed decisions about your MacDonald Highlands real estate journey. This comparison guide highlights key differences and helps you identify the services that best match your needs.
            </p>

            <div className="my-8 space-y-6">
              {[
                {
                  title: "Selling Your Home",
                  description: "Complete selling services from pre-listing strategy through closing",
                  href: "/services/selling-your-macdonald-highlands-home",
                  features: ["Pre-listing strategy", "Professional staging", "Architectural photography", "Global buyer network"],
                },
                {
                  title: "Buying in MacDonald Highlands",
                  description: "Comprehensive buying support with community expertise",
                  href: "/services/buying-in-macdonald-highlands",
                  features: ["Private tours", "Guard-gate coordination", "DragonRidge guidance", "View premium analysis"],
                },
                {
                  title: "Luxury Home Valuation",
                  description: "Accurate market analysis for informed decision-making",
                  href: "/services/luxury-home-valuation",
                  features: ["Market analysis", "View premium calculations", "Comparable sales", "Investment insights"],
                },
                {
                  title: "Relocation Concierge",
                  description: "White-glove relocation support for seamless moves",
                  href: "/services/relocation-concierge",
                  features: ["Virtual tours", "Area orientation", "School recommendations", "Timeline management"],
                },
                {
                  title: "Investment Advisory",
                  description: "Investment analysis and portfolio optimization",
                  href: "/services/investment-advisory",
                  features: ["Rental income analysis", "Appreciation trends", "Tax advantages", "1031 coordination"],
                },
                {
                  title: "Off-Market Opportunities",
                  description: "Exclusive access to private listings",
                  href: "/services/off-market-opportunities",
                  features: ["Pocket listings", "Privacy-focused marketing", "Buyer waiting list", "Exclusive access"],
                },
              ].map((service) => (
                <div key={service.href} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                  <h4 className="text-xl font-serif font-bold mb-2">{service.title}</h4>
                  <p className="text-neutral-700 mb-4">{service.description}</p>
                  <ul className="list-disc pl-6 space-y-1 text-neutral-600 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why MacDonald Highlands Real Estate Requires Specialized Services</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands isn&apos;t a standard residential market—it&apos;s a luxury guard-gated community with unique characteristics that require specialized expertise. Understanding these unique factors helps explain why our comprehensive service approach is essential for successful transactions in this exclusive community.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Guard-Gated Access Complexity</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The guard-gated security system means property viewings require pre-authorization and coordination that standard real estate doesn&apos;t involve. We handle all guard-gate logistics, ensuring smooth access for qualified buyers while maintaining security protocols. This coordination is essential for successful transactions and requires relationships with security personnel and understanding of access procedures.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">View Premium Calculations</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Strip views command significant premiums, but calculating these premiums requires understanding view angles, clarity, future development impacts, and market trends. Our view premium analysis helps buyers and sellers understand how views impact property values, ensuring accurate pricing and informed decision-making.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club Membership</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Golf course frontage properties and membership access add significant value, but understanding transfer processes, fees, and membership benefits requires specialized knowledge. We provide comprehensive guidance on DragonRidge membership, helping buyers understand the value proposition and sellers effectively market membership access as a property feature.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Luxury Market Dynamics</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The luxury real estate market operates differently than standard residential markets. Inventory levels, buyer profiles, negotiation dynamics, and transaction timelines all differ significantly. Our specialized services are designed specifically for luxury market dynamics, ensuring you receive guidance tailored to high-net-worth real estate transactions.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Office Listings Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Current MacDonald Highlands Listings
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Browse available luxury homes for sale from our office at {siteConfig.contact.office.full}. Use the filters below to find your perfect property.
              </p>
            </div>
            
            <RealScoutWidgetWrapper />
            
            <div className="mt-8 text-center">
              <p className="text-neutral-600 mb-4">
                Looking for off-market opportunities?{" "}
                <Link href="/services/off-market-opportunities" className="text-primary-600 font-semibold hover:underline">
                  Join our private buyer list
                </Link>
                .
              </p>
              <Link 
                href="/listings" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                View All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Begin Your MacDonald Highlands Real Estate Journey?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Whether you&apos;re buying, selling, or exploring investment opportunities, we&apos;re here to provide expert guidance tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-secondary text-lg px-8 py-4"
              >
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-neutral-600 mb-4">
                Learn more about <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy&apos;s expertise</Link> or explore <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands community details</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
