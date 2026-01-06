import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/ui/JsonLd';
import { generalFAQ } from '@/config/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - QR Code Generator | QR Studio',
  description: 'Find answers to common questions about creating, downloading, and using QR codes. Learn about privacy, technical details, and business use cases.',
};

export default function FAQPage() {
  const faqSchema = {
    mainEntity: generalFAQ.flatMap(cat => cat.questions).map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <div className="bg-background-secondary min-h-screen py-12">
      <JsonLd type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-text-secondary">
            Everything you need to know about creating and using QR codes.
          </p>
        </div>

        <div className="space-y-12">
          {generalFAQ.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-border-custom">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.questions.map((q) => (
                  <details
                    key={q.id}
                    id={q.id}
                    className="group bg-white rounded-xl border border-border-custom overflow-hidden transition-all hover:border-primary"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {q.question}
                      </h3>
                      <span className="text-text-secondary group-open:rotate-180 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-custom pt-4">
                      {q.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Still Have Questions?</h2>
          <p className="text-text-secondary mb-8">
            We're here to help! If you couldn't find the answer you're looking for, feel free to contact us or start creating your QR code.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/url"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
            >
              Create QR Code
            </Link>
            <Link
              href="/contact"
              className="bg-white text-text-primary border border-border-custom px-8 py-3 rounded-xl font-bold hover:bg-background-secondary transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
