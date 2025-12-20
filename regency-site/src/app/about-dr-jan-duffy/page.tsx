import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy | MacDonald Highlands Real Estate Expert",
  description: `Learn about ${siteConfig.agent.name}, ${siteConfig.agent.title} specializing in MacDonald Highlands luxury real estate. ${siteConfig.agent.experience} with ${siteConfig.agent.brokerage}.`,
  keywords: "Dr. Jan Duffy REALTOR, MacDonald Highlands real estate agent, Henderson luxury homes expert, Berkshire Hathaway HomeServices",
};

export default function AboutPage() {
  return (
    <>
      <RealEstateAgentSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            About Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            MacDonald Highlands Real Estate Expert & Luxury Property Specialist
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/Image/person1.jpeg"
                    alt={`${siteConfig.agent.name}, ${siteConfig.agent.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  {siteConfig.agent.name}, {siteConfig.agent.title}
                </h2>
                <p className="text-lg text-neutral-700 mb-4">
                  <strong>Experience:</strong> {siteConfig.agent.experience}
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                  <strong>Credentials:</strong> {siteConfig.agent.credentials}
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                  <strong>License:</strong> {siteConfig.agent.license}
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                  <strong>Brokerage:</strong> {siteConfig.agent.brokerage}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold mb-6">A Trusted Expert in MacDonald Highlands</h2>
              <p className="text-lg text-neutral-700 mb-6">
                With over {siteConfig.agent.experience.split("+")[0]} families served and more than $127 million in sales volume, Dr. Jan Duffy has established herself as Henderson's premier luxury real estate specialist. Her deep knowledge of MacDonald Highlands, combined with advanced academic credentials and the backing of Berkshire Hathaway HomeServices Nevada Properties, provides clients with unmatched expertise in the ultra-luxury market.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Why MacDonald Highlands?</h3>
              <p className="text-lg text-neutral-700 mb-6">
                MacDonald Highlands represents the pinnacle of luxury living in Henderson—a guard-gated community where estate homes command $1M to $15M+ and offer unparalleled Strip views, DragonRidge Country Club access, and privacy. Dr. Jan's specialization in this exclusive community means clients benefit from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
                <li>Intimate knowledge of every neighborhood (Vu, SkyVu, Vue Pointe)</li>
                <li>Relationships with builders, developers, and community leadership</li>
                <li>Understanding of view premiums, lot values, and market trends</li>
                <li>Access to off-market opportunities and pocket listings</li>
                <li>Expertise in luxury transaction nuances and negotiations</li>
              </ul>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Advanced Credentials & Education</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Dr. Jan Duffy's {siteConfig.agent.credentials} reflects a commitment to excellence and analytical rigor that translates directly to her real estate practice. This advanced education, combined with continuous professional development in luxury real estate, ensures clients receive sophisticated market analysis and strategic guidance.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Berkshire Hathaway HomeServices Backing</h3>
              <p className="text-lg text-neutral-700 mb-6">
                As part of {siteConfig.agent.brokerage}, Dr. Jan leverages one of the most respected brands in real estate. This affiliation provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
                <li>Access to a global network of luxury buyers and sellers</li>
                <li>Marketing resources and technology platforms</li>
                <li>Professional support and transaction coordination</li>
                <li>Brand recognition and trust in luxury markets</li>
              </ul>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Specialties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {siteConfig.agent.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary-600 mr-3">✓</span>
                    <span className="text-neutral-700">{specialty}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Client Commitment</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Every client relationship is built on trust, transparency, and results. Whether you're buying your first MacDonald Highlands home, selling a multi-million dollar estate, or exploring investment opportunities, Dr. Jan provides personalized service tailored to your unique needs and timeline.
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
                Work With Dr. Jan Duffy
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Ready to buy, sell, or invest in MacDonald Highlands? Let's discuss your real estate goals.
              </p>
              <ContactForm
                formTitle="Get in Touch"
                formDescription="Schedule a consultation to discuss your MacDonald Highlands real estate needs."
                ctaText="Schedule Consultation"
                source="about-page"
              />
              <div className="text-center mt-6">
                <p className="text-neutral-600 mb-4">Or call directly:</p>
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
