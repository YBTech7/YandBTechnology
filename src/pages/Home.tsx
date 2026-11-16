import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Brain,
  Workflow,
  Network,
  Compass,
  ShieldCheck,
  ArrowRight,
  Clock,
  FileText,
  Layers,
  MessageSquareWarning,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { SERVICES } from '../data/services';
import { INDUSTRY_SOLUTIONS } from '../data/solutions';
import { PROCESS_STAGES } from '../data/company';
import { GENERAL_FAQS } from '../data/resources';
import { AutomationFlowVisual } from '../components/animations/AutomationFlowVisual';
import { Accordion } from '../components/ui/Accordion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NeuralSphereCanvas = lazy(() =>
  import('../components/animations/NeuralSphereCanvas').then((m) => ({
    default: m.NeuralSphereCanvas,
  }))
);

const SERVICE_ICONS = {
  'ai-development': Brain,
  'business-automation': Workflow,
  'systems-integration': Network,
  'ai-consulting': Compass,
  'managed-services': ShieldCheck,
};

const CHALLENGES = [
  {
    title: 'Repetitive Manual Work',
    description:
      'Staff spend hours copying customer details, order updates, and records between spreadsheets and email.',
    icon: Layers,
  },
  {
    title: 'Slow Customer Responses',
    description:
      'Inquiries arriving after hours or during busy shifts wait too long for clear, helpful replies.',
    icon: Clock,
  },
  {
    title: 'Disconnected Business Tools',
    description:
      'Accounting, CRM, inventory, and messaging tools operate in separate silos with no shared view.',
    icon: Network,
  },
  {
    title: 'Time-Consuming Document Processing',
    description:
      'Invoices, receipts, forms, and proposals require slow manual reading and re-encoding.',
    icon: FileText,
  },
  {
    title: 'Limited Reporting Visibility',
    description:
      'Decision-makers wait days for manual spreadsheet summaries before spotting operational trends.',
    icon: BarChart3,
  },
  {
    title: 'Inefficient Internal Workflows',
    description:
      'Approvals, onboarding steps, and handoffs stall inside cluttered chat threads and email chains.',
    icon: MessageSquareWarning,
  },
];

const WHY_CHOOSE_POINTS = [
  {
    title: 'Practical AI Solutions',
    description:
      'We focus on clear business outcomes—reducing response times and manual workload rather than selling technology for its own sake.',
  },
  {
    title: 'Business-Focused Automation',
    description:
      'Every workflow is built around how your team actually operates, connecting smoothly with the tools you already use.',
  },
  {
    title: 'Scalable Systems',
    description:
      'Modular architectures let you start with one focused workflow and expand step by step as your organization grows.',
  },
  {
    title: 'Human Oversight',
    description:
      'Consequential decisions, financial quotes, and sensitive customer actions remain reviewable and controllable by your team.',
  },
  {
    title: 'Security-Conscious Design',
    description:
      'Built with least-privilege access, encryption, environment segregation, and alignment with the Philippine Data Privacy Act (RA 10173).',
  },
  {
    title: 'End-to-End Support',
    description:
      'From initial discovery and design through development, staff training, and ongoing managed monitoring under one accountable partner.',
  },
];

