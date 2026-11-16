import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPANY_PROFILE } from '../data/company';
import { siteConfig } from '../config/siteConfig';
import { BrandLogo } from '../components/ui/BrandLogo';

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Y & B Technology (Y&B Intelligence): our mission, vision, corporate values, technology architecture, and Responsible AI principles."
        path="/about"
      />

      {/* Page Header */}
      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              About {siteConfig.companyName} · {siteConfig.divisionName}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Making Intelligent Automation Practical, Secure, and Accessible
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              {COMPANY_PROFILE.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Brand Identity */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              Company Introduction
            </h2>
            <p>
              Y &amp; B Technology is a technology solutions and services provider being established
              in the Republic of the Philippines to design, implement, integrate, and maintain
              artificial intelligence, intelligent automation, and software systems for business
              clients.
            </p>
            <p>
              Our founding premise is straightforward: intelligent automation delivers value only
              when anchored to a defined business outcome. We prioritize solving operational
              problems of clear commercial value—helping SMEs, professional service firms, and
              growing organizations modernize their daily workflows with confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="yb-card-surface rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
                  Our Vision
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A372A] dark:text-[#FFF9F4]">
                  {COMPANY_PROFILE.vision}
                </p>
              </div>
              <div className="yb-card-surface rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
                  Our Mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A372A] dark:text-[#FFF9F4]">
                  {COMPANY_PROFILE.mission}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 yb-card-surface rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex justify-center">
              <BrandLogo variant="full" />
            </div>
            <div className="space-y-3 pt-2 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15">
              <h3 className="font-display text-base font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Brand Architecture
              </h3>
              <dl className="space-y-3 text-sm">
                {COMPANY_PROFILE.brandArchitecture.map((item) => (
                  <div key={item.level} className="pb-2 border-b border-[#4A372A]/8 dark:border-[#D9BE9D]/10 last:border-b-0">
                    <dt className="text-xs font-medium text-[#916E55] dark:text-[#D9BE9D]">
                      {item.level}
                    </dt>
                    <dd className="font-semibold text-[#4A372A] dark:text-[#FFF9F4] mt-0.5">
                      {item.name}
                    </dd>
                    <dd className="text-xs text-[#6E5849] dark:text-[#D5C3B3] mt-0.5">
                      {item.role}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Corporate Values
            </p>
            <h2 className="font-display text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              Seven Principles Guiding Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_PROFILE.values.map((val, idx) => (
              <div key={val.name} className="yb-card-surface rounded-2xl p-6">
                <span className="font-mono-tabular text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                  {val.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                  {val.statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI & Technology Approach */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Responsible AI */}
          <div>
            <div className="flex items-center gap-2.5 text-[#916E55] dark:text-[#D9BE9D] mb-2">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                Responsible AI Governance
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mb-8">
              Accountable Systems With Human Oversight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_PROFILE.responsibleAI.map((item) => (
                <div key={item.title} className="yb-card-surface rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Approach & Future Direction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="yb-card-surface rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-[#916E55] dark:text-[#D9BE9D]">
                <Cpu className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Technology Approach
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Modular, Maintainable Architecture
              </h2>
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
                We select proven technologies per engagement based on security obligations,
                maintainability, and total cost of ownership—avoiding unnecessary complexity or
                vendor lock-in.
              </p>
              <div className="space-y-3 pt-2">
                {COMPANY_PROFILE.technologyApproach.map((tech) => (
                  <div
                    key={tech.layer}
                    className="rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-4 border border-[#4A372A]/8 dark:border-[#D9BE9D]/12"
                  >
                    <p className="text-sm font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                      {tech.layer}
                    </p>
                    <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3] mt-1">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="yb-card-surface rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5 text-[#916E55] dark:text-[#D9BE9D]">
                <Layers className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Future Direction
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Measured Long-Term Growth Roadmap
              </h2>
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
                Our strategic direction progresses deliberately from focused client implementations
                toward standardized automation packages and configurable proprietary tools.
              </p>
              <div className="space-y-3 pt-2">
                {COMPANY_PROFILE.strategicDirection.map((step) => (
                  <div
                    key={step.phase}
                    className="rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-4 border border-[#4A372A]/8 dark:border-[#D9BE9D]/12"
                  >
                    <p className="font-mono-tabular text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                      {step.phase}
                    </p>
                    <p className="text-sm font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-0.5">
                      {step.title}
                    </p>
                    <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3] mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:hover:bg-[#E5D6CA] px-6 py-3.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] transition-colors min-h-[44px]"
            >
              <span>Schedule an Introductory Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
