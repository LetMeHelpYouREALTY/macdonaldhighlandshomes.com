import CalendlyInline from "@/components/scheduling/CalendlyInline";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import type { CalendlyEventKey } from "@/components/scheduling/CalendlyInline";
import RealScoutWidgetWrapper from "@/components/listings/RealScoutWidgetWrapper";
import { siteConfig } from "@/config/siteConfig";
import AgentPortrait from "@/components/ui/AgentPortrait";
import Link from "next/link";

type ConsultationBandProps = {
  title?: string;
  subtitle?: string;
  source: string;
  calendlyEvent?: CalendlyEventKey;
  showListings?: boolean;
};

/**
 * Consultation CTA band — Calendly scheduling + RealScout listings only (no forms).
 */
export default function ConsultationBand({
  title = "Ready to List or Buy in MacDonald Highlands?",
  subtitle,
  source,
  calendlyEvent = "listing",
  showListings = true,
}: ConsultationBandProps) {
  const resolvedSubtitle =
    subtitle ||
    `Book on Calendly or browse live office listings with Dr. Jan Duffy — call ${siteConfig.contact.phoneFormatted}`;

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="container-luxury">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AgentPortrait size="lg" ringOffsetClass="ring-offset-primary-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-neutral-100 mb-10">{resolvedSubtitle}</p>

          <div className="bg-white p-8 md:p-12 text-neutral-900 shadow-2xl text-left">
            <CalendlyInline
              event={calendlyEvent}
              utmContent={`${source}-calendly`}
              title="Book on Calendly"
              description="Pick a time for your listing consultation, private showing, or strategy call."
            />

            <div className="mt-6 text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CalendlyCta
                event={calendlyEvent === "listing" ? "showing" : calendlyEvent}
                utmContent={`${source}-alt`}
                label="Book a private showing →"
                variant="link"
              />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="text-primary-700 font-semibold hover:underline"
              >
                Call {siteConfig.contact.phoneFormatted}
              </a>
            </div>

            {showListings ? (
              <div className="mt-12 pt-10 border-t border-neutral-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-charcoal-900">
                    Browse with RealScout
                  </h3>
                  <p className="text-neutral-600 max-w-2xl mx-auto">
                    Search live office listings from Berkshire Hathaway HomeServices Nevada Properties.
                    Prefer privacy?{" "}
                    <Link
                      href="/services/off-market-opportunities"
                      className="text-primary-700 font-semibold hover:underline"
                    >
                      Ask about off-market opportunities
                    </Link>
                    .
                  </p>
                </div>
                <RealScoutWidgetWrapper />
                <div className="mt-8 text-center">
                  <Link
                    href={`/listings?utm_content=${encodeURIComponent(`${source}-realscout`)}`}
                    className="btn-primary inline-block uppercase tracking-wide text-sm"
                  >
                    View All Listings
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
