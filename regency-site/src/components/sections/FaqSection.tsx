type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

/**
 * Visible FAQ block — answers must stay aligned with FaqSchema JSON-LD.
 */
export default function FaqSection({
  title = "Frequently Asked Questions",
  faqs,
}: FaqSectionProps) {
  if (!faqs.length) return null;

  return (
    <section className="section-padding bg-neutral-50" aria-labelledby="faq-heading">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">
            {title}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-neutral-200 bg-white p-6 open:shadow-md"
              >
                <summary className="faq-question cursor-pointer list-none font-serif text-xl font-semibold text-neutral-900 marker:content-none flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    className="text-primary-600 text-2xl leading-none transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="faq-answer mt-4 text-lg text-neutral-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
