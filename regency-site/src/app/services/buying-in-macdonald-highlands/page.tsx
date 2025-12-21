import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";

export const metadata: Metadata = {
  title: "Buying in MacDonald Highlands: Your Insider Advantage | Dr. Jan Duffy",
  description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection for buying your dream MacDonald Highlands home.",
  keywords: "buying MacDonald Highlands home, DragonRidge Country Club, new construction Henderson, guard-gated community, luxury home buying",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands',
  },
  openGraph: {
    title: "Buying in MacDonald Highlands: Your Insider Advantage | Dr. Jan Duffy",
    description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection for buying your dream MacDonald Highlands home.",
    url: 'https://macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/golf-lifestyle-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Buying MacDonald Highlands luxury homes with DragonRidge Country Club access in Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Buying in MacDonald Highlands: Your Insider Advantage | Dr. Jan Duffy",
    description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection for buying your dream MacDonald Highlands home.",
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/golf-lifestyle-full.jpg',
        alt: 'Buying MacDonald Highlands luxury homes with DragonRidge Country Club access in Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const serviceName = "Buying in MacDonald Highlands";
const serviceDescription = "Comprehensive luxury home buying services including private community access, DragonRidge Country Club membership guidance, new construction vs. resale consultation, lot selection, and inspection coordination.";

export default function BuyingPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Buying in MacDonald Highlands: Your Insider Advantage
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Navigate Henderson&apos;s premier guard-gated community with expert guidance from a neighborhood specialist
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Private Community Access & Tour Scheduling</h2>
            <p className="text-lg text-neutral-700 mb-6">
              As a guard-gated community, MacDonald Highlands requires proper authorization for property viewings. We handle all gate access coordination, ensuring smooth entry for your private tours while respecting the community&apos;s security protocols. This coordination is essential for successful property viewings and demonstrates our understanding of the community&apos;s unique access requirements. Our relationships with security personnel and knowledge of gate procedures ensure seamless property access for qualified buyers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club Membership Guidance</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many MacDonald Highlands properties include or are eligible for DragonRidge Country Club membership. We guide you through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Membership transfer processes and fees</li>
              <li>Golf course frontage premium analysis</li>
              <li>Club amenities and access levels</li>
              <li>Membership requirements for new residents</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding DragonRidge membership is crucial for evaluating golf course properties and properties with membership eligibility. Our guidance helps you understand the value proposition and make informed decisions about membership-eligible properties.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">New Construction vs. Resale Consultation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands offers both stunning resale properties and opportunities for custom new construction. We help you evaluate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Timeline considerations (immediate move-in vs. 12-18 month build)</li>
              <li>Cost comparisons including customization options</li>
              <li>Lot availability and view premiums</li>
              <li>Resale value potential of new vs. established homes</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              This comprehensive consultation helps you understand the trade-offs between new construction and resale properties, ensuring you make decisions that align with your timeline, budget, and lifestyle goals.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Lot Selection for Custom Builds</h3>
            <p className="text-lg text-neutral-700 mb-6">
              If you&apos;re building your dream home, lot selection is critical. We provide insights on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Strip view angles and premium positioning</li>
              <li>Lot size and topography considerations</li>
              <li>Golf course frontage vs. mountain view trade-offs</li>
              <li>Privacy and orientation optimization</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Our lot selection guidance helps you identify properties that maximize both lifestyle enjoyment and investment value. Understanding lot characteristics ensures you choose a property that supports your vision while maintaining strong resale potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Builder Reputation Insights</h3>
            <p className="text-lg text-neutral-700 mb-6">
              With decades of experience in the Henderson luxury market, we have deep knowledge of local builders&apos; track records, quality standards, and customer service reputations. We&apos;ll help you choose a builder who aligns with your vision and timeline. Our builder relationships provide access to new construction opportunities and ensure you work with reputable professionals who understand MacDonald Highlands standards.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">HOA & Gate Community Orientation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding community rules, HOA fees, and gate protocols is essential. We provide comprehensive orientation on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>HOA fee structures and what they cover</li>
              <li>Architectural review processes for modifications</li>
              <li>Gate access procedures for residents and guests</li>
              <li>Community amenities and maintenance standards</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              This orientation ensures you understand all aspects of community living before making a purchase decision, preventing surprises and ensuring a smooth transition into MacDonald Highlands.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Mountain/Strip View Premium Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              View quality significantly impacts property values in MacDonald Highlands. We analyze view premiums based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Panoramic Strip view angles and clarity</li>
              <li>Mountain range vistas and sunset positioning</li>
              <li>Future development impact on views</li>
              <li>Historical appreciation of view properties</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding view premiums helps you evaluate whether properties are priced appropriately and make informed decisions about value. Our analysis ensures you understand the true value proposition of view properties.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Inspection Coordination for Luxury Features</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury homes require specialized inspection expertise. We coordinate inspections for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Custom pools, spas, and water features</li>
              <li>Smart home automation systems</li>
              <li>High-end HVAC and mechanical systems</li>
              <li>Elevators, wine cellars, and specialty features</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Our inspection coordination ensures all luxury features are properly evaluated by specialists who understand high-end systems and can identify potential issues before closing. This comprehensive evaluation protects your investment and ensures you understand the property&apos;s true condition.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The Buying Process: Your Path to MacDonald Highlands Homeownership</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Buying a luxury home in MacDonald Highlands involves a comprehensive process designed to ensure you find the perfect property while making informed investment decisions. Understanding this process helps buyers know what to expect and ensures smooth transactions from initial search through closing. Our systematic approach guides you through every step, ensuring nothing is overlooked.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Initial Consultation & Needs Assessment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We begin every buyer relationship with a comprehensive consultation to understand your goals, budget, timeline, and specific requirements. This includes discussing lifestyle preferences, must-have features, investment objectives, and long-term plans. Understanding your needs ensures we identify properties that truly match your criteria, saving time and ensuring you find the right MacDonald Highlands home. This consultation is completely confidential and comes with no obligation.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Property Search & Evaluation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our property search goes beyond MLS listings to include off-market opportunities, coming soon properties, and exclusive pocket listings. We evaluate each property against your criteria, analyzing view quality, lot positioning, architectural features, and investment potential. This comprehensive search ensures you see all available options, not just what&apos;s publicly listed. Our network and relationships provide access to exclusive opportunities that aren&apos;t available through traditional channels.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Private Community Tours & Property Viewings</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Guard-gated communities require proper authorization for property viewings. We handle all gate access coordination, ensuring smooth entry for your private tours while respecting the community&apos;s security protocols. Our tours are scheduled to respect your time and the seller&apos;s privacy, ensuring efficient property evaluation while maintaining community standards. This coordination ensures you can view properties without delays or access issues.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Analysis & Property Valuation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Before making offers, we provide comprehensive market analysis to ensure you understand property values, comparable sales, and market positioning. This analysis helps you make informed decisions about pricing and negotiation strategies. Understanding true market values ensures you don&apos;t overpay while also recognizing when properties represent good value opportunities. Our market intelligence provides the data you need to make confident purchase decisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Offer Strategy & Negotiation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Developing effective offer strategies requires understanding seller motivation, market conditions, and competitive factors. We help structure offers that maximize your chances of acceptance while protecting your interests. Our negotiation expertise ensures deals are structured favorably while maintaining positive relationships with sellers and their agents. This strategic approach helps you secure properties at optimal terms while building positive transaction experiences.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Due Diligence & Inspection Management</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Once under contract, we coordinate comprehensive due diligence including property inspections, title review, and HOA document analysis. For luxury properties, this includes specialized inspections for custom features, pools, smart home systems, and specialty amenities. Our coordination ensures all aspects of the property are properly evaluated before closing. This thorough due diligence protects your investment and ensures you understand all aspects of property ownership.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Closing Coordination & Settlement</h3>
            <p className="text-lg text-neutral-700 mb-6">
              As we approach closing, we coordinate all aspects of the transaction including lender requirements, title work, and final walkthroughs. Our goal is a smooth closing that meets your timeline expectations while ensuring all legal and financial requirements are met. We&apos;re with you every step of the way, ensuring nothing falls through the cracks. This comprehensive coordination ensures successful closings that meet your expectations.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Making Informed Decisions: Key Considerations for MacDonald Highlands Buyers</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Buying a luxury home in MacDonald Highlands involves numerous considerations beyond just property features. Understanding these key factors helps buyers make informed decisions that align with their lifestyle, investment goals, and long-term plans. Our expertise helps you navigate these considerations and make decisions that support both immediate and long-term objectives.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">View Quality & Premium Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              View quality significantly impacts property values in MacDonald Highlands. Properties with panoramic Strip views command substantial premiums, while mountain views and golf course frontage also add value. Understanding view premiums helps buyers evaluate whether properties are priced appropriately and make informed decisions about value. Our view premium analysis accounts for view angles, clarity, and future development impacts, ensuring you understand the true value proposition of view properties.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">HOA Fees & Community Costs</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding HOA fee structures and what they cover is essential for budgeting and evaluating property value. We provide comprehensive information on HOA fees, what amenities and services they include, and how fees compare across different MacDonald Highlands neighborhoods. This information helps buyers understand total ownership costs and evaluate properties on a true cost basis. Understanding these costs ensures you can budget appropriately and make informed financial decisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Membership Considerations</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many MacDonald Highlands properties include or are eligible for DragonRidge Country Club membership. Understanding membership transfer processes, fees, and benefits helps buyers evaluate the value of golf course properties and membership-eligible homes. We guide buyers through membership considerations, helping them understand the lifestyle and value implications of country club access. This guidance ensures you make informed decisions about membership-eligible properties.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Resale Value & Investment Potential</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Even if you&apos;re buying a primary residence, understanding resale value and investment potential is important. We provide insights on historical appreciation trends, factors that impact property values, and long-term investment potential. This analysis helps buyers make decisions that support both lifestyle goals and financial objectives. Understanding investment potential ensures your purchase decision supports long-term wealth-building goals.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Office Listings Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Current MacDonald Highlands Listings
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Browse available luxury homes for sale in Henderson&apos;s premier guard-gated community. Use the filters below to find your perfect property.
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
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Schedule Your Private Community Tour
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Experience MacDonald Highlands firsthand with a guided tour of available properties and the community.
              </p>
              <ContactForm
                formTitle="Request a Private Tour"
                formDescription="Tell us what you're looking for and we'll arrange a personalized community tour."
                ctaText="Schedule Tour"
                source="buying-service"
              />
              <div className="text-center mt-6">
                <p className="text-neutral-600 mb-4">Or call us directly:</p>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-2xl font-bold text-primary-600 hover:underline"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
