type ServiceSchemaProps = {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  image?: string;
};

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  image,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    ...(image
      ? { image: image.startsWith("http") ? image : `https://www.macdonaldhighlandshomes.com${image}` }
      : {}),
    provider: {
      "@id": "https://www.macdonaldhighlandshomes.com/#organization",
    },
    broker: {
      "@id": "https://www.macdonaldhighlandshomes.com/#person",
    },
    areaServed: {
      "@type": "Place",
      name: "MacDonald Highlands, Henderson, NV",
      containedInPlace: {
        "@type": "City",
        name: "Henderson",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: serviceUrl,
      priceCurrency: "USD",
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
