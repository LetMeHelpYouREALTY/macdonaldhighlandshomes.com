import { siteConfig } from "@/config/siteConfig";

export default function RealEstateAgentSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": siteConfig.agent.name,
    "image": "https://macdonaldhighlandshomes.com/photos/agent/dr-jan-duffy-headshot.jpg",
    "telephone": `+1-${siteConfig.contact.phone.replace(/-/g, '-')}`,
    "email": siteConfig.contact.email,
    "url": "https://macdonaldhighlandshomes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zip,
      "streetAddress": siteConfig.contact.address.street
    },
    "areaServed": {
      "@type": "Place",
      "name": "MacDonald Highlands, Henderson, NV"
    },
    "memberOf": {
      "@type": "Organization",
      "name": siteConfig.agent.brokerage
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Real Estate License",
      "recognizedBy": "Nevada Real Estate Division",
      "identifier": siteConfig.agent.license
    },
    "jobTitle": siteConfig.agent.title,
    "description": siteConfig.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
