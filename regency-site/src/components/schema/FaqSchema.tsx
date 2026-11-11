type FaqItem = {
  question: string;
  answer: string;
};

type FaqSchemaProps = {
  faqs: FaqItem[];
};

/**
 * FAQPage JSON-LD for visible on-page Q&A only.
 * Keep question/answer text identical to rendered FAQ content (AEO / AI extraction).
 */
export default function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
