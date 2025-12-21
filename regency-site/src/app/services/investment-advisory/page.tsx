import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "MacDonald Highlands Investment Properties | Dr. Jan Duffy",
  description: "Investment advisory for MacDonald Highlands real estate. Rental income potential, appreciation trends, tax advantages, and 1031 exchange coordination for luxury property investors.",
  keywords: "MacDonald Highlands investment properties, luxury rental income, Henderson real estate investment, 1031 exchange, Nevada tax advantages",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/services/investment-advisory',
  },
  openGraph: {
    title: "MacDonald Highlands Investment Properties | Dr. Jan Duffy",
    description: "Investment advisory for MacDonald Highlands real estate. Rental income potential, appreciation trends, tax advantages, and 1031 exchange coordination for luxury property investors.",
    url: 'https://macdonaldhighlandshomes.com/services/investment-advisory',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        width: 1200,
        height: 630,
        alt: 'MacDonald Highlands luxury real estate investment properties in Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MacDonald Highlands Investment Properties | Dr. Jan Duffy",
    description: "Investment advisory for MacDonald Highlands real estate. Rental income potential, appreciation trends, tax advantages, and 1031 exchange coordination.",
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        alt: 'MacDonald Highlands luxury real estate investment properties in Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
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
            <p className="text-lg text-neutral-700 mb-6">
              Understanding rental income potential helps investors evaluate properties from a cash flow perspective, ensuring investment decisions align with income generation goals. Our analysis provides realistic projections based on actual market data and occupancy trends.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Appreciation Trends in Guard-Gated Henderson</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands has demonstrated strong appreciation over the past decade, driven by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Limited inventory in guard-gated communities</li>
              <li>Increasing demand from out-of-state buyers</li>
              <li>Las Vegas Strip proximity and view premiums</li>
              <li>DragonRidge Country Club exclusivity</li>
              <li>Henderson&apos;s reputation as a premier luxury market</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              We provide historical appreciation data and future projections based on market trends, development plans, and economic indicators. Understanding appreciation trends helps investors evaluate long-term investment potential and make decisions that support wealth-building objectives.
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
            <p className="text-lg text-neutral-700 mb-6">
              Understanding these tax advantages helps investors evaluate the financial benefits of MacDonald Highlands investments. These tax benefits can significantly enhance investment returns, making properties particularly attractive to high-net-worth investors.
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
            <p className="text-lg text-neutral-700 mb-6">
              Understanding diversification benefits helps investors evaluate how MacDonald Highlands properties fit into broader investment strategies. Real estate diversification provides portfolio stability and long-term wealth-building potential.
            </p>

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
            <p className="text-lg text-neutral-700 mb-6">
              Our 1031 exchange coordination ensures smooth transactions that maximize tax benefits while meeting all regulatory requirements. This expertise helps investors optimize their real estate portfolios while deferring capital gains taxes.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Investment Analysis & Due Diligence Process</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Evaluating MacDonald Highlands properties as investments requires comprehensive analysis that goes beyond surface-level metrics. Our investment advisory process provides the data and insights needed to make informed investment decisions, whether you&apos;re building a luxury real estate portfolio or considering a single investment property. This systematic approach ensures all investment factors are properly evaluated.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Financial Performance Projections</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We provide detailed financial projections including cash flow analysis, return on investment calculations, and long-term appreciation scenarios. These projections account for rental income potential, operating expenses, financing costs, and tax implications. Understanding the financial performance potential helps investors evaluate whether a property aligns with their investment objectives and risk tolerance. This data-driven approach supports informed investment decision-making.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Risk Assessment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              All real estate investments carry risks, and understanding these risks is essential for informed decision-making. We assess market risks including economic factors, interest rate impacts, supply and demand dynamics, and potential market corrections. This risk assessment helps investors understand potential downside scenarios and make decisions that align with their risk tolerance and investment strategy. Understanding risks ensures investment decisions are made with full awareness of potential challenges.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Property-Specific Due Diligence</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Investment properties require thorough due diligence beyond standard home inspections. We coordinate specialized inspections for rental properties, evaluate HOA restrictions on rentals, assess property condition and maintenance requirements, and analyze potential capital improvement needs. This comprehensive due diligence ensures investors understand all aspects of property ownership before committing to a purchase. This thorough evaluation protects investments and ensures informed decision-making.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Portfolio Integration Strategy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For investors building or managing real estate portfolios, we provide guidance on how MacDonald Highlands properties fit into broader investment strategies. This includes analyzing portfolio diversification benefits, geographic allocation strategies, and asset allocation recommendations. Understanding how a property fits into your overall portfolio helps ensure investment decisions support long-term wealth-building objectives. This strategic perspective ensures investments align with broader financial goals.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Investment Strategies for MacDonald Highlands Properties</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Different investment strategies suit different investor profiles and objectives. Understanding the various approaches to investing in MacDonald Highlands real estate helps you choose a strategy that aligns with your goals, timeline, and risk tolerance. Our advisory services help you identify and implement strategies that support your investment objectives.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Buy-and-Hold Appreciation Strategy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands has demonstrated strong long-term appreciation, making buy-and-hold strategies attractive for investors seeking capital appreciation. This strategy involves purchasing properties with the expectation that values will increase over time, potentially generating significant returns when properties are sold years later. The limited inventory of guard-gated luxury communities in Henderson supports this appreciation potential. This strategy suits investors with long-term horizons and appreciation-focused objectives.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Rental Income Generation Strategy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties in MacDonald Highlands can generate attractive rental income through luxury short-term rentals, executive long-term leases, or seasonal rentals. This strategy focuses on cash flow generation while potentially benefiting from property appreciation. Understanding rental market dynamics, occupancy expectations, and operating expenses is crucial for evaluating rental income potential. This strategy suits investors seeking current income from their real estate investments.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">1031 Exchange Strategy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Investors looking to defer capital gains taxes can use 1031 exchanges to transition into MacDonald Highlands properties. This strategy allows investors to sell existing investment properties and reinvest proceeds into MacDonald Highlands real estate while deferring capital gains taxes. The exchange process requires careful coordination and timeline management to meet IRS requirements. This strategy suits investors looking to optimize tax benefits while transitioning into luxury real estate.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Value-Add Investment Opportunities</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Some MacDonald Highlands properties present value-add opportunities where strategic improvements can significantly increase property values. This might include updating finishes, adding outdoor living spaces, or enhancing views through landscaping. Identifying these opportunities requires understanding renovation costs, market preferences, and value impact of improvements. This strategy suits investors with renovation expertise and the ability to manage improvement projects.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why MacDonald Highlands is an Attractive Investment Market</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands offers unique investment characteristics that make it attractive to luxury real estate investors. Understanding these market fundamentals helps investors evaluate the investment potential of properties in this exclusive community. These characteristics support both income generation and long-term appreciation potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Limited Supply & Exclusivity</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The limited inventory of guard-gated luxury communities in Henderson creates supply constraints that support property values. MacDonald Highlands&apos; exclusivity, combined with limited new construction opportunities, means inventory remains relatively constrained. This supply limitation helps maintain property values and supports appreciation potential over time. Understanding supply dynamics helps investors evaluate long-term value stability and appreciation potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Strong Demand from Multiple Buyer Segments</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Demand for MacDonald Highlands properties comes from multiple segments: primary home buyers seeking luxury living, second-home buyers from high-tax states, corporate relocations, and international investors. This diverse demand base helps insulate the market from downturns in any single segment, providing stability and supporting long-term value appreciation. Understanding demand diversity helps investors evaluate market resilience and long-term investment potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Las Vegas Market Fundamentals</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The broader Las Vegas market benefits from strong economic fundamentals including tourism growth, corporate relocations, and population growth. These market fundamentals support luxury real estate values throughout the region, including MacDonald Highlands. Understanding these broader market trends helps investors evaluate long-term investment potential. These fundamentals provide a strong foundation for property values and appreciation potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Tax Advantages & Investment Benefits</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Nevada&apos;s tax-friendly environment, combined with real estate investment benefits like depreciation deductions and 1031 exchange opportunities, creates attractive investment conditions. These tax advantages can significantly enhance investment returns, making MacDonald Highlands properties particularly attractive to high-net-worth investors seeking tax-efficient investment strategies. Understanding these benefits helps investors evaluate the true value proposition of MacDonald Highlands investments.
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
                Request Investment Analysis
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Get a comprehensive investment analysis for MacDonald Highlands properties, including ROI projections and market insights.
              </p>
              <ContactForm
                formTitle="Investment Consultation"
                formDescription="Tell us about your investment goals and we&apos;ll provide detailed analysis."
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
