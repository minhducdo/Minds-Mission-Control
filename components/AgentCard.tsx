import type { ReactNode } from 'react';

export type AgentStatus = 'online' | 'offline' | 'degraded' | 'unknown';

export type RegistryAgent = {
  id: string;
  name: string;
  headline: string;
  status: AgentStatus;
};

const STATUS_BADGE: Record<AgentStatus, { label: string; className: string }> = {
  online: { label: 'Online', className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' },
  degraded: { label: 'Degraded', className: 'border-amber-500/30 bg-amber-500/10 text-amber-200' },
  offline: { label: 'Offline', className: 'border-rose-500/30 bg-rose-500/10 text-rose-200' },
  unknown: { label: 'Unknown', className: 'border-zinc-500/30 bg-zinc-500/10 text-zinc-200' },
};

export default function AgentCard({ agent }: { agent: RegistryAgent }) {
  const cfg = STATUS_BADGE[agent.status] ?? STATUS_BADGE.unknown;
  return (
    <article className="group relative rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">{agent.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/60">{agent.headline}</p>
        </div>
        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${cfg.className}`}>
          {cfg.label}
        </span>
      </div>
    </article>
  );
}
