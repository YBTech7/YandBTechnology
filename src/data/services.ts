import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'ai-development',
    indexLabel: '01',
    title: 'AI Solutions Development',
    shortTitle: 'AI Development',
    tagline: 'Practical artificial intelligence tools tailored to your daily operations.',
    plainDescription:
      'We design and build custom AI assistants, document processing pipelines, and analytical tools that help your team answer customer questions faster, extract accurate information from paperwork, and turn business data into clear decisions.',
    visualType: 'neural-sphere',
    capabilities: [
      'Customized AI customer service assistants',
      'Internal knowledge assistants for staff',
      'Document processing and information extraction',
      'AI-powered reporting and analytics',
      'Business intelligence assistants',
    ],
    challenges: [
      {
        title: 'High Volume of Repetitive Questions',
        description:
          'Support and sales staff spend hours each day answering the same product, pricing, and policy questions across messaging and email.',
      },
      {
        title: 'Manual Document & Form Review',
        description:
          'Invoices, application forms, receipts, and contracts require slow manual reading and re-typing into spreadsheets or accounting tools.',
      },
      {
        title: 'Scattered Institutional Knowledge',
        description:
          'Important SOPs, policies, and pricing guides live inside dozens of PDFs and folders, making staff onboarding and quick answers difficult.',
      },
    ],
    solutions: [
      {
        title: 'AI Customer Assistants',
        description:
          'Trained strictly on your approved business guides and FAQs to draft or deliver clear replies while escalating complex cases to your staff.',
      },
      {
        title: 'Internal Knowledge Assistants',
        description:
          'Private search and Q&A assistants that help employees locate company procedures, product specs, and policies in seconds with source references.',
      },
      {
        title: 'Document Processing & Extraction',
        description:
          'Automated reading of PDFs, scanned forms, and invoices to extract structured fields ready for human verification and system entry.',
      },
      {
        title: 'AI Analytics & BI Assistants',
        description:
          'Plain-language reporting interfaces that summarize weekly sales, operational bottlenecks, and service metrics without complex spreadsheet formulas.',
      },
    ],
    benefits: [
      'Faster initial response times for customer inquiries without sacrificing accuracy',
      'Significant reduction in manual typing and document transcription errors',
      'Consistent adherence to approved company policies and tone',
      'Built-in human review checkpoints before consequential actions are finalized',
    ],
    exampleWorkflow: {
      scenarioNote: 'Illustrative Example: Automated Inquiry & Document Intake Assistant',
      steps: [
        {
          step: '01',
          title: 'Input Received',
          detail: 'A prospect sends a quotation inquiry with an attached PDF requirements sheet.',
        },
        {
          step: '02',
          title: 'Knowledge & Document Extraction',
          detail: 'The AI extracts key project parameters and checks your approved service catalog.',
        },
        {
          step: '03',
          title: 'Draft Prepared for Review',
          detail: 'A structured summary and draft response are routed to an account specialist for approval.',
        },
        {
          step: '04',
          title: 'Approved Reply & Log',
          detail: 'Once approved, the response is sent and the structured record is saved.',
        },
      ],
    },
    faqs: [
      {
        id: 'ai-dev-1',
        question: 'Will our business data be used to train public AI models?',
        answer:
          'No. Client data is never used to train third-party AI models without express written authorization. We select AI providers and architecture configurations consistent with strict confidentiality and the Philippine Data Privacy Act of 2012 (RA 10173).',
      },
      {
        id: 'ai-dev-2',
        question: 'Can an AI assistant make mistakes or send wrong pricing?',
        answer:
          'We design AI components with clear boundaries, retrieval from your approved documents only, and human approval controls wherever financial quotes, legal terms, or sensitive decisions are involved.',
      },
    ],
  },
  {
    slug: 'business-automation',
    indexLabel: '02',
    title: 'Business Process Automation',
    shortTitle: 'Process Automation',
    tagline: 'Eliminate repetitive manual tasks and keep every workflow moving reliably.',
    plainDescription:
      'We map your recurring operational bottlenecks—from capturing leads and routing inquiries to processing invoices and onboarding new hires—and build dependable automated workflows with clear human approval controls.',
    visualType: 'automation-flow',
    capabilities: [
      'Lead capture and automated follow-up',
      'Customer inquiry routing',
      'Invoice and document workflows',
      'Employee onboarding workflows',
      'Approval and notification workflows',
      'CRM and ERP integrations',
    ],
    challenges: [
      {
        title: 'Leads Slipping Through the Cracks',
        description:
          'Inquiries arriving via web forms, email, and messaging channels wait too long for assignment and timely follow-up.',
      },
      {
        title: 'Copy-Paste Between Tools',
        description:
          'Teams repeatedly transfer customer names, order details, and invoice figures between spreadsheets, email, and accounting software.',
      },
      {
        title: 'Delayed Internal Approvals',
        description:
          'Purchase requests, leave forms, and client proposals stall in email threads without status tracking or timely reminders.',
      },
    ],
    solutions: [
      {
        title: 'Lead & Inquiry Routing',
        description:
          'Automatically classify incoming inquiries, create CRM records, notify the right team member, and schedule structured follow-ups.',
      },
      {
        title: 'Invoice & Back-Office Workflows',
        description:
          'Standardize billing triggers, payment reminder schedules, and document archiving with audit trails.',
      },
      {
        title: 'Employee Onboarding Sequences',
        description:
          'Trigger account provisioning checklists, policy acknowledgments, and orientation schedules automatically when a new hire joins.',
      },
      {
        title: 'Structured Approval Controls',
        description:
          'Route requests to designated managers with one-click approve/revise actions and automatic logging.',
      },
    ],
    benefits: [
      'Consistent execution of routine business steps without manual reminders',
      'Hours saved every week across sales, operations, HR, and finance teams',
      'Clear visibility into pending approvals and process status',
      'Fewer transcription mistakes across connected business software',
    ],
    exampleWorkflow: {
      scenarioNote: 'Illustrative Example: Automated Lead Intake & Approval Routing',
      steps: [
        {
          step: '01',
          title: 'Form or Message Captured',
          detail: 'A website consultation request is validated and tagged by service interest.',
        },
        {
          step: '02',
          title: 'CRM Record Created',
          detail: 'Company and contact details are logged cleanly without duplicate entries.',
        },
        {
          step: '03',
          title: 'Manager Assignment',
          detail: 'The appropriate specialist receives an instant summary and next-step checklist.',
        },
        {
          step: '04',
          title: 'Follow-Up Tracked',
          detail: 'If unaddressed within a set window, an automated reminder prevents missed opportunities.',
        },
      ],
    },
    faqs: [
      {
        id: 'bpa-1',
        question: 'Do we have to replace our existing CRM or accounting software?',
        answer:
          'No. We design automation around the tools you already rely on—connecting spreadsheets, CRMs, email, and cloud platforms so your team can work with minimal disruption.',
      },
      {
        id: 'bpa-2',
        question: 'What happens if an automated workflow encounters an unusual case?',
        answer:
          'Every workflow includes exception handling and escalation rules so edge cases pause safely and notify a human supervisor rather than guessing.',
      },
    ],
  },
  {
    slug: 'systems-integration',
    indexLabel: '03',
    title: 'Intelligent Systems Integration',
    shortTitle: 'Systems Integration',
    tagline: 'Connect disconnected databases, cloud platforms, and business apps into one unified architecture.',
    plainDescription:
      'Many growing organizations run on disconnected software tools that do not share data. We engineer secure APIs, cloud integrations, workflow orchestration layers, and unified operational dashboards so your systems operate as a single reliable platform.',
    visualType: 'cloud-connectivity',
    capabilities: [
      'Custom API development and integration',
      'Database and cloud integrations',
      'Cross-system workflow orchestration',
      'AI-assisted operational dashboards',
      'Secure system modernization',
    ],
    challenges: [
      {
        title: 'Disconnected Software Silos',
        description:
          'Sales, inventory, customer support, and finance each use separate tools that require manual reconciliation every week.',
      },
      {
        title: 'Limited Operational Visibility',
        description:
          'Management lacks a single, accurate view of inquiries, fulfillment status, and team workload across departments.',
      },
      {
        title: 'Fragile Manual Spreadsheets',
        description:
          'Critical business operations rely on oversized spreadsheets prone to accidental edits, version conflicts, and access risks.',
      },
    ],
    solutions: [
      {
        title: 'API & Webhook Engineering',
        description:
          'Reliable, well-documented connections between third-party SaaS platforms, internal databases, and custom software.',
      },
      {
        title: 'Cloud & Database Connectivity',
        description:
          'Structured synchronization across AWS, Microsoft Azure, Google Cloud, and PostgreSQL or vector-search data stores.',
      },
      {
        title: 'Workflow Orchestration',
        description:
          'Coordinated multi-step data pipelines with retry policies, centralized logging, and role-based access controls.',
      },
      {
        title: 'Unified AI Dashboards',
        description:
          'Clear executive and operational views summarizing live activity, exceptions, and performance metrics.',
      },
    ],
    benefits: [
      'Elimination of duplicate data entry across departments',
      'Real-time synchronization between customer-facing and back-office systems',
      'Role-based access control and encryption in transit and at rest',
      'Modular architecture built to scale as your software stack evolves',
    ],
    exampleWorkflow: {
      scenarioNote: 'Illustrative Example: Multi-System Order & Inventory Synchronization',
      steps: [
        {
          step: '01',
          title: 'Storefront Event Triggered',
          detail: 'An online order or booking updates the central integration layer via secure API.',
        },
        {
          step: '02',
          title: 'Inventory & Fulfillment Sync',
          detail: 'Warehouse counts and dispatch schedules update automatically.',
        },
        {
          step: '03',
          title: 'Billing Record Prepared',
          detail: 'Structured invoice data is staged for accounting verification.',
        },
        {
          step: '04',
          title: 'Dashboard Updated',
          detail: 'Management views consolidated fulfillment and revenue status in real time.',
        },
      ],
    },
    faqs: [
      {
        id: 'sys-1',
        question: 'Can you integrate legacy tools that do not have modern APIs?',
        answer:
          'Where modern APIs are unavailable, we evaluate secure middleware, scheduled structured file imports, or gradual modernization pathways during our technical assessment.',
      },
      {
        id: 'sys-2',
        question: 'How do you handle security between connected platforms?',
        answer:
          'We apply least-privilege access, encrypted transport (TLS), managed credentials/secrets, environment segregation, and documented audit logging.',
      },
    ],
  },
  {
    slug: 'ai-consulting',
    indexLabel: '04',
    title: 'AI Consulting and Transformation',
    shortTitle: 'AI Consulting',
    tagline: 'Clear roadmaps, workflow audits, and practical guidance before you invest in software.',
    plainDescription:
      'Adopting AI should solve real business problems—not create expensive experiments. We audit your workflows, assess data and security readiness, identify high-return automation opportunities, and train your staff to adopt new tools confidently.',
    visualType: 'data-intelligence',
    capabilities: [
      'AI readiness assessments',
      'Business workflow audits',
      'Automation opportunity & ROI analysis',
      'Phased implementation roadmaps',
      'Staff training and AI adoption support',
    ],
    challenges: [
      {
        title: 'Uncertainty Around Where to Start',
        description:
          'Business leaders hear constantly about AI but lack an objective assessment of which processes will genuinely benefit.',
      },
      {
        title: 'Risk of Uncoordinated Tool Spend',
        description:
          'Teams adopt scattered subscriptions without security policies, privacy safeguards, or measurable return on investment.',
      },
      {
        title: 'Low Staff Adoption',
        description:
          'Even well-built software fails to deliver value if employees are unsure how to integrate it into their daily habits.',
      },
    ],
    solutions: [
      {
        title: 'Workflow Audits & Opportunity Mapping',
        description:
          'Structured review of your current operations to rank automation candidates by time saved, error reduction, and complexity.',
      },
      {
        title: 'AI Readiness & Privacy Review',
        description:
          'Evaluation of data quality, system accessibility, human-oversight requirements, and Data Privacy Act considerations.',
      },
      {
        title: 'Practical Implementation Roadmaps',
        description:
          'A clear, phased plan distinguishing quick-win pilots from longer-term system integrations.',
      },
      {
        title: 'Team Workshops & Training',
        description:
          'Plain-language hands-on sessions that build practical confidence and responsible AI habits across your organization.',
      },
    ],
    benefits: [
      'Avoid costly trial-and-error projects with clear upfront prioritization',
      'Align leadership, IT, and operations around measurable outcomes',
      'Establish responsible AI usage guidelines and human oversight early',
      'Empower staff with practical training tailored to their daily roles',
    ],
    exampleWorkflow: {
      scenarioNote: 'Illustrative Example: Two-Week SME AI Readiness & Roadmap Engagement',
      steps: [
        {
          step: '01',
          title: 'Stakeholder Interviews',
          detail: 'Short working sessions with operations, customer service, and finance leads.',
        },
        {
          step: '02',
          title: 'Process & Tool Inventory',
          detail: 'Mapping repetitive tasks, manual handoffs, and existing software licenses.',
        },
        {
          step: '03',
          title: 'Prioritized Opportunity Matrix',
          detail: 'Ranking top 3–5 high-value automation pilots with indicative budgets and timelines.',
        },
        {
          step: '04',
          title: 'Executive Readout & Training',
          detail: 'Actionable implementation plan plus an introductory team AI literacy session.',
        },
      ],
    },
    faqs: [
      {
        id: 'con-1',
        question: 'Is consulting required before building a small automation project?',
        answer:
          'For simple single-workflow projects (such as our Y&B AI Starter tier), discovery is built directly into kickoff. For multi-department transformations, a dedicated consulting phase prevents costly rework.',
      },
      {
        id: 'con-2',
        question: 'Do you lock us into building with Y & B Technology afterward?',
        answer:
          'No. Your roadmap and audit documentation belong to your organization, whether you engage us for implementation or execute internally.',
      },
    ],
  },
  {
    slug: 'managed-services',
    indexLabel: '05',
    title: 'Managed AI and Automation Services',
    shortTitle: 'Managed Services',
    tagline: 'Continuous monitoring, cost optimization, and dependable ongoing support for live systems.',
    plainDescription:
      'AI models, APIs, and business processes evolve constantly. Our managed services keep your automations reliable, secure, and cost-effective through proactive monitoring, regular performance reviews, and continuous refinement.',
    visualType: 'node-ledger',
    capabilities: [
      '24/7 workflow health monitoring & alerting',
      'System maintenance and dependency updates',
      'AI usage and token cost optimization',
      'Scheduled performance and quality reviews',
      'Security and access reviews',
      'Continuous workflow improvements',
    ],
    challenges: [
      {
        title: 'Silent Workflow Failures',
        description:
          'Third-party API updates or expired credentials can break automations unnoticed unless someone actively monitors logs.',
      },
      {
        title: 'Unpredictable AI Usage Costs',
        description:
          'Unoptimized prompts and unmonitored model calls can inflate monthly cloud and third-party AI bills.',
      },
      {
        title: 'Drift as Business Rules Change',
        description:
          'When prices, policies, or team structures shift, unmaintained assistants and workflows quickly become outdated.',
      },
    ],
    solutions: [
      {
        title: 'Centralized Monitoring & Alerting',
        description:
          'Proactive tracking of workflow runs, error rates, and response latency with defined incident escalation.',
      },
      {
        title: 'AI Usage & Cost Governance',
        description:
          'Regular tuning of model selection, caching, and prompt efficiency to keep operating expenses predictable.',
      },
      {
        title: 'Periodic Security & Access Reviews',
        description:
          'Scheduled audits of user permissions, API keys, and data retention policies.',
      },
      {
        title: 'Continuous Optimization',
        description:
          'Iterative refinements based on real team feedback and periodic business review check-ins.',
      },
    ],
    benefits: [
      'Predictable monthly support without hiring full-time AI specialists',
      'Faster detection and resolution of integration disruptions',
      'Controlled third-party AI and cloud operating costs',
      'Written Service Level Agreements (SLAs) with clear response expectations',
    ],
    exampleWorkflow: {
      scenarioNote: 'Illustrative Example: Monthly Managed Intelligence Cycle',
      steps: [
        {
          step: '01',
          title: 'Continuous Health Tracking',
          detail: 'Automated logs monitor workflow execution success and API responsiveness.',
        },
        {
          step: '02',
          title: 'Exception Resolution',
          detail: 'Any flagged integration issue is triaged and resolved under agreed SLA targets.',
        },
        {
          step: '03',
          title: 'Cost & Accuracy Tuning',
          detail: 'Prompt templates and model routing are refined for quality and cost efficiency.',
        },
        {
          step: '04',
          title: 'Periodic Service Report',
          detail: 'Stakeholders receive a clear summary of system health, usage, and recommended updates.',
        },
      ],
    },
    faqs: [
      {
        id: 'mng-1',
        question: 'Can we subscribe to Managed Services if another vendor built our initial automation?',
        answer:
          'After an initial technical and security review of the existing codebase and workflows, we can onboard qualifying systems into a structured support plan.',
      },
      {
        id: 'mng-2',
        question: 'What is included in Y&B Managed Intelligence?',
        answer:
          'Depending on scope, packages range from ₱8,000 to ₱30,000 monthly covering monitoring, maintenance, optimization, access reviews, and scheduled performance reviews.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
