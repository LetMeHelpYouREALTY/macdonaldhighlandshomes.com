import { siteConfig } from "@/config/siteConfig";

/**
 * WebSite + SearchAction entity for GEO/AEO graph anchoring.
 */
export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.macdonaldhighlandshomes.com/#website",
    url: "https://www.macdonaldhighlandshomes.com",
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": "https://www.macdonaldhighlandshomes.com/#organization",
    },
    inLanguage: "en-US",
    about: {
      "@type": "Place",
      name: "MacDonald Highlands",
      containedInPlace: {
        "@type": "City",
        name: "Henderson",
        containedInPlace: {
          "@type": "State",
          name: "Nevada",
        },
      },
    },
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
