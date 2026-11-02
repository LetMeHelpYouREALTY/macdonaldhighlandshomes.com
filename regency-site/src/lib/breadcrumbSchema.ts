type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbListJsonLd(items: BreadcrumbItem[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
