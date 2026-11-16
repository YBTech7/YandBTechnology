import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { SERVICES } from '../data/services';
import { DataIntelligenceVisual } from '../components/animations/DataIntelligenceVisual';

export function Services() {
  return (
    <>
      <SEOHead
        title="Services"
        description="Explore Y & B Technology's five service lines: AI Solutions Development, Business Process Automation, Systems Integration, AI Consulting, and Managed Services."
        path="/services"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Y&amp;B Intelligence · Five Core Service Lines
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              End-to-End AI &amp; Automation Engineering
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Whether you need a focused AI assistant, automated back-office workflows, connected
              cloud systems, or ongoing managed support, our services are structured for clear
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="yb-card-surface rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tabular text-sm font-bold text-[#916E55] dark:text-[#D9BE9D]">
                    {service.indexLabel}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {service.title}
                  </h2>
                </div>
                <p className="text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                  {service.tagline}
                </p>
                <p className="text-base leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                  {service.plainDescription}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:hover:bg-[#E5D6CA] px-5 py-2.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] transition-colors min-h-[44px]"
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D] mb-3">
                  Included Scope Areas
                </h3>
                <ul className="space-y-2.5">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm text-[#4A372A] dark:text-[#FFF9F4]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              See How Operational Metrics Come Together
            </h2>
            <p className="mt-2 text-sm text-[#6E5849] dark:text-[#D5C3B3]">
              Interactive preview of how connected automation workflows organize inquiries,
              documents, and reporting.
            </p>
          </div>
          <DataIntelligenceVisual />
        </div>
      </section>
    </>
  );
}
