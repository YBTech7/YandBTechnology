import { Link } from 'react-router-dom';
import {
  Bot,
  Users,
  FileSearch,
  GitMerge,
  BarChart2,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { IntelliFlowDemo } from '../components/intelliflow/IntelliFlowDemo';
import { CloudConnectivityVisual } from '../components/animations/CloudConnectivityVisual';

const INTELLIFLOW_MODULES = [
  {
    title: 'AI Customer Assistant',
    description:
      'Handles routine inquiries across web and messaging channels using your approved policies, escalating sensitive requests cleanly.',
    icon: Bot,
  },
  {
    title: 'Lead Management',
    description:
      'Captures prospect details, qualifies intent, updates pipeline stages, and schedules timely follow-up reminders.',
    icon: Users,
  },
  {
    title: 'Document Intelligence',
    description:
      'Classifies incoming files and extracts structured line items from forms, waybills, and invoices for verification.',
    icon: FileSearch,
  },
  {
    title: 'Workflow Orchestration',
    description:
      'Connects email, spreadsheets, CRMs, and internal notifications into reliable multi-step operational pipelines.',
    icon: GitMerge,
  },
  {
    title: 'Business Dashboards',
    description:
      'Gives managers a consolidated view of inquiry volume, turnaround status, exceptions, and team workload.',
    icon: BarChart2,
  },
  {
    title: 'Human Approval Controls',
    description:
      'Ensures consequential responses, quotations, and system updates pause for authorized human review when needed.',
    icon: UserCheck,
  },
];

export function IntelliFlow() {
  return (
    <>
      <SEOHead
        title="Y&B IntelliFlow"
        description="Explore Y&B IntelliFlow, a proposed configurable AI-powered business automation solution with human approval controls and interactive workflow simulation."
        path="/intelliflow"
      />

      {/* Hero */}
      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Y&amp;B Intelligence Flagship Concept · Configurable Service Package
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Y&amp;B IntelliFlow
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Y&amp;B IntelliFlow is our proposed configurable AI-powered business automation
              solution—combining customer assistance, lead management, document intelligence,
              workflow orchestration, business dashboards, and mandatory human approval controls.
            </p>
            <p className="text-sm text-[#D9BE9D]">
              Initially offered as a tailored implementation package configured around your
              existing tools, with modular expansion as your operational requirements grow.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 rounded-lg bg-[#D9BE9D] hover:bg-[#FFF9F4] px-5 py-3 text-sm font-bold text-[#1E1510] transition-colors min-h-[44px]"
              >
                <span>Launch Interactive Product Demonstration</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact?service=Y%26B%20IntelliFlow%20Inquiry"
                className="inline-flex items-center rounded-lg border border-[#D9BE9D]/45 hover:border-[#FFF9F4] px-5 py-3 text-sm font-semibold text-[#FFF9F4] transition-colors min-h-[44px]"
              >
                Request Implementation Scope
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Six Proposed Modules */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Core Architecture Modules
            </p>
            <h2 className="font-display text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              Six Integrated Capabilities Working Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTELLIFLOW_MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className="yb-card-surface rounded-2xl p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5D6CA] dark:bg-[#3C2C22] text-[#4A372A] dark:text-[#D9BE9D] mb-4">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Product Demonstration */}
      <section
        id="interactive-demo"
        className="py-16 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Interactive Product Demonstration
            </p>
            <h2 className="font-display text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              Walk Through the 7-Step IntelliFlow Lifecycle
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
              This interactive simulation uses synthetic sample records to demonstrate how
              IntelliFlow processes an incoming request, enforces a human approval checkpoint,
              and synchronizes CRM status—without representing a live production deployment.
            </p>
          </div>

          <IntelliFlowDemo />
        </div>
      </section>

      {/* Connectivity Overview */}
      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              System Connectivity
            </p>
            <h2 className="font-display text-3xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              Designed to Connect With Your Existing Tools
            </h2>
            <p className="text-base text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
              Rather than forcing a complete replacement of your current software, IntelliFlow
              is configured around your approved cloud infrastructure, business applications, and
              database controls.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?service=Y%26B%20IntelliFlow%20Inquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-5 py-3 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
              >
                <span>Schedule a Discovery Walkthrough</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <CloudConnectivityVisual />
          </div>
        </div>
      </section>
    </>
  );
}
