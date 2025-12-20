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
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl bg-neutral-100">
                  <Image
                    src="/Image/person1.jpeg"
                    alt={`${siteConfig.agent.name}, ${siteConfig.agent.title}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-lg"
                    priority
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
              <h2 className="text-3xl font-serif font-bold mb-6">A Trusted Expert in MacDonald Highlands Real Estate</h2>
              <p className="text-lg text-neutral-700 mb-6">
                With over {siteConfig.agent.experience.split("+")[0]} families served and more than $127 million in sales volume, Dr. Jan Duffy has established herself as Henderson&apos;s premier luxury real estate specialist. Her deep knowledge of MacDonald Highlands, combined with advanced academic credentials and the backing of Berkshire Hathaway HomeServices Nevada Properties, provides clients with unmatched expertise in the ultra-luxury market. This proven track record demonstrates not just success, but a commitment to excellence that has earned the trust of MacDonald Highlands homeowners, luxury property investors, and high-net-worth buyers and sellers throughout the Henderson area.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                What sets Dr. Jan apart in the MacDonald Highlands real estate market is her combination of local expertise, luxury market specialization, and personalized service. She doesn&apos;t just list properties—she strategically positions them in the market, connects them with qualified buyers through her global network, and negotiates deals that maximize value. This comprehensive approach has resulted in successful transactions ranging from $1M starter luxury homes to $15M+ estate properties, each handled with the same meticulous attention to detail and white-glove service.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why MacDonald Highlands Specialization Matters</h2>
              <p className="text-lg text-neutral-700 mb-6">
                MacDonald Highlands represents the pinnacle of luxury living in Henderson—a guard-gated community where estate homes command $1M to $15M+ and offer unparalleled Strip views, DragonRidge Country Club access, and privacy. Dr. Jan&apos;s specialization in this exclusive community means clients benefit from insider knowledge that generic real estate agents simply cannot provide. This deep community expertise translates directly to better outcomes, whether you&apos;re buying, selling, or investing.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Intimate Neighborhood Knowledge</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Dr. Jan understands the nuances of every neighborhood within MacDonald Highlands, from Vu to SkyVu to Vue Pointe. This knowledge includes understanding view premiums, lot positioning advantages, architectural styles, and the subtle differences that impact property values. When you work with Dr. Jan, you&apos;re not just getting a real estate agent—you&apos;re getting a neighborhood specialist who knows MacDonald Highlands inside and out.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Builder & Developer Relationships</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Years of experience in MacDonald Highlands have built strong relationships with local builders, developers, and community leadership. These connections provide access to new construction opportunities, off-market listings, and insights into future development plans that could impact property values. For buyers considering custom builds, these relationships ensure you work with reputable builders who understand the community&apos;s architectural standards and quality expectations.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Intelligence & Pricing Expertise</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Understanding view premiums, lot values, and market trends requires more than just looking at comparable sales—it requires deep market intelligence. Dr. Jan&apos;s analysis accounts for view angles, lot positioning, architectural features, and current buyer demand patterns. This sophisticated approach to pricing ensures sellers receive maximum value while buyers make informed investment decisions.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Off-Market & Pocket Listing Access</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Through her network and community relationships, Dr. Jan provides access to off-market opportunities and pocket listings that aren&apos;t available through traditional channels. For sellers, this means discreet marketing options that maintain privacy while reaching qualified buyers. For buyers, it means access to exclusive properties that may never hit the public market, often with less competition and more flexible terms.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Luxury Transaction Expertise</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Luxury real estate transactions involve complexities that standard residential sales don&apos;t. From architectural photography and staging to private showings and international buyer coordination, Dr. Jan has the expertise to navigate these nuances. Her negotiation skills for high-net-worth transactions ensure deals are structured to maximize value while meeting all parties&apos; objectives.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Advanced Credentials & Professional Excellence</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Dr. Jan Duffy&apos;s {siteConfig.agent.credentials} reflects a commitment to excellence and analytical rigor that translates directly to her real estate practice. This advanced education, combined with continuous professional development in luxury real estate, ensures clients receive sophisticated market analysis and strategic guidance. The Ph.D. credential demonstrates not just academic achievement, but a dedication to thorough research, data-driven decision-making, and professional excellence that benefits every client relationship.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Continuous Professional Development</h3>
              <p className="text-lg text-neutral-700 mb-6">
                The luxury real estate market evolves constantly, and staying current requires continuous learning. Dr. Jan invests in ongoing professional development, staying abreast of market trends, new marketing technologies, luxury buyer preferences, and transaction best practices. This commitment to staying current ensures clients receive the most up-to-date strategies and insights.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Analytical Approach to Real Estate</h3>
              <p className="text-lg text-neutral-700 mb-6">
                The analytical skills developed through advanced education are applied to every real estate transaction. Market analysis goes beyond surface-level comparisons to include sophisticated evaluation of view premiums, lot positioning factors, architectural features, and buyer demand patterns. This analytical approach ensures pricing strategies and investment decisions are based on comprehensive data, not guesswork.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Berkshire Hathaway HomeServices: Industry-Leading Support</h2>
              <p className="text-lg text-neutral-700 mb-6">
                As part of {siteConfig.agent.brokerage}, Dr. Jan leverages one of the most respected brands in real estate. This affiliation provides access to resources, networks, and support systems that enhance every client transaction. The Berkshire Hathaway HomeServices brand recognition and reputation for excellence add credibility and trust to every listing and client relationship.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Global Luxury Buyer Network</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Through Berkshire Hathaway HomeServices&apos; international network, MacDonald Highlands properties reach luxury buyers from around the world. This global reach is particularly valuable for high-end estate properties, connecting sellers with executives relocating to Las Vegas, international investors, and high-net-worth individuals seeking second homes in Henderson. This network access significantly expands the buyer pool beyond local markets.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Marketing Resources & Technology</h3>
              <p className="text-lg text-neutral-700 mb-6">
                The brokerage provides access to cutting-edge marketing resources and technology platforms that enhance property visibility and buyer engagement. From professional photography coordination to virtual tour technology and digital marketing campaigns, these resources ensure MacDonald Highlands properties receive maximum exposure to qualified buyers.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Transaction Support & Coordination</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Behind every successful transaction is a team of professionals handling details, documentation, and coordination. Berkshire Hathaway HomeServices provides transaction support that ensures all aspects of the deal are handled professionally, from contract preparation to closing coordination. This support allows Dr. Jan to focus on client relationships and strategic guidance while ensuring nothing falls through the cracks.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Brand Recognition & Market Trust</h3>
              <p className="text-lg text-neutral-700 mb-6">
                The Berkshire Hathaway HomeServices brand carries significant weight in luxury real estate markets. This brand recognition adds credibility to listings and instills confidence in buyers and sellers. The association with such a respected organization reinforces Dr. Jan&apos;s commitment to professional excellence and ethical business practices.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Comprehensive Service Specialties</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Dr. Jan&apos;s expertise extends across the full spectrum of luxury real estate services, each tailored to the unique needs of MacDonald Highlands buyers and sellers. These specialties reflect deep market knowledge and a commitment to providing comprehensive support throughout every transaction.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Luxury Home Sales & Acquisitions</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Whether you&apos;re selling a $15M estate or buying your first MacDonald Highlands property, the luxury market requires specialized expertise. Dr. Jan provides comprehensive support from initial consultation through closing, including pre-listing strategy, professional staging, architectural photography, private showing coordination, and access to global luxury buyer networks. Every aspect of the transaction is handled with the professionalism and attention to detail that luxury properties deserve.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">MacDonald Highlands Community Expertise</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Deep knowledge of MacDonald Highlands means understanding not just properties, but the community itself. This includes HOA structures, gate protocols, DragonRidge Country Club membership processes, view premiums, lot positioning advantages, and neighborhood characteristics. This community expertise ensures clients make informed decisions based on comprehensive local knowledge.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club Properties</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Golf course frontage properties represent some of the most valuable real estate in MacDonald Highlands. Dr. Jan specializes in these premium properties, understanding membership transfer processes, golf course frontage premiums, and the unique value proposition of DragonRidge-adjacent homes. This specialization ensures both buyers and sellers receive expert guidance on golf course properties.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Off-Market & Pocket Listings</h3>
              <p className="text-lg text-neutral-700 mb-6">
                For high-profile sellers who value privacy, off-market and pocket listing services provide discreet marketing options. Dr. Jan&apos;s network of luxury real estate professionals and high-net-worth buyers ensures these exclusive properties reach qualified buyers without public MLS exposure. This approach maintains privacy while maximizing marketing effectiveness.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Relocation Concierge Services</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Moving to MacDonald Highlands involves more than just finding a home. Relocation concierge services assist with everything from initial community research and school district information to utility setup, contractor referrals, and local service provider connections. This comprehensive support ensures a smooth transition for clients relocating to Henderson from other cities or states.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Investment Advisory</h3>
              <p className="text-lg text-neutral-700 mb-6">
                MacDonald Highlands presents unique investment opportunities for savvy real estate investors. Investment advisory services help evaluate properties from a financial perspective, analyzing rental potential, appreciation trends, and long-term value. This data-driven approach supports investment decisions whether you&apos;re considering a second home, exploring 1031 exchange opportunities, or building a luxury real estate portfolio.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Client Commitment & Personalized Service</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Every client relationship is built on trust, transparency, and results. Whether you&apos;re buying your first MacDonald Highlands home, selling a multi-million dollar estate, or exploring investment opportunities, Dr. Jan provides personalized service tailored to your unique needs and timeline. This commitment to personalized service means you&apos;re not just another transaction—you&apos;re a valued client whose success is our priority.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Transparent Communication</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Clear, honest communication is the foundation of every client relationship. You&apos;ll receive regular updates on market activity, buyer feedback, and transaction progress. Questions are answered promptly, and you&apos;ll always know where things stand. This transparency builds trust and ensures you can make informed decisions throughout the process.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Results-Driven Approach</h3>
              <p className="text-lg text-neutral-700 mb-6">
                While personalized service is important, results matter most. Dr. Jan&apos;s track record of success—500+ families served, $127M+ in sales—demonstrates a commitment to achieving outcomes that exceed expectations. Every strategy, every marketing decision, every negotiation is focused on delivering the best possible results for clients.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Long-Term Client Relationships</h3>
              <p className="text-lg text-neutral-700 mb-6">
                The relationship doesn&apos;t end at closing. Many clients return for additional transactions, referrals, or ongoing market insights. This long-term approach means Dr. Jan invests in building relationships that extend beyond individual transactions, providing ongoing value and support as your real estate needs evolve.
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
                Ready to buy, sell, or invest in MacDonald Highlands? Let&apos;s discuss your real estate goals.
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
