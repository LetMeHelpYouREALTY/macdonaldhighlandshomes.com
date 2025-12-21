import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "MacDonald Highlands Home Valuation: Beyond the Algorithm | Dr. Jan Duffy",
  description: "Get a true market value assessment for your MacDonald Highlands home. Expert comp analysis from actual closed sales, not algorithm estimates. Confidential and no obligation.",
  keywords: "MacDonald Highlands home values, luxury home valuation, Henderson property appraisal, home value estimate, real estate comp analysis",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/services/luxury-home-valuation',
  },
  openGraph: {
    title: "MacDonald Highlands Home Valuation: Beyond the Algorithm | Dr. Jan Duffy",
    description: "Get a true market value assessment for your MacDonald Highlands home. Expert comp analysis from actual closed sales, not algorithm estimates.",
    url: 'https://macdonaldhighlandshomes.com/services/luxury-home-valuation',
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        width: 1200,
        height: 630,
        alt: 'MacDonald Highlands home valuation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MacDonald Highlands Home Valuation: Beyond the Algorithm | Dr. Jan Duffy",
    description: "Get a true market value assessment for your MacDonald Highlands home. Expert comp analysis from actual closed sales.",
    images: ['https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg'],
  },
};

const serviceName = "Luxury Home Valuation";
const serviceDescription = "Expert home valuation services for MacDonald Highlands properties, including comprehensive comp analysis from actual closed sales, premium adjustments for views and features, and market timing intelligence.";

