import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import FaqSchema from "@/components/schema/FaqSchema";
import ContactForm from "@/components/forms/ContactForm";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";
import FaqSection from "@/components/sections/FaqSection";
import { homepageFaqs } from "@/lib/faqs";

export const metadata = {
  title: "MacDonald Highlands Listing Specialist | Dr. Jan Duffy, REALTOR®",
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "https://www.macdonaldhighlandshomes.com",
  },
  openGraph: {
    title: "MacDonald Highlands Listing Specialist | Dr. Jan Duffy, REALTOR®",
    description: siteConfig.seo.description,
    url: "https://www.macdonaldhighlandshomes.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/images/sections/listing-specialist-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MacDonald Highlands luxury estate with Las Vegas Strip views — listing services by Dr. Jan Duffy",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacDonald Highlands Listing Specialist | Dr. Jan Duffy, REALTOR®",
    description: siteConfig.seo.description,
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/images/sections/listing-specialist-hero.jpg",
        alt: "MacDonald Highlands luxury estate with Las Vegas Strip views — listing services by Dr. Jan Duffy",
        width: 1200,
        height: 630,
      },
    ],
  },
  authors: [{ name: siteConfig.agent.name, url: "https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy" }],
  creator: siteConfig.agent.name,
  publisher: siteConfig.agent.brokerage,
};

