"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

export type CalendlyEventKey =
  | "showing"
  | "listing"
  | "buyer"
  | "market"
  | "zoom";

type CalendlyInlineProps = {
  event?: CalendlyEventKey;
  utmContent?: string;
  title?: string;
  description?: string;
  minHeight?: number;
};

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

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

function ensureCalendlyAssets() {
  if (typeof document === "undefined") return;
  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    document.body.appendChild(script);
  }
}

/**
 * Inline Calendly embed for /contact and /listings.
 * Loads Calendly assets on mount only (not sitewide).
 */
export default function CalendlyInline({
  event = "listing",
  utmContent = "inline-widget",
  title = "Book Time with Dr. Jan Duffy",
  description = "Choose a time for your listing consultation, private showing, or strategy call.",
  minHeight = 700,
}: CalendlyInlineProps) {
  const url = new URL(resolveCalendlyUrl(event));
  url.searchParams.set("utm_source", "macdonaldhighlandshomes.com");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_content", utmContent);

  useEffect(() => {
    ensureCalendlyAssets();
  }, []);

  return (
    <div className="w-full">
      {(title || description) && (
        <div className="text-center mb-6">
          {title ? (
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-charcoal-900">
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="text-neutral-600 max-w-2xl mx-auto">{description}</p>
          ) : null}
        </div>
      )}
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden border border-neutral-200 bg-white"
        data-url={url.toString()}
        style={{ minWidth: "320px", height: `${minHeight}px` }}
      />
    </div>
  );
}
