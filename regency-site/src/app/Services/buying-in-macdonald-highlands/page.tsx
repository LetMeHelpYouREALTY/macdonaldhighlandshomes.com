import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Buying in MacDonald Highlands: Your Insider Advantage | Dr. Jan Duffy",
  description: "Private community access, DragonRidge membership guidance, new construction consultation, and lot selection for buying your dream MacDonald Highlands home.",
  keywords: "buying MacDonald Highlands home, DragonRidge Country Club, new construction Henderson, guard-gated community, luxury home buying",
};

const serviceName = "Buying in MacDonald Highlands";
const serviceDescription = "Comprehensive luxury home buying services including private community access, DragonRidge Country Club membership guidance, new construction vs. resale consultation, lot selection, and inspection coordination.";

export default function BuyingPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Buying in MacDonald Highlands: Your Insider Advantage
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Navigate Henderson&apos;s premier guard-gated community with expert guidance from a neighborhood specialist
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Private Community Access & Tour Scheduling</h2>
            <p className="text-lg text-neutral-700 mb-6">
              As a guard-gated community, MacDonald Highlands requires proper authorization for property viewings. We handle all gate access coordination, ensuring smooth entry for your private tours while respecting the community&apos;s security protocols.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club Membership Guidance</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Many MacDonald Highlands properties include or are eligible for DragonRidge Country Club membership. We guide you through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Membership transfer processes and fees</li>
              <li>Golf course frontage premium analysis</li>
              <li>Club amenities and access levels</li>
              <li>Membership requirements for new residents</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">New Construction vs. Resale Consultation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands offers both stunning resale properties and opportunities for custom new construction. We help you evaluate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Timeline considerations (immediate move-in vs. 12-18 month build)</li>
              <li>Cost comparisons including customization options</li>
              <li>Lot availability and view premiums</li>
              <li>Resale value potential of new vs. established homes</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Lot Selection for Custom Builds</h3>
            <p className="text-lg text-neutral-700 mb-6">
              If you&apos;re building your dream home, lot selection is critical. We provide insights on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Strip view angles and premium positioning</li>
              <li>Lot size and topography considerations</li>
              <li>Golf course frontage vs. mountain view trade-offs</li>
              <li>Privacy and orientation optimization</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Builder Reputation Insights</h3>
            <p className="text-lg text-neutral-700 mb-6">
              With decades of experience in the Henderson luxury market, we have deep knowledge of local builders&apos; track records, quality standards, and customer service reputations. We&apos;ll help you choose a builder who aligns with your vision and timeline.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">HOA & Gate Community Orientation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding community rules, HOA fees, and gate protocols is essential. We provide comprehensive orientation on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>HOA fee structures and what they cover</li>
              <li>Architectural review processes for modifications</li>
              <li>Gate access procedures for residents and guests</li>
              <li>Community amenities and maintenance standards</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Mountain/Strip View Premium Analysis</h3>
            <p className="text-lg text-neutral-700 mb-6">
              View quality significantly impacts property values in MacDonald Highlands. We analyze view premiums based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Panoramic Strip view angles and clarity</li>
              <li>Mountain range vistas and sunset positioning</li>
              <li>Future development impact on views</li>
              <li>Historical appreciation of view properties</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Inspection Coordination for Luxury Features</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury homes require specialized inspection expertise. We coordinate inspections for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Custom pools, spas, and water features</li>
              <li>Smart home automation systems</li>
              <li>High-end HVAC and mechanical systems</li>
              <li>Elevators, wine cellars, and specialty features</li>
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
                Schedule Your Private Community Tour
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Experience MacDonald Highlands firsthand with a guided tour of available properties and the community.
              </p>
              <ContactForm
                formTitle="Request a Private Tour"
                formDescription="Tell us what you're looking for and we'll arrange a personalized community tour."
                ctaText="Schedule Tour"
                source="buying-service"
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
