import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "MacDonald Highlands Real Estate Expert | Dr. Jan Duffy, REALTOR®",
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
};

const services = [
  {
    title: "Selling Your MacDonald Highlands Home",
    description: "Pre-listing strategy, professional staging, architectural photography, and global luxury buyer network access.",
    href: "/services/selling-your-macdonald-highlands-home",
    icon: "🏠",
  },
  {
    title: "Buying in MacDonald Highlands",
    description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection.",
    href: "/services/buying-in-macdonald-highlands",
    icon: "🔑",
  },
  {
    title: "Luxury Home Valuation",
    description: "Beyond algorithm-based estimates. True market value from actual closed sales and premium adjustments.",
    href: "/services/luxury-home-valuation",
    icon: "💰",
  },
  {
    title: "Relocation Concierge",
    description: "White-glove executive relocation support, virtual tours, area orientation, and timeline management.",
    href: "/services/relocation-concierge",
    icon: "✈️",
  },
  {
    title: "Investment Advisory",
    description: "Rental income potential, appreciation trends, tax advantages, and 1031 exchange coordination.",
    href: "/services/investment-advisory",
    icon: "📊",
  },
  {
    title: "Off-Market Opportunities",
    description: "Access to pocket listings before MLS, privacy-focused selling, and buyer waiting list registration.",
    href: "/services/off-market-opportunities",
    icon: "🔒",
  },
];

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    role: "MacDonald Highlands Homeowners",
    content: "Dr. Jan's expertise in the MacDonald Highlands market is unmatched. She guided us through every step of buying our dream home with incredible attention to detail.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Luxury Home Seller",
    content: "Sold our $3.2M estate in 45 days. Dr. Jan's network of high-net-worth buyers and marketing strategy exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Relocation Client",
    content: "Moving from New York to Henderson was seamless thanks to Dr. Jan's concierge services. She handled everything from virtual tours to school recommendations.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <RealEstateAgentSchema />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Image/hero_bg_1.jpg"
            alt="MacDonald Highlands luxury homes with Strip views"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container-luxury text-center text-white py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Real Estate Expert
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
            {siteConfig.agent.name}, {siteConfig.agent.title}
          </p>
          <p className="text-lg md:text-xl mb-12 text-neutral-300 max-w-2xl mx-auto">
            Specializing in ultra-luxury guard-gated estate homes from $1M-$15M+ with panoramic Strip views and DragonRidge golf access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/luxury-home-valuation" className="btn-primary text-lg px-8 py-4">
              Request Your Confidential Home Valuation
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

      {/* Why Dr. Jan Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Dr. Jan Duffy for Your MacDonald Highlands Real Estate Needs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              {siteConfig.agent.experience} • {siteConfig.agent.credentials} • {siteConfig.agent.brokerage}
            </p>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
              When it comes to buying or selling luxury real estate in MacDonald Highlands, experience and expertise matter. Dr. Jan Duffy brings unparalleled knowledge of Henderson&apos;s premier guard-gated community, combined with a proven track record of success in the ultra-luxury market. Our deep understanding of the neighborhood, from DragonRidge Country Club properties to custom estate lots, ensures you receive guidance that goes far beyond generic real estate advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Families Served</h3>
              <p className="text-neutral-600">Trusted by MacDonald Highlands homeowners</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">$127M+</div>
              <h3 className="text-xl font-semibold mb-2">In Sales Volume</h3>
              <p className="text-neutral-600">Proven track record in luxury real estate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">Ph.D.</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Credentials</h3>
              <p className="text-neutral-600">Highest level of professional expertise</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">BHHS</div>
              <h3 className="text-xl font-semibold mb-2">Berkshire Hathaway</h3>
              <p className="text-neutral-600">Backed by industry-leading brokerage</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              What Sets Us Apart in MacDonald Highlands Real Estate
            </h2>
            
            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Deep Community Knowledge & Local Expertise
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our intimate understanding of MacDonald Highlands extends beyond property listings. We know the nuances of each neighborhood within the community, from the premium golf course frontage properties to the custom estate lots with panoramic Strip views. This local expertise allows us to provide insights that generic real estate agents simply cannot match—whether it&apos;s understanding view premiums, lot positioning advantages, or the subtle differences between various MacDonald Highlands subdivisions.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Luxury Market Specialization & High-Net-Worth Experience
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              The luxury real estate market operates differently than standard residential sales. Properties ranging from $1M to $15M+ require specialized marketing strategies, sophisticated buyer networks, and an understanding of high-net-worth client expectations. We excel in this arena, having successfully navigated complex transactions involving architectural photography, private showings, off-market listings, and international buyer coordination. Our experience with luxury transactions ensures your MacDonald Highlands property receives the professional attention it deserves.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Comprehensive Service Portfolio
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              From initial consultation through closing and beyond, we provide comprehensive support tailored to luxury market standards. Our services include pre-listing strategy development, professional staging consultation, architectural and twilight photography, private showing coordination, global luxury buyer network access, relocation concierge services, investment advisory, and off-market opportunity access. Whatever your MacDonald Highlands real estate needs, we have the expertise and resources to deliver exceptional results.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Proven Results & Client Satisfaction
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our success metrics speak for themselves: 500+ families served, $127M+ in sales volume, and a reputation built on integrity, results, and exceptional service. We don&apos;t just list properties—we strategically position them in the market, connect them with qualified buyers, and negotiate deals that maximize value for our clients. This proven track record gives you confidence that your MacDonald Highlands real estate transaction is in expert hands.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Comprehensive Luxury Real Estate Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Expert guidance for every aspect of buying, selling, and investing in MacDonald Highlands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card-luxury p-8 group hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <span className="text-primary-600 font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MacDonald Highlands Community Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              Discover MacDonald Highlands: Henderson&apos;s Premier Guard-Gated Community
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
              Experience the pinnacle of luxury living in Southern Nevada&apos;s most exclusive master-planned community
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Guard-Gated Security & Privacy
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands offers two beautifully landscaped, 24-hour guard-gated entries that provide security and privacy unmatched in the Henderson area. This controlled access ensures that only authorized visitors enter the community, creating a sense of safety and exclusivity that high-net-worth buyers value. The guard-gate system also means property viewings are coordinated and controlled, maintaining your privacy during the selling process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              DragonRidge Championship Golf Course
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              The Jay Morrish-designed DragonRidge Championship Course is a centerpiece of MacDonald Highlands living. This world-class golf course winds through the community, offering stunning views and challenging play for golf enthusiasts. Golf course frontage properties command premium prices, and membership access adds significant value to homes. Whether you&apos;re an avid golfer or simply appreciate the manicured views, the golf course is a defining feature of the community that impacts property values and lifestyle quality.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Panoramic Strip & Mountain Views
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Las Vegas Strip views and mountain vistas represent the pinnacle of MacDonald Highlands real estate. These view premiums can add hundreds of thousands of dollars to property values, and they&apos;re a key factor in our valuation and marketing strategies. Understanding view angles, future development impacts, and historical appreciation patterns helps us position view properties effectively in the market. Many MacDonald Highlands homes offer breathtaking sunset views over the Strip, creating a daily spectacle that never gets old.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Generous Lot Sizes & Estate-Style Living
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              With lot sizes ranging from one-third acre to over one acre, MacDonald Highlands offers true estate-style living. These generous lots allow for custom pools, outdoor entertainment areas, and extensive landscaping that create a resort-like atmosphere. For buyers, lot size is a crucial consideration that impacts both lifestyle and property value. The ability to create your own private oasis while maintaining proximity to Las Vegas amenities is a unique advantage of MacDonald Highlands living.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
              Proximity to Las Vegas Strip & World-Class Amenities
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Located just 15-20 minutes from the Las Vegas Strip, MacDonald Highlands offers the perfect balance of privacy and accessibility. This proximity means you can enjoy world-class dining, entertainment, and amenities while maintaining the tranquility of guard-gated community living. For many buyers, this location advantage is a key selling point—you get the best of both worlds: exclusive community living with easy access to everything Las Vegas has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              MacDonald Highlands Properties
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Explore luxury homes currently available in the community
            </p>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8">
              Our comprehensive listings include estate homes, golf course properties, and custom-built residences throughout MacDonald Highlands. Whether you&apos;re seeking a move-in ready luxury home or a lot for custom construction, we can help you find the perfect property that matches your lifestyle and investment goals.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-center text-neutral-600 mb-4">
              View all available properties on our{" "}
              <Link href="/listings" className="text-primary-600 font-semibold hover:underline">
                listings page
              </Link>
            </p>
            <div className="text-center mt-6">
              <Link 
                href="/listings" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Browse All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Trusted by MacDonald Highlands homeowners and luxury real estate investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-DEFAULT text-xl">★</span>
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Buy or Sell in MacDonald Highlands?
            </h2>
            <p className="text-xl text-primary-100 mb-12">
              Get expert guidance from Henderson&apos;s premier luxury real estate specialist
            </p>
            <div className="bg-white rounded-lg p-8 md:p-12 text-neutral-900">
              <ContactForm
                formTitle="Schedule Your Consultation"
                formDescription="Fill out the form below or call us directly to get started."
                ctaText="Request Consultation"
                source="homepage-cta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Contact Bar */}
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
