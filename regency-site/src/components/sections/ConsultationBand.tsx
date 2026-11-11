import CalendlyCta from "@/components/scheduling/CalendlyCta";
import type { CalendlyEventKey } from "@/components/scheduling/CalendlyInline";
import { siteConfig } from "@/config/siteConfig";
import AgentPortrait from "@/components/ui/AgentPortrait";
import Link from "next/link";

type ConsultationBandProps = {
  title?: string;
  subtitle?: string;
  source: string;
  calendlyEvent?: CalendlyEventKey;
};

/**
 * Consultation CTA band — light Calendly popup CTAs + RealScout listings link.
 * Avoids inline Calendly/RealScout embeds that tank mobile TTI (~3MB+ third-party).
 */
export default function ConsultationBand({
  title = "Ready to List or Buy in MacDonald Highlands?",
  subtitle,
  source,
  calendlyEvent = "listing",
}: ConsultationBandProps) {
  const resolvedSubtitle =
    subtitle ||
    `Book on Calendly or browse live office listings with Dr. Jan Duffy — call ${siteConfig.contact.phoneFormatted}`;

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AgentPortrait size="lg" ringOffsetClass="ring-offset-primary-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-neutral-100 mb-10">{resolvedSubtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <CalendlyCta
              event={calendlyEvent}
              utmContent={`${source}-calendly`}
              label="Book on Calendly"
              className="text-lg px-8 py-4 uppercase tracking-wide"
            />
            <Link
              href={`/listings?utm_content=${encodeURIComponent(`${source}-realscout`)}`}
              className="btn-secondary text-lg px-8 py-4 uppercase tracking-wide"
            >
              Browse RealScout Listings
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <CalendlyCta
              event={calendlyEvent === "listing" ? "showing" : calendlyEvent}
              utmContent={`${source}-showing`}
              label="Book a private showing →"
              variant="link"
              className="text-cream-200 hover:text-white"
            />
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="text-cream-200 font-semibold hover:text-white hover:underline"
            >
              Call {siteConfig.contact.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="text-cream-200 font-semibold hover:text-white hover:underline"
            >
              Contact &amp; schedule →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
