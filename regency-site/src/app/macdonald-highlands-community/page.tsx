import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import RealEstateAgentSchema from "@/components/schema/RealEstateAgentSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MacDonald Highlands Community Guide | Henderson Luxury Living",
  description: "Complete guide to MacDonald Highlands, Henderson&apos;s premier guard-gated luxury golf community. Learn about DragonRidge Country Club, neighborhoods, amenities, and lifestyle.",
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
            Henderson&apos;s Premier Guard-Gated Luxury Golf Community
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
                src="/photos/community/view-lifestyle-00024-full.jpg"
                alt="MacDonald Highlands luxury homes with panoramic Strip and mountain views"
                width={1200}
                height={600}
                className="rounded-lg shadow-xl"
                unoptimized={true}
                onLoad={() => {
                  // #region agent log
                  if (typeof window !== 'undefined') {
                    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'community/page.tsx:45',message:'Community image onLoad',data:{src:'/photos/community/view-lifestyle-00024-full.jpg'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                  }
                  // #endregion
                }}
                onError={(e) => {
                  // #region agent log
                  if (typeof window !== 'undefined') {
                    fetch('http://127.0.0.1:7248/ingest/355725de-c768-44a5-a1c0-62e668e27869',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'community/page.tsx:52',message:'Community image onError',data:{src:'/photos/community/view-lifestyle-00024-full.jpg',error:String(e)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                  }
                  // #endregion
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/guard-gate.jpg"
                  alt="MacDonald Highlands guard-gated entrance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/community/golf-lifestyle.jpg"
                  alt="DragonRidge Country Club golf course"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="my-12">
              <Image
                src="/photos/community/clubhouse.jpg"
                alt="DragonRidge Country Club clubhouse"
                width={1200}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Guard-Gated Security & Privacy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Two beautifully landscaped, 24-hour guard-gated entries provide residents with peace of mind and exclusivity. The community&apos;s security protocols ensure that only authorized visitors and residents access the neighborhood, creating a private sanctuary for high-net-worth families, executives, and celebrities.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">DragonRidge Country Club</h3>
            <div className="my-6">
              <img
                src="/photos/community/golf-lifestyle-full.jpg"
                alt="DragonRidge Country Club championship golf course"
                className="w-full rounded-lg shadow-lg"
                style={{ maxWidth: '1000px', height: 'auto' }}
              />
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/photos/community/view-lifestyle-2.jpg"
                  alt="Panoramic Las Vegas Strip views from MacDonald Highlands"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={true}
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/photos/community/views-lifestyle-3.jpg"
                  alt="Mountain and desert views from MacDonald Highlands"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={true}
                />
              </div>
            </div>
            <p className="text-lg text-neutral-700 mb-6">
              The community&apos;s elevated position offers residents breathtaking views of:
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
              <li>Proximity to Henderson&apos;s top schools, shopping, and dining</li>
              <li>Easy access to McCarran International Airport</li>
              <li>Las Vegas Strip entertainment just minutes away</li>
              <li>Outdoor recreation in nearby Red Rock Canyon and Lake Mead</li>
            </ul>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">Why Choose MacDonald Highlands for Your Luxury Lifestyle?</h2>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands represents the convergence of luxury, privacy, and location. It&apos;s where successful professionals, executives, and families choose to call home—a community that offers both the exclusivity of a guard-gated enclave and the convenience of Las Vegas area living. This unique combination of attributes creates a lifestyle that few communities can match, making MacDonald Highlands one of the most desirable luxury real estate destinations in Southern Nevada.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Unmatched Security & Privacy</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The guard-gated security system provides residents with peace of mind that extends beyond property protection. This controlled access creates a private sanctuary where high-profile individuals, executives, and families can enjoy their homes without concerns about unwanted visitors or security issues. The 24-hour guard presence ensures that security is never compromised, while the beautifully landscaped entry gates create an impressive first impression that reflects the community&apos;s luxury standards.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Championship Golf Lifestyle</h3>
            <p className="text-lg text-neutral-700 mb-6">
              DragonRidge Country Club isn&apos;t just a golf course—it&apos;s a lifestyle centerpiece that defines MacDonald Highlands living. The Jay Morrish-designed course offers challenging play for golf enthusiasts while providing stunning views for all residents. Golf course frontage properties command premium prices not just for the views, but for the lifestyle access they provide. Membership opportunities connect residents with a community of like-minded individuals who appreciate luxury living and recreational excellence.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Investment Value & Appreciation</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties in MacDonald Highlands have demonstrated strong appreciation over time, driven by the community&apos;s unique combination of location, amenities, and exclusivity. The limited inventory of guard-gated luxury communities in Henderson, combined with increasing demand from high-net-worth buyers, creates a favorable investment environment. View properties, golf course frontage, and custom estate homes have historically maintained and increased their value, making MacDonald Highlands not just a lifestyle choice but a sound real estate investment.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Proximity to Las Vegas Strip Entertainment</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The 15-20 minute drive to the Las Vegas Strip means residents can enjoy world-class dining, entertainment, and nightlife without sacrificing the tranquility of guard-gated community living. This proximity is particularly valuable for executives, entertainers, and business professionals who need easy access to Strip venues while maintaining a private residential base. The convenience factor adds significant lifestyle value that enhances the community&apos;s appeal.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Henderson School District Excellence</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Families choosing MacDonald Highlands benefit from access to Henderson&apos;s highly-rated school district, which consistently ranks among the best in Nevada. This educational advantage is a key consideration for families with children, ensuring that luxury living doesn&apos;t require compromising on educational quality. The combination of excellent schools and luxury community living creates an ideal environment for raising families.
            </p>

            <h2 className="text-3xl font-serif font-bold mt-16 mb-6">MacDonald Highlands Real Estate Market Overview</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Understanding the MacDonald Highlands real estate market requires insight into pricing trends, inventory levels, and buyer demand patterns. As Henderson&apos;s premier guard-gated luxury community, the market here operates differently than standard residential areas, with unique factors influencing property values and transaction dynamics.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Price Range & Property Types</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands properties range from $1M starter luxury homes to $15M+ custom estate properties. This wide price range accommodates various buyer profiles, from first-time luxury buyers to ultra-high-net-worth individuals seeking the ultimate in estate living. Understanding where your property fits within this range is crucial for effective marketing and pricing strategies.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">View Premiums & Lot Positioning</h3>
            <p className="text-lg text-neutral-700 mb-6">
              Properties with panoramic Strip views command significant premiums over similar homes without views. Understanding these view premiums requires analysis of view angles, clarity, and future development impacts. Lot positioning also matters—homes on elevated lots with unobstructed views are valued higher than properties with limited or blocked views. This market knowledge is essential for both buyers and sellers.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Market Trends & Inventory Levels</h3>
            <p className="text-lg text-neutral-700 mb-6">
              The MacDonald Highlands market experiences different dynamics than standard residential areas. Inventory levels are typically lower due to the community&apos;s exclusivity, and properties may stay on the market longer as buyers are more selective. However, well-positioned properties with premium features often sell quickly to qualified buyers. Understanding these market trends helps set realistic expectations and pricing strategies.
            </p>

            <h3 className="text-2xl font-serif font-bold mt-12 mb-4">Buyer Profile & Demand Patterns</h3>
            <p className="text-lg text-neutral-700 mb-6">
              MacDonald Highlands attracts a specific buyer profile: high-net-worth individuals, executives, professionals, and families seeking luxury living with privacy and security. Understanding this buyer profile helps sellers position their properties effectively and helps buyers understand the community&apos;s lifestyle and value proposition. Demand patterns reflect seasonal variations and broader economic factors that influence luxury real estate markets.
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
              Ready to find your dream home in MacDonald Highlands? Let&apos;s schedule a private community tour.
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
