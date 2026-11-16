import { useState } from 'react';
import {
  CheckCircle2,
  UserCheck,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  FileText,
  Database,
  Send,
} from 'lucide-react';

interface SyntheticScenario {
  id: string;
  label: string;
  channel: string;
  senderName: string;
  company: string;
  inquiryText: string;
  aiAnalysis: {
    intent: string;
    extractedFields: { key: string; value: string }[];
    confidenceNote: string;
  };
  workflowDecision: {
    route: string;
    requiresHumanReview: boolean;
    reason: string;
  };
  draftResponse: string;
  crmPayload: {
    recordStatus: string;
    assignedQueue: string;
    nextAction: string;
  };
}

const SYNTHETIC_SCENARIOS: SyntheticScenario[] = [
  {
    id: 'ecommerce',
    label: 'E-Commerce Order & Bulk Quote',
    channel: 'Web Storefront Chat (Synthetic)',
    senderName: 'Sample Customer A',
    company: 'Harbor Retail Co. (Sample)',
    inquiryText:
      'Hello, we want to request a bulk quotation for 150 units of packaging kits delivered to Cebu next week, and confirm payment terms.',
    aiAnalysis: {
      intent: 'Bulk Wholesale Quotation & Delivery Inquiry',
      extractedFields: [
        { key: 'Quantity', value: '150 units (packaging kits)' },
        { key: 'Destination', value: 'Cebu, Philippines' },
        { key: 'Requested Timeline', value: 'Next week' },
      ],
      confidenceNote: 'High clarity on quantity & region · Payment terms require sales approval',
    },
    workflowDecision: {
      route: 'Sales Quotation Pipeline · Human Approval Gate',
      requiresHumanReview: true,
      reason: 'Custom bulk pricing and payment terms require human authorization before sending.',
    },
    draftResponse:
      'Thank you for reaching out regarding 150 packaging kit units for Cebu delivery. Our sales team has reviewed stock availability and prepared an indicative quote with standard delivery lead times attached for your confirmation.',
    crmPayload: {
      recordStatus: 'Qualified Wholesale Lead',
      assignedQueue: 'Regional Sales Desk',
      nextAction: 'Follow-up scheduled within 24 hours',
    },
  },
  {
    id: 'realestate',
    label: 'Real Estate Viewing Request',
    channel: 'Property Portal Form (Synthetic)',
    senderName: 'Sample Buyer B',
    company: 'Individual Inquiry (Sample)',
    inquiryText:
      'Hi! I am looking for a 2-bedroom unit near Ortigas around ₱35,000/month and would like to schedule a viewing this Saturday morning.',
    aiAnalysis: {
      intent: 'Property Leasing Qualification & Viewing Schedule',
      extractedFields: [
        { key: 'Unit Type', value: '2-Bedroom Residential' },
        { key: 'Preferred Area', value: 'Ortigas District' },
        { key: 'Indicative Budget', value: '₱35,000 / month' },
      ],
      confidenceNote: 'Matches 2 available sample listings in catalog',
    },
    workflowDecision: {
      route: 'Leasing Coordination · Agent Confirmation Gate',
      requiresHumanReview: true,
      reason: 'Agent confirms exact Saturday viewing slot availability before calendar invite.',
    },
    draftResponse:
      'Thank you for your inquiry. We have two 2-bedroom options near Ortigas matching your ₱35,000 monthly range. An agent has confirmed Saturday 10:00 AM availability—please let us know if that time works for you.',
    crmPayload: {
      recordStatus: 'Viewing Pending Confirmation',
      assignedQueue: 'Leasing Specialist',
      nextAction: 'Send calendar confirmation upon reply',
    },
  },
  {
    id: 'logistics',
    label: 'Logistics Waybill Extraction',
    channel: 'Email Document Intake (Synthetic)',
    senderName: 'Sample Dispatcher C',
    company: 'Luzon Freight Partners (Sample)',
    inquiryText:
      'Attached is the signed waybill PDF #WB-0419 for 18 pallets bound for Clark. Please confirm receipt and update dispatch status.',
    aiAnalysis: {
      intent: 'Document Intelligence Extraction & Dispatch Update',
      extractedFields: [
        { key: 'Document Reference', value: 'WB-0419 (Synthetic)' },
        { key: 'Cargo Volume', value: '18 pallets' },
        { key: 'Destination Hub', value: 'Clark Logistics Zone' },
      ],
      confidenceNote: 'Document fields extracted cleanly; awaiting supervisor sign-off',
    },
    workflowDecision: {
      route: 'Document Archive & Dispatch Sync · Supervisor Gate',
      requiresHumanReview: true,
      reason: 'Dispatch records require human confirmation before updating client tracking status.',
    },
    draftResponse:
      'Receipt confirmed for waybill WB-0419 (18 pallets, Clark Logistics Zone). Dispatch records have been updated accordingly.',
    crmPayload: {
      recordStatus: 'Verified & Archived',
      assignedQueue: 'Dispatch Operations',
      nextAction: 'Milestone alert queued for consignee',
    },
  },
];

