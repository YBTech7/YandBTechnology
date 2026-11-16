import { FAQItem, PricingPackage } from '../types';

export const PRICING_DISCLAIMER =
  'Prices are indicative and subject to project requirements, third-party service costs, support scope, and applicable taxes.';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Y&B AI Starter',
    targetClient: 'Small businesses',
    priceRange: '₱25,000–₱60,000',
    billingCycle: 'one-time',
    summary:
      'An accessible entry point to automate a single high-impact workflow or launch a focused AI customer assistant.',
    inclusions: [
      'Basic AI customer assistant or single workflow automation',
      'Discovery session & workflow mapping',
      'Integration with primary lead or messaging channel',
      'Team onboarding & user documentation',
      'Initial post-launch support window',
    ],
    ctaLabel: 'Request Starter Quote',
  },
  {
    id: 'business-intelligence',
    name: 'Y&B Business Intelligence',
    targetClient: 'Growing SMEs',
    priceRange: '₱75,000–₱200,000',
    billingCycle: 'per project',
    summary:
      'Multi-workflow automation, connected AI assistants, executive reporting dashboards, and structured team training.',
    inclusions: [
      'Multiple integrated operational workflows',
      'Customized AI customer & internal knowledge assistants',
      'CRM, email, and cloud database connectivity',
      'Business reporting dashboard & approval controls',
      'Structured staff training & handover documentation',
    ],
    featured: true,
    ctaLabel: 'Request Project Quote',
  },
  {
    id: 'enterprise-ai',
    name: 'Y&B Enterprise AI',
    targetClient: 'Complex organizations',
    priceRange: '₱250,000+',
    billingCycle: 'custom quotation',
    summary:
      'Bespoke AI architecture, deep legacy/cloud systems integration, formal governance controls, and tailored SLAs.',
    inclusions: [
      'Custom AI systems & multi-department orchestration',
      'Advanced API engineering & secure environment segregation',
      'Human-in-the-loop governance & audit logging',
      'Privacy Impact Assessment support (RA 10173 alignment)',
      'Dedicated rollout, UAT, and phased deployment',
    ],
    ctaLabel: 'Request Custom Quotation',
  },
  {
    id: 'managed-intelligence',
    name: 'Y&B Managed Intelligence',
    targetClient: 'Existing & ongoing clients',
    priceRange: '₱8,000–₱30,000',
    billingCycle: 'monthly',
    summary:
      'Continuous monitoring, technical maintenance, AI cost optimization, and scheduled performance reviews.',
    inclusions: [
      'Proactive workflow & API health monitoring',
      'System maintenance and dependency updates',
      'AI usage and token cost optimization',
      'Periodic security & access reviews',
      'Scheduled performance reviews & iterative improvements',
    ],
    ctaLabel: 'Inquire About Retainer',
  },
];

export const PRICING_COMPARISON_ROWS: {
  feature: string;
  starter: string;
  business: string;
  enterprise: string;
  managed: string;
}[] = [
  {
    feature: 'Target Organization',
    starter: 'Small businesses',
    business: 'Growing SMEs',
    enterprise: 'Complex organizations',
    managed: 'Live AI/automation clients',
  },
  {
    feature: 'Pricing Structure',
    starter: 'One-time project fee',
    business: 'Milestone project fee',
    enterprise: 'Custom quotation',
    managed: 'Monthly retainer',
  },
  {
    feature: 'Workflow Scope',
    starter: '1 core workflow or assistant',
    business: 'Multiple integrated workflows',
    enterprise: 'Cross-department / custom',
    managed: 'Monitoring & enhancements',
  },
  {
    feature: 'Systems Integration',
    starter: 'Essential channel setup',
    business: 'CRM, database & cloud APIs',
    enterprise: 'Custom APIs & modernization',
    managed: 'Maintenance & health checks',
  },
  {
    feature: 'Human Approval Controls',
    starter: 'Included where applicable',
    business: 'Standard approval routing',
    enterprise: 'Role-based governance & logs',
    managed: 'Ongoing access reviews',
  },
  {
    feature: 'Training & Handover',
    starter: 'Onboarding walkthrough',
    business: 'Role-based staff training',
    enterprise: 'Comprehensive enablement',
    managed: 'Quarterly / periodic reviews',
  },
];

export const PRICING_FAQS: FAQItem[] = [
  {
    id: 'price-faq-1',
    question: 'Why are prices shown as ranges?',
    answer:
      'Every business uses different software tools, data formats, and approval rules. Indicative ranges help you plan a realistic budget before we scope your exact workflows during discovery.',
  },
  {
    id: 'price-faq-2',
    question: 'Are third-party AI model or cloud hosting fees included?',
    answer:
      'Third-party AI API usage, cloud hosting, and external SaaS subscriptions are typically billed directly to your organization\'s accounts or itemized transparently in your quotation so you retain full ownership.',
  },
  {
    id: 'price-faq-3',
    question: 'Can we start with a smaller pilot before committing to a full rollout?',
    answer:
      'Yes. We often recommend beginning with a focused single-workflow pilot (such as Y&B AI Starter) to validate operational value before expanding into multi-system automation.',
  },
  {
    id: 'price-faq-4',
    question: 'Are taxes included in the indicative figures?',
    answer:
      'No. Final quotations reflect project scope, third-party service costs, support terms, and applicable Philippine taxes (including VAT where applicable).',
  },
];
