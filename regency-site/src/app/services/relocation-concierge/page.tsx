import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Relocating to MacDonald Highlands: White-Glove Service | Dr. Jan Duffy",
  description: "Executive relocation support for moving to MacDonald Highlands. Virtual tours, area orientation, temporary housing, and timeline management for corporate moves.",
  keywords: "relocating to Henderson, executive relocation Las Vegas, MacDonald Highlands relocation, corporate relocation services",
  alternates: {
    canonical: 'https://macdonaldhighlandshomes.com/services/relocation-concierge',
  },
  openGraph: {
    title: "Relocating to MacDonald Highlands: White-Glove Service | Dr. Jan Duffy",
    description: "Executive relocation support for moving to MacDonald Highlands. Virtual tours, area orientation, temporary housing, and timeline management for corporate moves.",
    url: 'https://macdonaldhighlandshomes.com/services/relocation-concierge',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Executive relocation services to MacDonald Highlands luxury community in Henderson, Nevada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Relocating to MacDonald Highlands: White-Glove Service | Dr. Jan Duffy",
    description: "Executive relocation support for moving to MacDonald Highlands. Virtual tours, area orientation, temporary housing, and timeline management for corporate moves.",
    images: [
      {
        url: 'https://macdonaldhighlandshomes.com/photos/community/view-lifestyle-00024-full.jpg',
        alt: 'Executive relocation services to MacDonald Highlands luxury community in Henderson, Nevada',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const serviceName = "Relocation Concierge";
const serviceDescription = "Comprehensive executive relocation services including virtual tour packages, area orientation, temporary housing coordination, moving vendor referrals, and timeline management for corporate moves to MacDonald Highlands.";

export default function RelocationPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/relocation-concierge"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Relocating to MacDonald Highlands: White-Glove Service
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Seamless executive relocation support for your move to Henderson&apos;s premier luxury community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Executive Relocation Support</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Moving to MacDonald Highlands from another state or country requires careful coordination and local expertise. We provide comprehensive relocation services designed for executives, professionals, and high-net-worth individuals who demand excellence in every detail. Our white-glove approach ensures every aspect of your relocation is handled professionally, from initial property search through post-move settlement. This comprehensive support minimizes stress and ensures a smooth transition to MacDonald Highlands living.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Virtual Tour Packages for Out-of-State Buyers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/view-lifestyle-00024-full.jpg"
                  alt="MacDonald Highlands luxury community perfect for relocating executives"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/clubhouse-full.jpg"
                  alt="DragonRidge Country Club amenities for relocating families"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              Can&apos;t visit in person? We create comprehensive virtual tour experiences including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Live video walkthroughs via Zoom or FaceTime</li>
              <li>Professional 360° virtual tours</li>
              <li>Detailed property videos highlighting key features</li>
              <li>Neighborhood and community amenity tours</li>
              <li>Interactive floor plans and measurements</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              These virtual experiences allow you to evaluate properties remotely, making informed decisions before traveling to Henderson. Our virtual tour packages provide the detailed information needed to narrow down property choices and make efficient use of in-person visit time.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Area Orientation: Schools, Dining, Healthcare, Airports</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Getting acclimated to a new area is essential. We provide comprehensive orientation on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>Top-rated public and private schools</li>
                  <li>School district boundaries and enrollment</li>
                  <li>College preparatory programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Dining & Lifestyle</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>Fine dining and casual restaurants</li>
                  <li>Shopping centers and boutiques</li>
                  <li>Entertainment and cultural venues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Healthcare</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>Top hospitals and medical centers</li>
                  <li>Specialist referrals</li>
                  <li>Urgent care facilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Transportation</h4>
                <ul className="list-disc pl-6 space-y-1 text-neutral-700">
                  <li>McCarran International Airport access</li>
                  <li>Private jet facilities</li>
                  <li>Local transportation options</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              This comprehensive orientation helps you understand the area and make informed decisions about neighborhoods, schools, and lifestyle factors. Understanding local resources ensures you can quickly settle into MacDonald Highlands living with confidence.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Temporary Housing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              While your new home is being prepared or you&apos;re waiting for closing, we coordinate temporary housing options including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Luxury short-term rentals in MacDonald Highlands or nearby communities</li>
              <li>Extended-stay hotels with full amenities</li>
              <li>Furnished corporate housing options</li>
              <li>Negotiated rates for extended stays</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Our temporary housing coordination ensures you have comfortable accommodations during your transition, whether you need a few weeks or several months. We work with trusted providers to secure quality temporary housing that meets luxury standards.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Moving Vendor Referrals</h3>
            <p className="text-lg text-neutral-700 mb-6">
              We maintain relationships with trusted service providers for your relocation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Luxury moving companies specializing in high-value items</li>
              <li>Fine art and wine collection movers</li>
              <li>Interior designers and home staging professionals</li>
              <li>Utility connection and setup services</li>
              <li>Home security system installation</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              These referrals ensure you work with professionals who understand luxury homes and can handle high-value items with appropriate care. Our network of trusted providers delivers quality results and understands the unique needs of luxury property owners.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Timeline Management for Corporate Moves</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Corporate relocations often have strict timelines. We provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Detailed project timelines with milestones</li>
              <li>Coordination with HR and relocation departments</li>
              <li>Regular status updates and communication</li>
              <li>Contingency planning for delays</li>
              <li>Post-move follow-up and support</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Our timeline management ensures your relocation stays on track, meeting corporate requirements while minimizing disruption to your work and personal life. This coordination is particularly valuable for executives managing relocations while maintaining demanding work schedules.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Comprehensive Relocation Services: Every Detail Covered</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Relocating to MacDonald Highlands involves more than just finding a home—it requires comprehensive support to ensure a smooth transition. Our relocation concierge services address every aspect of your move, from initial research through post-move settlement, ensuring nothing falls through the cracks. This comprehensive approach minimizes stress and ensures successful relocations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Pre-Move Planning & Research</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Before you even visit MacDonald Highlands, we provide comprehensive research and planning support. This includes detailed community information, neighborhood comparisons, school district research, and lifestyle assessments. We help you understand what to expect, answer questions about the community, and provide insights that help you make informed decisions about your relocation. This pre-move planning ensures you arrive with realistic expectations and a clear understanding of MacDonald Highlands living.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Property Search & Selection Support</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Finding the right MacDonald Highlands property requires understanding your lifestyle preferences, budget, and long-term goals. We provide personalized property search support, identifying homes that match your criteria and arranging private tours. For out-of-state buyers, we create comprehensive virtual tour experiences that allow you to evaluate properties remotely. This search support ensures you find a home that truly fits your needs, not just what&apos;s available.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Community Integration & Orientation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Becoming part of the MacDonald Highlands community involves understanding HOA protocols, gate access procedures, community amenities, and local services. We provide comprehensive orientation that helps you feel at home from day one. This includes introductions to community resources, explanations of HOA rules and benefits, and guidance on accessing community amenities. This orientation support ensures a smooth transition into MacDonald Highlands living.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Service Provider Network & Referrals</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Settling into a new community requires connecting with trusted service providers. Our network includes interior designers, landscape architects, pool maintenance companies, home security providers, and other professionals who understand luxury homes and MacDonald Highlands standards. These referrals ensure you work with professionals who deliver quality results and understand the unique needs of luxury property owners. This network access saves time and ensures quality service delivery.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Post-Move Support & Follow-Up</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our relationship doesn&apos;t end when you move in. We provide post-move support including follow-up visits, additional service referrals, and ongoing market insights. If questions arise or you need additional assistance, we&apos;re here to help. This ongoing support ensures your transition to MacDonald Highlands is successful long-term, not just during the initial move. Our commitment to long-term relationships means you have ongoing support as you settle into your new community.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why Relocation Concierge Services Matter</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Moving to a new luxury community involves numerous details that can be overwhelming, especially when relocating from another state or country. Professional relocation concierge services ensure every aspect of your move is handled professionally, reducing stress and ensuring a smooth transition. Understanding the value of these services helps you appreciate the benefits of professional relocation support.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Time Savings & Efficiency</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Relocating involves countless tasks, from property research to utility setup to service provider connections. Our concierge services handle these details efficiently, saving you time and ensuring nothing is overlooked. This efficiency is particularly valuable for busy executives and professionals who need to focus on work while managing a relocation. Our coordination ensures tasks are completed efficiently and correctly, saving you significant time and effort.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Local Expertise & Insider Knowledge</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding a new community requires local knowledge that only comes from experience. Our deep knowledge of MacDonald Highlands, Henderson, and the Las Vegas area ensures you receive accurate information and valuable insights. This local expertise helps you make informed decisions and avoid common relocation pitfalls. Our insider knowledge provides advantages that generic relocation services cannot match.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Reduced Stress & Peace of Mind</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Relocating is inherently stressful, but professional concierge services significantly reduce that stress by handling details and providing support throughout the process. Knowing that experienced professionals are managing your relocation provides peace of mind and allows you to focus on other priorities. This stress reduction is invaluable during what can be a challenging transition period. Our comprehensive support ensures you can focus on work and family while we handle relocation details.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Cost Efficiency Through Negotiated Rates</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our relationships with service providers often result in negotiated rates and preferred pricing for relocation clients. These cost savings can offset concierge service fees while ensuring you work with quality professionals. The value of these relationships extends beyond cost savings to include quality assurance and reliable service delivery. These negotiated rates provide value that enhances the overall relocation experience.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Office Listings Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Current MacDonald Highlands Listings
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Browse available luxury homes for sale in Henderson&apos;s premier guard-gated community. Use the filters below to find your perfect property.
              </p>
            </div>
            
            <RealScoutWidgetWrapper />
            
            <div className="mt-8 text-center">
              <p className="text-neutral-600 mb-4">
                Looking for off-market opportunities?{" "}
                <Link href="/services/off-market-opportunities" className="text-primary-600 font-semibold hover:underline">
                  Join our private buyer list
                </Link>
                .
              </p>
              <Link 
                href="/listings" 
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                View All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Start Your Relocation Plan
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Let us handle the details of your move to MacDonald Highlands. Get started with a consultation.
              </p>
              <ContactForm
                formTitle="Begin Your Relocation"
                formDescription="Tell us about your relocation timeline and needs."
                ctaText="Start Planning"
                source="relocation-service"
              />
              <div className="text-center mt-6">
                <p className="text-neutral-600 mb-4">Or call us directly:</p>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-2xl font-bold text-primary-600 hover:underline"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