const DEMO_STEPS = [
  '1. Customer inquiry received',
  '2. AI analyzes request',
  '3. System determines workflow',
  '4. Human review where needed',
  '5. CRM updated',
  '6. Response generated',
  '7. Status displayed',
];

export function IntelliFlowDemo() {
  const [scenarioId, setScenarioId] = useState<string>('ecommerce');
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [humanApproved, setHumanApproved] = useState<boolean>(false);
  const [customDraft, setCustomDraft] = useState<string>('');

  const scenario =
    SYNTHETIC_SCENARIOS.find((s) => s.id === scenarioId) || SYNTHETIC_SCENARIOS[0];

  const effectiveDraft = customDraft || scenario.draftResponse;

  const handleSelectScenario = (id: string) => {
    setScenarioId(id);
    setStepIndex(0);
    setHumanApproved(false);
    setCustomDraft('');
  };

  const handleAdvance = () => {
    if (stepIndex === 3 && !humanApproved) {
      return; // Require human approval interaction on step 4!
    }
    setStepIndex((prev) => Math.min(prev + 1, DEMO_STEPS.length - 1));
  };

  const handleApproveAndContinue = () => {
    setHumanApproved(true);
    setStepIndex(4);
  };

  const handleReset = () => {
    setStepIndex(0);
    setHumanApproved(false);
    setCustomDraft('');
  };

  return (
    <div className="rounded-2xl border border-[#4A372A]/15 dark:border-[#D9BE9D]/20 bg-white dark:bg-[#281D16] shadow-md overflow-hidden">
      {/* Demo Header Bar */}
      <div className="border-b border-[#4A372A]/10 dark:border-[#D9BE9D]/15 bg-[#F7EFE7] dark:bg-[#1E1510] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
            Interactive Product Demonstration · Synthetic Sample Data
          </p>
          <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-0.5">
            Y&amp;B IntelliFlow Guided Workflow Simulation
          </h3>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/25 px-3 py-2 text-xs font-semibold text-[#4A372A] dark:text-[#FFF9F4] hover:bg-[#E5D6CA]/60 dark:hover:bg-[#31241B] transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Reset Demo</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Scenario Switcher */}
        <div>
          <p className="text-xs font-semibold text-[#6E5849] dark:text-[#D5C3B3] mb-2.5">
            Select a sample business scenario:
          </p>
          <div className="flex flex-wrap gap-2">
            {SYNTHETIC_SCENARIOS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelectScenario(s.id)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors min-h-[40px] ${
                  s.id === scenarioId
                    ? 'bg-[#4A372A] text-[#FFF9F4] dark:bg-[#D9BE9D] dark:text-[#1E1510]'
                    : 'bg-[#E5D6CA]/55 dark:bg-[#31241B] text-[#4A372A] dark:text-[#D5C3B3] hover:bg-[#E5D6CA]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7-Step Progress Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
          {DEMO_STEPS.map((label, idx) => {
            const isActive = idx === stepIndex;
            const isDone = idx < stepIndex || (idx === 6 && stepIndex === 6);
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (idx <= 3 || humanApproved) setStepIndex(idx);
                }}
                disabled={idx > 3 && !humanApproved}
                className={`rounded-lg px-3 py-2.5 text-left text-xs font-medium border transition-colors ${
                  isActive
                    ? 'bg-[#916E55] text-[#FFF9F4] border-[#916E55] dark:bg-[#D9BE9D] dark:text-[#1E1510] dark:border-[#D9BE9D] font-semibold'
                    : isDone
                      ? 'bg-[#E5D6CA]/65 dark:bg-[#3C2C22] text-[#4A372A] dark:text-[#FFF9F4] border-[#916E55]/30'
                      : 'bg-[#FFF9F4] dark:bg-[#1E1510] text-[#6E5849] dark:text-[#D5C3B3] border-[#4A372A]/12 dark:border-[#D9BE9D]/15 disabled:opacity-50'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Interactive Stage Inspector */}
        <div className="rounded-xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/18 bg-[#FFF9F4] dark:bg-[#1E1510] p-5 sm:p-6 space-y-5">
          {stepIndex === 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Step 1 · Incoming Request ({scenario.channel})</span>
              </div>
              <p className="text-sm font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                From: {scenario.senderName} — {scenario.company}
              </p>
              <blockquote className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-4 text-sm leading-relaxed text-[#4A372A] dark:text-[#FFF9F4]">
                “{scenario.inquiryText}”
              </blockquote>
            </div>
          )}

          {stepIndex === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                Step 2 · AI Analyzes Request
              </div>
              <p className="text-sm font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Detected Intent: {scenario.aiAnalysis.intent}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scenario.aiAnalysis.extractedFields.map((field) => (
                  <div
                    key={field.key}
                    className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-3"
                  >
                    <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">{field.key}</p>
                    <p className="text-sm font-semibold text-[#4A372A] dark:text-[#FFF9F4] mt-0.5">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">
                Assessment: {scenario.aiAnalysis.confidenceNote}
              </p>
            </div>
          )}

          {stepIndex === 2 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Step 3 · System Determines Workflow Route</span>
              </div>
              <p className="text-base font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Selected Route: {scenario.workflowDecision.route}
              </p>
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                Governance Rule: {scenario.workflowDecision.reason}
              </p>
            </div>
          )}

          {stepIndex === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <UserCheck className="h-4 w-4" aria-hidden="true" />
                <span>Step 4 · Human Review &amp; Approval Gate</span>
              </div>
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                Consequential actions pause here until an authorized team member reviews and approves
                the prepared response. You may edit the draft below before approving:
              </p>
              <div>
                <label htmlFor="intelliflow-draft" className="block text-xs font-semibold mb-1.5">
                  Prepared Draft Response (Editable in Demo)
                </label>
                <textarea
                  id="intelliflow-draft"
                  rows={3}
                  value={effectiveDraft}
                  onChange={(e) => setCustomDraft(e.target.value)}
                  className="w-full rounded-lg border border-[#4A372A]/20 dark:border-[#D9BE9D]/25 bg-white dark:bg-[#281D16] p-3 text-sm text-[#4A372A] dark:text-[#FFF9F4]"
                />
              </div>
              <button
                type="button"
                onClick={handleApproveAndContinue}
                className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:hover:bg-[#E5D6CA] px-4 py-2.5 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] transition-colors min-h-[44px]"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>Approve Draft &amp; Update CRM</span>
              </button>
            </div>
          )}

          {stepIndex === 4 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <Database className="h-4 w-4" aria-hidden="true" />
                <span>Step 5 · CRM &amp; Operational Record Updated</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-3">
                  <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">Record Status</p>
                  <p className="text-sm font-semibold mt-0.5">{scenario.crmPayload.recordStatus}</p>
                </div>
                <div className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-3">
                  <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">Assigned Queue</p>
                  <p className="text-sm font-semibold mt-0.5">{scenario.crmPayload.assignedQueue}</p>
                </div>
                <div className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-3">
                  <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">Scheduled Follow-Up</p>
                  <p className="text-sm font-semibold mt-0.5">{scenario.crmPayload.nextAction}</p>
                </div>
              </div>
            </div>
          )}

          {stepIndex === 5 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Step 6 · Approved Response Generated</span>
              </div>
              <div className="rounded-lg bg-white dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-4 text-sm leading-relaxed">
                {effectiveDraft}
              </div>
            </div>
          )}

          {stepIndex === 6 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>Step 7 · Workflow Completed &amp; Status Logged</span>
              </div>
              <p className="text-sm text-[#4A372A] dark:text-[#FFF9F4] font-semibold">
                Simulation Status: Complete (Human-approved · Synthetic Demo Record)
              </p>
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                Every transition—from initial inquiry receipt to human sign-off, CRM synchronization,
                and response delivery—remains reviewable in the operational log.
              </p>
            </div>
          )}

          {/* Step Navigation Controls */}
          <div className="pt-4 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
              disabled={stepIndex === 0}
              className="rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/20 px-3.5 py-2 text-xs font-semibold text-[#4A372A] dark:text-[#FFF9F4] disabled:opacity-40 hover:bg-[#E5D6CA]/50 dark:hover:bg-[#31241B]"
            >
              Previous Step
            </button>

            {stepIndex < DEMO_STEPS.length - 1 && stepIndex !== 3 && (
              <button
                type="button"
                onClick={handleAdvance}
                className="inline-flex items-center gap-2 rounded-lg bg-[#4A372A] dark:bg-[#D9BE9D] px-4 py-2 text-xs font-semibold text-[#FFF9F4] dark:text-[#1E1510] hover:bg-[#916E55] dark:hover:bg-[#E5D6CA] transition-colors min-h-[40px]"
              >
                <span>Next Step</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
