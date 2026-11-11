import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { siteConfig } from "@/config/siteConfig";

type AgentPortraitSize = "xs" | "sm" | "md" | "lg" | "xl";

type AgentPortraitProps = {
  size?: AgentPortraitSize;
  href?: string | false;
  className?: string;
  priority?: boolean;
  showRing?: boolean;
  /** Tailwind ring-offset background class for dark/light surfaces */
  ringOffsetClass?: string;
};

const SIZE_MAP: Record<AgentPortraitSize, { box: string; px: number }> = {
  xs: { box: "h-10 w-10", px: 40 },
  sm: { box: "h-14 w-14", px: 56 },
  md: { box: "h-24 w-24", px: 96 },
  lg: { box: "h-40 w-40 md:h-48 md:w-48", px: 192 },
  xl: { box: "h-56 w-56 md:h-72 md:w-72", px: 288 },
};

/**
 * Branded circular portrait of Dr. Jan Duffy for nav, NAP, CTAs, and bios.
 */
export default function AgentPortrait({
  size = "md",
  href = "/about-dr-jan-duffy",
  className = "",
  priority = false,
  showRing = true,
  ringOffsetClass = "ring-offset-white",
}: AgentPortraitProps) {
  const dims = SIZE_MAP[size];
  const image = (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-neutral-200 ${dims.box} ${
        showRing ? `ring-2 ring-gold-500/80 ring-offset-2 ${ringOffsetClass}` : ""
      } ${className}`}
    >
      <OptimizedImage
        src={siteConfig.images.agentHeadshot}
        alt={siteConfig.images.agentHeadshotAlt}
        fill
        priority={priority}
        sizes={`${dims.px}px`}
        className="object-cover object-center"
      />
    </span>
  );

  if (href === false) return image;

  return (
    <Link
      href={href}
      aria-label={`About ${siteConfig.agent.name}`}
      className="inline-flex shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
    >
      {image}
    </Link>
  );
}
