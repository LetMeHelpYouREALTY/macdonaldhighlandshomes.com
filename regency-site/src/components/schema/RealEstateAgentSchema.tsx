import { siteConfig } from "@/config/siteConfig";

/**
 * Person entity for Dr. Jan Duffy (Listing Specialist).
 * Linked to RealEstateAgent organization via worksFor @id.
 */
export default function RealEstateAgentSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.macdonaldhighlandshomes.com/#person",
    name: siteConfig.agent.name,
    jobTitle: siteConfig.agent.title,
    url: "https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy",
    image: "https://www.macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
    description:
      "MacDonald Highlands Listing Specialist helping sellers and buyers with $1M–$15M+ guard-gated estate homes in Henderson, Nevada.",
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    worksFor: {
      "@id": "https://www.macdonaldhighlandshomes.com/#organization",
    },
    affiliation: {
      "@type": "Organization",
      name: siteConfig.agent.brokerage,
      url: "https://www.berkshirehathawayhs.com",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: siteConfig.agent.license,
    },
    knowsAbout: [
      "MacDonald Highlands Listing Specialist Services",
      "Luxury Home Sales",
      "Pre-Listing Strategy",
      "Architectural Real Estate Marketing",
      "DragonRidge Country Club Properties",
      "Off-Market and Pocket Listings",
      "Henderson Luxury Real Estate",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.office.street,
      addressLocality: siteConfig.contact.office.city,
      addressRegion: siteConfig.contact.office.state,
      postalCode: siteConfig.contact.office.zip,
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
