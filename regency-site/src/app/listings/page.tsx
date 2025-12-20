import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import RealScoutWidget from "@/components/listings/RealScoutWidget";

export const metadata: Metadata = {
  title: "MacDonald Highlands Listings | Luxury Homes for Sale | Dr. Jan Duffy",
  description: "Browse available luxury homes for sale in MacDonald Highlands, Henderson&apos;s premier guard-gated community. RealScout property search with filters for price, bedrooms, and more.",
  keywords: "MacDonald Highlands homes for sale, Henderson luxury listings, guard-gated community properties, DragonRidge homes",
};

export default function ListingsPage() {
  return (
    <>
      <RealEstateAgentSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Properties
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Explore luxury homes currently available in Henderson&apos;s premier guard-gated community
          </p>
        </div>
      </section>

      {/* RealScout Widget Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="mb-8">
            <p className="text-lg text-neutral-600 text-center">
              Use the filters below to find your perfect MacDonald Highlands home. For off-market opportunities,{" "}
              <a href="/services/off-market-opportunities" className="text-primary-600 font-semibold hover:underline">
                join our private buyer list
              </a>
              .
            </p>
          </div>

          <RealScoutWidget />

          {/* Additional Info */}
          <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Looking for Something Specific?
            </h3>
            <p className="text-neutral-700 mb-4">
              Not seeing what you&apos;re looking for? We have access to off-market properties and coming soon listings that aren&apos;t publicly available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/services/off-market-opportunities"
                className="btn-primary text-center"
              >
                Join Private Buyer List
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-secondary text-center"
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
