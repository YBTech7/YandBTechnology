import { Suspense, lazy } from 'react';
import { AnimationVisualType } from '../../types';
import { AutomationFlowVisual } from './AutomationFlowVisual';
import { CloudConnectivityVisual } from './CloudConnectivityVisual';
import { DataIntelligenceVisual } from './DataIntelligenceVisual';

const NeuralSphereCanvas = lazy(() =>
  import('./NeuralSphereCanvas').then((m) => ({ default: m.NeuralSphereCanvas }))
);
const NodeLedgerCanvas = lazy(() =>
  import('./NodeLedgerCanvas').then((m) => ({ default: m.NodeLedgerCanvas }))
);

function CanvasLoadingFallback() {
  return (
    <div className="flex h-[320px] items-center justify-center rounded-2xl bg-[#261B14] text-xs text-[#D9BE9D]">
      Loading interactive visualization...
    </div>
  );
}

export function VisualShowcase({ type }: { type: AnimationVisualType }) {
  switch (type) {
    case 'neural-sphere':
      return (
        <div className="rounded-2xl bg-[#261B14] border border-[#D9BE9D]/20 p-4 shadow-md">
          <Suspense fallback={<CanvasLoadingFallback />}>
            <NeuralSphereCanvas className="h-[320px] sm:h-[360px]" />
          </Suspense>
          <p className="text-center text-xs text-[#D9BE9D]/80 mt-2">
            AI Neural Network Visualization · Move pointer on desktop to explore depth
          </p>
        </div>
      );

    case 'node-ledger':
      return (
        <div className="rounded-2xl bg-[#261B14] border border-[#D9BE9D]/20 p-4 shadow-md">
          <Suspense fallback={<CanvasLoadingFallback />}>
            <NodeLedgerCanvas />
          </Suspense>
          <p className="text-center text-xs text-[#D9BE9D]/80 mt-2">
            Architectural Visual Metaphor · Connected, monitored processing nodes (not a blockchain service claim)
          </p>
        </div>
      );

    case 'automation-flow':
      return <AutomationFlowVisual />;

    case 'cloud-connectivity':
      return <CloudConnectivityVisual />;

    case 'data-intelligence':
      return <DataIntelligenceVisual />;
  }
}
