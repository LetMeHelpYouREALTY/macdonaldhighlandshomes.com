import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import PageHero from "@/components/sections/PageHero";
import NapMapSection from "@/components/sections/NapMapSection";
import ConsultationBand from "@/components/sections/ConsultationBand";
import FaqSection from "@/components/sections/FaqSection";
import FaqSchema from "@/components/schema/FaqSchema";
import { marketNoteFaqs } from "@/lib/faqs";
import OfficeListingsBelowHero from "@/components/listings/OfficeListingsBelowHero";
import { breadcrumbListJsonLd } from "@/lib/breadcrumbSchema";

const pageUrl =
  "https://www.macdonaldhighlandshomes.com/insights/macdonald-highlands-listing-market";
const datePublished = "2026-11-11";
const dateModified = "2026-11-11";
const headline = "MacDonald Highlands Listing Market Note — November 2026";
const description =
  "Monthly listing-market note for MacDonald Highlands in Henderson, NV: pricing posture, view premiums, guard-gated showing logistics, and how sellers should prepare with Listing Specialist Dr. Jan Duffy.";

export const metadata: Metadata = {
  title: `${headline} | Dr. Jan Duffy`,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: headline,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "article",
    publishedTime: datePublished,
    modifiedTime: dateModified,
    images: [
      {
        url: `https://www.macdonaldhighlandshomes.com${siteConfig.images.listingSpecialistHero}`,
        width: 1200,
        height: 630,
        alt: "MacDonald Highlands luxury homes with Strip views — November 2026 listing market note",
      },
    ],
  },
};

const breadcrumbJson = breadcrumbListJsonLd([
  { name: "Home", url: "https://www.macdonaldhighlandshomes.com/" },
  { name: "Insights", url: "https://www.macdonaldhighlandshomes.com/insights/macdonald-highlands-listing-market" },
  { name: headline, url: pageUrl },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  datePublished,
  dateModified,
  author: {
    "@type": "Person",
    "@id": "https://www.macdonaldhighlandshomes.com/#person",
    name: siteConfig.agent.name,
  },
  publisher: {
    "@type": "RealEstateAgent",
    "@id": "https://www.macdonaldhighlandshomes.com/#organization",
    name: "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy",
  },
  mainEntityOfPage: pageUrl,
  image: `https://www.macdonaldhighlandshomes.com${siteConfig.images.listingSpecialistHero}`,
  about: {
    "@type": "Place",
    "@id": "https://www.macdonaldhighlandshomes.com/#macdonald-highlands",
    name: "MacDonald Highlands",
  },
};

export default function ListingMarketNotePage() {
  return (
    <>
      <RealEstateAgentSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
      />

      <PageHero
        title={headline}
        subtitle="Pricing posture, view premiums, and listing preparation for Henderson’s premier guard-gated community"
        support={`Updated ${dateModified} · Listing Specialist Dr. Jan Duffy`}
        imageSrc={siteConfig.images.listingSpecialistHero}
        imageAlt="MacDonald Highlands hillside estates with Las Vegas Strip views"
        align="left"
        primaryCta={{
          label: "Book Listing Consultation",
          calendlyEvent: "listing",
          utmContent: "market-note-hero",
        }}
        secondaryCta={{
          label: "View Listings",
          href: "/listings",
          variant: "ghost",
        }}
      />

      <OfficeListingsBelowHero
        title="Current Office Listings"
        description="Live inventory context for this month’s MacDonald Highlands listing conversation."
        utmContent="listing-market-note"
      />

      <article className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto prose-none">
            <p className="text-sm uppercase tracking-wide text-neutral-500 mb-6">
              Market note · {datePublished} · <time dateTime={dateModified}>Last modified {dateModified}</time>
            </p>
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal-900">
              What sellers should watch this month
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              MacDonald Highlands remains a view- and lot-driven luxury market. Listings that correctly price Strip or
              mountain view quality, lot elevation, and DragonRidge adjacency continue to attract qualified buyers
              faster than homes priced from algorithm estimates alone. Guard-gate logistics still matter: every showing
              should be pre-authorized so private tours feel seamless.
            </p>
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal-900">
              Pricing posture for $1M–$15M+ estates
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Closed comps—not Zestimates—should set the first list price. Adjust for view angle, lot size, golf
              frontage, architecture, and finish level. Overpricing against thin luxury inventory still lengthens days on
              market; underpricing leaves money with the buyer. A listing specialist valuation keeps the strategy
              confidential until you are ready to market.
            </p>
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal-900">
              Preparation that protects value
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Pre-listing staging, architectural photography, and a clear feature narrative (views, outdoor living,
              privacy, DragonRidge lifestyle) remain the difference between curiosity and committed offers. Sellers who
              need discretion can explore off-market or pocket channels before a full MLS launch.
            </p>
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal-900">Next step</h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Call{" "}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="text-primary-800 font-semibold hover:underline"
              >
                {siteConfig.contact.phoneFormatted}
              </a>{" "}
              or book a listing consultation. Review{" "}
              <Link href="/services/selling-your-macdonald-highlands-home" className="text-primary-800 font-semibold hover:underline">
                selling services
              </Link>
              , request a{" "}
              <Link href="/services/luxury-home-valuation" className="text-primary-800 font-semibold hover:underline">
                comps-based valuation
              </Link>
              , or browse{" "}
              <Link href="/listings" className="text-primary-800 font-semibold hover:underline">
                current office listings
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <FaqSchema faqs={marketNoteFaqs} />
      <FaqSection title="Market Note FAQs" faqs={marketNoteFaqs} />

      <NapMapSection />
      <ConsultationBand
        source="listing-market-note"
        calendlyEvent="market"
        title="Want This Month’s Pricing Read for Your Estate?"
      />
    </>
  );
}
