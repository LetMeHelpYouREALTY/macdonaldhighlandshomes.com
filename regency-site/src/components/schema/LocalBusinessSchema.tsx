import { siteConfig, gbpSocialSameAs } from "@/config/siteConfig";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://www.macdonaldhighlandshomes.com/#organization",
        name: siteConfig.name,
        alternateName: [
          siteConfig.shortName,
          "MacDonald Highlands Homes and Real Estate",
          "Dr. Jan Duffy Listing Specialist",
          "Dr. Jan Duffy REALTOR",
        ],
        url: siteConfig.website,
        image: "https://www.macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
        logo: "https://www.macdonaldhighlandshomes.com/logos/brand/macdonald-highlands-logo-dark.svg",
        description: siteConfig.description,
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        foundingDate: siteConfig.foundingDate,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.office.street,
          addressLocality: siteConfig.contact.office.city,
          addressRegion: siteConfig.contact.office.state,
          postalCode: siteConfig.contact.office.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.997812,
          longitude: -115.123499,
        },
        areaServed: [
          {
            "@type": "Place",
            "@id": "https://www.macdonaldhighlandshomes.com/#macdonald-highlands",
            name: "MacDonald Highlands",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Henderson",
              addressRegion: "NV",
              postalCode: "89012",
              addressCountry: "US",
            },
            containedInPlace: {
              "@type": "City",
              name: "Henderson",
              sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
            },
          },
          {
            "@type": "City",
            name: "Henderson",
            sameAs: "https://en.wikipedia.org/wiki/Henderson,_Nevada",
          },
        ],
        priceRange: "$$$",
        paymentAccepted: "Cash, Check, Credit Card, Wire Transfer",
        currenciesAccepted: "USD",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.reviews.ratingValue,
          reviewCount: siteConfig.reviews.reviewCount,
          bestRating: siteConfig.reviews.bestRating,
          worstRating: siteConfig.reviews.worstRating,
        },
        openingHoursSpecification: siteConfig.contact.hoursDetailed.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.day,
          opens: h.opens,
          closes: h.closes,
        })),
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible entrance", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible parking lot", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible restroom", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible seating", value: true },
          { "@type": "LocationFeatureSpecification", name: "Gender-neutral restroom", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free parking lot", value: true },
          { "@type": "LocationFeatureSpecification", name: "On-site parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Onsite services available", value: true },
          { "@type": "LocationFeatureSpecification", name: "Offers online appointments", value: true },
        ],
        knowsAbout: [
          siteConfig.categories.primary,
          ...siteConfig.categories.additional,
          "MacDonald Highlands Real Estate",
          "Listing Specialist Services",
          "Luxury Home Sales",
          "DragonRidge Country Club Properties",
          "Guard-Gated Communities",
          "Henderson Real Estate",
        ],
        memberOf: {
          "@type": "Organization",
          name: siteConfig.agent.brokerage,
          url: "https://www.berkshirehathawayhs.com",
        },
        employee: {
          "@id": "https://www.macdonaldhighlandshomes.com/#person",
        },
        founder: {
          "@id": "https://www.macdonaldhighlandshomes.com/#person",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "GBP MacDonald Highlands Real Estate Services",
          itemListElement: siteConfig.gbpServices.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              url: `https://www.macdonaldhighlandshomes.com${service.href}`,
              provider: {
                "@id": "https://www.macdonaldhighlandshomes.com/#organization",
              },
              areaServed: {
                "@id": "https://www.macdonaldhighlandshomes.com/#macdonald-highlands",
              },
            },
          })),
        },
        sameAs: gbpSocialSameAs(),
      },
      {
        "@type": "Person",
        "@id": "https://www.macdonaldhighlandshomes.com/#person",
        name: siteConfig.agent.name,
        alternateName: ["Jan Duffy", "Janet Duffy", "Duffy", "Dr. Jan Duffy REALTOR"],
        jobTitle: "MacDonald Highlands Realtor & Listing Specialist",
        url: "https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy",
        image: "https://www.macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        knowsAbout: [
          "MacDonald Highlands realtor services",
          "MacDonald Highlands luxury home sales",
          "Henderson NV guard-gated communities",
        ],
        worksFor: {
          "@id": "https://www.macdonaldhighlandshomes.com/#organization",
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
        sameAs: gbpSocialSameAs(),
      },
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
