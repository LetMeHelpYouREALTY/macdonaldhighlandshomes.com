"use client";

import { useEffect } from "react";

export default function PreconnectResources() {
  useEffect(() => {
    // Add preconnect links for RealScout (320ms LCP savings)
    const links = [
      { rel: "preconnect", href: "https://em.realscout.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://em.realscout.com" },
      { rel: "preconnect", href: "https://d1buiexcd5gara.cloudfront.net", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://d1buiexcd5gara.cloudfront.net" },
    ];

    links.forEach(({ rel, href, crossOrigin }) => {
      // Check if link already exists
      const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        if (crossOrigin) {
          link.crossOrigin = crossOrigin;
        }
        document.head.appendChild(link);
      }
    });

    // Cleanup function (optional, but good practice)
    return () => {
      links.forEach(({ rel, href }) => {
        const link = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
}

