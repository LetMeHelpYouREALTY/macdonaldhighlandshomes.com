import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "MacDonald Highlands Investment Properties | Dr. Jan Duffy",
  description: "Investment advisory for MacDonald Highlands real estate. Rental income potential, appreciation trends, tax advantages, and 1031 exchange coordination for luxury property investors.",
  keywords: "MacDonald Highlands investment properties, luxury rental income, Henderson real estate investment, 1031 exchange, Nevada tax advantages",
};

const serviceName = "Investment Advisory";
const serviceDescription = "Comprehensive real estate investment advisory services for MacDonald Highlands properties, including rental income analysis, appreciation trends, tax advantages, and 1031 exchange coordination.";

export default function InvestmentPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/investment-advisory"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Investment Properties
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Strategic real estate investment guidance for luxury property portfolios
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Rental Income Potential</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands properties offer attractive rental income opportunities for investors. We analyze:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>Luxury Short-Term Rentals:</strong> High-end vacation rentals targeting executives, celebrities, and high-net-worth visitors to Las Vegas. Premium rates during major events (CES, Formula 1, Super Bowl).</li>
              <li><strong>Long-Term Executive Rentals:</strong> Corporate housing for relocating executives, typically 6-12 month leases at premium rates.</li>
              <li><strong>Seasonal Rentals:</strong> Snowbirds and part-time residents seeking luxury winter accommodations.</li>
              <li><strong>Rental Yield Analysis:</strong> Projected annual returns based on property value, rental rates, and occupancy expectations.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Appreciation Trends in Guard-Gated Henderson</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands has demonstrated strong appreciation over the past decade, driven by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Limited inventory in guard-gated communities</li>
              <li>Increasing demand from out-of-state buyers</li>
              <li>Las Vegas Strip proximity and view premiums</li>
              <li>DragonRidge Country Club exclusivity</li>
              <li>Henderson's reputation as a premier luxury market</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              We provide historical appreciation data and future projections based on market trends, development plans, and economic indicators.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Tax Advantages of Nevada Residency</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Nevada offers significant tax advantages for real estate investors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>No State Income Tax:</strong> Nevada has no personal income tax, making it attractive for high-net-worth individuals.</li>
              <li><strong>Property Tax Benefits:</strong> Competitive property tax rates with potential exemptions for primary residences.</li>
              <li><strong>1031 Exchange Opportunities:</strong> Defer capital gains taxes by exchanging into MacDonald Highlands properties.</li>
              <li><strong>Depreciation Benefits:</strong> Real estate depreciation deductions for rental properties.</li>
              <li><strong>Estate Planning:</strong> Favorable estate tax environment for property transfers.</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6 italic">
              Note: We recommend consulting with a tax advisor for personalized tax strategy advice.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Portfolio Diversification into Real Assets</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Real estate provides valuable diversification for investment portfolios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Low correlation with stock market volatility</li>
              <li>Inflation hedge through property appreciation</li>
              <li>Tangible asset with intrinsic value</li>
              <li>Potential for both income and capital appreciation</li>
              <li>Leverage opportunities through mortgage financing</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">1031 Exchange Into/Out of MacDonald Highlands</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We coordinate 1031 like-kind exchanges for investors:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>Exchange Into MacDonald Highlands:</strong> Defer capital gains from selling other investment properties by purchasing MacDonald Highlands real estate.</li>
              <li><strong>Exchange Out:</strong> Coordinate sales and exchanges for portfolio rebalancing or geographic diversification.</li>
              <li><strong>Qualified Intermediary Coordination:</strong> Work with trusted QIs to ensure IRS compliance and timeline adherence.</li>
              <li><strong>Timeline Management:</strong> 45-day identification period and 180-day closing requirements.</li>
              <li><strong>Replacement Property Analysis:</strong> Identify suitable exchange properties that meet IRS requirements.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Request Investment Analysis
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Get a comprehensive investment analysis for MacDonald Highlands properties, including ROI projections and market insights.
              </p>
              <ContactForm
                formTitle="Investment Consultation"
                formDescription="Tell us about your investment goals and we'll provide detailed analysis."
                ctaText="Request Analysis"
                source="investment-service"
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
