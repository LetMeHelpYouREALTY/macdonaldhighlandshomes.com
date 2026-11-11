import ContactForm from "@/components/forms/ContactForm";
import CalendlyInline from "@/components/scheduling/CalendlyInline";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import type { CalendlyEventKey } from "@/components/scheduling/CalendlyInline";
import { siteConfig } from "@/config/siteConfig";

type ConsultationBandProps = {
  title?: string;
  subtitle?: string;
  formTitle?: string;
  formDescription?: string;
  formCta?: string;
  source: string;
  calendlyEvent?: CalendlyEventKey;
  showForm?: boolean;
};

/**
 * Homepage-style consultation CTA band with optional form + Calendly.
 */
export default function ConsultationBand({
  title = "Ready to List or Buy in MacDonald Highlands?",
  subtitle,
  formTitle = "Schedule Your Listing Consultation",
  formDescription = "Tell us about your property goals. Confidential, no obligation.",
  formCta = "Request a Consultation",
  source,
  calendlyEvent = "listing",
  showForm = true,
}: ConsultationBandProps) {
  const resolvedSubtitle =
    subtitle ||
    `Get listing-specialist guidance from Dr. Jan Duffy — call ${siteConfig.contact.phoneFormatted}`;

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-primary-100 mb-10">{resolvedSubtitle}</p>
          <div className="bg-white p-8 md:p-12 text-neutral-900 shadow-2xl">
            {showForm ? (
              <ContactForm
                formTitle={formTitle}
                formDescription={formDescription}
                ctaText={formCta}
                source={source}
              />
            ) : null}
            <div className={showForm ? "mt-10" : ""}>
              <CalendlyInline
                event={calendlyEvent}
                utmContent={`${source}-calendly`}
                title="Or Book Directly on Calendly"
                description="Pick a time for your listing consultation, private showing, or strategy call."
              />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
