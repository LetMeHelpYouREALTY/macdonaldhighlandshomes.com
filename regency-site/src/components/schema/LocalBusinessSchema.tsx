import { siteConfig } from "@/config/siteConfig";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://macdonaldhighlandshomes.com/#organization",
    "name": siteConfig.agent.name,
    "alternateName": "Dr. Jan Duffy Real Estate",
    "url": "https://macdonaldhighlandshomes.com",
    "logo": "https://macdonaldhighlandshomes.com/Image/person1.jpeg",
    "image": "https://macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phoneFormatted,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0514",
      "longitude": "-115.0500"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Henderson",
        "sameAs": "https://en.wikipedia.org/wiki/Henderson,_Nevada"
      },
      {
        "@type": "Place",
        "name": "MacDonald Highlands"
      },
      {
        "@type": "Place",
        "name": "Las Vegas"
      }
    ],
    "priceRange": "$1,000,000-$15,000,000+",
    "paymentAccepted": "Cash, Check, Credit Card, Wire Transfer",
    "currenciesAccepted": "USD",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": siteConfig.agent.brokerage,
      "url": "https://www.berkshirehathawayhs.com"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Real Estate License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Nevada Real Estate Division"
      },
      "identifier": siteConfig.agent.license
    },
    "jobTitle": siteConfig.agent.title,
    "knowsAbout": [
      "MacDonald Highlands Real Estate",
      "Luxury Home Sales",
      "DragonRidge Country Club Properties",
      "Guard-Gated Communities",
      "Henderson Real Estate",
      "Las Vegas Luxury Real Estate"
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
