import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import PageHero from "@/components/sections/PageHero";
import NapMapSection from "@/components/sections/NapMapSection";
import ConsultationBand from "@/components/sections/ConsultationBand";
import FaqSection from "@/components/sections/FaqSection";
import FaqSchema from "@/components/schema/FaqSchema";
import { testimonialsFaqs } from "@/lib/faqs";
import Link from "next/link";
import OfficeListingsBelowHero from "@/components/listings/OfficeListingsBelowHero";
import OptimizedImage from "@/components/ui/OptimizedImage";

export const metadata: Metadata = {
  title: "Client Testimonials | MacDonald Highlands Homes and Real Estate",
  description: "Read what clients say about working with Dr. Jan Duffy for MacDonald Highlands real estate. Trusted across 500+ team sales for luxury home buying and selling.",
  keywords: "Dr. Jan Duffy reviews, MacDonald Highlands real estate testimonials, Henderson REALTOR reviews",
  alternates: {
    canonical: 'https://www.macdonaldhighlandshomes.com/testimonials',
  },
  openGraph: {
    title: "Client Testimonials | MacDonald Highlands Homes and Real Estate",
    description: "Read what clients say about working with Dr. Jan Duffy for MacDonald Highlands real estate. Trusted across 500+ team sales for luxury home buying and selling.",
    url: 'https://www.macdonaldhighlandshomes.com/testimonials',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.macdonaldhighlandshomes.com/photos/community/optimized/view-lifestyle-00024-full-1280.webp',
        width: 1200,
        height: 630,
        alt: 'Client testimonials for Dr. Jan Duffy, MacDonald Highlands luxury real estate expert in Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Client Testimonials | MacDonald Highlands Homes and Real Estate",
    description: "Read what clients say about working with Dr. Jan Duffy for MacDonald Highlands real estate. Trusted across 500+ team sales for luxury home buying and selling.",
    images: [
      {
        url: 'https://www.macdonaldhighlandshomes.com/photos/community/optimized/view-lifestyle-00024-full-1280.webp',
        alt: 'Client testimonials for Dr. Jan Duffy, MacDonald Highlands luxury real estate expert in Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    role: "MacDonald Highlands Homeowners",
    location: "Vu Neighborhood",
    content: "Dr. Jan's expertise in the MacDonald Highlands market is unmatched. She guided us through every step of buying our dream home with incredible attention to detail. Her knowledge of view premiums and lot values helped us make an informed decision, and her negotiation skills saved us significant money. We couldn't be happier with our new home!",
    rating: 5,
    date: "2024",
  },
  {
    name: "Robert Martinez",
    role: "Luxury Home Seller",
    location: "SkyVu Neighborhood",
    content: "Sold our $3.2M estate in 45 days. Dr. Jan's network of high-net-worth buyers and marketing strategy exceeded all expectations. The professional photography, staging consultation, and off-market marketing approach attracted serious buyers immediately. Her communication throughout the process was excellent, and we felt confident every step of the way.",
    rating: 5,
    date: "2024",
  },
  {
    name: "Jennifer Williams",
    role: "Relocation Client",
    location: "New York to Henderson",
    content: "Moving from New York to Henderson was seamless thanks to Dr. Jan's concierge services. She handled everything from virtual tours to school recommendations, temporary housing, and area orientation. Her attention to detail and proactive communication made our corporate relocation stress-free. We're now proud MacDonald Highlands residents!",
    rating: 5,
    date: "2023",
  },
  {
    name: "David & Lisa Thompson",
    role: "Investment Property Buyers",
    location: "Vue Pointe",
    content: "As real estate investors, we needed someone who understood both the luxury market and investment potential. Dr. Jan provided comprehensive analysis on rental income, appreciation trends, and tax advantages. Her 1031 exchange coordination was flawless, and we've already seen strong returns on our MacDonald Highlands property.",
    rating: 5,
    date: "2023",
  },
  {
    name: "Amanda Foster",
    role: "First-Time Luxury Buyer",
    location: "MacDonald Highlands",
    content: "Buying our first luxury home was intimidating, but Dr. Jan made the process smooth and educational. She explained every detail, from HOA structures to DragonRidge membership options. Her patience and expertise helped us find the perfect home within our budget. We highly recommend her to anyone looking in MacDonald Highlands.",
    rating: 5,
    date: "2024",
  },
  {
    name: "James & Patricia Anderson",
    role: "Off-Market Property Buyers",
    location: "Private Sale",
    content: "We found our dream home through Dr. Jan's off-market network before it was publicly listed. Her access to pocket listings gave us a significant advantage, and we were able to negotiate favorable terms in a private transaction. Her discretion and professionalism throughout the process were exceptional.",
    rating: 5,
    date: "2024",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <RealEstateAgentSchema />

      <PageHero
        title="Client Testimonials"
        subtitle="What MacDonald Highlands sellers and buyers say about working with Dr. Jan Duffy"
        support="Listing specialist service measured in closed outcomes and client trust."
        imageSrc={siteConfig.images.whyListingSpecialist}
        imageAlt="Luxury listing presentation materials from Dr. Jan Duffy"
        align="left"
        primaryCta={{
          label: "Book on Calendly",
          calendlyEvent: "listing",
          utmContent: "testimonials-hero",
        }}
        secondaryCta={{
          label: "Contact Form",
          href: "/contact",
          variant: "ghost",
        }}
      />

      <OfficeListingsBelowHero
        title="Current Office Listings"
        description="Browse live inventory from Dr. Jan Duffy’s Berkshire Hathaway HomeServices Nevada Properties office."
        utmContent="testimonials"
      />


      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Trusted by MacDonald Highlands Homeowners
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              With {siteConfig.agent.experience}, <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy</Link> has built a reputation for excellence in MacDonald Highlands real estate. Our clients consistently praise our expertise, professionalism, and results-driven approach. Read what they have to say about their experiences buying, selling, and investing in Henderson&apos;s premier guard-gated community. Explore our <Link href="/services" className="text-primary-600 hover:underline font-semibold">comprehensive services</Link> or learn about the <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands community</Link>.
            </p>
            <p className="text-lg text-neutral-700 mb-8">
              These testimonials represent real experiences from clients who have trusted Dr. Jan for their MacDonald Highlands real estate needs. From first-time luxury buyers to experienced investors, from local sellers to international relocations, our clients consistently highlight our deep community knowledge, attention to detail, and commitment to achieving exceptional results.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src="/photos/community/optimized/clubhouse-2-960.webp"
                  alt="DragonRidge Country Club in MacDonald Highlands"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src="/photos/community/optimized/golf-lifestyle-00012-alt-960.webp"
                  alt="MacDonald Highlands luxury lifestyle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src="/photos/community/optimized/guard-gate-0001-1024-960.webp"
                  alt="MacDonald Highlands guard-gated community"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src="/photos/community/optimized/pool-full-1280.webp"
                  alt="Resort-style amenities in MacDonald Highlands"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-DEFAULT text-xl">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                  <p className="text-neutral-500 text-xs mt-1">{testimonial.location} • {testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Dr. Jan Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              What Clients Value Most
            </h2>
            
            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Deep MacDonald Highlands Market Knowledge
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Clients consistently praise Dr. Jan&apos;s intimate knowledge of MacDonald Highlands, from understanding view premiums and lot positioning to navigating HOA protocols and DragonRidge membership processes. This local expertise ensures clients make informed decisions based on comprehensive market intelligence, not generic real estate advice. Whether evaluating a property&apos;s value or positioning it for sale, this deep market knowledge delivers results.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Exceptional Communication & Responsiveness
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury real estate transactions require constant communication and coordination. Clients appreciate Dr. Jan&apos;s proactive communication style, regular updates on market activity and transaction progress, and prompt responses to questions and concerns. This level of communication ensures clients always know where things stand and can make informed decisions throughout the process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Results-Driven Approach & Negotiation Expertise
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              While personalized service is important, results matter most. Clients consistently highlight Dr. Jan&apos;s ability to achieve exceptional outcomes—whether it&apos;s selling properties quickly at optimal prices, negotiating favorable terms, or identifying investment opportunities with strong potential. This results-driven approach, combined with sophisticated negotiation skills, delivers value that exceeds expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              White-Glove Service & Attention to Detail
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury real estate transactions require meticulous attention to detail, from property preparation and staging to photography coordination and closing management. Clients appreciate the white-glove service that ensures every aspect of the transaction is handled professionally. This attention to detail prevents problems, ensures smooth transactions, and delivers outcomes that reflect the luxury standards clients expect.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Access to Exclusive Opportunities
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many clients highlight the value of Dr. Jan&apos;s network and relationships, which provide access to off-market properties, pocket listings, and exclusive opportunities not available through traditional channels. This access can be the difference between finding your dream MacDonald Highlands property and settling for what&apos;s publicly available. For sellers, it means reaching qualified buyers through exclusive networks that maximize marketing effectiveness.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Long-Term Relationship Building
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              The relationship doesn&apos;t end at closing. Many clients return for additional transactions, referrals, or ongoing market insights. This long-term approach means Dr. Jan invests in building relationships that extend beyond individual transactions, providing ongoing value and support as clients&apos; real estate needs evolve. This commitment to long-term relationships demonstrates a focus on client success, not just transaction completion.
            </p>
          </div>
        </div>
      </section>

      <FaqSchema faqs={testimonialsFaqs} />
      <FaqSection title="Testimonials FAQs" faqs={testimonialsFaqs} />

      <NapMapSection />
      <ConsultationBand
        source="testimonials"
        calendlyEvent="listing"
        title="Ready to Experience Listing Specialist Service?"
      />

    </>
  );
}


