import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import CalendlyCta from "@/components/scheduling/CalendlyCta";

/**
 * GBP-aligned NAP + map block (name, address, hours, phone, SMS, Calendly).
 */
export default function NapMapSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal-900">
              Visit or Call Dr. Jan Duffy
            </h2>
            <p className="text-lg text-neutral-800 font-semibold mb-2">{siteConfig.name}</p>
            <p className="text-neutral-700 mb-1">
              Real estate agent · {siteConfig.agent.brokerage}
            </p>
            <p className="text-neutral-700 mb-1">{siteConfig.contact.office.full}</p>
            <p className="text-neutral-700 mb-1">
              Service area: {siteConfig.contact.address.full}
            </p>
            <p className="text-neutral-700 mb-4">{siteConfig.contact.hours}</p>
            <ul className="text-sm text-neutral-600 mb-4 space-y-0.5 columns-2 gap-6 max-w-md">
              {siteConfig.contact.hoursDetailed.map((h) => (
                <li key={h.day}>
                  <span className="inline-block w-24 font-medium text-neutral-800">{h.day}</span>
                  {h.label}
                </li>
              ))}
            </ul>
            <p className="text-neutral-800 font-semibold mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="hover:underline"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
              <a href={siteConfig.contact.smsHref} className="hover:underline text-primary-800 font-medium">
                Text / SMS
              </a>
              <CalendlyCta
                event="listing"
                utmContent="nap-book-beside-phone"
                label="Book on Calendly"
                variant="link"
              />
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-primary px-6 py-3 uppercase tracking-wide text-sm"
              >
                Call Now
              </a>
              <a
                href={siteConfig.contact.smsHref}
                className="btn-secondary px-6 py-3 uppercase tracking-wide text-sm"
              >
                Text Us
              </a>
              <CalendlyCta
                event="listing"
                utmContent="nap-cta"
                label="Book Consultation"
                className="btn-secondary px-6 py-3 uppercase tracking-wide text-sm"
                variant="secondary"
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  siteConfig.contact.office.full
                )}`}
                className="btn-secondary px-6 py-3 uppercase tracking-wide text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
              <Link href="/contact" className="btn-secondary px-6 py-3 uppercase tracking-wide text-sm">
                Contact Me
              </Link>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              Women-owned · Veteran-owned · LGBTQ+ friendly · Wheelchair accessible · Online appointments available
            </p>
          </div>
          <div className="overflow-hidden shadow-lg aspect-video bg-neutral-100">
            <iframe
              title="Map to Dr. Jan Duffy office at 3185 St Rose Pkwy, Henderson"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                siteConfig.contact.office.full
              )}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