export function Home() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title="Y & B Technology — Engineering Intelligence. Automating the Future."
        description="Transform your business with practical AI solutions, business process automation, intelligent systems integration, and Y&B IntelliFlow."
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Y & B Technology',
          alternateName: 'Y&B Intelligence',
          description:
            'AI-first technology solutions provider specializing in AI development, business process automation, systems integration, consulting, and managed services.',
          areaServed: 'Philippines',
        }}
      />

      {/* HERO SECTION */}
      <section className="yb-hero-gradient relative overflow-hidden text-[#FFF9F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Copy */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#D9BE9D]">
                AI • AUTOMATION • INTELLIGENT SYSTEMS
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-[#FFF9F4]">
                Engineering Intelligence.
                <br />
                Automating the Future.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#E5D6CA] max-w-xl">
                Transform your business with intelligent AI solutions, seamless automation, and
                advanced digital systems designed to simplify operations and accelerate growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9BE9D] hover:bg-[#FFF9F4] px-6 py-3.5 text-sm font-bold text-[#1E1510] transition-colors min-h-[44px]"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#D9BE9D]/50 hover:border-[#FFF9F4] hover:bg-[#FFF9F4]/10 px-6 py-3.5 text-sm font-semibold text-[#FFF9F4] transition-colors min-h-[44px]"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>

            {/* 3D AI Neural Network Visual */}
            <div className="lg:col-span-6 h-[340px] sm:h-[420px] lg:h-[460px] w-full">
              <Suspense
                fallback={
                  <div className="h-full w-full flex items-center justify-center text-xs text-[#D9BE9D]">
                    Initializing neural visualization...
                  </div>
                }
              >
                <NeuralSphereCanvas className="h-full w-full" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT WE DO */}
      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                What We Do
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
                Practical AI &amp; Automation Built Around Real Operations
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-base leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
              <p>
                Through our <strong className="text-[#4A372A] dark:text-[#FFF9F4]">Y&amp;B Intelligence</strong>{' '}
                division, Y &amp; B Technology helps small and medium-sized businesses, service
                firms, and growing enterprises replace slow manual work with dependable digital
                systems.
              </p>
              <p>
                You do not need an in-house AI team to benefit. We translate operational bottlenecks
                into clean, secure workflows—connecting customer inquiries, documents, approvals,
                and reporting tools while keeping your staff firmly in control of every important
                decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CORE SERVICES */}
      <section className="py-16 sm:py-20 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                Our Core Services
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
                Five Focused Capabilities Under One Partner
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>View all services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.slug];
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`group yb-card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#916E55]/45 dark:hover:border-[#D9BE9D]/45 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5D6CA] dark:bg-[#3C2C22] text-[#4A372A] dark:text-[#D9BE9D]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono-tabular text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                        {service.indexLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4] group-hover:text-[#916E55] dark:group-hover:text-[#D9BE9D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                      {service.plainDescription}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12 flex items-center justify-between text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS CHALLENGES WE SOLVE */}
      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Operational Bottlenecks
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              Business Challenges We Help You Resolve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="yb-card-surface rounded-2xl p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5D6CA]/70 dark:bg-[#3C2C22] text-[#916E55] dark:text-[#D9BE9D] mb-4">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Y&B INTELLIFLOW */}
      <section className="py-16 sm:py-20 bg-[#2B1F17] text-[#FFF9F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
                Flagship Proposed Solution · Y&amp;B Intelligence
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Introducing Y&amp;B IntelliFlow
              </h2>
              <p className="text-base leading-relaxed text-[#E5D6CA]">
                Y&amp;B IntelliFlow is our proposed configurable AI-powered business automation
                solution—bringing together customer assistants, lead routing, document intelligence,
                workflow orchestration, business dashboards, and human approval controls in one
                cohesive package.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/intelliflow"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D9BE9D] hover:bg-[#FFF9F4] px-5 py-3 text-sm font-bold text-[#1E1510] transition-colors min-h-[44px]"
                >
                  <span>Try Interactive Product Demo</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center rounded-lg border border-[#D9BE9D]/40 hover:border-[#FFF9F4] px-5 py-3 text-sm font-semibold text-[#FFF9F4] transition-colors min-h-[44px]"
                >
                  View Indicative Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'AI Customer Assistant',
                  detail: 'Handles routine inquiries using your approved business policies.',
                },
                {
                  title: 'Lead Management',
                  detail: 'Captures, qualifies, and routes inquiries with timely follow-ups.',
                },
                {
                  title: 'Document Intelligence',
                  detail: 'Extracts structured fields from PDFs, forms, and invoices.',
                },
                {
                  title: 'Human Approval Controls',
                  detail: 'Keeps staff in command before quotes or consequential updates send.',
                },
              ].map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-xl border border-[#D9BE9D]/20 bg-[#1E1510]/65 p-5"
                >
                  <h3 className="font-display text-base font-bold text-[#D9BE9D]">{mod.title}</h3>
                  <p className="mt-1.5 text-sm text-[#E5D6CA] leading-relaxed">{mod.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW AI AUTOMATION WORKS */}
      <section className="py-16 sm:py-20 bg-[#F7EFE7] dark:bg-[#241913]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              How AI Automation Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              A Clear Path From Customer Inquiry to Confirmed Action
            </h2>
          </div>
          <AutomationFlowVisual />
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                Industries We Serve
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
                Tailored Automation Across Key Sectors
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>Explore all 10 industries</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_SOLUTIONS.slice(0, 6).map((ind) => (
              <div key={ind.id} className="yb-card-surface rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-[#916E55] dark:text-[#D9BE9D]">
                    {ind.segment} Focus Sector
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {ind.summary}
                  </p>
                </div>
                <Link
                  to="/solutions"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline"
                >
                  <span>View illustrative use cases</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE Y & B TECHNOLOGY */}
      <section className="py-16 sm:py-20 bg-[#F7EFE7] dark:bg-[#241913] border-y border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Why Choose Y &amp; B Technology
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
              Designed for Credibility, Control, and Measurable Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_POINTS.map((point) => (
              <div key={point.title} className="yb-card-surface rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <CheckCircle2
                    className="h-5 w-5 text-[#916E55] dark:text-[#D9BE9D] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR PROCESS */}
      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                Our Process
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
                A Structured 7-Stage Delivery Lifecycle
              </h2>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline whitespace-nowrap shrink-0"
            >
              <span>Inspect full delivery lifecycle</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {PROCESS_STAGES.map((stage) => (
              <div key={stage.number} className="yb-card-surface rounded-xl p-4 flex flex-col">
                <span className="font-mono-tabular text-xs font-bold text-[#916E55] dark:text-[#D9BE9D]">
                  {stage.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1.5">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 bg-[#F7EFE7] dark:bg-[#241913] border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
                Frequently Asked Questions
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4] mt-2">
                Clear Answers Before We Begin
              </h2>
            </div>
            <Link
              to="/faq"
              className="text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline whitespace-nowrap shrink-0"
            >
              View all FAQs
            </Link>
          </div>

          <Accordion items={GENERAL_FAQS.slice(0, 5)} />
        </div>
      </section>

      {/* SECTION 10: CONTACT & CONSULTATION CTA */}
      <section className="py-16 sm:py-20 bg-[#4A372A] text-[#FFF9F4]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
            Start With a Focused Conversation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Simplify Your Workflows With Practical AI?
          </h2>
          <p className="text-base text-[#E5D6CA] max-w-2xl mx-auto leading-relaxed">
            Book a consultation to discuss your current processes, explore indicative packages in
            Philippine Pesos (PHP), and identify high-value automation opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D9BE9D] hover:bg-[#FFF9F4] px-6 py-3.5 text-sm font-bold text-[#1E1510] transition-colors min-h-[44px]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-lg border border-[#D9BE9D]/45 hover:border-[#FFF9F4] px-6 py-3.5 text-sm font-semibold text-[#FFF9F4] transition-colors min-h-[44px]"
            >
              Review Pricing Tiers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
