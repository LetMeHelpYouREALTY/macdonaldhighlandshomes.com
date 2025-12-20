import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MacDonald Highlands Community Guide | Henderson Luxury Living",
  description: "Complete guide to MacDonald Highlands, Henderson's premier guard-gated luxury golf community. Learn about DragonRidge Country Club, neighborhoods, amenities, and lifestyle.",
  keywords: "MacDonald Highlands community, DragonRidge Country Club, Henderson guard-gated community, luxury golf community, Vu SkyVu Vue Pointe",
};

export default function CommunityPage() {
  return (
    <>
      <RealEstateAgentSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24">
        <div className="container-luxury">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
            MacDonald Highlands Community
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl">
            Henderson's Premier Guard-Gated Luxury Golf Community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Welcome to MacDonald Highlands</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Nestled in the foothills of Henderson, Nevada, MacDonald Highlands is a 1,320-acre master-planned luxury community that represents the pinnacle of guard-gated living. Just 15-20 minutes from the Las Vegas Strip, this exclusive enclave offers estate homes from $1M to $15M+ with panoramic Strip views, championship golf, and unparalleled privacy.
            </p>

            <div className="my-12">
              <Image
                src="/Image/hero_bg_2.jpg"
                alt="MacDonald Highlands luxury homes with mountain views"
                width={1200}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Guard-Gated Security & Privacy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Two beautifully landscaped, 24-hour guard-gated entries provide residents with peace of mind and exclusivity. The community's security protocols ensure that only authorized visitors and residents access the neighborhood, creating a private sanctuary for high-net-worth families, executives, and celebrities.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club</h3>
            <p className="text-lg text-neutral-700 mb-6">
              At the heart of MacDonald Highlands lies DragonRidge Country Club, a championship golf course designed by renowned architect Jay Morrish. This private club offers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>18-hole championship golf course with dramatic elevation changes</li>
              <li>Stunning views of the Las Vegas Strip and surrounding mountains</li>
              <li>Clubhouse with fine dining and social events</li>
              <li>Golf course frontage properties with premium views</li>
              <li>Membership opportunities for residents</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Neighborhoods</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands is comprised of distinct neighborhoods, each with its own character:
            </p>
            <div className="space-y-6 mb-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Vu</h4>
                <p className="text-neutral-700">Estate homes with expansive lots and panoramic views</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">SkyVu</h4>
                <p className="text-neutral-700">Elevated properties with premium Strip and mountain vistas</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Vue Pointe</h4>
                <p className="text-neutral-700">Luxury homes positioned for optimal view angles</p>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Lot Sizes & Home Types</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties in MacDonald Highlands feature generous lot sizes ranging from 1/3 to 1+ acres, providing space for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Custom estate homes with architectural distinction</li>
              <li>Expansive outdoor living spaces and pools</li>
              <li>Privacy landscaping and gated driveways</li>
              <li>Room for guest houses and specialty features</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Views & Location</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The community's elevated position offers residents breathtaking views of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li><strong>Las Vegas Strip:</strong> Panoramic views of the world-famous skyline, especially stunning at night</li>
              <li><strong>Mountain Ranges:</strong> Surrounding desert mountains and natural landscapes</li>
              <li><strong>Golf Course:</strong> Properties with frontage on DragonRidge offer serene golf course vistas</li>
            </ul>
            <p className="text-lg text-neutral-700 mb-6">
              Proximity to the Las Vegas Strip (15-20 minutes) provides easy access to world-class entertainment, dining, and nightlife while maintaining the tranquility of a guard-gated community.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Lifestyle & Amenities</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Living in MacDonald Highlands means enjoying:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Exclusive guard-gated security and privacy</li>
              <li>Championship golf at DragonRidge Country Club</li>
              <li>Proximity to Henderson's top schools, shopping, and dining</li>
              <li>Easy access to McCarran International Airport</li>
              <li>Las Vegas Strip entertainment just minutes away</li>
              <li>Outdoor recreation in nearby Red Rock Canyon and Lake Mead</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Why Choose MacDonald Highlands?</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands represents the convergence of luxury, privacy, and location. It's where successful professionals, executives, and families choose to call home—a community that offers both the exclusivity of a guard-gated enclave and the convenience of Las Vegas area living.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Explore MacDonald Highlands Real Estate
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Ready to find your dream home in MacDonald Highlands? Let's schedule a private community tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/buying-in-macdonald-highlands" className="btn-primary text-lg px-8 py-4">
                Schedule Private Tour
              </Link>
              <Link href="/listings" className="btn-secondary text-lg px-8 py-4">
                View Available Properties
              </Link>
            </div>
            <p className="mt-8 text-neutral-600">
              Or call us directly:{" "}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="text-primary-600 font-semibold hover:underline"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
