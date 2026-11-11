import { siteConfig } from "@/config/siteConfig";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.macdonaldhighlandshomes.com/#organization",
        name: "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy",
        alternateName: [
          "MacDonald Highlands Homes and Real Estate",
          "Dr. Jan Duffy Listing Specialist",
        ],
        url: "https://www.macdonaldhighlandshomes.com",
        image: "https://www.macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
        logo: "https://www.macdonaldhighlandshomes.com/logos/brand/macdonald-highlands-logo-dark.svg",
        description: siteConfig.description,
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
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
          latitude: 36.0055,
          longitude: -115.1175,
        },
        areaServed: [
          {
            "@type": "Place",
            "@id": "https://www.macdonaldhighlandshomes.com/#macdonald-highlands",
            name: "MacDonald Highlands",
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
          {
            "@type": "City",
            name: "Las Vegas",
            sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
          },
        ],
        priceRange: "$$$",
        paymentAccepted: "Cash, Check, Credit Card, Wire Transfer",
        currenciesAccepted: "USD",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
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
        knowsAbout: [
          "MacDonald Highlands Real Estate",
          "Listing Specialist Services",
          "Luxury Home Sales",
          "DragonRidge Country Club Properties",
          "Guard-Gated Communities",
          "Henderson Real Estate",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "MacDonald Highlands Luxury Real Estate Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Selling Your MacDonald Highlands Home",
                url: "https://www.macdonaldhighlandshomes.com/services/selling-your-macdonald-highlands-home",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Buying in MacDonald Highlands",
                url: "https://www.macdonaldhighlandshomes.com/services/buying-in-macdonald-highlands",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Luxury Home Valuation",
                url: "https://www.macdonaldhighlandshomes.com/services/luxury-home-valuation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Off-Market Opportunities",
                url: "https://www.macdonaldhighlandshomes.com/services/off-market-opportunities",
              },
            },
          ],
        },
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.twitter,
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.macdonaldhighlandshomes.com/#person",
        name: siteConfig.agent.name,
        jobTitle: siteConfig.agent.title,
        url: "https://www.macdonaldhighlandshomes.com/about-dr-jan-duffy",
        image: "https://www.macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
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
