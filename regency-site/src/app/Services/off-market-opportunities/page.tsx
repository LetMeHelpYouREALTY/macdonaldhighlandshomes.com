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

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">The Off-Market Advantage: Why Private Sales Benefit Everyone</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Off-market transactions in luxury real estate offer advantages that public listings cannot match. Understanding these benefits helps both buyers and sellers appreciate the value of private market participation in MacDonald Highlands real estate.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Benefits for Sellers: Privacy, Control, and Efficiency</h3>
            <p className="text-lg text-neutral-700 mb-6">
              High-profile sellers often prefer off-market transactions to maintain privacy and avoid public exposure. Off-market selling provides complete discretion, allowing properties to be marketed only to pre-qualified buyers without public MLS listings or open houses. This privacy is particularly valuable for celebrities, executives, public figures, or anyone who values discretion in their real estate transactions.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Off-market sales also provide sellers with greater control over the marketing process. Sellers can control who sees their property, when showings occur, and how information is shared. This control ensures that only serious, qualified buyers view the property, reducing time spent on unqualified inquiries and maintaining the property&apos;s privacy throughout the process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Benefits for Buyers: Exclusive Access and Better Terms</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Buyers in our exclusive network gain access to properties that may never be publicly listed, providing opportunities that aren&apos;t available through traditional channels. This exclusive access can be the difference between finding your dream MacDonald Highlands property and settling for what&apos;s publicly available. Off-market properties often have less competition, allowing buyers to negotiate more favorable terms.
            </p>
            <p className="text-lg text-neutral-700 mb-6">
              Private transactions also allow for more flexible negotiation structures. Without the pressure of public listings and multiple competing offers, buyers and sellers can work together to structure deals that meet both parties&apos; objectives. This flexibility often results in smoother transactions and better outcomes for everyone involved.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">How Our Off-Market Network Works</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Our exclusive off-market network connects qualified buyers with exclusive properties through a carefully managed process designed to maintain privacy while maximizing marketing effectiveness. Understanding how this network operates helps both buyers and sellers appreciate the value of participating in the private market.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Seller Enrollment & Property Evaluation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Sellers interested in off-market marketing begin with a comprehensive property evaluation and market analysis. We assess the property&apos;s characteristics, determine appropriate pricing strategies, and develop marketing plans tailored to off-market distribution. This evaluation ensures properties are positioned effectively within our exclusive network, reaching qualified buyers while maintaining privacy.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Buyer Qualification & Network Access</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Buyers seeking off-market access must demonstrate financial qualification and serious intent. Our network includes pre-qualified buyers who have been vetted for financial capability and purchase readiness. This qualification process ensures that sellers receive inquiries only from buyers who can actually complete transactions, maintaining efficiency and protecting seller privacy.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Discreet Marketing & Distribution</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Off-market properties are marketed through private channels that maintain complete discretion. Marketing materials are distributed only to our exclusive network, with no public listings or exposure. This discreet approach ensures privacy while still reaching qualified buyers who are actively seeking MacDonald Highlands properties. The controlled distribution maintains property privacy while maximizing marketing effectiveness.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Confidential Showing Coordination</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Private showings are coordinated with strict confidentiality protocols. Buyers sign confidentiality agreements, and showings are scheduled to respect seller privacy and security. This controlled access ensures that properties are shown only to serious buyers while maintaining the discretion that off-market sellers value. The coordination process balances buyer access with seller privacy requirements.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Types of Off-Market Opportunities in MacDonald Highlands</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Off-market opportunities in MacDonald Highlands take various forms, each offering unique advantages for buyers and sellers. Understanding these different types helps you identify opportunities that match your goals and timeline.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Pocket Listings: Pre-MLS Exclusive Properties</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Pocket listings are properties that are marketed privately before being listed on MLS. These properties are often tested in the private market first, allowing sellers to gauge interest and potentially sell without public exposure. For buyers, pocket listings provide first access to properties that may never reach public listings, offering opportunities to purchase before competitive bidding begins.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Coming Soon Properties: Early Notification Advantage</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties that will be listed in the next 30-90 days are often shared with our exclusive network before public listing. This coming soon access allows buyers to evaluate properties and potentially make offers before they hit MLS. For sellers, sharing coming soon information with qualified buyers can result in pre-listing sales, avoiding the time and expense of public marketing.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Whisper Listings: Completely Private Sales</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Some properties are marketed exclusively through whisper listings—completely private sales that never appear on public databases. These ultra-discreet transactions are ideal for high-profile sellers who require absolute privacy. Buyers in our network receive access to these exclusive opportunities that aren&apos;t available through any other channel.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">New Construction Pre-Sales & Lot Releases</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Developers and builders often offer pre-sales and lot releases to our exclusive network before public availability. This early access allows buyers to secure prime lots, select preferred floor plans, and potentially negotiate better terms. For investors, pre-construction opportunities can provide attractive pricing and customization options not available in resale properties.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Maintaining Privacy & Discretion in Off-Market Transactions</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Privacy and discretion are paramount in off-market transactions, requiring strict protocols and careful management. Our commitment to maintaining confidentiality ensures that both buyers and sellers can participate in private market transactions with confidence.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Confidentiality Agreements & Protocols</h3>
            <p className="text-lg text-neutral-700 mb-6">
              All participants in our off-market network agree to strict confidentiality protocols. Buyers sign confidentiality agreements before viewing properties, and all information is shared only on a need-to-know basis. These protocols ensure that property details, seller information, and transaction terms remain private throughout the process.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Controlled Information Distribution</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Information about off-market properties is distributed only to qualified buyers who match the property&apos;s profile. This controlled distribution ensures that property information doesn&apos;t leak into public channels while still reaching appropriate buyers. The selective distribution maintains privacy while maximizing marketing effectiveness.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Secure Transaction Management</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Off-market transactions require secure management of all documentation and communications. We maintain strict protocols for handling sensitive information, ensuring that transaction details remain confidential throughout the process. This secure management protects both buyer and seller privacy while facilitating successful transactions.
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
