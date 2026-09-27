import { siteConfig } from "@/config/siteConfig";
import {
  COMMUNITY_MAP_CONFIG,
  CURATED_NEARBY_PLACES,
  AMENITIES_FAQ,
} from "@/config/amenitiesConfig";

const BASE_URL = "https://macdonaldhighlandshomes.com";

export default function AmenitiesPageSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AMENITIES_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nearby Amenities",
        item: `${BASE_URL}/amenities`,
      },
    ],
  };

  const communityPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: COMMUNITY_MAP_CONFIG.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "552 S Stephanie St",
      addressLocality: COMMUNITY_MAP_CONFIG.city,
      addressRegion: COMMUNITY_MAP_CONFIG.state,
      postalCode: COMMUNITY_MAP_CONFIG.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_MAP_CONFIG.center.lat,
      longitude: COMMUNITY_MAP_CONFIG.center.lng,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Places near ${COMMUNITY_MAP_CONFIG.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: COMMUNITY_MAP_CONFIG.city,
          addressRegion: COMMUNITY_MAP_CONFIG.state,
          addressCountry: "US",
        },
      },
    })),
  };

  const agentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.agent.name,
    image: `${BASE_URL}/photos/agent/dr-jan-duffy-headshot.jpg`,
    telephone: `+1-${siteConfig.contact.phone}`,
    email: siteConfig.contact.email,
    url: BASE_URL,
    jobTitle: siteConfig.agent.title,
    memberOf: {
      "@type": "Organization",
      name: siteConfig.agent.brokerage,
    },
    areaServed: {
      "@type": "Place",
      name: `${COMMUNITY_MAP_CONFIG.name}, ${COMMUNITY_MAP_CONFIG.city}, NV`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMMUNITY_MAP_CONFIG.center.lat,
        longitude: COMMUNITY_MAP_CONFIG.center.lng,
      },
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      identifier: siteConfig.agent.license,
    },
  };

  const schemas = [
    faqSchema,
    breadcrumbSchema,
    communityPlaceSchema,
    itemListSchema,
    agentSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
