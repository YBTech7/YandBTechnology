import { FAQItem, ResourceArticle } from '../types';

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: 'what-is-ai-automation',
    category: 'Foundations',
    readTime: '4 min read',
    title: 'What Is AI Automation? A Plain-Language Guide for Business Owners',
    excerpt:
      'Understand how traditional rule-based automation differs from AI-assisted workflows—and how combining both solves practical operational bottlenecks.',
    keyTakeaways: [
      'Traditional automation follows fixed "if this, then that" rules across connected software.',
      'AI adds the ability to read unstructured inputs such as emails, PDFs, and customer messages.',
      'Combining both with human approval controls creates dependable, reviewable business systems.',
    ],
    sections: [
      {
        heading: 'Beyond Simple Rules',
        paragraphs: [
          'For years, business automation meant connecting two apps with fixed rules—for example, saving a web form submission into a spreadsheet and sending a confirmation email. That works well when every input is identical.',
          'Real business operations, however, are messy. Customers ask questions in mixed sentences, suppliers send PDF invoices in different layouts, and staff receive inquiries across multiple channels. AI automation bridges that gap by interpreting unstructured text and documents before handing structured data to reliable workflow rules.',
        ],
      },
      {
        heading: 'Where Human Oversight Fits In',
        paragraphs: [
          'Practical AI automation is not about removing people from important decisions. Instead, it prepares the groundwork: summarizing an inquiry, extracting invoice line items, or drafting a reply based on approved company policies.',
          'Whenever an action involves financial commitments, sensitive personal records, or unusual requests, a well-designed system pauses for human review before proceeding.',
        ],
      },
    ],
  },
  {
    slug: 'how-ai-helps-small-businesses',
    category: 'SME Strategy',
    readTime: '5 min read',
    title: 'How AI Can Help Small Businesses Without Enterprise Budgets',
    excerpt:
      'Small and medium enterprises rarely need complex custom models—they benefit most from targeted automations that save hours every week.',
    keyTakeaways: [
      'Start with one high-friction bottleneck rather than attempting a company-wide overhaul.',
      'Customer inquiry triage, lead follow-up, and document extraction offer fast practical returns.',
      'Modular implementation keeps initial investment predictable and scalable.',
    ],
    sections: [
      {
        heading: 'Focus on High-Friction Bottlenecks First',
        paragraphs: [
          'Small business owners and lean teams often lose hours each day to repetitive administrative coordination: answering basic FAQ messages, copying customer details between tools, and chasing pending approvals.',
          'Rather than investing in broad software platforms nobody has time to configure, SMEs achieve better results by automating one clear workflow end to end—measuring time saved and response speed before expanding.',
        ],
      },
      {
        heading: 'Keeping Costs Predictable',
        paragraphs: [
          'Modern AI APIs and modular workflow engines allow businesses to launch focused capabilities—such as an approved-knowledge customer assistant or automated lead routing—within modest project budgets, adding additional integrations only when justified by real workload.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-intelligent-workflows',
    category: 'Architecture',
    readTime: '5 min read',
    title: 'Understanding Intelligent Workflows: From Trigger to Human Approval',
    excerpt:
      'A closer look at how intake triggers, AI classification, business rules, CRM updates, and human sign-off work together cleanly.',
    keyTakeaways: [
      'Every reliable workflow has a clear trigger, structured processing stage, and audit log.',
      'Confidence thresholds and exception paths prevent silent errors.',
      'Unified orchestration keeps your CRM, email, and reporting synchronized.',
    ],
    sections: [
      {
        heading: 'Anatomy of an Intelligent Workflow',
        paragraphs: [
          'An intelligent workflow begins with an operational event—such as a customer inquiry arriving, an invoice PDF being uploaded, or a deal reaching a new stage.',
          'Next, an AI classification or extraction step turns raw information into structured fields (category, urgency, customer intent, or line items). Deterministic business logic then decides the route: auto-archive routine notifications, update a CRM record, or route a draft decision to a manager for one-click approval.',
        ],
      },
      {
        heading: 'Designing for Exceptions',
        paragraphs: [
          'Good engineering assumes unexpected inputs will occur. Every workflow should include validation checks, retry logic for temporary network interruptions, and clear escalation so staff are alerted immediately if something falls outside normal parameters.',
        ],
      },
    ],
  },
  {
    slug: 'ai-customer-service-assistants',
    category: 'Customer Experience',
    readTime: '4 min read',
    title: 'AI Customer Service Assistants: Grounding Answers in Your Approved Policies',
    excerpt:
      'How retrieval-grounded assistants respond accurately using your business documentation while escalating complex or sensitive requests to staff.',
    keyTakeaways: [
      'Grounding responses in approved company documents reduces inaccurate guesswork.',
      'Clear escalation paths hand off complex conversations seamlessly to human agents.',
      'Consistent privacy controls protect customer trust.',
    ],
    sections: [
      {
        heading: 'Accuracy Over Generic Chat',
        paragraphs: [
          'Customers do not want vague answers—they want accurate store hours, delivery policies, service scopes, and booking steps. By connecting an AI assistant strictly to your vetted knowledge base, responses stay aligned with your actual business rules.',
        ],
      },
      {
        heading: 'Respecting Boundaries and Escalation',
        paragraphs: [
          'Equally important is knowing when not to automate. Complaints, custom pricing negotiations, and sensitive account requests should immediately capture context and hand over smoothly to your team so customers never feel trapped in a loop.',
        ],
      },
    ],
  },
  {
    slug: 'getting-started-with-business-automation',
    category: 'Implementation',
    readTime: '6 min read',
    title: 'Getting Started with Business Automation: A Practical Readiness Checklist',
    excerpt:
      'Four practical steps any organization can take before commissioning an AI or workflow automation project.',
    keyTakeaways: [
      'Document the current manual process step by step before automating it.',
      'Identify where human approval is mandatory versus optional.',
      'Verify data privacy and access permissions early in design.',
    ],
    sections: [
      {
        heading: '1. Map the Current Process Honestly',
        paragraphs: [
          'Before writing code, trace how work actually happens today—including informal chats, spreadsheet workarounds, and common bottlenecks. Automating a broken process only speeds up confusion; simplifying first multiplies the benefit.',
        ],
      },
      {
        heading: '2. Define Success in Operational Terms',
        paragraphs: [
          'Set concrete goals such as reducing first-response time, eliminating duplicate data entry between two systems, or ensuring every new inquiry receives a structured follow-up within business hours.',
        ],
      },
      {
        heading: '3. Plan Privacy and Access Early',
        paragraphs: [
          'Identify what personal or financial data enters the workflow, who is authorized to view it, and how long it should be retained in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).',
        ],
      },
    ],
  },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What does Y & B Technology do?',
    answer:
      'Y & B Technology (through its Y&B Intelligence division) designs, builds, integrates, and maintains practical AI solutions, business process automations, and connected digital systems that help organizations reduce manual work and operate more efficiently.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Do we need an internal IT team or technical expertise to work with you?',
    answer:
      'No. We translate business problems into plain language, handle the technical engineering, integrate with the tools you already use, and provide hands-on training and documentation for your staff.',
  },
  {
    id: 'faq-3',
    category: 'Solutions',
    question: 'What is Y&B IntelliFlow?',
    answer:
      'Y&B IntelliFlow is our proposed configurable AI-powered business automation solution combining AI customer assistance, lead management, document intelligence, workflow orchestration, operational dashboards, and human approval controls.',
  },
  {
    id: 'faq-4',
    category: 'Security & Privacy',
    question: 'How do you protect our company and customer data?',
    answer:
      'We design systems around least-privilege access, encryption in transit and at rest, environment segregation, and alignment with the Philippine Data Privacy Act of 2012 (RA 10173). Client data is never used to train third-party AI models without express written authorization.',
  },
  {
    id: 'faq-5',
    category: 'Security & Privacy',
    question: 'Can AI systems act on our behalf without human supervision?',
    answer:
      'Only for low-risk routine steps you explicitly approve (such as logging an inquiry or sending a confirmation). For consequential decisions—like pricing quotes, financial approvals, or sensitive client communications—we build mandatory human approval gates.',
  },
  {
    id: 'faq-6',
    category: 'Pricing & Engagement',
    question: 'How much does a typical project cost?',
    answer:
      'Indicative launch packages range from ₱25,000–₱60,000 one-time for Y&B AI Starter, ₱75,000–₱200,000 per project for Y&B Business Intelligence, ₱250,000+ by custom quotation for Y&B Enterprise AI, and ₱8,000–₱30,000 monthly for Managed Intelligence. All pricing is indicative and depends on exact project requirements.',
  },
  {
    id: 'faq-7',
    category: 'Pricing & Engagement',
    question: 'Where does Y & B Technology operate?',
    answer:
      'Y & B Technology is focused on serving organizations across the Philippines (Asia/Manila timezone), with modular remote delivery capabilities designed to support broader regional and international engagements over time.',
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'How do we get started?',
    answer:
      'Book an initial consultation through our Contact page. We will review your current workflows, discuss practical opportunities, and outline a clear scope before any commitment.',
  },
];
