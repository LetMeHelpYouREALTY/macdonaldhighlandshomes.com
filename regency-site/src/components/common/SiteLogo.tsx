import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import AgentPortrait from "@/components/ui/AgentPortrait";

type SiteLogoProps = {
  tone?: "light" | "dark";
  showPortrait?: boolean;
  portraitSize?: "xs" | "sm";
  className?: string;
  compact?: boolean;
};

/**
 * Primary brand mark: MacDonald Highlands / Homes by Dr. Jan Duffy
 */
export default function SiteLogo({
  tone = "light",
  showPortrait = true,
  portraitSize = "xs",
  className = "",
  compact = false,
}: SiteLogoProps) {
  const isDark = tone === "dark";
  const titleClass = isDark
    ? "text-white"
    : "text-charcoal-900";
  const subClass = isDark
    ? "text-neutral-300"
    : "text-neutral-600";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 shrink-0 ${className}`}
    >
      {showPortrait ? (
        <AgentPortrait
          size={portraitSize}
          href={false}
          priority
          showRing
          decorative
          ringOffsetClass={isDark ? "ring-offset-neutral-900" : "ring-offset-white"}
          className={compact ? undefined : "hidden sm:inline-block"}
        />
      ) : null}
      <span className="min-w-0">
        <span
          className={`block font-serif font-bold leading-tight ${titleClass} ${
            compact ? "text-lg md:text-xl" : "text-xl md:text-2xl lg:text-3xl"
          }`}
        >
          {siteConfig.logo.title}
        </span>
        <span
          className={`block font-semibold uppercase tracking-[0.14em] ${subClass} ${
            compact ? "text-[9px] md:text-[10px]" : "text-[10px] md:text-xs"
          }`}
        >
          {siteConfig.logo.subtitle}
        </span>
      </span>
    </Link>
  );
}
