"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function RealScoutWidget() {
  useEffect(() => {
    // Load RealScout widget script
    const script = document.createElement("script");
    script.src = siteConfig.realscout.widgetScript;
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-neutral-50 rounded-lg p-8">
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      <realscout-office-listings
        agent-encoded-id={siteConfig.realscout.agentId}
        sort-order="PRICE_HIGH"
        listing-status="For Sale"
        property-types=",SFR"
        price-min="400000"
        price-max="1100000"
      ></realscout-office-listings>
    </div>
  );
}
