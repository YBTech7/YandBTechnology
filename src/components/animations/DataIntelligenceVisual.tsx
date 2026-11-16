import { useState } from 'react';

interface ScenarioDataset {
  id: string;
  label: string;
  subtitle: string;
  bars: { name: string; share: number; note: string }[];
  trendPoints: number[];
}

const SCENARIOS: ScenarioDataset[] = [
  {
    id: 'triage',
    label: 'Inquiry Triage',
    subtitle: 'Illustrative operational distribution (synthetic example)',
    bars: [
      { name: 'Auto-Answered FAQs', share: 54, note: 'Grounded in approved policy docs' },
      { name: 'Routed to Sales', share: 28, note: 'Lead profile created in CRM' },
      { name: 'Human Escalation', share: 18, note: 'Complex or custom pricing review' },
    ],
    trendPoints: [24, 34, 41, 52, 61, 68, 74],
  },
  {
    id: 'documents',
    label: 'Document Extraction',
    subtitle: 'Illustrative document intake distribution (synthetic example)',
    bars: [
      { name: 'Clean Auto-Extracted', share: 72, note: 'Standard invoice & form layouts' },
      { name: 'Flagged for Verification', share: 21, note: 'Low-confidence field highlighted' },
      { name: 'Manual Exception', share: 7, note: 'Illegible scan routed to staff' },
    ],
    trendPoints: [18, 29, 44, 58, 67, 79, 86],
  },
  {
    id: 'reporting',
    label: 'Reporting Sync',
    subtitle: 'Illustrative multi-branch consolidation (synthetic example)',
    bars: [
      { name: 'Automated POS Sync', share: 65, note: 'Scheduled cloud consolidation' },
      { name: 'Exception Alerts', share: 20, note: 'Variance notices to managers' },
      { name: 'Executive Briefs', share: 15, note: 'Plain-language daily summaries' },
    ],
    trendPoints: [30, 38, 48, 55, 66, 73, 82],
  },
];

export function DataIntelligenceVisual() {
  const [scenarioId, setScenarioId] = useState<string>('triage');
  const active = SCENARIOS.find((s) => s.id === scenarioId) || SCENARIOS[0];

  const svgPoints = active.trendPoints
    .map((val, i) => {
      const x = 24 + i * 52;
      const y = 110 - val * 0.9;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="rounded-2xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/18 bg-white/85 dark:bg-[#2B1F17]/95 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
            Data Intelligence Preview
          </p>
          <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3] mt-0.5">{active.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#E5D6CA]/60 dark:bg-[#1E1510] p-1">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setScenarioId(s.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                s.id === scenarioId
                  ? 'bg-[#4A372A] text-[#FFF9F4] dark:bg-[#916E55]'
                  : 'text-[#4A372A] dark:text-[#D5C3B3] hover:text-[#916E55]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Distribution Bars */}
      <div className="space-y-4">
        {active.bars.map((bar) => (
          <div key={bar.name}>
            <div className="flex items-baseline justify-between text-sm mb-1.5">
              <span className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">{bar.name}</span>
              <span className="font-mono-tabular text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
                {bar.share}%
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#E5D6CA]/70 dark:bg-[#1E1510] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#916E55] to-[#D9BE9D] transition-all duration-500"
                style={{ width: `${bar.share}%` }}
              />
            </div>
            <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3] mt-1">{bar.note}</p>
          </div>
        ))}
      </div>

      {/* Throughput Trend Line */}
      <div className="mt-6 pt-5 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15">
        <div className="flex items-center justify-between text-xs text-[#6E5849] dark:text-[#D5C3B3] mb-2">
          <span>Illustrative Workflow Adoption Curve</span>
          <span className="font-mono-tabular">Weeks 1 – 7</span>
        </div>
        <svg viewBox="0 0 360 120" className="w-full h-24" role="img" aria-label="Sample adoption trend chart">
          <polyline
            fill="none"
            stroke="#916E55"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={svgPoints}
          />
          {active.trendPoints.map((val, i) => {
            const x = 24 + i * 52;
            const y = 110 - val * 0.9;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#FFF9F4"
                stroke="#916E55"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
