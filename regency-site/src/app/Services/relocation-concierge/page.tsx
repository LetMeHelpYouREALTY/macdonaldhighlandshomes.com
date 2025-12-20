import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Relocating to MacDonald Highlands: White-Glove Service | Dr. Jan Duffy",
  description: "Executive relocation support for moving to MacDonald Highlands. Virtual tours, area orientation, temporary housing, and timeline management for corporate moves.",
  keywords: "relocating to Henderson, executive relocation Las Vegas, MacDonald Highlands relocation, corporate relocation services",
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
            Seamless executive relocation support for your move to Henderson's premier luxury community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Executive Relocation Support</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Moving to MacDonald Highlands from another state or country requires careful coordination and local expertise. We provide comprehensive relocation services designed for executives, professionals, and high-net-worth individuals who demand excellence in every detail.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Virtual Tour Packages for Out-of-State Buyers</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Can't visit in person? We create comprehensive virtual tour experiences including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Live video walkthroughs via Zoom or FaceTime</li>
              <li>Professional 360° virtual tours</li>
              <li>Detailed property videos highlighting key features</li>
              <li>Neighborhood and community amenity tours</li>
              <li>Interactive floor plans and measurements</li>
            </ul>

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

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Temporary Housing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              While your new home is being prepared or you're waiting for closing, we coordinate temporary housing options including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Luxury short-term rentals in MacDonald Highlands or nearby communities</li>
              <li>Extended-stay hotels with full amenities</li>
              <li>Furnished corporate housing options</li>
              <li>Negotiated rates for extended stays</li>
            </ul>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
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
