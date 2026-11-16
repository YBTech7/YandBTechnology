import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PROCESS_STAGES } from '../data/company';
import { AutomationFlowVisual } from '../components/animations/AutomationFlowVisual';

export function Process() {
  return (
    <>
      <SEOHead
        title="Our Process"
        description="Discover Y & B Technology's 7-stage delivery methodology: Discovery, Assessment, Solution Design, Development, Testing, Deployment, and Ongoing Support."
        path="/process"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Service Delivery Methodology
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Structured Engineering From Discovery to Ongoing Support
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Every engagement follows written scope agreements, formal client sign-offs,
              accuracy and privacy checks, and clear operational handovers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="yb-card-surface rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono-tabular text-sm font-bold text-[#916E55] dark:text-[#D9BE9D]">
                  Stage {stage.number}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                  {stage.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                  {stage.summary}
                </p>
              </div>
              <div className="md:col-span-7 rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-5 border border-[#4A372A]/10 dark:border-[#D9BE9D]/15">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D] mb-3">
                  Key Outputs &amp; Controls
                </p>
                <ul className="space-y-2">
                  {stage.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-[#4A372A] dark:text-[#FFF9F4]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <AutomationFlowVisual />
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-6 py-3.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
            >
              <span>Begin Stage 01: Book Discovery Call</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
