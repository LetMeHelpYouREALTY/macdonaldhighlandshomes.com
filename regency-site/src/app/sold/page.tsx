import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
  description: "View recent sales in MacDonald Highlands. See examples of luxury properties sold by Dr. Jan Duffy in Henderson&apos;s premier guard-gated community.",
  keywords: "MacDonald Highlands sold properties, Henderson luxury home sales, recent real estate sales",
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

      {/* Sales Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="mb-12 text-center">
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These recent sales demonstrate our expertise in the MacDonald Highlands luxury market. 
              All sales completed with discretion, professionalism, and results.
            </p>
          </div>

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

          <div className="mt-12 bg-neutral-50 rounded-lg p-8 text-center">
            <p className="text-lg text-neutral-700 mb-4">
              Interested in seeing what your MacDonald Highlands home could sell for?
            </p>
            <Link href="/services/luxury-home-valuation" className="btn-primary text-lg px-8 py-4 inline-block">
              Request Your Home Valuation
            </Link>
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
          </div>
        </div>
      </section>
    </>
  );
}
