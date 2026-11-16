import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { INDUSTRY_SOLUTIONS } from '../data/solutions';

export function Solutions() {
  const [segmentFilter, setSegmentFilter] = useState<'All' | 'Primary' | 'Secondary'>('All');

  const filtered =
    segmentFilter === 'All'
      ? INDUSTRY_SOLUTIONS
      : INDUSTRY_SOLUTIONS.filter((item) => item.segment === segmentFilter);

  return (
    <>
      <SEOHead
        title="Solutions by Industry"
        description="Explore illustrative AI and automation use cases across 10 sectors including SMEs, E-commerce, Retail, Real Estate, Logistics, Professional Services, Education, Healthcare Administration, Manufacturing, and Enterprise."
        path="/solutions"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Industry Solutions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Practical Automation Tailored to Your Sector
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Explore how organizations across ten industries can streamline daily bottlenecks.
              All scenarios shown below are illustrative examples of proposed capabilities rather
              than completed client deployments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Interactive Segment Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1 rounded-lg bg-[#E5D6CA]/65 dark:bg-[#2B1F17] p-1">
              {(['All', 'Primary', 'Secondary'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSegmentFilter(tab)}
                  className={`rounded-md px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    segmentFilter === tab
                      ? 'bg-[#4A372A] text-[#FFF9F4] dark:bg-[#D9BE9D] dark:text-[#1E1510]'
                      : 'text-[#4A372A] dark:text-[#D5C3B3] hover:text-[#916E55]'
                  }`}
                >
                  {tab === 'All' ? 'All 10 Sectors' : `${tab} Market Sectors`}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">
              Showing {filtered.length} industry profiles · Examples are illustrative only
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((ind) => (
              <article
                key={ind.id}
                className="yb-card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[#916E55] dark:text-[#D9BE9D]">
                      {ind.segment} Market Focus · Recommended: {ind.recommendedPackage}
                    </p>
                    <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                      {ind.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                      {ind.summary}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4A372A] dark:text-[#FFF9F4] mb-2">
                      Common Operational Friction
                    </h3>
                    <ul className="space-y-1.5 text-sm text-[#6E5849] dark:text-[#D5C3B3] list-disc pl-4">
                      {ind.challenges.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-4 border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
                      Illustrative Automation Use Cases (Examples)
                    </h3>
                    {ind.illustrativeUseCases.map((uc) => (
                      <p key={uc} className="text-xs sm:text-sm leading-relaxed text-[#4A372A] dark:text-[#FFF9F4]">
                        {uc}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline"
                  >
                    <span>Discuss a workflow for {ind.name.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