const services = [
  {
    title: "Selling Your MacDonald Highlands Home",
    description: "Listing specialist strategy: pricing, staging, architectural photography, and global luxury buyer outreach.",
    href: "/services/selling-your-macdonald-highlands-home",
    image: siteConfig.images.selling,
    alt: "Staged MacDonald Highlands living room prepared for luxury listing photography",
  },
  {
    title: "Buying in MacDonald Highlands",
    description: "Private guard-gate tours, view-premium guidance, DragonRidge membership context, and negotiation.",
    href: "/services/buying-in-macdonald-highlands",
    image: siteConfig.images.buying,
    alt: "Grand foyer of a MacDonald Highlands estate prepared for a private buyer tour",
  },
  {
    title: "Luxury Home Valuation",
    description: "Comps-based market analysis for Strip views, lot position, and estate finishes—not algorithm guesses.",
    href: "/services/luxury-home-valuation",
    image: siteConfig.images.valuation,
    alt: "Luxury home valuation workspace with floor plans and market analysis materials",
  },
  {
    title: "Relocation Concierge",
    description: "White-glove executive relocation support, virtual tours, area orientation, and timeline management.",
    href: "/services/relocation-concierge",
    image: siteConfig.images.relocation,
    alt: "Executive relocation welcome scene in a MacDonald Highlands estate foyer",
  },
  {
    title: "Investment Advisory",
    description: "Appreciation context, portfolio fit, tax considerations, and 1031 exchange coordination.",
    href: "/services/investment-advisory",
    image: siteConfig.images.investment,
    alt: "MacDonald Highlands hillside villa with infinity pool at dusk for investment analysis",
  },
  {
    title: "Off-Market Opportunities",
    description: "Pocket listings before MLS, privacy-focused selling, and qualified buyer waiting lists.",
    href: "/services/off-market-opportunities",
    image: siteConfig.images.offMarket,
    alt: "Private courtyard entrance representing discreet off-market MacDonald Highlands listings",
  },
];

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    role: "MacDonald Highlands Homeowners",
    content:
      "Dr. Jan's listing plan for our MacDonald Highlands home was precise—pricing, photography, and buyer outreach felt built for this community.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Luxury Home Seller",
    content:
      "Sold our $3.2M estate in 45 days. Dr. Jan's network of high-net-worth buyers and marketing strategy exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Relocation Client",
    content:
      "Moving from New York to Henderson was seamless thanks to Dr. Jan's concierge services—from virtual tours to closing logistics.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <RealEstateAgentSchema />
      <FaqSchema faqs={homepageFaqs} />

      {/* Hero — brand + Listing Specialist primary CTA */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.images.listingSpecialistHero}
            alt="MacDonald Highlands luxury estate overlooking Las Vegas Strip at golden hour"
            className="w-full h-full object-cover"
            style={{ position: "absolute", inset: 0 }}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-900/55 to-neutral-950/80" />
        </div>
        <div className="relative z-10 container-luxury text-center text-white py-24">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gold-DEFAULT mb-4 font-semibold">
            Dr. Jan Duffy · Listing Specialist
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Listing Specialist
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
            Hyperlocal listing strategy for $1M–$15M+ guard-gated estates in Henderson, NV
          </p>
          <p className="text-lg md:text-xl mb-12 text-neutral-300 max-w-2xl mx-auto">
            Pre-listing pricing, architectural marketing, private showings, and negotiation—built for DragonRidge views and Strip-facing homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/selling-your-macdonald-highlands-home" className="btn-primary text-lg px-8 py-4">
              Start Your Listing Plan
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="btn-secondary text-lg px-8 py-4 bg-white text-primary-900 hover:bg-neutral-100"
            >
              Call {siteConfig.contact.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Why Listing Specialist */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Why Sellers Choose Dr. Jan Duffy as Their MacDonald Highlands Listing Specialist
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Top 1% Las Vegas REALTOR® · {siteConfig.agent.experience} · {siteConfig.agent.credentials}
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                Dr. Jan Duffy focuses on listing outcomes in MacDonald Highlands: accurate view and lot pricing, staging that photographs, and buyer outreach that respects guard-gate privacy. Generic metro agents miss those premiums; a listing specialist does not.
              </p>
              <Link
                href="/about-dr-jan-duffy"
                className="text-primary-600 font-semibold hover:underline text-lg"
              >
                Meet Dr. Jan Duffy →
              </Link>
            </div>
            <div className="relative h-80 md:h-[28rem] rounded-lg overflow-hidden shadow-xl">
              <img
                src={siteConfig.images.whyListingSpecialist}
                alt="Luxury listing presentation materials prepared by a MacDonald Highlands listing specialist"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4 font-serif">500+</div>
              <h3 className="text-xl font-semibold mb-2">Families Served</h3>
              <p className="text-neutral-600">Trusted across luxury Henderson transactions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 font-serif">$127M+</div>
              <h3 className="text-xl font-semibold mb-2">In Sales Volume</h3>
              <p className="text-neutral-600">Proven results in the luxury segment</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 font-serif">Ph.D.</div>
              <h3 className="text-xl font-semibold mb-2">Research Credential</h3>
              <p className="text-neutral-600">Data-driven pricing and market analysis</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 font-serif">1983</div>
              <h3 className="text-xl font-semibold mb-2">In Real Estate Since</h3>
              <p className="text-neutral-600">A career built on Las Vegas Valley homes</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              What Sets a MacDonald Highlands Listing Specialist Apart
            </h2>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Deep Community Knowledge & Local Expertise
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Listing strategy here starts with neighborhood nuance—golf frontage versus hillside Strip views, lot orientation, and subdivision differences. That local detail drives pricing and marketing that generic agents cannot replicate.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Luxury Market Specialization & High-Net-Worth Experience
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties from $1M to $15M+ need architectural photography, private showings, and buyers who already understand guard-gated living. Dr. Jan Duffy structures listings for that audience—including off-market when discretion is required.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              End-to-End Listing Workflow
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              From confidential valuation through staging, launch, offer review, and closing coordination, the listing specialist workflow is built for MacDonald Highlands logistics and luxury expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Proven Results & Client Satisfaction
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Results are measured in closed volume and client outcomes—not slogans. Sellers get clear pricing rationale, qualified showings, and negotiation that protects value through escrow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with section images */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Listing Specialist Services for MacDonald Highlands
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Selling first—then buying, valuation, relocation, investment, and off-market access
            </p>
          </div>
          <div className="mb-12 relative h-56 md:h-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src={siteConfig.images.servicesOverview}
              alt="Aerial view of MacDonald Highlands luxury homes and golf fairways at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card-luxury overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              Discover MacDonald Highlands: Henderson&apos;s Premier Guard-Gated Community
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
              Estate lots, DragonRidge golf, and Strip views define this market.{" "}
              <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">
                Explore the community guide
              </Link>{" "}
              before you list or buy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/photos/community/hero-view-lifestyle.jpg"
                  alt="MacDonald Highlands luxury hillside homes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/photos/community/golf-lifestyle.jpg"
                  alt="DragonRidge Country Club fairways"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/photos/community/clubhouse.jpg"
                  alt="DragonRidge clubhouse exterior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/photos/community/pool.jpg"
                  alt="Resort-style pool at a MacDonald Highlands estate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Guard-Gated Security & Privacy</h3>
            <div className="my-6">
              <img
                src="/photos/community/guard-gate-full.jpg"
                alt="MacDonald Highlands 24-hour guard-gated entrance"
                className="w-full rounded-lg shadow-lg"
                style={{ maxWidth: "1000px", height: "auto" }}
                loading="lazy"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              Two 24-hour guard-gated entries keep showings coordinated and privacy intact—core to how listings are marketed and toured here.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">DragonRidge Championship Golf Course</h3>
            <div className="my-6">
              <img
                src="/photos/community/golf-lifestyle-full.jpg"
                alt="DragonRidge Country Club championship golf course"
                className="w-full rounded-lg shadow-lg"
                style={{ maxWidth: "1000px", height: "auto" }}
                loading="lazy"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              The Jay Morrish–designed course shapes lifestyle and value. Golf frontage and membership context are priced into listing strategy.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Panoramic Strip & Mountain Views</h3>
            <div className="my-6">
              <img
                src="/photos/community/view-lifestyle-2.jpg"
                alt="Panoramic Las Vegas Strip views from MacDonald Highlands"
                className="w-full rounded-lg shadow-lg"
                style={{ maxWidth: "1000px", height: "auto" }}
                loading="lazy"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              View quality is a primary pricing lever. Listing photography and comps must reflect angle, clarity, and competitive inventory.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Generous Lot Sizes & Estate-Style Living</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/pool-full.jpg"
                  alt="Resort-style pool in MacDonald Highlands estate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/clubhouse-full.jpg"
                  alt="DragonRidge Country Club clubhouse"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              Lots from roughly one-third acre to over one acre support pools, outdoor rooms, and custom landscaping that buyers expect at this price point.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Proximity to Las Vegas Strip & World-Class Amenities
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              About 15–20 minutes from the Strip, MacDonald Highlands pairs privacy with access—an enduring listing narrative for relocating executives and second-home buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Current MacDonald Highlands Listings
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Browse available luxury homes. Prefer privacy?{" "}
                <Link href="/services/off-market-opportunities" className="text-primary-600 font-semibold hover:underline">
                  Ask about off-market inventory
                </Link>
                .
              </p>
            </div>
            <RealScoutWidgetWrapper />
            <div className="mt-8 text-center">
              <Link href="/listings" className="btn-primary text-lg px-8 py-4 inline-block">
                View All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Feedback from MacDonald Highlands sellers, buyers, and relocating clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-DEFAULT text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-200 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-secondary text-lg px-8 py-4">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      <FaqSection title="MacDonald Highlands Listing Specialist FAQs" faqs={homepageFaqs} />

      {/* NAP + map for local SEO */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Visit or Call Dr. Jan Duffy</h2>
              <p className="text-lg text-neutral-700 mb-2">
                Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy
              </p>
              <p className="text-neutral-700 mb-1">{siteConfig.contact.office.full}</p>
              <p className="text-neutral-700 mb-4">{siteConfig.contact.hours}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="btn-primary px-6 py-3"
                >
                  Call {siteConfig.contact.phoneFormatted}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.office.full)}`}
                  className="btn-secondary px-6 py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
                <Link href="/contact" className="btn-secondary px-6 py-3">
                  Contact Form
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-neutral-100">
              <iframe
                title="Map to Dr. Jan Duffy office at 3185 St Rose Pkwy, Henderson"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.office.full)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to List or Buy in MacDonald Highlands?
            </h2>
            <p className="text-xl text-primary-100 mb-12">
              Get listing-specialist guidance from Dr. Jan Duffy—call {siteConfig.contact.phoneFormatted}
            </p>
            <div className="bg-white rounded-lg p-8 md:p-12 text-neutral-900">
              <ContactForm
                formTitle="Schedule Your Listing Consultation"
                formDescription="Tell us about your property goals. Confidential, no obligation."
                ctaText="Request Consultation"
                source="homepage-cta"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-900 text-white p-4 shadow-2xl md:hidden">
        <div className="flex items-center justify-between">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            className="flex-1 text-center py-2 bg-white text-primary-900 rounded-md font-semibold mr-2"
          >
            Call {siteConfig.contact.phoneFormatted}
          </a>
          <a
            href={`sms:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            className="flex-1 text-center py-2 border-2 border-white rounded-md font-semibold"
          >
            Text Us
          </a>
        </div>
      </div>
    </>
  );
}
