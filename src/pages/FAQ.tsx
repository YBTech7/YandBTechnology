import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { GENERAL_FAQS } from '../data/resources';
import { PRICING_FAQS } from '../data/pricing';
import { Accordion } from '../components/ui/Accordion';

export function FAQ() {
  const allFaqs = [
    ...GENERAL_FAQS,
    ...PRICING_FAQS.map((item) => ({ ...item, category: 'Pricing & Engagement' })),
  ];
  const categories = ['All', ...Array.from(new Set(allFaqs.map((f) => f.category || 'General')))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered =
    selectedCategory === 'All'
      ? allFaqs
      : allFaqs.filter((f) => (f.category || 'General') === selectedCategory);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Answers to common questions about Y & B Technology, Y&B IntelliFlow, data privacy (RA 10173), human approval controls, and pricing."
        path="/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Frequently Asked Questions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Clear Answers on How We Work
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Learn how Y &amp; B Technology approaches practical automation, data protection,
              human-in-the-loop controls, and project scoping.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#4A372A] text-[#FFF9F4] dark:bg-[#D9BE9D] dark:text-[#1E1510]'
                    : 'bg-[#E5D6CA]/65 dark:bg-[#2B1F17] text-[#4A372A] dark:text-[#D5C3B3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Accordion items={filtered} allowMultiple />

          <div className="pt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-6 py-3.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
            >
              <span>Still have a question? Book a Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
