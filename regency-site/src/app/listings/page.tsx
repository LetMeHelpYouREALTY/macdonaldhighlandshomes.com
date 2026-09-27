import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";
import AmenityMapSection from "@/components/amenities/AmenityMapSection";

export const metadata: Metadata = {
  title: "MacDonald Highlands Listings | Luxury Homes for Sale | Dr. Jan Duffy",
  description: "Browse available luxury homes for sale in MacDonald Highlands, Henderson's premier guard-gated community. RealScout property search with filters for price, bedrooms, and more.",
  keywords: "MacDonald Highlands homes for sale, Henderson luxury listings, guard-gated community properties, DragonRidge homes",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/listings',
  },
  openGraph: {
    title: "MacDonald Highlands Listings | Luxury Homes for Sale | Dr. Jan Duffy",
    description: "Browse available luxury homes for sale in MacDonald Highlands, Henderson's premier guard-gated community. RealScout property search with filters for price, bedrooms, and more.",
    url: 'https://macdonaldhighlandshomes.com/listings',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        width: 1200,
        height: 630,
        alt: 'MacDonald Highlands luxury homes for sale with panoramic Las Vegas Strip views in Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MacDonald Highlands Listings | Luxury Homes for Sale | Dr. Jan Duffy",
    description: "Browse available luxury homes for sale in MacDonald Highlands, Henderson's premier guard-gated community.",
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        alt: 'MacDonald Highlands luxury homes for sale with panoramic Las Vegas Strip views in Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
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

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Discover Your Dream Home in MacDonald Highlands
            </h2>
            <p className="text-lg text-neutral-700 mb-6 text-center">
              MacDonald Highlands represents the pinnacle of luxury living in Henderson, Nevada. This exclusive guard-gated community offers estate homes ranging from $1M to $15M+ with panoramic Las Vegas Strip views, championship golf access, and unparalleled privacy. Whether you&apos;re seeking a move-in ready luxury home, a golf course frontage property, or a custom estate lot, our comprehensive listings showcase the finest properties available in this premier community.
            </p>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Use the interactive search tool below to filter properties by price, bedrooms, bathrooms, lot size, and neighborhood. For off-market opportunities and exclusive listings not publicly available, <Link href="/services/off-market-opportunities" className="text-primary-600 hover:underline font-semibold">join our private buyer list</Link>. Learn more about the <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands community</Link> or explore our <Link href="/services" className="text-primary-600 hover:underline font-semibold">comprehensive real estate services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Widget Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Available MacDonald Highlands Properties
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Use the filters below to find your perfect MacDonald Highlands home. Search by price range, property type, bedrooms, bathrooms, and neighborhood. For off-market opportunities,{" "}
              <Link href="/services/off-market-opportunities" className="text-primary-600 font-semibold hover:underline">
                join our private buyer list
              </Link>
              .
            </p>
          </div>

          <RealScoutWidgetWrapper />

          {/* Additional Info */}
          <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Looking for Something Specific?
            </h3>
            <p className="text-neutral-700 mb-4">
              Not seeing what you&apos;re looking for? We have access to off-market properties and coming soon listings that aren&apos;t publicly available. Our network of luxury real estate professionals and relationships within MacDonald Highlands provide exclusive access to properties before they hit the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/off-market-opportunities"
                className="btn-primary text-center"
              >
                Join Private Buyer List
              </Link>
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

      <AmenityMapSection
        title="Explore the MacDonald Highlands Area"
        description="See restaurants, golf, parks, and services near listings in Henderson's guard-gated community."
        compact
      />

      {/* Property Types Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Types of Properties Available in MacDonald Highlands
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              MacDonald Highlands offers diverse property types to suit various luxury lifestyles and investment goals. Understanding these property categories helps you identify the perfect home for your needs.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Estate Homes with Panoramic Views
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Las Vegas Strip and mountain views represent the most premium real estate in MacDonald Highlands. These view properties command significant premiums and offer breathtaking vistas that never get old. Whether you&apos;re seeking sunset views over the Strip or mountain panoramas, view properties provide a daily spectacle that enhances your luxury lifestyle. Our listings include detailed view descriptions and premium calculations to help you understand the value proposition of each view property.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Golf Course Frontage Properties
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              DragonRidge Country Club golf course frontage properties offer direct access to championship golf and serene course views. These premium properties combine luxury living with recreational access, creating a lifestyle that appeals to golf enthusiasts and those who appreciate manicured landscapes. Golf course properties often include membership transfer opportunities and provide a unique value proposition in the MacDonald Highlands market. Understanding membership processes and fees is essential when evaluating golf course properties.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Custom Estate Lots
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              For buyers seeking to build their dream home, custom estate lots in MacDonald Highlands offer the opportunity to create a truly unique luxury residence. Lot sizes range from one-third acre to over one acre, providing space for custom pools, outdoor entertainment areas, and extensive landscaping. When evaluating lots, consider view angles, lot positioning, slope, and proximity to amenities. Our expertise in lot selection helps buyers identify properties that maximize both lifestyle and investment value.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Move-In Ready Luxury Homes
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many MacDonald Highlands listings feature move-in ready luxury homes with custom finishes, architectural distinction, and premium features. These properties offer immediate occupancy without the timeline and complexity of new construction. Move-in ready homes often include recent renovations, updated systems, and professionally designed interiors that reflect luxury standards. Evaluating these properties requires understanding their condition, recent improvements, and how they compare to new construction options.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Neighborhood-Specific Considerations
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands includes distinct neighborhoods—Vu, SkyVu, and Vue Pointe—each with unique characteristics. Understanding neighborhood differences helps buyers identify properties that align with their lifestyle preferences. Some neighborhoods offer more elevated positions with premium views, while others provide different lot sizes or architectural styles. Our listings include neighborhood information to help you understand the context and value proposition of each property.
            </p>
          </div>
        </div>
      </section>

      {/* Search Tips Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Tips for Finding Your Perfect MacDonald Highlands Property
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Searching for luxury real estate requires a strategic approach. These tips help you navigate the MacDonald Highlands market effectively and identify properties that match your criteria.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Use Price Range Filters Strategically
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands properties range from $1M starter luxury homes to $15M+ estate properties. When setting price filters, consider that view premiums, lot size, and golf course frontage can significantly impact pricing. Properties just above your initial budget range may offer exceptional value when you factor in premium features. Our market expertise helps you understand pricing dynamics and identify properties that represent strong value propositions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Consider View Quality and Positioning
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              View quality varies significantly within MacDonald Highlands, and understanding these differences is crucial. Properties with unobstructed panoramic Strip views command the highest premiums, while properties with partial or mountain-only views offer different value propositions. When evaluating listings, consider view angles, clarity, and potential future development impacts. Our property descriptions include detailed view information to help you make informed decisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Evaluate Lot Size and Positioning
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Lot size and positioning significantly impact both lifestyle and property value. Larger lots offer more privacy and space for outdoor amenities, while elevated lots often provide better views. When reviewing listings, consider how lot characteristics align with your lifestyle goals—whether that&apos;s extensive landscaping, pool and spa installations, or maintaining natural desert views. Understanding lot positioning factors helps you identify properties that maximize both lifestyle and investment value.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Explore Off-Market Opportunities
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Not all MacDonald Highlands properties appear in public listings. Off-market and pocket listings provide exclusive access to properties that may never hit the MLS, often with less competition and more flexible terms. Our private buyer list connects qualified buyers with sellers who prefer discreet marketing approaches. Joining this list gives you first access to exclusive opportunities before they become publicly available.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Schedule Private Community Tours
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Viewing properties in person is essential for luxury real estate decisions. We coordinate private community tours that handle all guard-gate authorization, ensuring smooth access to properties you&apos;re considering. These tours provide opportunities to experience views firsthand, evaluate lot positioning, and understand neighborhood characteristics. <Link href="/services/buying-in-macdonald-highlands" className="text-primary-600 hover:underline font-semibold">Schedule a private tour</Link> to explore MacDonald Highlands properties in person.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Find Your MacDonald Highlands Home?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Whether you&apos;re buying your first luxury home or adding to your portfolio, we&apos;re here to help you navigate the MacDonald Highlands market with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-secondary text-lg px-8 py-4"
              >
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <p className="mt-8 text-neutral-600">
              Learn more about <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy&apos;s expertise</Link> or explore our <Link href="/services" className="text-primary-600 hover:underline font-semibold">comprehensive services</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
