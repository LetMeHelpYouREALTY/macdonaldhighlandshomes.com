"use client";

import { useEffect } from "react";

/**
 * Light DNS hints only — avoid early preconnect to RealScout/Calendly so
 * hero LCP bandwidth is not competed away on mobile.
 */
export default function PreconnectResources() {
  useEffect(() => {
    const links = [
      { rel: "dns-prefetch", href: "https://em.realscout.com" },
      { rel: "dns-prefetch", href: "https://assets.calendly.com" },
    ];

    links.forEach(({ rel, href }) => {
      const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}
