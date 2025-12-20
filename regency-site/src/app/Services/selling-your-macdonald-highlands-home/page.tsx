import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Selling Your MacDonald Highlands Luxury Home | Dr. Jan Duffy",
  description: "Expert pre-listing strategy, professional staging, architectural photography, and global luxury buyer network for selling your $1M-$15M+ MacDonald Highlands estate home.",
  keywords: "selling MacDonald Highlands home, luxury home staging, architectural photography, off-market real estate, 1031 exchange",
};

const serviceName = "Selling Your MacDonald Highlands Luxury Home";
const serviceDescription = "Comprehensive luxury home selling services including pre-listing strategy, professional staging consultation, architectural photography, private showing coordination, and access to global luxury buyer networks.";

export default function SellingPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Selling Your MacDonald Highlands Luxury Home
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Expert guidance for selling your $1M-$15M+ estate property with maximum return and minimal disruption
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Pre-Listing Strategy for Luxury Properties</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Selling a luxury home in MacDonald Highlands requires a sophisticated approach that goes far beyond traditional real estate marketing. With properties ranging from $1M to $15M+, every detail matters—from initial pricing strategy to final closing coordination.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Professional Staging Consultation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              First impressions are everything in luxury real estate. We work with premier staging professionals who understand how to showcase your home&apos;s architectural features, maximize natural light, and create an aspirational lifestyle presentation that resonates with high-net-worth buyers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Architectural & Twilight Photography + Drone Aerials</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Your MacDonald Highlands home deserves photography that captures its true essence. We coordinate with specialized luxury real estate photographers who excel at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Architectural photography highlighting custom finishes and design</li>
              <li>Twilight photography showcasing your home&apos;s dramatic evening presence</li>
              <li>Drone aerials capturing panoramic Strip views and lot positioning</li>
              <li>Professional video tours for virtual buyer engagement</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Private Showing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Guard-gate logistics require careful coordination. We manage all aspects of private showings, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Gate access pre-authorization for qualified buyers</li>
              <li>Discreet scheduling that respects your privacy</li>
              <li>Security protocols for high-profile properties</li>
              <li>Follow-up with serious buyers only</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Discreet & Off-Market Marketing Options</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For high-profile sellers who value privacy, we offer exclusive off-market and pocket listing services. Your property can be marketed to our curated network of qualified buyers without public MLS exposure, ensuring complete discretion throughout the process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Global Luxury Buyer Network Access</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Through Berkshire Hathaway HomeServices&apos; international network and our own connections, we connect your property with luxury buyers from around the world—executives relocating to Las Vegas, international investors, and high-net-worth individuals seeking a second home in Henderson.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Negotiation Expertise for High-Net-Worth Transactions</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury real estate negotiations require finesse, market intelligence, and an understanding of complex transaction structures. We&apos;ve successfully negotiated multi-million dollar deals, handling everything from inspection contingencies to custom closing terms.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">1031 Exchange Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              If you&apos;re selling to reinvest in another property, we coordinate with qualified intermediaries and tax advisors to ensure your 1031 exchange meets all IRS requirements and timelines, maximizing your tax advantages. This coordination includes identifying replacement properties, managing identification deadlines, and ensuring all exchange requirements are met to defer capital gains taxes.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The Selling Process: From Listing to Closing</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Selling a luxury home in MacDonald Highlands involves a sophisticated process designed to maximize value while minimizing disruption. Understanding this process helps sellers know what to expect and ensures smooth transactions from initial consultation through closing.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Initial Consultation & Market Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Every selling relationship begins with a comprehensive consultation to understand your goals, timeline, and property characteristics. We conduct a thorough market analysis using comparable sales data, current market conditions, and property-specific factors. This analysis forms the foundation for pricing strategy, marketing approach, and timeline planning. The consultation is completely confidential and comes with no obligation.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Property Preparation & Staging Strategy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury properties require professional preparation to maximize market appeal. We coordinate with premier staging professionals who understand how to showcase your home&apos;s architectural features, maximize natural light, and create aspirational lifestyle presentations. Staging recommendations are tailored to your property&apos;s unique characteristics and target buyer profile, ensuring maximum impact.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Professional Photography & Marketing Materials</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Your MacDonald Highlands home deserves photography that captures its true essence. We coordinate with specialized luxury real estate photographers who excel at architectural photography, twilight photography, and drone aerials. These professional images are used in marketing materials distributed to our global luxury buyer network, ensuring your property receives maximum exposure to qualified buyers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Marketing Launch & Buyer Outreach</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Marketing launch strategies are tailored to your property and goals. For off-market listings, marketing is distributed exclusively to our curated network. For public listings, we coordinate MLS entry, digital marketing campaigns, and luxury real estate portal placements. Our global network ensures your property reaches luxury buyers from around the world, significantly expanding the buyer pool beyond local markets.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Showing Coordination & Buyer Qualification</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Private showings are coordinated with careful attention to your schedule and privacy. We pre-qualify all buyers before scheduling showings, ensuring that only serious, financially capable buyers view your property. This qualification process saves time, maintains security, and ensures that showings result in meaningful buyer interest rather than casual lookers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Offer Evaluation & Negotiation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              When offers are received, we provide comprehensive evaluation and negotiation support. This includes analyzing offer terms, comparing multiple offers, and negotiating to maximize value while meeting your objectives. Our negotiation expertise for high-net-worth transactions ensures deals are structured to protect your interests while facilitating successful closings.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Transaction Management & Closing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              As we move toward closing, our transaction management ensures all details are handled professionally. We coordinate inspections, appraisals, title work, and lender requirements, working closely with all parties to keep the transaction on track. Our goal is a smooth closing that meets your timeline expectations while ensuring all legal and financial requirements are met.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Maximizing Value: Strategies for Luxury Home Sales</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Selling a luxury home requires strategies that go beyond standard real estate marketing. Understanding these value-maximization strategies helps sellers achieve optimal outcomes in the MacDonald Highlands market.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Strategic Pricing for Maximum Return</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Pricing luxury properties requires sophisticated analysis that accounts for view premiums, lot positioning, architectural features, and current market conditions. Our pricing strategies balance maximizing value with ensuring competitive positioning that attracts qualified buyers. Strategic pricing considers not just comparable sales, but buyer psychology, market timing, and competitive positioning.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Timing Your Sale for Optimal Market Conditions</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Market timing significantly impacts sale outcomes. We provide insights on optimal listing timing based on seasonal trends, inventory levels, buyer demand patterns, and economic factors. Understanding when to list helps maximize exposure to qualified buyers while potentially achieving premium pricing. Strategic timing can be the difference between a quick sale at optimal price and extended time on market.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Premium Feature Highlighting</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury properties have unique features that command premium prices, but these features must be effectively highlighted in marketing. We ensure that view quality, architectural distinction, custom finishes, and specialty amenities are prominently featured in marketing materials and property presentations. This premium feature highlighting helps buyers understand the value proposition and justifies pricing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Request Your Confidential Home Valuation
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Get an expert market analysis for your MacDonald Highlands property. No obligation, no pressure—just honest, data-driven insights.
              </p>
              <ContactForm
                formTitle="Get Your Home Valuation"
                formDescription="Tell us about your property and we&apos;ll provide a comprehensive market analysis."
                ctaText="Request Valuation"
                source="selling-service"
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
