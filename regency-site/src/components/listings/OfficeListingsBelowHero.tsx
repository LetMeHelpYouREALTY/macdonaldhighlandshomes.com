import Link from "next/link";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";
import AgentPortrait from "@/components/ui/AgentPortrait";

type OfficeListingsBelowHeroProps = {
  title?: string;
  description?: string;
  utmContent?: string;
};

/**
 * Office RealScout listings block — place immediately below page heroes.
 */
export default function OfficeListingsBelowHero({
  title = "Current Office Listings",
  description = "Browse live inventory from Dr. Jan Duffy’s Berkshire Hathaway HomeServices Nevada Properties office. Prefer privacy? Ask about off-market opportunities.",
  utmContent = "office-listings",
}: OfficeListingsBelowHeroProps) {
  return (
    <section
      className="section-padding bg-neutral-50 border-b border-neutral-200"
      aria-labelledby="office-listings-heading"
      id="office-listings"
    >
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-5">
              <AgentPortrait size="md" />
            </div>
            <h2
              id="office-listings-heading"
              className="text-3xl md:text-4xl font-serif font-bold mb-4 text-charcoal-900"
            >
              {title}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {description}{" "}
              <Link
                href="/services/off-market-opportunities"
                className="text-primary-700 font-semibold hover:underline"
              >
                Join the private buyer list
              </Link>
              .
            </p>
          </div>
          <RealScoutWidgetWrapper />
          <div className="mt-8 text-center">
            <Link
              href={`/listings?utm_content=${encodeURIComponent(utmContent)}`}
              className="btn-primary inline-block uppercase tracking-wide text-sm"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
