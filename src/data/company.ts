import { ProcessStage } from '../types';

export const COMPANY_PROFILE = {
  vision:
    'To become a trusted technology innovator that empowers businesses and communities through accessible, intelligent and transformative digital solutions.',
  mission:
    'To design and deliver reliable AI-powered systems and automation technologies that simplify operations, accelerate business growth and enable organizations to achieve more with technology.',
  positioning:
    'Y & B Technology is an AI-first technology partner that makes intelligent automation practical, secure and accessible to businesses—anchoring every solution to a clear business outcome rather than technology for its own sake.',
  brandArchitecture: [
    {
      level: 'Master Corporate Brand',
      name: 'Y & B Technology',
      role: 'Corporate identity and technology services organization',
    },
    {
      level: 'Solutions Division',
      name: 'Y&B Intelligence',
      role: 'AI, automation, and intelligent systems division',
    },
    {
      level: 'Flagship Solution',
      name: 'Y&B IntelliFlow',
      role: 'Proposed configurable AI-powered business automation solution',
    },
    {
      level: 'Commercial Service Lines',
      name: 'Starter · Business Intelligence · Enterprise AI · Managed Intelligence',
      role: 'Tiered project and recurring support packages',
    },
  ],
  values: [
    {
      name: 'Innovation',
      statement:
        'Continuously evaluating practical applications of emerging technologies for the tangible benefit of clients.',
    },
    {
      name: 'Integrity',
      statement:
        'Delivering transparent, ethical, and responsible technology solutions while dealing honestly with clients and partners.',
    },
    {
      name: 'Excellence',
      statement:
        'Maintaining high standards of software quality, architectural reliability, and responsive service.',
    },
    {
      name: 'Customer Success',
      statement:
        'Measuring our own success by the meaningful operational outcomes achieved by our clients.',
    },
    {
      name: 'Security',
      statement:
        'Protecting client information with least-privilege access, encryption, and engineering practices that merit trust.',
    },
    {
      name: 'Scalability',
      statement:
        'Developing modular systems capable of growing smoothly alongside evolving business needs.',
    },
    {
      name: 'Accountability',
      statement:
        'Ensuring that consequential AI-assisted decisions remain reviewable and controllable by real people.',
    },
  ],
  responsibleAI: [
    {
      title: 'Human Oversight',
      description:
        'AI outputs that materially affect individuals, finances, or business commitments remain subject to human review and approval controls.',
    },
    {
      title: 'Transparency',
      description:
        'Clients are clearly informed of the nature, capabilities, and known limitations of every AI component deployed for them.',
    },
    {
      title: 'Privacy by Design',
      description:
        'Personal data is collected and processed only to the extent necessary and lawful, aligned with the Philippine Data Privacy Act of 2012 (RA 10173).',
    },
    {
      title: 'Reliability & Accuracy',
      description:
        'AI systems are tested for accuracy, robustness, and fitness for purpose against agreed criteria before production release.',
    },
    {
      title: 'Non-Discrimination',
      description:
        'Systems are reviewed, where relevant, to prevent biased, arbitrary, or unfair automated outcomes.',
    },
    {
      title: 'Security & Data Governance',
      description:
        'Data pipelines are protected against unauthorized access, misuse, and manipulation—and client data is never used to train third-party models without express written consent.',
    },
  ],
  technologyApproach: [
    {
      layer: 'AI & Machine Learning',
      description: 'Python, PyTorch, retrieval-grounded knowledge architectures, and vetted third-party AI model APIs.',
    },
    {
      layer: 'Workflow Automation',
      description: 'n8n, Microsoft Power Automate, and custom event-driven orchestration services.',
    },
    {
      layer: 'Application Engineering',
      description: 'TypeScript, React, Next.js, Node.js, and Python FastAPI for clean, maintainable interfaces and APIs.',
    },
    {
      layer: 'Data & Cloud Infrastructure',
      description: 'PostgreSQL, vector-search stores, and modular deployments across AWS, Microsoft Azure, or Google Cloud.',
    },
  ],
  strategicDirection: [
    {
      phase: 'Phase 1',
      title: 'Service-Based AI Automation Foundation',
      detail: 'Deliver tailored AI development, process automation, and integration projects anchored on measurable client outcomes.',
    },
    {
      phase: 'Phase 2',
      title: 'Standardized Repeatable Packages',
      detail: 'Refine proven workflows into repeatable deployment frameworks and long-term managed intelligence retainers.',
    },
    {
      phase: 'Phase 3',
      title: 'Proprietary Intelligent Platforms',
      detail: 'Productize high-demand IntelliFlow modules into configurable subscription tools as client demand matures.',
    },
    {
      phase: 'Phase 4',
      title: 'Enterprise & International Expansion',
      detail: 'Scale modular delivery to larger enterprise engagements and remote international clients.',
    },
  ],
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discovery',
    summary:
      'We listen to your operational priorities, daily bottlenecks, and business goals without technical jargon.',
    deliverables: [
      'Stakeholder alignment call',
      'Current tools & channel inventory',
      'Clear definition of target outcomes',
    ],
  },
  {
    number: '02',
    title: 'Assessment',
    summary:
      'We evaluate existing workflows, data quality, integration readiness, and privacy/security requirements.',
    deliverables: [
      'Workflow bottleneck map',
      'Data Privacy Act (RA 10173) considerations',
      'Indicative effort & ROI prioritization',
    ],
  },
  {
    number: '03',
    title: 'Solution Design',
    summary:
      'We blueprint the architecture, human approval checkpoints, fallback paths, and system interfaces before coding.',
    deliverables: [
      'Written scope & acceptance criteria',
      'System & API integration diagram',
      'Human-in-the-loop approval rules',
    ],
  },
  {
    number: '04',
    title: 'Development',
    summary:
      'Our engineers build and connect AI components, automation pipelines, and user dashboards in modular stages.',
    deliverables: [
      'Peer-reviewed application & workflow code',
      'Encrypted credentials & access controls',
      'Milestone progress demonstrations',
    ],
  },
  {
    number: '05',
    title: 'Testing',
    summary:
      'Every workflow undergoes automated checks, accuracy verification, edge-case testing, and user acceptance testing.',
    deliverables: [
      'Accuracy & reliability evaluation',
      'Client User Acceptance Testing (UAT)',
      'Formal release & rollback checklist',
    ],
  },
  {
    number: '06',
    title: 'Deployment',
    summary:
      'We roll out the system smoothly into your live environment alongside hands-on staff training and clear guides.',
    deliverables: [
      'Controlled production cutover',
      'Role-based team training session',
      'Standard operating documentation',
    ],
  },
  {
    number: '07',
    title: 'Ongoing Support',
    summary:
      'Through optional Managed Intelligence plans, we monitor system health, optimize AI usage costs, and refine workflows.',
    deliverables: [
      'Proactive monitoring & alerting',
      'Periodic security & access reviews',
      'Continuous workflow optimization',
    ],
  },
];
