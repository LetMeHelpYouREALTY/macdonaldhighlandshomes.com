import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Selling Your MacDonald Highlands Luxury Home | Dr. Jan Duffy",
  description: "Expert pre-listing strategy, professional staging, architectural photography, and global luxury buyer network for selling your $1M-$15M+ MacDonald Highlands estate home.",
  keywords: "selling MacDonald Highlands home, luxury home staging, architectural photography, off-market real estate, 1031 exchange",
};

const serviceName = "Selling Your MacDonald Highlands Luxury Home";
const serviceDescription = "Comprehensive luxury home selling services including pre-listing strategy, professional staging consultation, architectural photography, private showing coordination, and access to global luxury buyer networks.";

export default function SellingPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Selling Your MacDonald Highlands Luxury Home
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Expert guidance for selling your $1M-$15M+ estate property with maximum return and minimal disruption
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Pre-Listing Strategy for Luxury Properties</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Selling a luxury home in MacDonald Highlands requires a sophisticated approach that goes far beyond traditional real estate marketing. With properties ranging from $1M to $15M+, every detail matters—from initial pricing strategy to final closing coordination.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Professional Staging Consultation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              First impressions are everything in luxury real estate. We work with premier staging professionals who understand how to showcase your home's architectural features, maximize natural light, and create an aspirational lifestyle presentation that resonates with high-net-worth buyers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Architectural & Twilight Photography + Drone Aerials</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Your MacDonald Highlands home deserves photography that captures its true essence. We coordinate with specialized luxury real estate photographers who excel at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Architectural photography highlighting custom finishes and design</li>
              <li>Twilight photography showcasing your home's dramatic evening presence</li>
              <li>Drone aerials capturing panoramic Strip views and lot positioning</li>
              <li>Professional video tours for virtual buyer engagement</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Private Showing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Guard-gate logistics require careful coordination. We manage all aspects of private showings, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Gate access pre-authorization for qualified buyers</li>
              <li>Discreet scheduling that respects your privacy</li>
              <li>Security protocols for high-profile properties</li>
              <li>Follow-up with serious buyers only</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Discreet & Off-Market Marketing Options</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For high-profile sellers who value privacy, we offer exclusive off-market and pocket listing services. Your property can be marketed to our curated network of qualified buyers without public MLS exposure, ensuring complete discretion throughout the process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Global Luxury Buyer Network Access</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Through Berkshire Hathaway HomeServices' international network and our own connections, we connect your property with luxury buyers from around the world—executives relocating to Las Vegas, international investors, and high-net-worth individuals seeking a second home in Henderson.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Negotiation Expertise for High-Net-Worth Transactions</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Luxury real estate negotiations require finesse, market intelligence, and an understanding of complex transaction structures. We've successfully negotiated multi-million dollar deals, handling everything from inspection contingencies to custom closing terms.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">1031 Exchange Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              If you're selling to reinvest in another property, we coordinate with qualified intermediaries and tax advisors to ensure your 1031 exchange meets all IRS requirements and timelines, maximizing your tax advantages.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Request Your Confidential Home Valuation
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Get an expert market analysis for your MacDonald Highlands property. No obligation, no pressure—just honest, data-driven insights.
              </p>
              <ContactForm
                formTitle="Get Your Home Valuation"
                formDescription="Tell us about your property and we'll provide a comprehensive market analysis."
                ctaText="Request Valuation"
                source="selling-service"
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
