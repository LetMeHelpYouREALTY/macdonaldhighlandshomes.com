import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import PageHero from "@/components/sections/PageHero";
import NapMapSection from "@/components/sections/NapMapSection";
import ConsultationBand from "@/components/sections/ConsultationBand";
import OfficeListingsBelowHero from "@/components/listings/OfficeListingsBelowHero";
import CalendlyCta from "@/components/scheduling/CalendlyCta";

export const metadata: Metadata = {
  title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
  description:
    "Proven MacDonald Highlands listing results from Dr. Jan Duffy. Pricing strategy, marketing, and negotiation for Henderson's $1M–$15M+ guard-gated estates.",
  keywords:
    "MacDonald Highlands sold properties, Henderson luxury home sales, recent real estate sales, Listing Specialist results",
  alternates: {
    canonical: "https://www.macdonaldhighlandshomes.com/sold",
  },
  openGraph: {
    title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
    description:
      "Proven MacDonald Highlands listing results from Dr. Jan Duffy. Pricing strategy, marketing, and negotiation for Henderson's $1M–$15M+ guard-gated estates.",
    url: "https://www.macdonaldhighlandshomes.com/sold",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/photos/community/optimized/view-lifestyle-00024-full-1280.webp",
        width: 1200,
        height: 630,
        alt: "Recent luxury home sales in MacDonald Highlands guard-gated community, Henderson, Nevada",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Sales | MacDonald Highlands Real Estate | Dr. Jan Duffy",
    description:
      "Proven MacDonald Highlands listing results from Dr. Jan Duffy. Pricing strategy, marketing, and negotiation for Henderson's $1M–$15M+ guard-gated estates.",
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/photos/community/optimized/view-lifestyle-00024-full-1280.webp",
        alt: "Recent luxury home sales in MacDonald Highlands guard-gated community, Henderson, Nevada",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const resultPillars = [
  {
    title: "Pricing that protects value",
    body: "Closed-comp analysis for view premiums, lot position, and estate finishes—so list price invites qualified buyers without leaving money on the table.",
  },
  {
    title: "Marketing built for luxury buyers",
    body: "Architectural photography, staging guidance, and targeted outreach to buyers who already shop MacDonald Highlands and DragonRidge lifestyle estates.",
  },
  {
    title: "Negotiation with discretion",
    body: "Private showing coordination, offer strategy, and confidential handling for sellers who expect white-glove service from first conversation through closing.",
  },
];

export default function SoldPage() {
  return (
    <>
      <RealEstateAgentSchema />

      <PageHero
        title="MacDonald Highlands Sold Properties"
        subtitle="Proven listing results in Henderson's premier guard-gated community"
        support="Pricing strategy, marketing, and negotiation that protect seller value."
        imageSrc={siteConfig.images.selling}
        imageAlt="Staged luxury living room prepared for a MacDonald Highlands listing"
        align="left"
        primaryCta={{
          label: "Book on Calendly",
          calendlyEvent: "listing",
          utmContent: "sold-hero",
        }}
        secondaryCta={{
          label: "Get a Valuation",
          href: "/services/luxury-home-valuation",
          variant: "ghost",
        }}
      />

      <OfficeListingsBelowHero
        title="Current Office Listings"
        description="Browse live inventory from Dr. Jan Duffy’s Berkshire Hathaway HomeServices Nevada Properties office."
        utmContent="sold"
      />

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Proven Results in the MacDonald Highlands Luxury Market
            </h2>
            <p className="text-lg text-neutral-700 mb-6 text-center">
              Dr. Jan Duffy brings listing-specialist execution to MacDonald Highlands sellers—from $1M+ estates to
              custom properties with Strip views and DragonRidge access. Outcomes are measured in client results, not
              fabricated listing cards.
            </p>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Explore live inventory on our{" "}
              <Link href="/listings" className="text-primary-800 hover:underline font-semibold">
                listings page
              </Link>
              , review{" "}
              <Link
                href="/services/selling-your-macdonald-highlands-home"
                className="text-primary-800 hover:underline font-semibold"
              >
                selling services
              </Link>
              , or request a confidential valuation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="relative h-64 overflow-hidden shadow-lg">
                <img
                  src="/photos/community/optimized/view-lifestyle-00024-full-1280.webp"
                  alt="MacDonald Highlands estate homes with panoramic Strip views"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative h-64 overflow-hidden shadow-lg">
                <img
                  src="/photos/community/optimized/golf-lifestyle-full-1280.webp"
                  alt="Golf course frontage properties in MacDonald Highlands"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative h-64 overflow-hidden shadow-lg">
                <img
                  src="/photos/community/optimized/clubhouse-full-1280.webp"
                  alt="DragonRidge Country Club luxury amenities"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4 text-center">How Listing Results Are Won</h2>
            <p className="text-lg text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
              Every MacDonald Highlands sale starts with neighborhood-specific strategy—not a generic MLS upload.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {resultPillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-xl font-serif font-bold mb-3 text-charcoal-900">{pillar.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/luxury-home-valuation" className="btn-primary text-lg px-8 py-4 inline-block">
                Request Your Home Valuation
              </Link>
              <CalendlyCta
                event="listing"
                utmContent="sold-results-cta"
                label="Book Listing Consultation"
                className="btn-secondary text-lg px-8 py-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Understanding MacDonald Highlands Sales Trends
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Market context for Vu, SkyVu, and Vue Pointe helps sellers price correctly and helps buyers evaluate
              true value—view premiums, golf adjacency, lot size, and days on market all matter.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Price Range and Property Types</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands inventory spans starter luxury through custom estate properties. Positioning your home
              within that spectrum requires closed comps and neighborhood nuance, not algorithm estimates.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">View Premium Impact</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Strip-view and elevated lots consistently influence buyer demand. Highlighting view quality in marketing
              and photography is essential to defending list price.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Golf Course and Lifestyle Access</h3>
            <p className="text-lg text-neutral-700 mb-6">
              DragonRidge proximity and membership context remain meaningful differentiators for qualified buyers
              shopping Henderson&apos;s guard-gated lifestyle estates.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Lot Size and Positioning</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Larger lots and elevated positions support privacy, outdoor living, and long-term value. These factors
              should be explicit in pricing strategy and presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900 text-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-white">
              Proven Results in MacDonald Highlands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">{siteConfig.agent.experience.split("+")[0]}+</div>
                <p className="text-neutral-300">Families Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$127M+</div>
                <p className="text-neutral-300">In Sales Volume</p>
              </div>
            </div>
            <p className="mt-12 text-neutral-300 text-lg">
              Verified results from Dr. Jan Duffy&apos;s MacDonald Highlands practice—listing strategy measured in closed
              outcomes and client trust.
            </p>
          </div>
        </div>
      </section>

      <NapMapSection />
      <ConsultationBand
        source="sold"
        calendlyEvent="listing"
        title="Ready to Sell Your MacDonald Highlands Home?"
      />
    </>
  );
}
