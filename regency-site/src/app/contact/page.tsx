import { Metadata } from "next";
import Link from "next/link";
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
            Let&apos;s discuss your MacDonald Highlands real estate goals
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              Let&apos;s Discuss Your MacDonald Highlands Real Estate Goals
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Whether you&apos;re buying, selling, or exploring investment opportunities in MacDonald Highlands, we&apos;re here to provide expert guidance tailored to your unique needs. With deep community knowledge, proven results, and a commitment to excellence, we deliver outcomes that exceed expectations. Contact us today to begin your MacDonald Highlands real estate journey. Learn more about <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:underline font-semibold">Dr. Jan Duffy</Link>, explore our <Link href="/services" className="text-primary-600 hover:underline font-semibold">services</Link>, or discover the <Link href="/macdonald-highlands-community" className="text-primary-600 hover:underline font-semibold">MacDonald Highlands community</Link>.
            </p>
            <p className="text-lg text-neutral-700 mb-12">
              Our consultation process begins with understanding your goals, timeline, and specific requirements. Whether you&apos;re selling a $15M estate, buying your first luxury home, or exploring investment opportunities, we provide personalized service that addresses your unique situation. Every client relationship is built on trust, transparency, and results—values that have earned us the trust of 500+ families throughout MacDonald Highlands.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Send a Message</h2>
                <p className="text-neutral-600 mb-6">
                  Fill out the form below and we&apos;ll respond within 24 hours. All inquiries are confidential and come with no obligation.
                </p>
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
                    <h3 className="text-xl font-semibold mb-3">Office Location</h3>
                    <p className="text-lg text-neutral-700">
                      {siteConfig.contact.office.full}
                    </p>
                    <p className="text-neutral-600 mt-2">
                      Service Area: {siteConfig.contact.address.full}
                    </p>
                    <p className="text-neutral-600 mt-1">
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

      {/* What to Expect Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">
              What to Expect When You Contact Us
            </h2>
            
            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Prompt Response & Initial Consultation
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              We respond to all inquiries within 24 hours, often much sooner. Your initial consultation is completely confidential and comes with no obligation. We&apos;ll discuss your real estate goals, timeline, and specific needs, providing honest market insights and strategic recommendations. This consultation helps us understand your situation and allows you to evaluate whether we&apos;re the right fit for your MacDonald Highlands real estate needs.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Comprehensive Needs Assessment
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding your goals is the foundation of exceptional service. We&apos;ll ask questions about your timeline, budget, must-have features, and long-term objectives. For sellers, this includes understanding your motivation, desired timeline, and property characteristics. For buyers, we explore lifestyle preferences, investment goals, and specific requirements. This comprehensive assessment ensures we develop strategies tailored to your unique situation.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Market Insights & Strategic Recommendations
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Based on your goals and current market conditions, we provide strategic recommendations backed by comprehensive market analysis. For sellers, this includes pricing strategies, marketing approaches, and timeline projections. For buyers, we offer insights on property values, market trends, and investment potential. These recommendations are data-driven and reflect our deep knowledge of the MacDonald Highlands market.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Customized Service Plan Development
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Every client receives a customized service plan that addresses their specific needs and goals. This plan outlines the strategies, timelines, and resources we&apos;ll use to achieve your objectives. Whether you&apos;re selling a luxury estate, buying your dream home, or exploring investment opportunities, your service plan is tailored to maximize results while meeting your timeline expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Ongoing Communication & Support
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Throughout your real estate journey, we maintain regular communication, providing updates on market activity, transaction progress, and any developments that impact your goals. This ongoing communication ensures you&apos;re always informed and can make decisions based on current information. We&apos;re available to answer questions, address concerns, and provide guidance whenever you need it.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6 text-center">
              Why Choose Dr. Jan Duffy for Your MacDonald Highlands Real Estate Needs
            </h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              With 500+ families served and $127M+ in sales, we bring proven expertise to every MacDonald Highlands real estate transaction. Our combination of local knowledge, luxury market specialization, and personalized service delivers results that exceed expectations.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Deep MacDonald Highlands Community Knowledge
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our intimate understanding of MacDonald Highlands extends beyond property listings to include neighborhood characteristics, view premiums, lot positioning advantages, HOA protocols, and community amenities. This local expertise ensures you receive insights that generic real estate agents cannot provide, helping you make informed decisions based on comprehensive community knowledge.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Luxury Market Specialization & High-Net-Worth Experience
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              The luxury real estate market operates differently than standard residential sales, requiring specialized marketing strategies, sophisticated buyer networks, and an understanding of high-net-worth client expectations. We excel in this arena, having successfully navigated complex transactions involving architectural photography, private showings, off-market listings, and international buyer coordination. This luxury market specialization ensures your MacDonald Highlands property receives the professional attention it deserves.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Proven Track Record & Client Satisfaction
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Our success metrics—500+ families served, $127M+ in sales volume—demonstrate a commitment to achieving exceptional results. We don&apos;t just list properties or show homes; we strategically position properties in the market, connect them with qualified buyers, and negotiate deals that maximize value. This proven track record gives you confidence that your MacDonald Highlands real estate transaction is in expert hands.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">
              Comprehensive Service Portfolio
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              From initial consultation through closing and beyond, we provide comprehensive support tailored to luxury market standards. Our services include pre-listing strategy development, professional staging consultation, architectural photography, private showing coordination, global luxury buyer network access, relocation concierge services, investment advisory, and off-market opportunity access. Whatever your MacDonald Highlands real estate needs, we have the expertise and resources to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


