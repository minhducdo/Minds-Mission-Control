import * as React from 'react'

export type RegistryAgent = {
  id: string
  name: string
  headline: string
  status: 'online' | 'offline' | 'degraded' | 'unknown'
}

function getStatusMeta(status: RegistryAgent['status']) {
  switch (status) {
    case 'online':
      return {
        label: 'Online',
        dot: 'bg-emerald-400',
        ring: 'ring-emerald-400/20',
        text: 'text-emerald-200',
        pill: 'bg-emerald-500/10 border-emerald-400/20',
      }
    case 'offline':
      return {
        label: 'Offline',
        dot: 'bg-zinc-400',
        ring: 'ring-zinc-400/20',
        text: 'text-zinc-200',
        pill: 'bg-zinc-500/10 border-white/10',
      }
    case 'degraded':
      return {
        label: 'Degraded',
        dot: 'bg-amber-400',
        ring: 'ring-amber-400/20',
        text: 'text-amber-200',
        pill: 'bg-amber-500/10 border-amber-400/20',
      }
    default:
      return {
        label: 'Unknown',
        dot: 'bg-violet-400',
        ring: 'ring-violet-400/20',
        text: 'text-violet-200',
        pill: 'bg-violet-500/10 border-violet-400/20',
      }
  }
}

type AgentCardProps = {
  agent: RegistryAgent
  className?: string
}

export default function AgentCard({ agent, className }: AgentCardProps) {
  const meta = getStatusMeta(agent.status)

  const rootClassName = [
    'group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60 p-5',
    'shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur',
    'transition-colors duration-200 hover:border-white/20 hover:bg-zinc-950/70',
    'focus-within:border-white/25',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={rootClassName} aria-label={agent.name}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold tracking-wide text-white">
              {agent.name}
            </h3>
            <span className="hidden text-xs text-white/30 sm:inline">•</span>
            <span className="hidden truncate text-xs text-white/40 sm:inline">
              {agent.id}
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
            {agent.headline}
          </p>
        </div>

        <div
          className={[
            'inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1',
            'text-xs font-medium tracking-wide',
            meta.pill,
            meta.text,
          ].join(' ')}
          aria-label={'Status: ' + meta.label}
          title={'Status: ' + meta.label}
        >
          <span
            className={[
              'h-2 w-2 rounded-full ring-4',
              meta.dot,
              meta.ring,
            ].join(' ')}
            aria-hidden="true"
          />
          <span>{meta.label}</span>
        </div>
      </header>

      <footer className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="text-xs text-white/40">Mission Control Registry</div>
        <div className="text-xs text-white/35">
          Telemetry: <span className="text-white/60">live</span>
        </div>
      </footer>
    </article>
  )
}
