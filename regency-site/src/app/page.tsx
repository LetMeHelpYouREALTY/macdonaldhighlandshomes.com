import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import FaqSchema from "@/components/schema/FaqSchema";
import OfficeListingsBelowHero from "@/components/listings/OfficeListingsBelowHero";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import FaqSection from "@/components/sections/FaqSection";
import NapMapSection from "@/components/sections/NapMapSection";
import ConsultationBand from "@/components/sections/ConsultationBand";
import OptimizedImage from "@/components/ui/OptimizedImage";
import AgentPortrait from "@/components/ui/AgentPortrait";
import AgentIntroStrip from "@/components/sections/AgentIntroStrip";
import { homepageFaqs } from "@/lib/faqs";

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "https://www.macdonaldhighlandshomes.com",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "https://www.macdonaldhighlandshomes.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/photos/community/optimized/hero-view-lifestyle-1280.jpg",
        width: 1200,
        height: 630,
        alt: "MacDonald Highlands infinity pool overlooking Las Vegas Strip at dusk — Dr. Jan Duffy Listing Specialist",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "https://www.macdonaldhighlandshomes.com/photos/community/optimized/hero-view-lifestyle-1280.jpg",
        alt: "MacDonald Highlands infinity pool overlooking Las Vegas Strip at dusk — Dr. Jan Duffy Listing Specialist",
        width: 1200,
        height: 630,
      },
    ],
  },
  authors: [{ name: siteConfig.agent.name, url: "https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy" }],
  creator: siteConfig.agent.name,
  publisher: siteConfig.agent.brokerage,
};

const differentiators = [
  {
    title: "Deep Community Knowledge & Local Expertise",
    body: "Golf frontage versus hillside Strip views, lot orientation, and subdivision nuances drive pricing that generic agents miss.",
  },
  {
    title: "Luxury Market Specialization & High-Net-Worth Experience",
    body: "$1M–$15M+ estates need architectural marketing, private showings, and buyers who understand guard-gated living.",
  },
  {
    title: "Active High-Listing Strategies",
    body: "From confidential valuation through staging, launch, and offer review—built for MacDonald Highlands logistics.",
  },
  {
    title: "Proven Results & Client Satisfaction",
    body: "Clear pricing rationale, qualified showings, and negotiation that protects value through escrow.",
  },
];

