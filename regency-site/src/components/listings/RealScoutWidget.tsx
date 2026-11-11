"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

/**
 * Office listings widget. Loads the RealScout script only when scrolled near
 * the viewport so mobile first paint / TTI are not blocked by third-party JS.
 */
export default function RealScoutWidget() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || typeof document === "undefined") return;

    const src = siteConfig.realscout.widgetScript;
    const markReady = () => setScriptReady(true);

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (customElements.get("realscout-office-listings")) {
        markReady();
      } else {
        existing.addEventListener("load", markReady, { once: true });
        // Script may already have loaded before this listener attached
        window.setTimeout(markReady, 50);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.async = true;
    script.onload = markReady;
    document.body.appendChild(script);
  }, [shouldLoad]);

  const officeAddress = `${siteConfig.contact.office.street}, ${siteConfig.contact.office.city}, ${siteConfig.contact.office.state} ${siteConfig.contact.office.zip}`;

  return (
    <div
      ref={hostRef}
      className="bg-white rounded-lg p-4 md:p-6 border border-neutral-200 shadow-sm"
    >
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #312e81;
          width: 100%;
          display: block;
        }
      `}</style>
      {scriptReady ? (
        <realscout-office-listings
          agent-encoded-id={siteConfig.realscout.agentId}
          office-address={officeAddress}
          sort-order="PRICE_HIGH"
          listing-status="For Sale"
          property-types=",SFR"
          price-min="1000000"
          price-max="20000000"
        />
      ) : (
        <div className="py-10 text-center">
          <p className="text-neutral-600 text-sm md:text-base mb-4">
            Loading live office listings…
          </p>
          <div className="h-48 bg-neutral-100 rounded animate-pulse" />
        </div>
      )}
    </div>
  );
}
