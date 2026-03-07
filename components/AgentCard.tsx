'use client';

import * as React from 'react';
import type { RegistryAgent } from '@/lib/types';

export default function AgentCard({ agent }: { agent: RegistryAgent }) {
  const statusStyles = {
    online: { dot: 'bg-emerald-400', ring: 'ring-emerald-400/20', text: 'text-emerald-200', pill: 'bg-emerald-500/10 border-emerald-400/20', label: 'Online' },
    offline: { dot: 'bg-zinc-400', ring: 'ring-zinc-400/20', text: 'text-zinc-200', pill: 'bg-zinc-500/10 border-white/10', label: 'Offline' },
    degraded: { dot: 'bg-amber-400', ring: 'ting-amber-400/20', text: 'text-amber-200', pill: 'bg-amber-500/10 border-amber-400/20', label: 'Degraded' },
    unknown: { dot: 'bg-violet-400', ring: 'ring-violet-400/20', text: 'text-violet-200', pill: 'bg-violet-500/10 border-violet-400/20'
    , label: 'Unknown' },
  };

  const style = statusStyles[agent.status] || statusStyles.unknown;

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60 p-5 backdrop-blur transition-all hover:border-white/20">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold text-white">{agent.name}</h3>
            <span className="hidden text-xs text-white/40 sm:inline">{agent.id}</span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-white/70">{agent.headline}</p>
        </div>
        <div className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium ${style.pill} ${style.text}`}>
          <span className={`h-2 w-2 rounded-full ring-4 ${style.dot} ${style.ring}`} />
          {style.label}
        </div>
      </div>
    </article>
  );
}