export default function ValuationPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/luxury-home-valuation"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Home Valuation: Beyond the Algorithm
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Get a true market value assessment based on actual closed sales, not automated estimates
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Why Zillow & Redfin Fail for Luxury Properties</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Automated valuation models (AVMs) like Zillow&apos;s Zestimate and Redfin Estimate rely on public data and statistical algorithms that simply cannot account for the unique characteristics of luxury real estate. They miss critical factors that significantly impact MacDonald Highlands property values:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Custom architectural features and premium finishes</li>
              <li>View quality and positioning (Strip vs. mountain views)</li>
              <li>Lot size, topography, and privacy</li>
              <li>Golf course frontage and proximity</li>
              <li>Recent renovations and condition</li>
              <li>Off-market sales not reflected in public records</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              These automated systems cannot evaluate the sophisticated factors that determine luxury property values, making professional valuations essential for accurate assessments. Our comprehensive approach goes far beyond algorithmic estimates to provide true market value based on actual market conditions and property-specific factors.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Comp Analysis from Actual Closed Sales</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our valuations are based on comprehensive comparative market analysis (CMA) using real closed sales data from MacDonald Highlands and comparable Henderson luxury communities. We analyze:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Recent sales within the same neighborhood (Vu, SkyVu, Vue Pointe)</li>
              <li>Properties with similar square footage, lot size, and features</li>
              <li>Time-on-market trends and sale-to-list ratios</li>
              <li>Price per square foot trends adjusted for quality</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              This comprehensive analysis ensures valuations reflect actual market conditions rather than theoretical estimates. Our access to both public and private market data provides a complete picture of true property values.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Premium Adjustments: Views, Lot Size, Custom Finishes</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury properties require sophisticated adjustment analysis. We evaluate premium factors including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">View Premiums</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>Panoramic Strip views: +$200K-$500K+</li>
                  <li>Mountain range vistas: +$100K-$300K</li>
                  <li>Golf course frontage: +$150K-$400K</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Feature Premiums</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>Custom pools & outdoor living: +$75K-$200K</li>
                  <li>Wine cellars & specialty rooms: +$50K-$150K</li>
                  <li>Smart home automation: +$25K-$75K</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              These premium adjustments are based on actual market data and buyer behavior, not theoretical values. Understanding these premiums helps you evaluate property values accurately and make informed decisions about pricing and investment potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Timing Intelligence</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding market cycles is crucial for maximizing value. We provide insights on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Current market conditions (buyer&apos;s vs. seller&apos;s market)</li>
              <li>Seasonal trends in luxury real estate</li>
              <li>Inventory levels and competition</li>
              <li>Interest rate impact on luxury buyers</li>
              <li>Optimal listing timing for maximum exposure</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              This market intelligence helps you understand not just current value, but optimal timing for selling or refinancing. Understanding market cycles ensures you make decisions that maximize value based on current conditions.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The Valuation Process: How We Determine True Market Value</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Our comprehensive valuation process goes far beyond automated estimates, combining data analysis, market intelligence, and local expertise to provide accurate assessments of your MacDonald Highlands property&apos;s true market value. This multi-step approach ensures you receive insights based on real market conditions, not algorithmic assumptions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Step 1: Property Analysis & Feature Documentation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We begin with a thorough analysis of your property&apos;s physical characteristics, including square footage, lot size, architectural style, age, condition, and unique features. This documentation includes custom finishes, premium upgrades, outdoor living spaces, specialty rooms, and any distinctive elements that impact value. We also evaluate the property&apos;s condition, noting any needed repairs or updates that could affect marketability and pricing. This comprehensive analysis forms the foundation for accurate valuation.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Step 2: Comparable Sales Research & Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our research identifies recent sales of comparable properties within MacDonald Highlands and similar Henderson luxury communities. We analyze sales from the past 6-12 months, focusing on properties with similar characteristics. This analysis includes not just public MLS sales, but also off-market transactions and pocket listings that may not appear in standard databases. Understanding both public and private market activity provides a more complete picture of true market values, ensuring valuations reflect the complete market rather than just publicly available data.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Step 3: Premium Factor Evaluation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury properties require sophisticated premium analysis. We evaluate view quality, lot positioning, architectural features, and custom amenities that add value beyond base square footage. This includes analyzing view angles and clarity, lot topography and privacy, golf course proximity, architectural distinction, and premium finishes. Each premium factor is quantified based on recent market data, ensuring adjustments reflect actual buyer behavior, not theoretical values. This analysis ensures valuations account for all value-enhancing factors.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Step 4: Market Condition Assessment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Current market conditions significantly impact property values. We assess inventory levels, buyer demand patterns, days on market trends, and sale-to-list price ratios to understand whether the market favors buyers or sellers. This market intelligence helps determine optimal pricing strategies and timing recommendations. Understanding market cycles ensures valuations reflect current conditions, not historical data that may no longer be relevant. This real-time market analysis provides the context needed for accurate valuations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Step 5: Competitive Positioning Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We evaluate how your property compares to currently available listings, identifying competitive advantages and potential challenges. This analysis helps position your property effectively in the market, whether you&apos;re selling or simply understanding your property&apos;s market position. Understanding competitive positioning ensures pricing strategies maximize value while remaining realistic about market conditions. This analysis provides insights that help you make informed decisions about property value and market positioning.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">When You Need a Professional Valuation</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Professional home valuations serve multiple purposes beyond just selling. Understanding when and why to get a valuation helps you make informed decisions about your MacDonald Highlands property. Our valuations provide the data and insights needed for various financial and strategic decisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Considering Selling Your Property</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Before listing your MacDonald Highlands home, an accurate valuation is essential for setting the right asking price. Pricing too high can result in extended time on market and eventual price reductions, while pricing too low leaves money on the table. Our comprehensive valuation provides the data you need to price strategically, maximizing value while ensuring competitive positioning in the market. Strategic pricing based on accurate valuations helps achieve optimal sale outcomes.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Refinancing or Home Equity Assessment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              If you&apos;re considering refinancing or accessing home equity, understanding your property&apos;s current market value is crucial. Lenders will conduct their own appraisals, but having a professional valuation beforehand helps you understand what to expect and ensures you&apos;re making informed financial decisions. Our valuations provide insights that complement lender appraisals, giving you a complete picture of your property&apos;s value. This understanding helps you evaluate refinancing opportunities and home equity options.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Estate Planning & Tax Purposes</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Estate planning often requires accurate property valuations for tax purposes, inheritance planning, and asset allocation. Our detailed valuation reports provide documentation that can support estate planning decisions and tax filings. Understanding your property&apos;s market value ensures estate plans reflect current market conditions and help minimize tax implications. This documentation provides the evidence needed for estate planning and tax compliance.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Investment Analysis & Portfolio Management</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For real estate investors, regular valuations help track portfolio performance, assess investment returns, and make decisions about holding or selling properties. Our valuations provide the data needed to evaluate investment performance, compare properties, and make strategic decisions about your real estate portfolio. Understanding current values ensures investment strategies reflect actual market conditions. This ongoing analysis supports portfolio optimization and strategic decision-making.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Divorce or Legal Proceedings</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Property valuations are often required for divorce proceedings, legal settlements, or partnership dissolutions. Our professional valuations provide objective, data-driven assessments that can support legal proceedings. The comprehensive documentation and market analysis provide credible evidence of property values that can withstand legal scrutiny. This professional documentation supports fair and accurate property division in legal contexts.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">What Makes Our Valuations Different</h2>
            <p className="text-lg text-neutral-700 mb-6">
              While many real estate professionals offer basic comparative market analyses, our luxury home valuations go deeper, providing insights and analysis specifically tailored to MacDonald Highlands properties and the unique characteristics of luxury real estate. Our approach combines data analysis, market intelligence, and local expertise to deliver valuations that reflect true market conditions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">MacDonald Highlands-Specific Expertise</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our deep knowledge of MacDonald Highlands means we understand the nuances that impact property values in this specific community. We know which neighborhoods command premiums, how view angles affect values, and which features matter most to luxury buyers. This local expertise ensures valuations reflect actual market conditions in MacDonald Highlands, not generic luxury market assumptions. This specialized knowledge provides accuracy that generic valuations cannot match.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Access to Off-Market Sales Data</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many luxury transactions occur off-market, and these sales don&apos;t appear in public databases. Our network and relationships provide access to off-market sales data that enhances valuation accuracy. Understanding both public and private market activity ensures valuations reflect the complete picture of market values, not just publicly available information. This comprehensive data access provides valuation accuracy that automated systems cannot achieve.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Sophisticated Premium Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury properties require sophisticated analysis of premium factors that automated systems cannot evaluate. Our premium analysis quantifies the value impact of views, lot positioning, architectural features, and custom amenities based on actual market data. This analysis ensures adjustments reflect real buyer behavior and market preferences, not theoretical values. This sophisticated approach provides valuations that accurately reflect luxury property characteristics.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Timing Intelligence</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding market cycles and timing factors helps determine not just current value, but optimal listing timing and pricing strategies. Our market intelligence includes analysis of seasonal trends, inventory levels, buyer demand patterns, and economic factors that influence luxury real estate markets. This timing intelligence helps maximize value whether you&apos;re selling now or planning for the future. Understanding market timing ensures valuations reflect current conditions and help you make strategic decisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Confidential—No Obligation, No Pressure</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our valuation service is completely confidential and comes with zero obligation. Whether you&apos;re considering selling, refinancing, or simply want to understand your property&apos;s current market position, we provide honest, data-driven insights without any sales pressure. This commitment to transparency and client service ensures you receive valuable information regardless of your immediate plans. Our goal is to provide accurate information that supports your decision-making, not to pressure you into any particular course of action.
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
                Get Your True Market Value
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Receive a comprehensive market analysis for your MacDonald Highlands property. Confidential, expert, and no obligation.
              </p>
              <ContactForm
                formTitle="Request Your Home Valuation"
                formDescription="Tell us about your property and we&apos;ll provide a detailed market analysis."
                ctaText="Get Valuation"
                source="valuation-service"
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
