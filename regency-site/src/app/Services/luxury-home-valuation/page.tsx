import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "MacDonald Highlands Home Valuation: Beyond the Algorithm | Dr. Jan Duffy",
  description: "Get a true market value assessment for your MacDonald Highlands home. Expert comp analysis from actual closed sales, not algorithm estimates. Confidential and no obligation.",
  keywords: "MacDonald Highlands home values, luxury home valuation, Henderson property appraisal, home value estimate, real estate comp analysis",
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

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Confidential—No Obligation, No Pressure</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our valuation service is completely confidential and comes with zero obligation. Whether you&apos;re considering selling, refinancing, or simply want to understand your property&apos;s current market position, we provide honest, data-driven insights without any sales pressure.
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
