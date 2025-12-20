import { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | MacDonald Highlands Real Estate",
  description: `Contact ${siteConfig.agent.name} for MacDonald Highlands real estate services. Call ${siteConfig.contact.phoneFormatted} or fill out the contact form.`,
  keywords: "contact Dr. Jan Duffy, MacDonald Highlands REALTOR contact, Henderson real estate agent",
};

export default function ContactPage() {
  return (
    <>
      <RealEstateAgentSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Let's discuss your MacDonald Highlands real estate goals
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Send a Message</h2>
                <ContactForm
                  formTitle=""
                  formDescription=""
                  ctaText="Send Message"
                  source="contact-page"
                />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-2xl text-primary-600 font-bold hover:underline block"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                    <p className="text-neutral-600 mt-2">Available 7 days a week by appointment</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-lg text-primary-600 hover:underline block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-neutral-600 mt-2">We respond within 24 hours</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Service Area</h3>
                    <p className="text-lg text-neutral-700">
                      {siteConfig.contact.address.full}
                    </p>
                    <p className="text-neutral-600 mt-2">
                      Specializing in MacDonald Highlands and surrounding Henderson luxury communities
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Brokerage</h3>
                    <p className="text-lg text-neutral-700">
                      {siteConfig.agent.brokerage}
                    </p>
                    <p className="text-neutral-600 mt-2">
                      License: {siteConfig.agent.license}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
                    <div className="space-y-3">
                      <a
                        href="/services/luxury-home-valuation"
                        className="block text-primary-600 hover:underline font-semibold"
                      >
                        → Request Home Valuation
                      </a>
                      <a
                        href="/services/buying-in-macdonald-highlands"
                        className="block text-primary-600 hover:underline font-semibold"
                      >
                        → Schedule Community Tour
                      </a>
                      <a
                        href="/services/off-market-opportunities"
                        className="block text-primary-600 hover:underline font-semibold"
                      >
                        → Join Private Buyer List
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
