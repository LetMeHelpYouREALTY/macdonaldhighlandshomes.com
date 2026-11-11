import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import AgentPortrait from "@/components/ui/AgentPortrait";
import CalendlyCta from "@/components/scheduling/CalendlyCta";

type AgentIntroStripProps = {
  utmContent?: string;
  tone?: "light" | "dark";
};

/**
 * Compact agent identity strip for marketing pages (below heroes / above content).
 */
export default function AgentIntroStrip({
  utmContent = "agent-intro",
  tone = "light",
}: AgentIntroStripProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`border-y ${
        isDark
          ? "border-white/10 bg-charcoal-900 text-white"
          : "border-neutral-200 bg-neutral-50 text-charcoal-900"
      }`}
    >
      <div className="container-luxury py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
          <AgentPortrait size="md" priority={false} showRing={!isDark} />
          <div className={`flex-1 text-center sm:text-left ${isDark ? "text-white" : ""}`}>
            <p className="font-serif text-xl md:text-2xl font-bold">{siteConfig.agent.name}</p>
            <p
              className={`text-sm md:text-base mt-1 ${
                isDark ? "text-neutral-200" : "text-neutral-600"
              }`}
            >
              {siteConfig.agent.title} · MacDonald Highlands · {siteConfig.agent.experience}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className={isDark ? "btn-ghost text-sm px-5 py-2.5 uppercase tracking-wide" : "btn-secondary text-sm px-5 py-2.5 uppercase tracking-wide"}
            >
              {siteConfig.contact.phoneFormatted}
            </a>
            <CalendlyCta
              event="listing"
              utmContent={utmContent}
              label="Book Consultation"
              className="text-sm px-5 py-2.5 uppercase tracking-wide"
            />
            <Link
              href="/about-dr-jan-duffy"
              className={`text-sm font-semibold underline-offset-4 hover:underline ${
                isDark ? "text-gold-DEFAULT" : "text-primary-800"
              }`}
            >
              Meet Dr. Jan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
