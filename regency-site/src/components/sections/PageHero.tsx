import Link from "next/link";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import type { CalendlyEventKey } from "@/components/scheduling/CalendlyInline";
import OptimizedImage from "@/components/ui/OptimizedImage";
import AgentIntroStrip from "@/components/sections/AgentIntroStrip";
import AgentPortrait from "@/components/ui/AgentPortrait";

type HeroCta = {
  label: string;
  href?: string;
  calendlyEvent?: CalendlyEventKey;
  utmContent?: string;
  variant?: "primary" | "ghost" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  support?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  align?: "center" | "left";
  compact?: boolean;
  showAgentStrip?: boolean;
};

function CtaButton({ cta }: { cta: HeroCta }) {
  const base =
    cta.variant === "ghost"
      ? "btn-ghost text-lg px-8 py-4 uppercase tracking-wide"
      : cta.variant === "secondary"
        ? "btn-secondary text-lg px-8 py-4 uppercase tracking-wide"
        : "btn-primary text-lg px-8 py-4 uppercase tracking-wide";

  if (cta.calendlyEvent) {
    return (
      <CalendlyCta
        event={cta.calendlyEvent}
        utmContent={cta.utmContent || "page-hero"}
        label={cta.label}
        className={base}
        variant={cta.variant === "ghost" ? "ghost" : "primary"}
      />
    );
  }

  return (
    <Link href={cta.href || "/contact"} className={base}>
      {cta.label}
    </Link>
  );
}

/**
 * Homepage-style full-bleed photo hero for interior marketing pages.
 */
export default function PageHero({
  eyebrow = "Dr. Jan Duffy · Listing Specialist",
  title,
  subtitle,
  support,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  align = "left",
  compact = true,
  showAgentStrip = true,
}: PageHeroProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <>
      <section
        className={`relative flex items-center justify-center overflow-hidden ${
          compact ? "min-h-[58vh] md:min-h-[62vh]" : "min-h-[92vh]"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/75 via-charcoal-900/55 to-charcoal-900/80" />
        </div>
        <div className={`relative z-10 container-luxury text-white py-24 md:py-28 flex flex-col ${alignClass}`}>
          <div
            className={`mb-5 flex items-center gap-3 ${
              align === "center" ? "justify-center" : "justify-start"
            }`}
          >
            <AgentPortrait size="sm" href={false} priority ringOffsetClass="ring-offset-charcoal-900" />
            <p className="text-sm md:text-base uppercase tracking-[0.22em] text-white/80 font-semibold">
              {eyebrow}
            </p>
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance text-white ${
              align === "center" ? "max-w-4xl" : "max-w-4xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl md:text-2xl mb-5 text-neutral-100 font-medium ${
              align === "center" ? "max-w-3xl" : "max-w-3xl"
            }`}
          >
            {subtitle}
          </p>
          {support ? (
            <p
              className={`text-lg md:text-xl mb-10 text-neutral-200 ${
                align === "center" ? "max-w-2xl" : "max-w-2xl"
              }`}
            >
              {support}
            </p>
          ) : (
            <div className="mb-6" />
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                align === "center" ? "justify-center" : "justify-start"
              }`}
            >
              {primaryCta ? <CtaButton cta={primaryCta} /> : null}
              {secondaryCta ? <CtaButton cta={secondaryCta} /> : null}
            </div>
          )}
        </div>
      </section>
      {showAgentStrip ? <AgentIntroStrip utmContent="page-hero-agent" /> : null}
    </>
  );
}
