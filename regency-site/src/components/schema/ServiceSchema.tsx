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
      "@id": "https://www.macdonaldhighlandshomes.com/#organization"
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}


