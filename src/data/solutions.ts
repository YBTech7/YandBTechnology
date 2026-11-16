import { IndustrySolution } from '../types';

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'smes',
    name: 'Small & Medium-Sized Enterprises (SMEs)',
    segment: 'Primary',
    summary:
      'Practical, budget-conscious automation that relieves lean teams from manual data entry, inquiry backlogs, and fragmented spreadsheets.',
    challenges: [
      'Small teams wearing multiple operational hats',
      'Missed follow-ups after hours or during peak periods',
      'Time-consuming manual invoicing and document filing',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: An AI website & messaging assistant answers routine inquiries and logs qualified leads automatically.',
      'Illustrative Scenario: Invoice details from PDFs are extracted into a structured sheet for finance review before entry.',
    ],
    recommendedPackage: 'Y&B AI Starter or Y&B Business Intelligence',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Businesses',
    segment: 'Primary',
    summary:
      'Streamlined order support, catalog Q&A, inventory syncing, and automated post-purchase notifications across online storefronts.',
    challenges: [
      'Repetitive "Where is my order?" and product sizing inquiries',
      'Manual inventory updates across webstore and marketplaces',
      'Delayed handling of return or exchange requests',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Automated customer assistant resolves shipping policy questions and routes complex refund cases to staff.',
      'Illustrative Scenario: Order webhooks sync customer profiles and fulfillment status into one central dashboard.',
    ],
    recommendedPackage: 'Y&B Business Intelligence',
  },
  {
    id: 'retail',
    name: 'Retail Companies',
    segment: 'Primary',
    summary:
      'Unified multi-branch reporting, supplier document processing, and responsive customer engagement tools.',
    challenges: [
      'Daily sales reports compiled manually across store branches',
      'Slow supplier invoice verification and restocking alerts',
      'Inconsistent handling of branch-level customer inquiries',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Automated daily branch summary consolidates POS exports into an executive morning brief.',
      'Illustrative Scenario: Supplier delivery receipts are scanned and matched against purchase orders for manager approval.',
    ],
    recommendedPackage: 'Y&B Business Intelligence',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property Management',
    segment: 'Primary',
    summary:
      'Instant property inquiry qualification, viewing schedule coordination, tenant request routing, and lease document summaries.',
    challenges: [
      'Prospective buyers waiting hours for basic unit availability and payment terms',
      'Agents manually qualifying dozens of inquiries per listing',
      'Scattered tenant maintenance requests and lease renewal reminders',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Property assistant collects buyer budget/location preferences and books viewing slots with human confirmation.',
      'Illustrative Scenario: Maintenance tickets submitted by tenants are categorized by urgency and routed to assigned technicians.',
    ],
    recommendedPackage: 'Y&B AI Starter or Y&B Business Intelligence',
  },
  {
    id: 'logistics',
    name: 'Logistics & Distribution',
    segment: 'Primary',
    summary:
      'Automated waybill/document extraction, dispatch notifications, shipment status routing, and exception flagging.',
    challenges: [
      'Manual encoding of packing lists, waybills, and delivery receipts',
      'High volume of status check calls from clients and consignees',
      'Delayed visibility when delivery exceptions occur',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Document intelligence extracts consignee and reference numbers from uploaded shipping documents for dispatcher sign-off.',
      'Illustrative Scenario: Automated milestone alerts notify clients when shipments transition between dispatch stages.',
    ],
    recommendedPackage: 'Y&B Business Intelligence or Y&B Enterprise AI',
  },
  {
    id: 'professional-services',
    name: 'Professional Service Providers',
    segment: 'Primary',
    summary:
      'Client intake automation, proposal preparation support, internal knowledge search, and engagement onboarding workflows.',
    challenges: [
      'Slow manual client onboarding and document collection checklists',
      'Staff spending hours searching past memos, templates, and policy guidelines',
      'Unstandardized follow-up after initial consultation calls',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Internal knowledge assistant locates approved service templates and compliance checklists with citations.',
      'Illustrative Scenario: New client sign-off automatically triggers engagement folder creation and welcome steps.',
    ],
    recommendedPackage: 'Y&B Business Intelligence',
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    segment: 'Secondary',
    summary:
      'Admissions inquiry assistants, enrollment document verification workflows, and structured student support routing.',
    challenges: [
      'Seasonal surges in admissions, tuition, and schedule questions',
      'Manual checking of submitted enrollment requirements',
      'Routing inquiries between registrar, accounting, and academic offices',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Admissions FAQ assistant answers enrollment deadlines and routes scholarship questions to staff.',
      'Illustrative Scenario: Document intake flags missing enrollment files before registrar review.',
    ],
    recommendedPackage: 'Y&B Business Intelligence',
  },
  {
    id: 'healthcare-admin',
    name: 'Healthcare Administration',
    segment: 'Secondary',
    summary:
      'Non-clinical administrative support including appointment scheduling coordination, intake form digitization, and billing workflow automation.',
    challenges: [
      'Front-desk staff overwhelmed by appointment confirmations and rescheduling',
      'Paper-heavy administrative intake and HMO documentation tracking',
      'Manual coordination across clinic desks and billing departments',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Administrative intake assistant helps patients check clinic hours and prepare required non-clinical paperwork.',
      'Illustrative Scenario: Privacy-conscious workflow automation organizes insurance pre-authorization checklists for staff review.',
    ],
    recommendedPackage: 'Y&B Enterprise AI (with strict privacy controls)',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing Businesses',
    segment: 'Secondary',
    summary:
      'Purchase order workflow automation, supplier compliance tracking, SOP knowledge assistants, and production reporting dashboards.',
    challenges: [
      'Fragmented tracking of supplier quotes, purchase orders, and delivery notes',
      'Manual consolidation of shift logs and quality inspection sheets',
      'Slow lookup of equipment maintenance manuals on the floor',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Internal technical assistant surfaces approved maintenance SOPs for technicians.',
      'Illustrative Scenario: Purchase approval routing connects procurement requests to management sign-off.',
    ],
    recommendedPackage: 'Y&B Business Intelligence or Y&B Enterprise AI',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Organizations',
    segment: 'Secondary',
    summary:
      'Custom AI systems, cross-departmental workflow orchestration, governance controls, and dedicated managed support.',
    challenges: [
      'Complex legacy infrastructure requiring secure API modernization',
      'Strict role-based access, auditability, and Data Privacy Act governance',
      'Need for custom internal AI tools integrated across multiple business units',
    ],
    illustrativeUseCases: [
      'Illustrative Scenario: Multi-system orchestration hub connecting ERP, CRM, and document repositories with human approval gates.',
      'Illustrative Scenario: Custom executive intelligence dashboard with strict environment segregation.',
    ],
    recommendedPackage: 'Y&B Enterprise AI + Y&B Managed Intelligence',
  },
];
