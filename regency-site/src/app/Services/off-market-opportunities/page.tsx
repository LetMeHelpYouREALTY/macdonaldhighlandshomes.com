import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Off-Market & Coming Soon: MacDonald Highlands Exclusives | Dr. Jan Duffy",
  description: "Access to pocket listings and off-market properties in MacDonald Highlands before they hit MLS. Privacy-focused selling and buyer waiting list registration.",
  keywords: "off-market MacDonald Highlands, pocket listings Henderson, exclusive real estate, pre-MLS listings, private real estate",
};

const serviceName = "Off-Market Opportunities";
const serviceDescription = "Exclusive access to off-market and pocket listings in MacDonald Highlands before they appear on MLS, including privacy-focused selling services and buyer waiting list registration.";

export default function OffMarketPage() {
  return (
    <>
      <RealEstateAgentSchema />
      <ServiceSchema 
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceUrl="https://macdonaldhighlandshomes.com/services/off-market-opportunities"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Off-Market & Coming Soon: MacDonald Highlands Exclusives
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Access to pocket listings and exclusive properties before they hit the public market
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Access to Pocket Listings Before MLS</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Many of the best MacDonald Highlands properties never make it to the public MLS. Through our extensive network of luxury real estate professionals, high-net-worth buyers, and community connections, we have access to exclusive &quot;pocket listings&quot; that are marketed privately before public listing.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              These off-market opportunities offer several advantages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>Less Competition:</strong> Properties are shown only to pre-qualified, serious buyers</li>
              <li><strong>Better Negotiation:</strong> Sellers are often more flexible in private transactions</li>
              <li><strong>First Access:</strong> See properties before they&apos;re publicly available</li>
              <li><strong>Privacy:</strong> Discreet transactions for high-profile buyers and sellers</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Privacy-Focused Selling for High-Profile Clients</h3>
            <p className="text-lg text-neutral-700 mb-6">
              For sellers who value discretion—celebrities, executives, public figures, or simply those who prefer privacy—we offer completely confidential off-market selling services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>No Public MLS Listing:</strong> Property is never listed publicly, maintaining complete privacy</li>
              <li><strong>Curated Buyer Network:</strong> Marketing only to pre-screened, qualified luxury buyers</li>
              <li><strong>Controlled Access:</strong> Strict showing protocols with signed confidentiality agreements</li>
              <li><strong>Discreet Marketing:</strong> Private marketing materials distributed only to our exclusive network</li>
              <li><strong>Media Protection:</strong> No public photos or addresses in marketing materials</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Buyer Waiting List Registration</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Serious buyers can join our exclusive waiting list to receive first notification of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>Coming Soon Properties:</strong> Properties that will list in the next 30-90 days</li>
              <li><strong>Off-Market Opportunities:</strong> Pocket listings available only to waiting list members</li>
              <li><strong>Price Reductions:</strong> Early notification of price adjustments on luxury properties</li>
              <li><strong>New Construction:</strong> Pre-construction opportunities and lot releases</li>
              <li><strong>Exclusive Events:</strong> Private open houses and preview events</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Waiting list members receive priority access and are notified before properties are shown to the general public.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">First-Look Advantage for Serious Buyers</h3>
            <p className="text-lg text-neutral-700 mb-6">
              In luxury real estate, timing is everything. By joining our exclusive network, you gain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Immediate notification when properties match your criteria</li>
              <li>Priority scheduling for private showings</li>
              <li>Access to seller motivation information not available publicly</li>
              <li>Opportunity to make offers before competitive bidding begins</li>
              <li>Relationship-based negotiation advantages</li>
            </ul>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
              <p className="text-lg font-semibold text-primary-900 mb-2">
                Why Off-Market Matters in Luxury Real Estate
              </p>
              <p className="text-neutral-700">
                In MacDonald Highlands, approximately 20-30% of luxury transactions occur off-market. These private sales often result in better terms for both buyers and sellers, making our exclusive network a valuable advantage for serious luxury real estate participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
                Join the Private Buyer List
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Get exclusive access to off-market properties and coming soon listings in MacDonald Highlands.
              </p>
              <ContactForm
                formTitle="Register for Exclusive Access"
                formDescription="Tell us what you're looking for and we'll add you to our private buyer network."
                ctaText="Join Waiting List"
                source="off-market-service"
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
