import { siteConfig } from "@/config/siteConfig";

type ServiceSchemaProps = {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
};

export default function ServiceSchema({ 
  serviceName, 
  serviceDescription, 
  serviceUrl 
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "RealEstateAgent",
      "name": siteConfig.agent.name,
      "telephone": `+1-${siteConfig.contact.phone.replace(/-/g, '-')}`,
      "email": siteConfig.contact.email,
      "url": "https://macdonaldhighlandshomes.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "MacDonald Highlands, Henderson, NV"
    },
    "url": serviceUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


