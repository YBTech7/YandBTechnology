import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { PRICING_DISCLAIMER } from '../data/pricing';

export function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Use"
        description="Website Terms of Use, informational disclosures, intellectual property notice, and indicative pricing terms for Y & B Technology."
        path="/terms"
      />

      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <header className="space-y-3 border-b border-[#4A372A]/12 dark:border-[#D9BE9D]/15 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Website Governance
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#4A372A] dark:text-[#FFF9F4]">
              Terms of Use
            </h1>
            <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
              Governing access to the Y &amp; B Technology public corporate website.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#4A372A]/90 dark:text-[#E5D6CA]">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                1. Informational Nature of Website Content
              </h2>
              <p>
                Materials published on this website—including service descriptions, illustrative
                industry scenarios, and the interactive Y&amp;B IntelliFlow product demonstration—are
                provided for informational purposes only and do not constitute a binding commercial
                offer, warranty, or legal/financial advice.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                2. Indicative Pricing &amp; Written Engagements
              </h2>
              <p>{PRICING_DISCLAIMER}</p>
              <p>
                All commercial client engagements are governed exclusively by signed written
                agreements, such as Master Services Agreements and Statements of Work, defining
                deliverables, acceptance criteria, fees, and service levels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                3. Intellectual Property
              </h2>
              <p>
                The Y &amp; B Technology brand, Y&amp;B Intelligence, Y&amp;B IntelliFlow,
                corporate logos, text, and original visualizations displayed on this website remain
                the intellectual property of Y &amp; B Technology and are subject to applicable
                registration and copyright protections.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                4. Contact
              </h2>
              <p>
                Questions regarding these terms may be submitted via our{' '}
                <Link to="/contact" className="font-semibold text-[#916E55] dark:text-[#D9BE9D] underline">
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
