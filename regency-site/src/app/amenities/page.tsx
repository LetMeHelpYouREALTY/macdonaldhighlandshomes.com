import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import AmenitiesPageSchema from "@/components/schema/AmenitiesPageSchema";
import AmenityMapSection from "@/components/amenities/AmenityMapSection";
import ContactForm from "@/components/forms/ContactForm";
import { AMENITIES_FAQ, COMMUNITY_MAP_CONFIG } from "@/config/amenitiesConfig";

export const metadata: Metadata = {
  title: `Nearby Amenities in ${COMMUNITY_MAP_CONFIG.name}, Henderson | Dr. Jan Duffy`,
  description:
    "Interactive map and local guide to restaurants, golf, parks, grocery, healthcare, and shopping near MacDonald Highlands, Henderson's guard-gated luxury community.",
  keywords:
    "MacDonald Highlands amenities, Henderson restaurants near MacDonald Highlands, DragonRidge golf, Green Valley shopping, hospitals near Henderson NV",
  alternates: {
    canonical: "https://macdonaldhighlandshomes.com/amenities",
  },
  openGraph: {
    title: `Nearby Amenities in ${COMMUNITY_MAP_CONFIG.name}, Henderson`,
    description:
      "Explore dining, recreation, healthcare, and shopping around MacDonald Highlands with an interactive map and hyperlocal buyer guide.",
    url: "https://macdonaldhighlandshomes.com/amenities",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://macdonaldhighlandshomes.com/photos/community/golf-lifestyle-full.jpg",
        width: 1200,
        height: 630,
        alt: "DragonRidge Country Club and MacDonald Highlands lifestyle in Henderson, Nevada",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Nearby Amenities in ${COMMUNITY_MAP_CONFIG.name}, Henderson`,
    description:
      "Interactive map and local guide to life near MacDonald Highlands, Henderson NV.",
    images: [
      {
        url: "https://macdonaldhighlandshomes.com/photos/community/golf-lifestyle-full.jpg",
        alt: "Golf and amenities near MacDonald Highlands Henderson Nevada",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AmenitiesPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <AmenitiesPageSchema />

      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/photos/community/golf-lifestyle-full.jpg"
            alt="DragonRidge Country Club at MacDonald Highlands in Henderson, Nevada"
            className="w-full h-full object-cover opacity-30"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
        <div className="relative z-10 container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Nearby Amenities in {COMMUNITY_MAP_CONFIG.name}, Henderson
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Dining, golf, parks, healthcare, and shopping around Southern
            Nevada&apos;s premier guard-gated luxury community
          </p>
        </div>
      </section>

      <AmenityMapSection
        title="Interactive Amenity Map"
        description="Filter by category to explore places around MacDonald Highlands. Map data is provided by Google when an API key is configured; a static map and curated list always appear as a fallback."
        showViewAllLink={false}
        className="section-padding bg-white"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-luxury max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-serif font-bold text-neutral-900">
            Dining &amp; Entertainment
          </h2>
          <p className="text-lg text-neutral-700">
            MacDonald Highlands sits above the Henderson valley with quick access
            to the Las Vegas Strip and established Green Valley corridors.{" "}
            <strong>DragonRidge Country Club</strong> at 552 S Stephanie Street
            offers member dining inside the gates. For resort-style restaurants
            and nightlife,{" "}
            <strong>Green Valley Ranch Resort</strong> on Paseo Verde Parkway
            and the <strong>District at Green Valley Ranch</strong> are common
            destinations for residents—typically a short drive from the
            community&apos;s guard gates.
          </p>
          <p className="text-lg text-neutral-700">
            Approximate drive time to the central Las Vegas Strip is often cited
            as <strong>15–20 minutes</strong>, depending on traffic and which
            gate you use.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Parks &amp; Recreation
          </h2>
          <p className="text-lg text-neutral-700">
            <strong>Cornerstone Park</strong> (1590 W Horizon Ridge Pkwy) provides
            fields, paths, and open space in the Horizon Ridge area near the
            community. Within MacDonald Highlands,{" "}
            <strong>DragonRidge Country Club</strong> anchors recreation with
            championship golf, tennis at the{" "}
            <strong>DragonRidge Tennis &amp; Athletic Center</strong> (1400
            Foothills Village Dr), and club amenities.{" "}
            <strong>Lake Mead National Recreation Area</strong> and foothill
            trail systems are accessible for boating and desert hiking within a
            reasonable drive.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Golf
          </h2>
          <p className="text-lg text-neutral-700">
            Golf is central to life in MacDonald Highlands. The Jay Morrish-designed{" "}
            <strong>DragonRidge Championship Course</strong> winds through the
            community. Membership, tee times, and guest policies are managed
            directly by DragonRidge Country Club.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Healthcare
          </h2>
          <p className="text-lg text-neutral-700">
            Major medical campuses serving the area include{" "}
            <strong>St. Rose Dominican Hospital, Siena Campus</strong> (3001 St
            Rose Pkwy) and <strong>Henderson Hospital</strong> (1050 W Galleria
            Dr). Urgent care, specialists, and pharmacies are also available
            along St Rose Parkway and throughout Green Valley.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Shopping &amp; Grocery
          </h2>
          <p className="text-lg text-neutral-700">
            <strong>Smith&apos;s Food and Drug</strong> on W Horizon Ridge Parkway
            is among the closest everyday grocery options.{" "}
            <strong>The Galleria at Sunset</strong> (1300 W Sunset Rd) and the
            District at Green Valley Ranch provide regional shopping, services,
            and dining. <strong>Whole Foods Market</strong> on S Rainbow Blvd
            serves the broader Green Valley / Las Vegas south valley trade area.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Schools
          </h2>
          <p className="text-lg text-neutral-700">
            Families in MacDonald Highlands often look to Clark County School
            District options in Green Valley, including{" "}
            <strong>Green Valley High School</strong> (460 Arroyo Grande Blvd).
            School assignments and boundaries change; verify current zoning with
            CCSD before purchasing.
          </p>

          <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12">
            Commute &amp; Key Destinations
          </h2>
          <ul className="text-lg text-neutral-700 list-disc pl-6 space-y-2">
            <li>
              <strong>Las Vegas Strip:</strong> approximately 15–20 minutes by
              car (traffic-dependent).
            </li>
            <li>
              <strong>Harry Reid International Airport:</strong> approximately
              20–25 minutes by car in typical conditions via I-215 and airport
              connectors.
            </li>
            <li>
              <strong>Downtown Summerlin / Summerlin:</strong> approximately
              25–35 minutes west via the 215 beltway (traffic-dependent).
            </li>
            <li>
              <strong>Downtown Las Vegas:</strong> approximately 20–30 minutes
              north via I-515 / US-93 (traffic-dependent).
            </li>
          </ul>
          <p className="text-sm text-neutral-500 mt-4">
            Drive times are approximate and vary by time of day.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="amenities-faq">
        <div className="container-luxury max-w-4xl mx-auto">
          <h2
            id="amenities-faq"
            className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center"
          >
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8">
            {AMENITIES_FAQ.map((item) => (
              <div key={item.question} className="border-b border-neutral-200 pb-8">
                <dt className="text-xl font-semibold text-neutral-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-lg text-neutral-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Your MacDonald Highlands Real Estate Expert
          </h2>
          <p className="text-xl text-primary-100 mb-6">
            {siteConfig.agent.name}, {siteConfig.agent.title} ·{" "}
            {siteConfig.agent.brokerage}
          </p>
          <p className="text-primary-100 mb-8">
            NV License #{siteConfig.agent.license} ·{" "}
            {siteConfig.agent.experience}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="btn-secondary text-lg px-8 py-4 bg-white text-primary-900 hover:bg-neutral-100"
            >
              Call {siteConfig.contact.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 border-2 border-white"
            >
              Contact Dr. Jan
            </Link>
          </div>
          <div className="bg-white rounded-lg p-8 text-neutral-900 text-left">
            <ContactForm
              formTitle="Ask About Life in MacDonald Highlands"
              formDescription="Questions about amenities, guard-gated access, or current listings? Send a message below."
              ctaText="Send Message"
              source="amenities-page-cta"
            />
          </div>
          <p className="mt-8 text-sm text-primary-200">
            Explore the{" "}
            <Link href="/macdonald-highlands-community" className="underline">
              community guide
            </Link>{" "}
            or{" "}
            <Link href="/listings" className="underline">
              view listings
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
