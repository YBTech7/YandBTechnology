import { useState } from 'react';
import { Cloud, Database, Layers, Server, Globe } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CloudNode {
  id: string;
  title: string;
  role: string;
  detail: string;
  x: number;
  y: number;
  icon: typeof Cloud;
}

const NODES: CloudNode[] = [
  {
    id: 'apps',
    title: 'Business Applications',
    role: 'CRM · ERP · Messaging',
    detail: 'Customer portals, booking forms, CRM records, and accounting tools.',
    x: 90,
    y: 72,
    icon: Globe,
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    role: 'AWS · Azure · GCP',
    detail: 'Scalable cloud compute, managed containers, and regional network security.',
    x: 430,
    y: 72,
    icon: Cloud,
  },
  {
    id: 'hub',
    title: 'Y&B Integration Layer',
    role: 'API & Workflow Hub',
    detail: 'Encrypted API orchestration, schema validation, retries, and audit logs.',
    x: 260,
    y: 165,
    icon: Layers,
  },
  {
    id: 'db',
    title: 'Structured Databases',
    role: 'PostgreSQL · Vector Stores',
    detail: 'Segregated client records, knowledge embeddings, and transaction history.',
    x: 90,
    y: 258,
    icon: Database,
  },
  {
    id: 'ai',
    title: 'AI Model Endpoints',
    role: 'Controlled Inference',
    detail: 'Scoped model APIs with zero third-party training on client records.',
    x: 430,
    y: 258,
    icon: Server,
  },
];

export function CloudConnectivityVisual() {
  const [selectedId, setSelectedId] = useState<string>('hub');
  const reducedMotion = useReducedMotion();
  const active = NODES.find((n) => n.id === selectedId) || NODES[2];

  return (
    <div className="rounded-2xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/18 bg-white/85 dark:bg-[#2B1F17]/95 p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D]">
          Cloud & Systems Topology
        </p>
        <h3 className="font-display text-lg font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
          Select Any Layer to Inspect System Connectivity
        </h3>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl bg-[#261B14] p-4">
        <svg viewBox="0 0 520 330" className="w-full h-auto" role="img" aria-label="Cloud connectivity diagram">
          {/* Connections between Hub (260, 165) and outer nodes */}
          {NODES.filter((n) => n.id !== 'hub').map((node, i) => {
            const isSelected = node.id === selectedId || selectedId === 'hub';
            return (
              <g key={node.id}>
                <line
                  x1={260}
                  y1={165}
                  x2={node.x}
                  y2={node.y}
                  stroke={isSelected ? '#D9BE9D' : '#916E55'}
                  strokeWidth={isSelected ? 2.2 : 1.3}
                  strokeOpacity={isSelected ? 0.85 : 0.4}
                  strokeDasharray="6 5"
                />
                {!reducedMotion && (
                  <circle r="4" fill="#FFF9F4">
                    <animateMotion
                      dur={`${2.6 + i * 0.45}s`}
                      repeatCount="indefinite"
                      path={`M ${node.x} ${node.y} L 260 165 L ${node.x} ${node.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Interactive SVG Nodes */}
          {NODES.map((node) => {
            const isActive = node.id === selectedId;
            return (
              <g
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`${node.title} — ${node.role}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(node.id);
                  }
                }}
              >
                <rect
                  x={node.x - 68}
                  y={node.y - 28}
                  width="136"
                  height="56"
                  rx="12"
                  fill={isActive ? '#916E55' : '#35271E'}
                  stroke={isActive ? '#FFF9F4' : '#D9BE9D'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 1 : 0.45}
                />
                <text
                  x={node.x}
                  y={node.y - 3}
                  textAnchor="middle"
                  fill="#FFF9F4"
                  fontSize="11.5"
                  fontWeight="700"
                >
                  {node.title}
                </text>
                <text
                  x={node.x}
                  y={node.y + 14}
                  textAnchor="middle"
                  fill="#D9BE9D"
                  fontSize="9.5"
                >
                  {node.role}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 rounded-xl bg-[#F7EFE7] dark:bg-[#1E1510] p-4 border border-[#4A372A]/10 dark:border-[#D9BE9D]/15">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
          <active.icon className="h-4 w-4" aria-hidden="true" />
          <span>{active.role}</span>
        </div>
        <p className="text-sm font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-1">
          {active.title}
        </p>
        <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3] mt-1">{active.detail}</p>
      </div>
    </div>
  );
}
