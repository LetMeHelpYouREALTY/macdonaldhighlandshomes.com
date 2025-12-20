import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";

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
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
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
              With over 500 families served and $127M+ in sales, Dr. Jan Duffy brings unparalleled expertise to MacDonald Highlands real estate transactions. As a neighborhood specialist with deep knowledge of Henderson&apos;s ultra-luxury guard-gated golf community, we provide comprehensive services tailored to the unique needs of luxury home buyers and sellers. Whether you&apos;re selling a $15M estate with panoramic Strip views, buying your first MacDonald Highlands property, or exploring investment opportunities, our team delivers results through meticulous attention to detail, market intelligence, and white-glove service.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Deep Community Knowledge</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our intimate understanding of MacDonald Highlands extends beyond property listings. We know the nuances of each neighborhood within the community, from DragonRidge Country Club properties to custom estate lots. This local expertise allows us to provide insights that generic real estate agents simply cannot match—whether it&apos;s understanding view premiums, lot positioning advantages, or the subtle differences between various MacDonald Highlands subdivisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Luxury Market Specialization</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The luxury real estate market operates differently than standard residential sales. Properties ranging from $1M to $15M+ require specialized marketing strategies, sophisticated buyer networks, and an understanding of high-net-worth client expectations. We excel in this arena, having successfully navigated complex transactions involving architectural photography, private showings, off-market listings, and international buyer coordination.
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
              Relocating to MacDonald Highlands involves more than just finding a home—it requires comprehensive support to ensure a smooth transition. Our relocation concierge services assist with everything from initial community research and school district information to utility setup, contractor referrals, and local service provider connections. We understand that moving to a new luxury community can be overwhelming, and our goal is to make your transition seamless.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              For corporate relocations, we coordinate with HR departments and relocation companies to meet specific requirements and timelines. Our network of trusted local professionals—from interior designers to landscape architects—ensures you have access to the best resources for making your MacDonald Highlands home truly yours. We also provide orientation on community amenities, HOA protocols, and gate access procedures to help you feel at home from day one.
            </p>
            <Link 
              href="/services/relocation-concierge"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about relocation services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Investment Advisory Services</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands presents unique investment opportunities for savvy real estate investors. Our investment advisory services help you evaluate properties from a financial perspective, analyzing rental potential, appreciation trends, and long-term value. We provide insights on market cycles, timing considerations, and investment strategies tailored to luxury real estate in Henderson.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Whether you&apos;re considering a second home that can generate rental income, exploring 1031 exchange opportunities, or building a luxury real estate portfolio, we offer data-driven analysis to support your investment decisions. Our understanding of MacDonald Highlands market dynamics, combined with broader Las Vegas area trends, helps you identify properties with strong investment potential.
            </p>
            <Link 
              href="/services/investment-advisory"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about investment services →
            </Link>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Off-Market & Pocket Listings</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For both buyers and sellers, off-market opportunities offer unique advantages. Sellers benefit from discreet marketing that maintains privacy while reaching qualified buyers through our exclusive network. Buyers gain access to properties that may never hit the public market, often with less competition and more flexible terms.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Our off-market and pocket listing services connect high-net-worth buyers with exclusive properties that match their specific criteria. We maintain relationships with other luxury real estate professionals, allowing us to present off-market opportunities that aren&apos;t available through traditional channels. This exclusive access can be the difference between finding your dream MacDonald Highlands property and settling for what&apos;s publicly available.
            </p>
            <Link 
              href="/services/off-market-opportunities"
              className="inline-block text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              Learn more about off-market opportunities →
            </Link>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The MacDonald Highlands Advantage: Why This Community Stands Apart</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands isn&apos;t just another luxury community—it&apos;s Henderson&apos;s premier guard-gated golf community, offering an unparalleled lifestyle for discerning homeowners. Understanding what makes this community special helps you appreciate the value proposition of properties here, whether you&apos;re buying or selling.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Guard-Gated Security & Privacy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Two beautifully landscaped, 24-hour guard-gated entries provide security and privacy that few communities can match. This controlled access ensures that only authorized visitors enter the community, creating a sense of safety and exclusivity that high-net-worth buyers value. The guard-gate system also means your property viewings are coordinated and controlled, maintaining your privacy during the selling process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Championship Golf Course</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The Jay Morrish-designed DragonRidge Championship Course is a centerpiece of MacDonald Highlands living. Golf course frontage properties command premium prices, and membership access adds significant value to homes. Whether you&apos;re an avid golfer or simply appreciate the manicured views, the golf course is a defining feature of the community that impacts property values and lifestyle quality.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Panoramic Strip & Mountain Views</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Las Vegas Strip views and mountain vistas represent the pinnacle of MacDonald Highlands real estate. These view premiums can add hundreds of thousands of dollars to property values, and they&apos;re a key factor in our valuation and marketing strategies. Understanding view angles, future development impacts, and historical appreciation patterns helps us position view properties effectively in the market.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Generous Lot Sizes & Estate-Style Living</h3>
            <p className="text-lg text-neutral-700 mb-6">
              With lot sizes ranging from one-third acre to over one acre, MacDonald Highlands offers true estate-style living. These generous lots allow for custom pools, outdoor entertainment areas, and extensive landscaping that create a resort-like atmosphere. For buyers, lot size is a crucial consideration that impacts both lifestyle and property value.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Proximity to Las Vegas Strip</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Located just 15-20 minutes from the Las Vegas Strip, MacDonald Highlands offers the perfect balance of privacy and accessibility. This proximity means you can enjoy world-class dining, entertainment, and amenities while maintaining the tranquility of guard-gated community living. For many buyers, this location advantage is a key selling point.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Our Service Process: How We Deliver Exceptional Results</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Every MacDonald Highlands real estate transaction follows a structured process designed to maximize results while minimizing stress. Our systematic approach ensures nothing falls through the cracks, from initial consultation through closing and beyond.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Initial Consultation & Needs Assessment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We begin every client relationship with a comprehensive consultation to understand your goals, timeline, budget, and specific requirements. For sellers, this includes property evaluation, market positioning strategy, and timeline planning. For buyers, we discuss lifestyle preferences, must-have features, and investment objectives. This initial assessment forms the foundation for a customized service plan.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Strategic Planning & Market Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Based on your goals, we develop a strategic plan backed by comprehensive market analysis. This includes comparable sales research, current market trends, pricing recommendations, and timeline projections. Our data-driven approach ensures you make informed decisions based on real market intelligence, not guesswork.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Execution & Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Once the strategy is in place, we execute with precision and attention to detail. This phase involves property preparation, professional photography, marketing launch, buyer qualification, showing coordination, and negotiation management. Throughout this process, we maintain constant communication, keeping you informed of progress and market feedback.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Transaction Management & Closing</h3>
            <p className="text-lg text-neutral-700 mb-6">
              As we move toward closing, our transaction management ensures all details are handled professionally. We coordinate inspections, appraisals, title work, and lender requirements, working closely with all parties to keep the transaction on track. Our goal is a smooth closing that meets your timeline expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Post-Closing Support</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our relationship doesn&apos;t end at closing. We provide post-closing support including contractor referrals, service provider connections, and community orientation. For sellers, we assist with move-out coordination and final property transfer. For buyers, we help you settle into your new MacDonald Highlands home with confidence.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Ready to Experience Exceptional Real Estate Service?</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Whether you&apos;re buying, selling, or exploring investment opportunities in MacDonald Highlands, we&apos;re here to provide the expert guidance and white-glove service your luxury real estate transaction deserves. With deep community knowledge, proven results, and a commitment to excellence, we deliver outcomes that exceed expectations.
            </p>
            <p className="text-lg text-neutral-700 mb-8">
              Contact us today to discuss your MacDonald Highlands real estate goals. We offer confidential consultations with no obligation, providing honest market insights and strategic recommendations tailored to your unique situation. Let&apos;s explore how our comprehensive services can help you achieve your real estate objectives in Henderson&apos;s premier guard-gated community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Explore Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Selling Your MacDonald Highlands Home",
                description: "Expert pre-listing strategy, professional staging, architectural photography, and global luxury buyer network access for selling your estate home.",
                href: "/services/selling-your-macdonald-highlands-home",
                icon: "🏠"
              },
              {
                title: "Buying in MacDonald Highlands",
                description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection for your dream home.",
                href: "/services/buying-in-macdonald-highlands",
                icon: "🔑"
              },
              {
                title: "Luxury Home Valuation",
                description: "Comprehensive market analysis using comparable sales, view premiums, and current trends for accurate property valuation.",
                href: "/services/luxury-home-valuation",
                icon: "📊"
              },
              {
                title: "Relocation Concierge",
                description: "Complete relocation support including community research, utility setup, contractor referrals, and local service connections.",
                href: "/services/relocation-concierge",
                icon: "🚚"
              },
              {
                title: "Investment Advisory",
                description: "Data-driven analysis of rental potential, appreciation trends, and investment strategies for luxury real estate.",
                href: "/services/investment-advisory",
                icon: "💼"
              },
              {
                title: "Off-Market Opportunities",
                description: "Exclusive access to pocket listings and off-market properties not available through traditional channels.",
                href: "/services/off-market-opportunities",
                icon: "🔒"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <span className="text-primary-600 font-semibold hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Let&apos;s Discuss Your MacDonald Highlands Real Estate Goals
            </h2>
            <p className="text-xl text-neutral-200 mb-8">
              Schedule a confidential consultation to explore how our comprehensive services can help you achieve your objectives in Henderson&apos;s premier guard-gated community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Contact Us Today
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
