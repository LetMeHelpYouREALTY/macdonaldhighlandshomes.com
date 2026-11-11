"use client";

import { siteConfig } from "@/config/siteConfig";

/**
 * Office listings widget. Script is loaded once from root layout.
 */
export default function RealScoutWidget() {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 border border-neutral-200 shadow-sm">
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #312e81;
          width: 100%;
          display: block;
        }
      `}</style>
      <realscout-office-listings
        agent-encoded-id={siteConfig.realscout.agentId}
        office-address={`${siteConfig.contact.office.street}, ${siteConfig.contact.office.city}, ${siteConfig.contact.office.state} ${siteConfig.contact.office.zip}`}
        sort-order="PRICE_HIGH"
        listing-status="For Sale"
        property-types=",SFR"
        price-min="1000000"
        price-max="20000000"
      ></realscout-office-listings>
    </div>
  );
}
