import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

/**
 * Homepage-style NAP + map block for local SEO consistency.
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
            <p className="text-lg text-neutral-700 mb-2">
              Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy
            </p>
            <p className="text-neutral-700 mb-1">{siteConfig.contact.office.full}</p>
            <p className="text-neutral-700 mb-6">{siteConfig.contact.hours}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="btn-primary px-6 py-3 uppercase tracking-wide text-sm"
              >
                Call Now
              </a>
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
