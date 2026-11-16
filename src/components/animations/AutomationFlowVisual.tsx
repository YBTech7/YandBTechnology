import { useEffect, useState } from 'react';
import {
  MessageSquare,
  Cpu,
  GitBranch,
  UserCheck,
  Database,
  Send,
  Play,
  Pause,
} from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FlowStage {
  id: string;
  label: string;
  actor: string;
  summary: string;
  icon: typeof MessageSquare;
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: 'inquiry',
    label: 'Customer Inquiry',
    actor: 'Input Channel',
    summary:
      'A message, web form, or email arrives with customer questions or service requirements.',
    icon: MessageSquare,
  },
  {
    id: 'ai',
    label: 'AI Processing',
    actor: 'Y&B Intelligence',
    summary:
      'Intent, key entities, urgency, and relevant company policy references are extracted cleanly.',
    icon: Cpu,
  },
  {
    id: 'decision',
    label: 'Workflow Decision',
    actor: 'Orchestration Rule',
    summary:
      'Deterministic business rules determine whether the case is routine or requires specialist sign-off.',
    icon: GitBranch,
  },
  {
    id: 'approval',
    label: 'Human Approval',
    actor: 'Team Oversight',
    summary:
      'For quotations, exceptions, or sensitive decisions, a staff member reviews and approves the draft.',
    icon: UserCheck,
  },
  {
    id: 'crm',
    label: 'CRM Update',
    actor: 'Connected Systems',
    summary:
      'Customer records, status tags, and audit timestamps are synchronized across your CRM and spreadsheets.',
    icon: Database,
  },
  {
    id: 'response',
    label: 'Customer Response',
    actor: 'Confirmed Output',
    summary:
      'An accurate, polite, brand-aligned reply is delivered through the customer\'s preferred channel.',
    icon: Send,
  },
];

export function AutomationFlowVisual() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(!reducedMotion);

  useEffect(() => {
    if (!playing || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FLOW_STAGES.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);

  const activeStage = FLOW_STAGES[activeIndex];

  return (
    <div className="rounded-2xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/18 bg-white/80 dark:bg-[#2B1F17]/90 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
            Interactive Workflow Pipeline
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
            How Intelligent Automation Connects Every Step
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex items-center gap-2 rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/25 px-3.5 py-2 text-xs font-semibold text-[#4A372A] dark:text-[#FFF9F4] hover:bg-[#E5D6CA]/60 dark:hover:bg-[#3C2C22] transition-colors min-h-[40px]"
          aria-pressed={playing}
        >
          {playing ? (
            <>
              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Pause Flow</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Play Flow</span>
            </>
          )}
        </button>
      </div>

      {/* Pipeline Stages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {FLOW_STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === activeIndex;
          const isCompleted = idx < activeIndex;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => {
                setPlaying(false);
                setActiveIndex(idx);
              }}
              className={`group relative flex flex-col items-start text-left rounded-xl p-4 border transition-all duration-200 min-h-[116px] ${
                isActive
                  ? 'bg-[#4A372A] text-[#FFF9F4] border-[#4A372A] dark:bg-[#916E55] dark:border-[#D9BE9D] shadow-md -translate-y-0.5'
                  : isCompleted
                    ? 'bg-[#E5D6CA]/60 dark:bg-[#3C2C22]/70 text-[#4A372A] dark:text-[#FFF9F4] border-[#916E55]/30 dark:border-[#D9BE9D]/30'
                    : 'bg-[#FFF9F4] dark:bg-[#1E1510]/80 text-[#4A372A] dark:text-[#FFF9F4] border-[#4A372A]/12 dark:border-[#D9BE9D]/15 hover:border-[#916E55]'
              }`}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className="flex w-full items-center justify-between gap-2 mb-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
                    isActive
                      ? 'bg-[#D9BE9D] text-[#4A372A]'
                      : 'bg-[#E5D6CA] dark:bg-[#3C2C22] text-[#4A372A] dark:text-[#D9BE9D]'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span
                  className={`font-mono-tabular text-xs font-medium ${
                    isActive ? 'text-[#D9BE9D]' : 'text-[#6E5849] dark:text-[#D5C3B3]'
                  }`}
                >
                  0{idx + 1}
                </span>
              </div>
              <span className="text-sm font-bold leading-snug">{stage.label}</span>
              <span
                className={`mt-1 text-xs ${
                  isActive ? 'text-[#E5D6CA]' : 'text-[#6E5849] dark:text-[#D5C3B3]'
                }`}
              >
                {stage.actor}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Bar */}
      <div className="mt-6 rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
            Stage 0{activeIndex + 1} · {activeStage.actor}
          </p>
          <p className="text-base font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-0.5">
            {activeStage.label}
          </p>
          <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3] mt-1">
            {activeStage.summary}
          </p>
        </div>
        <div className="text-xs font-mono-tabular text-[#6E5849] dark:text-[#D5C3B3] shrink-0">
          Step {activeIndex + 1} of {FLOW_STAGES.length}
        </div>
      </div>
    </div>
  );
}
