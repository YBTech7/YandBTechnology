export type ServiceSlug =
  | 'ai-development'
  | 'business-automation'
  | 'systems-integration'
  | 'ai-consulting'
  | 'managed-services';

export type AnimationVisualType =
  | 'neural-sphere'
  | 'automation-flow'
  | 'cloud-connectivity'
  | 'data-intelligence'
  | 'node-ledger';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  indexLabel: string;
  title: string;
  shortTitle: string;
  tagline: string;
  plainDescription: string;
  visualType: AnimationVisualType;
  capabilities: string[];
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  benefits: string[];
  exampleWorkflow: {
    scenarioNote: string;
    steps: ServiceWorkflowStep[];
  };
  faqs: FAQItem[];
}

export interface IndustrySolution {
  id: string;
  name: string;
  segment: 'Primary' | 'Secondary';
  summary: string;
  challenges: string[];
  illustrativeUseCases: string[];
  recommendedPackage: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  targetClient: string;
  priceRange: string;
  billingCycle: string;
  summary: string;
  inclusions: string[];
  featured?: boolean;
  ctaLabel: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface ResourceArticle {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}
