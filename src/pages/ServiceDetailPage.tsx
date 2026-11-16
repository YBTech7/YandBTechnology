import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { getServiceBySlug, SERVICES } from '../data/services';
import { VisualShowcase } from '../components/animations/VisualShowcase';
import { Accordion } from '../components/ui/Accordion';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.plainDescription}
        path={`/services/${service.slug}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          provider: {
            '@type': 'Organization',
            name: 'Y & B Technology',
          },
          description: service.plainDescription,
          areaServed: 'Philippines',
        }}
      />

      {/* Service Hero */}
      <section className="yb-hero-gradient text-[#FFF9F4] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#D9BE9D]">
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
                <span aria-hidden="true">/</span>
                <span>Service {service.indexLabel}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
                {service.plainDescription}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D9BE9D] hover:bg-[#FFF9F4] px-5 py-3 text-sm font-bold text-[#1E1510] transition-colors min-h-[44px]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center rounded-lg border border-[#D9BE9D]/45 hover:border-[#FFF9F4] px-5 py-3 text-sm font-semibold text-[#FFF9F4] transition-colors min-h-[44px]"
                >
                  View Pricing Ranges
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <VisualShowcase type={service.visualType} />
            </div>
          </div>
        </div>
      </section>

      {/* Common Business Challenges & Proposed Solutions */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Common Operational Challenges
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2 mb-8">
              Why Organizations Seek {service.shortTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.challenges.map((ch) => (
                <div key={ch.title} className="yb-card-surface rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {ch.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {ch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Proposed Solutions
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2 mb-8">
              What We Design &amp; Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.solutions.map((sol) => (
                <div key={sol.title} className="yb-card-surface rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Potential Benefits & Example Workflow */}
      <section className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Potential Business Benefits
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              Operational Outcomes We Target
            </h2>
            <ul className="space-y-3.5 pt-2">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#4A372A] dark:text-[#FFF9F4]"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 yb-card-surface rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
                Example Workflow (Hypothetical Illustration)
              </p>
              <h3 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                {service.exampleWorkflow.scenarioNote}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.exampleWorkflow.steps.map((st) => (
                <div
                  key={st.step}
                  className="rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-4 border border-[#4A372A]/10 dark:border-[#D9BE9D]/15"
                >
                  <span className="font-mono-tabular text-xs font-bold text-[#916E55] dark:text-[#D9BE9D]">
                    Step {st.step}
                  </span>
                  <p className="font-bold text-sm text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                    {st.title}
                  </p>
                  <p className="text-xs leading-relaxed text-[#6E5849] dark:text-[#D5C3B3] mt-1">
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Service Questions
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
          </div>
          <Accordion items={service.faqs} />

          {/* Other Services Quick Links */}
          <div className="pt-8 border-t border-[#4A372A]/12 dark:border-[#D9BE9D]/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3 text-xs font-semibold">
              {SERVICES.filter((s) => s.slug !== service.slug).map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/20 px-3 py-2 text-[#4A372A] dark:text-[#FFF9F4] hover:border-[#916E55]"
                >
                  {other.shortTitle}
                </Link>
              ))}
            </div>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-5 py-2.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
