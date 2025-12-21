import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";

export const metadata: Metadata = {
  title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
  description: "View recent sales in MacDonald Highlands. See examples of luxury properties sold by Dr. Jan Duffy in Henderson's premier guard-gated community.",
  keywords: "MacDonald Highlands sold properties, Henderson luxury home sales, recent real estate sales",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/sold',
  },
  openGraph: {
    title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
    description: "View recent sales in MacDonald Highlands. See examples of luxury properties sold by Dr. Jan Duffy in Henderson's premier guard-gated community.",
    url: 'https://macdonaldhighlandshomes.com/sold',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Recent luxury home sales in MacDonald Highlands guard-gated community, Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
    description: "View recent sales in MacDonald Highlands. See examples of luxury properties sold by Dr. Jan Duffy in Henderson's premier guard-gated community.",
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        alt: 'Recent luxury home sales in MacDonald Highlands guard-gated community, Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Placeholder sold properties - replace with actual data
const recentSales = [
  {
    address: "1234 Mountain View Drive",
    neighborhood: "Vu",
    salePrice: "$2,850,000",
    soldDate: "2024",
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: "6,500",
    lotSize: "0.75 acres",
    image: "/Image/house.jpeg",
  },
  {
    address: "5678 Strip Vista Lane",
    neighborhood: "SkyVu",
    salePrice: "$4,200,000",
    soldDate: "2024",
    bedrooms: 6,
    bathrooms: 7,
    squareFeet: "8,200",
    lotSize: "1.2 acres",
    image: "/Image/house.jpeg",
  },
  {
    address: "9012 Golf Course Drive",
    neighborhood: "Vue Pointe",
    salePrice: "$3,650,000",
    soldDate: "2023",
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: "7,100",
    lotSize: "0.9 acres",
    image: "/Image/house.jpeg",
  },
];

export default function SoldPage() {
  return (
    <>
      <RealEstateAgentSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Recent Sales in MacDonald Highlands
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Examples of luxury properties successfully sold in Henderson&apos;s premier guard-gated community
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Proven Results in the MacDonald Highlands Luxury Market
            </h2>
            <p className="text-lg text-neutral-700 mb-6 text-center">
              These recent sales demonstrate our expertise in the MacDonald Highlands luxury market. All sales completed with discretion, professionalism, and results that exceed client expectations. From $2M+ estate homes to $4M+ custom properties, our track record speaks to our ability to navigate complex luxury transactions and deliver exceptional outcomes for both buyers and sellers.
            </p>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Understanding recent sales data helps both buyers and sellers make informed decisions. These examples showcase the diversity of properties in MacDonald Highlands—from golf course frontage homes to panoramic view estates. Each sale represents a successful transaction that maximized value while meeting all parties&apos; objectives. Learn more about our <Link href="/services" className="text-primary-600 hover:underline font-semibold">selling services</Link> or explore <Link href="/listings" className="text-primary-600 hover:underline font-semibold">currently available properties</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Sales Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Recent MacDonald Highlands Sales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSales.map((sale, index) => (
              <div key={index} className="card-luxury overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={sale.image}
                    alt={`${sale.address}, ${sale.neighborhood}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {sale.neighborhood}
                    </span>
                    <h3 className="text-xl font-serif font-bold mt-2 mb-1">
                      {sale.address}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600 mt-2">
                      {sale.salePrice}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-4">
                    <div>
                      <span className="font-semibold">{sale.bedrooms}</span> Bedrooms
                    </div>
                    <div>
                      <span className="font-semibold">{sale.bathrooms}</span> Bathrooms
                    </div>
                    <div>
                      <span className="font-semibold">{sale.squareFeet}</span> sq ft
                    </div>
                    <div>
                      <span className="font-semibold">{sale.lotSize}</span> Lot
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-4">Sold: {sale.soldDate}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 text-center">
            <p className="text-lg text-neutral-700 mb-4">
              Interested in seeing what your MacDonald Highlands home could sell for?
            </p>
            <Link href="/services/luxury-home-valuation" className="btn-primary text-lg px-8 py-4 inline-block">
              Request Your Home Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Understanding MacDonald Highlands Sales Trends
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Recent sales data provides valuable insights into the MacDonald Highlands luxury market. Understanding these trends helps both buyers and sellers make informed decisions based on actual market performance rather than assumptions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Price Range and Property Types
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Recent sales in MacDonald Highlands span a wide price range, from $2M+ starter luxury homes to $4M+ custom estate properties. This diversity reflects the community&apos;s appeal to various buyer profiles—from first-time luxury buyers to ultra-high-net-worth individuals. Understanding where your property fits within this range is crucial for effective pricing strategies and realistic market expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              View Premium Impact on Sales Prices
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Strip views consistently command premium prices in MacDonald Highlands. Recent sales demonstrate that view quality significantly impacts property values, with unobstructed views adding substantial value over similar properties without views. Understanding these view premiums helps sellers position their properties effectively and helps buyers evaluate value propositions accurately.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Golf Course Frontage Value
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Golf course frontage properties represent some of the most valuable real estate in MacDonald Highlands. Recent sales show that DragonRidge Country Club proximity and membership access add significant value to properties. These sales demonstrate the premium buyers are willing to pay for golf course lifestyle access, making golf course properties attractive investment opportunities.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Lot Size and Positioning Factors
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Recent sales data shows that lot size and positioning significantly impact property values. Larger lots with elevated positions command premium prices, reflecting buyer demand for privacy, space, and views. Understanding how lot characteristics influence sales prices helps both buyers and sellers make informed decisions about property value and investment potential.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Days on Market and Transaction Timelines
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Well-positioned MacDonald Highlands properties with premium features often sell quickly to qualified buyers. Recent sales demonstrate that properties priced correctly and marketed effectively can achieve successful outcomes within reasonable timeframes. Understanding typical days on market helps sellers set realistic expectations while helping buyers understand market dynamics and competition levels.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Neighborhood Performance Variations
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Different neighborhoods within MacDonald Highlands—Vu, SkyVu, and Vue Pointe—show varying performance characteristics in recent sales. Understanding these neighborhood-specific trends helps buyers identify areas that align with their preferences and helps sellers understand how neighborhood factors impact property values. Our market analysis includes neighborhood-specific insights to support informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
              Proven Results in MacDonald Highlands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">{siteConfig.agent.experience.split("+")[0]}+</div>
                <p className="text-neutral-300">Families Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$127M+</div>
                <p className="text-neutral-300">In Sales Volume</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">45</div>
                <p className="text-neutral-300">Average Days on Market</p>
              </div>
            </div>
            <p className="mt-12 text-neutral-300 text-lg">
              These metrics demonstrate our commitment to achieving exceptional results for MacDonald Highlands clients. Our proven track record gives you confidence that your real estate transaction is in expert hands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Whether you&apos;re selling your MacDonald Highlands home or exploring investment opportunities, we&apos;re here to help you achieve exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/luxury-home-valuation" className="btn-primary text-lg px-8 py-4">
                Request Home Valuation
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-secondary text-lg px-8 py-4"
              >
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <p className="mt-8 text-neutral-600">
              Learn more about our <Link href="/services" className="text-primary-600 hover:underline font-semibold">selling services</Link> or explore <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy&apos;s expertise</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
