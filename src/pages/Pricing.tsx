import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import {
  PRICING_PACKAGES,
  PRICING_COMPARISON_ROWS,
  PRICING_FAQS,
  PRICING_DISCLAIMER,
} from '../data/pricing';
import { Accordion } from '../components/ui/Accordion';

export function Pricing() {
  return (
    <>
      <SEOHead
        title="Pricing"
        description="Indicative commercial packages in Philippine Pesos (PHP) for Y & B Technology: Starter, Business Intelligence, Enterprise AI, and Managed Intelligence."
        path="/pricing"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Commercial Service Packages · Philippine Peso (PHP)
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Transparent Indicative Pricing Tiers
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Start with a focused single-workflow pilot or commission multi-system integration
              and ongoing managed support as your business scales.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-shadow ${
                  pkg.featured
                    ? 'bg-[#4A372A] text-[#FFF9F4] border-[#916E55] shadow-lg'
                    : 'yb-card-surface text-[#4A372A] dark:text-[#FFF9F4]'
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      pkg.featured ? 'text-[#D9BE9D]' : 'text-[#916E55] dark:text-[#D9BE9D]'
                    }`}
                  >
                    {pkg.targetClient}
                  </p>
                  <h2 className="font-display text-xl font-bold mt-1.5">{pkg.name}</h2>

                  <div className="mt-4 pb-4 border-b border-current/12">
                    <p className="font-display text-2xl font-extrabold tabular-nums">
                      {pkg.priceRange}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        pkg.featured ? 'text-[#E5D6CA]' : 'text-[#6E5849] dark:text-[#D5C3B3]'
                      }`}
                    >
                      Indicative fee · {pkg.billingCycle}
                    </p>
                  </div>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      pkg.featured ? 'text-[#E5D6CA]' : 'text-[#6E5849] dark:text-[#D5C3B3]'
                    }`}
                  >
                    {pkg.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            pkg.featured ? 'text-[#D9BE9D]' : 'text-[#916E55] dark:text-[#D9BE9D]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    to="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors min-h-[44px] ${
                      pkg.featured
                        ? 'bg-[#D9BE9D] text-[#1E1510] hover:bg-[#FFF9F4]'
                        : 'bg-[#916E55] text-[#FFF9F4] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:text-[#1E1510] dark:hover:bg-[#E5D6CA]'
                    }`}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Required Pricing Disclaimer */}
          <div
            role="note"
            className="rounded-xl border border-[#916E55]/30 dark:border-[#D9BE9D]/25 bg-[#F7EFE7] dark:bg-[#281D16] p-4 sm:p-5 flex items-start gap-3"
          >
            <Info className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5" aria-hidden="true" />
            <p className="text-sm text-[#4A372A] dark:text-[#FFF9F4] font-medium">
              {PRICING_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Package Comparison
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
              Compare Scope &amp; Delivery Structure
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/15 bg-white dark:bg-[#281D16]">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#4A372A]/12 dark:border-[#D9BE9D]/15 bg-[#E5D6CA]/45 dark:bg-[#1E1510]">
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">Dimension</th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">AI Starter</th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">Business Intelligence</th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">Enterprise AI</th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">Managed Intelligence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4A372A]/10 dark:divide-[#D9BE9D]/12 text-sm">
                {PRICING_COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" className="py-4 px-5 font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                      {row.feature}
                    </th>
                    <td className="py-4 px-5 text-[#6E5849] dark:text-[#D5C3B3]">{row.starter}</td>
                    <td className="py-4 px-5 text-[#6E5849] dark:text-[#D5C3B3]">{row.business}</td>
                    <td className="py-4 px-5 text-[#6E5849] dark:text-[#D5C3B3]">{row.enterprise}</td>
                    <td className="py-4 px-5 text-[#6E5849] dark:text-[#D5C3B3]">{row.managed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                Scope &amp; Billing Clarity
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                Pricing Questions
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-5 py-2.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
            >
              <span>Request a Tailored Quotation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <Accordion items={PRICING_FAQS} />
        </div>
      </section>
    </>
  );
}