const services = [
  {
    title: "Sell Your MacDonald Highlands Home",
    description: "Pricing, staging, architectural photography, and luxury buyer outreach.",
    href: "/services/selling-your-macdonald-highlands-home",
    image: siteConfig.images.selling,
    alt: "Staged MacDonald Highlands living room prepared for luxury listing photography",
  },
  {
    title: "Buy in MacDonald Highlands",
    description: "Guard-gate tours, view-premium guidance, and DragonRidge context.",
    href: "/services/buying-in-macdonald-highlands",
    image: siteConfig.images.buying,
    alt: "Grand foyer of a MacDonald Highlands estate prepared for a private buyer tour",
  },
  {
    title: "Luxury Home Valuation",
    description: "Comps-based analysis for views, lot position, and estate finishes.",
    href: "/services/luxury-home-valuation",
    image: siteConfig.images.valuation,
    alt: "Luxury home valuation workspace with floor plans and market analysis materials",
  },
  {
    title: "Relocation Concierge",
    description: "White-glove executive relocation, virtual tours, and timeline management.",
    href: "/services/relocation-concierge",
    image: siteConfig.images.relocation,
    alt: "Executive relocation welcome scene in a MacDonald Highlands estate foyer",
  },
  {
    title: "Investment Advisory",
    description: "Portfolio fit, appreciation context, and 1031 exchange coordination.",
    href: "/services/investment-advisory",
    image: siteConfig.images.investment,
    alt: "MacDonald Highlands hillside villa with infinity pool at dusk",
  },
  {
    title: "Off-Market Opportunities",
    description: "Pocket listings, privacy-focused selling, and qualified buyer lists.",
    href: "/services/off-market-opportunities",
    image: siteConfig.images.offMarket,
    alt: "Private courtyard entrance representing discreet off-market listings",
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

      {/* Hero — full-bleed, brand-first; next/image priority for LCP */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={siteConfig.images.listingSpecialistHero}
            alt="MacDonald Highlands infinity pool overlooking Las Vegas Strip at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/75 via-charcoal-900/50 to-charcoal-900/80" />
        </div>
        <div className="relative z-10 container-luxury text-center text-white py-28 md:py-32">
          <div className="flex flex-col items-center mb-6">
            <AgentPortrait size="lg" href={false} priority ringOffsetClass="ring-offset-charcoal-900" />
            <p className="mt-4 text-sm md:text-base uppercase tracking-[0.22em] text-white/80 font-semibold">
              Dr. Jan Duffy · MacDonald Highlands Realtor
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance text-white">
            MacDonald Highlands Realtor &amp; Listing Specialist
          </h1>
          <p className="text-xl md:text-2xl mb-5 text-neutral-100 max-w-3xl mx-auto font-medium">
            Buy and sell $1M–$15M+ estates in Henderson&apos;s premier guard-gated community
          </p>
          <p className="text-lg md:text-xl mb-12 text-neutral-200 max-w-2xl mx-auto">
            Trust Duffy—your MacDonald Highlands listing specialist for DragonRidge living, Strip views, discreet
            high-end sales, and HOA-aligned leasing help for MacDonald Highlands owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyCta
              event="listing"
              utmContent="home-hero"
              label="Book Listing Consultation"
              className="text-lg px-8 py-4 uppercase tracking-wide"
            />
            <Link href="/listings" className="btn-ghost text-lg px-8 py-4 uppercase tracking-wide">
              View Listings
            </Link>
          </div>
        </div>
      </section>

      <AgentIntroStrip utmContent="homepage-after-hero" />

      <OfficeListingsBelowHero
        title="Current Office Listings"
        description="Browse live inventory from Dr. Jan Duffy’s Berkshire Hathaway HomeServices Nevada Properties office."
        utmContent="homepage"
      />

      {/* Why Sellers Choose */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-charcoal-900">
                Why Sellers Choose Dr. Jan Duffy as Their MacDonald Highlands Listing Specialist
              </h2>
              <p className="text-lg text-neutral-700 mb-5 leading-relaxed">
                Top 1% Las Vegas REALTOR® · {siteConfig.agent.experience} · {siteConfig.agent.credentials}. In real estate since 1983.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Dr. Jan Duffy focuses on listing outcomes in MacDonald Highlands: accurate view and lot pricing, staging that photographs, and buyer outreach that respects guard-gate privacy. Generic metro agents miss those premiums; a listing specialist does not.
              </p>
              <Link href="/about-dr-jan-duffy" className="btn-primary inline-block uppercase tracking-wide text-sm">
                Meet Dr. Jan Duffy
              </Link>
            </div>
            <div className="relative flex items-center justify-center h-80 md:h-[28rem]">
              <AgentPortrait size="xl" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 border-t border-neutral-200 pt-14">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-3 font-serif text-primary-900">500+</div>
              <h3 className="text-base md:text-lg font-semibold mb-1 text-charcoal-900">Families Served</h3>
              <p className="text-sm text-neutral-600">Trusted across luxury Henderson transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-3 font-serif text-primary-900">$127M+</div>
              <h3 className="text-base md:text-lg font-semibold mb-1 text-charcoal-900">In Sales Volume</h3>
              <p className="text-sm text-neutral-600">Proven results in the luxury segment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-3 font-serif text-primary-900">Ph.D.</div>
              <h3 className="text-base md:text-lg font-semibold mb-1 text-charcoal-900">Research-Focused</h3>
              <p className="text-sm text-neutral-600">Data-driven pricing and market analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-3 font-serif text-primary-900">1983</div>
              <h3 className="text-base md:text-lg font-semibold mb-1 text-charcoal-900">Active Since</h3>
              <p className="text-sm text-neutral-600">A career built on Las Vegas Valley homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators — 4-column grid per mockup */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-12 md:mb-16 text-center text-charcoal-900 max-w-4xl mx-auto">
            What Sets a MacDonald Highlands Listing Specialist Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {differentiators.map((item) => (
              <div key={item.title} className="border-t-2 border-primary-900 pt-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-charcoal-900 leading-snug">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal-900">
              Listing Specialist Services for MacDonald Highlands
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Selling first—then buying, valuation, relocation, investment, and off-market access
            </p>
          </div>
          <div className="mb-12 relative h-56 md:h-80 overflow-hidden shadow-lg">
            <OptimizedImage
              src={siteConfig.images.servicesOverview}
              alt="Aerial view of MacDonald Highlands luxury homes and golf fairways at sunset"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden border border-neutral-200 hover:border-primary-300 transition-colors bg-white shadow-sm hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary-700 transition-colors text-charcoal-900">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <span className="text-primary-700 font-semibold text-sm group-hover:underline">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center text-charcoal-900">
              Discover MacDonald Highlands: Henderson&apos;s Premier Guard-Gated Community
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
              Estate lots, DragonRidge golf, and Strip views define this market.{" "}
              <Link href="/macdonald-highlands-community" className="text-primary-700 hover:underline font-semibold">
                Explore the community guide
              </Link>
              .
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
              {[
                { src: "/photos/community/optimized/hero-view-lifestyle-1280.webp", alt: "MacDonald Highlands luxury hillside homes" },
                { src: "/photos/community/optimized/golf-lifestyle-800.webp", alt: "DragonRidge Country Club fairways" },
                { src: "/photos/community/optimized/clubhouse-800.webp", alt: "DragonRidge clubhouse exterior" },
                { src: "/photos/community/optimized/pool-800.webp", alt: "Resort-style pool at a MacDonald Highlands estate" },
              ].map((img) => (
                <div key={img.src} className="relative h-40 md:h-48 overflow-hidden shadow-md">
                  <OptimizedImage src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold mt-4 mb-4 text-charcoal-900">Unrivaled Security & Privacy</h3>
            <div className="relative my-6 mx-auto aspect-[16/10] w-full max-w-[1000px] overflow-hidden shadow-lg">
              <OptimizedImage
                src="/photos/community/optimized/guard-gate-full-1280.webp"
                alt="MacDonald Highlands 24-hour guard-gated entrance"
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                className="object-cover"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              Two 24-hour guard-gated entries keep showings coordinated and privacy intact—core to how listings are marketed and toured here.
            </p>

            <h3 className="text-2xl font-serif font-bold mb-4 text-charcoal-900">DragonRidge Country Club & Golf Course</h3>
            <div className="relative my-6 mx-auto aspect-[16/10] w-full max-w-[1000px] overflow-hidden shadow-lg">
              <OptimizedImage
                src="/photos/community/optimized/golf-lifestyle-full-1280.webp"
                alt="DragonRidge Country Club championship golf course"
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                className="object-cover"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              The Jay Morrish–designed course shapes lifestyle and value. Golf frontage and membership context are priced into listing strategy.
            </p>

            <h3 className="text-2xl font-serif font-bold mb-4 text-charcoal-900">Panoramic Strip & Mountain Views</h3>
            <div className="relative my-6 mx-auto aspect-[16/10] w-full max-w-[1000px] overflow-hidden shadow-lg">
              <OptimizedImage
                src="/photos/community/optimized/view-lifestyle-2-800.webp"
                alt="Panoramic Las Vegas Strip views from MacDonald Highlands"
                fill
                sizes="(max-width: 1000px) 100vw, 1000px"
                className="object-cover"
              />
            </div>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
              View quality is a primary pricing lever. Listing photography and comps must reflect angle, clarity, and competitive inventory.
            </p>

            <h3 className="text-2xl font-serif font-bold mb-4 text-charcoal-900">World-Class Amenities & Clubhouse</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/photos/community/optimized/pool-full-1280.webp"
                  alt="Resort-style pool in MacDonald Highlands estate"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/photos/community/optimized/clubhouse-full-1280.webp"
                  alt="DragonRidge Country Club clubhouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Lots from roughly one-third acre to over one acre support pools, outdoor rooms, and custom landscaping buyers expect at this price point—about 15–20 minutes from the Las Vegas Strip.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal-900 text-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <AgentPortrait size="md" ringOffsetClass="ring-offset-charcoal-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">What Clients Say</h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Feedback from MacDonald Highlands sellers, buyers, and relocating clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-charcoal-800 border border-white/10 p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-DEFAULT text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-200 mb-6 italic leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-ghost text-lg px-8 py-4 inline-block uppercase tracking-wide">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      <FaqSection title="MacDonald Highlands Listing Specialist FAQs" faqs={homepageFaqs} />

      <NapMapSection />
      <ConsultationBand source="homepage-cta" calendlyEvent="listing" />
    </>
  );
}
