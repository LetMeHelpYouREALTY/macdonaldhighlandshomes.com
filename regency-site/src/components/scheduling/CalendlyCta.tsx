"use client";

import type { MouseEvent } from "react";
import { siteConfig } from "@/config/siteConfig";
import type { CalendlyEventKey } from "@/components/scheduling/CalendlyInline";

type CalendlyCtaProps = {
  event?: CalendlyEventKey;
  utmContent?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
};

function resolveCalendlyUrl(event: CalendlyEventKey = "listing"): string {
  switch (event) {
    case "showing":
      return siteConfig.calendly.showingUrl;
    case "listing":
      return siteConfig.calendly.listingConsultationUrl;
    case "buyer":
      return siteConfig.calendly.buyerConsultationUrl;
    case "market":
      return siteConfig.calendly.marketStrategyUrl;
    case "zoom":
      return siteConfig.calendly.zoomMeetingUrl;
    default: {
      const _exhaustive: never = event;
      return _exhaustive;
    }
  }
}

/**
 * Calendly popup CTA (falls back to new tab if widget.js not ready).
 */
export default function CalendlyCta({
  event = "listing",
  utmContent = "cta",
  label = "Book on Calendly",
  className = "",
  variant = "primary",
}: CalendlyCtaProps) {
  const url = new URL(resolveCalendlyUrl(event));
  url.searchParams.set("utm_source", "macdonaldhighlandshomes.com");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_content", utmContent);

  // Link variant omits a forced text color so dark surfaces (footer) can pass
  // high-contrast classes without fighting text-primary-700.
  const hasExplicitTextColor = /\btext-/.test(className);
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : variant === "ghost"
          ? "btn-ghost"
          : `font-semibold hover:underline ${hasExplicitTextColor ? "" : "text-primary-800"}`.trim();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const calendly = (
      window as Window & {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
      }
    ).Calendly;
    if (calendly?.initPopupWidget) {
      e.preventDefault();
      calendly.initPopupWidget({ url: url.toString() });
    }
  }

  return (
    <a
      href={url.toString()}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${className}`.trim()}
    >
      {label}
    </a>
  );
}
