'use client'

import * as React from 'react'

import AgentCard, { type RegistryAgent } from '@/components/AgentCard'

const FALLBACK_REGISTRY: RegistryAgent[] = [
  {
    id: 'codeforge',
    name: 'CodeForge',
    headline: 'Next.js / TypeScript engineer — builds clean production systems.',
    status: 'online',
  },
  {
    id: 'axiom',
    name: 'Axiom',
    headline:
      'Reasoning and validation agent — keeps the system correct and consistent.',
    status: 'online',
  },
  {
    id: 'aether',
    name: 'Aether',
    headline:
      'Orchestration and monitoring agent — routes tasks and watches telemetry.',
    status: 'degraded',
  },
]

const STATUS_SET = new Set<RegistryAgent['status']>([
  'online',
  'offline',
  'degraded',
  'unknown',
])

function coerceAgent(input: unknown): RegistryAgent | null {
  if (!input || typeof input !== 'object') return null

  const obj = input as Record<string, unknown>
  const id = typeof obj.id === 'string' ? obj.id : ''
  const name = typeof obj.name === 'string' ? obj.name : ''
  const headline = typeof obj.headline === 'string' ? obj.headline : ''
  const statusRaw = typeof obj.status === 'string' ? obj.status : 'unknown'

  const status = STATUS_SET.has(statusRaw as RegistryAgent['status'])
    ? (statusRaw as RegistryAgent['status'])
    : 'unknown'

  if (!id || !name || !headline) return null

  return { id, name, headline, status }
}

function extractAgents(payload: unknown): RegistryAgent[] {
  const candidates: unknown[] = Array.isArray(payload)
    ? payload
    : payload && typeof payload === 'object' && Array.isArray((payload as any).agents)
      ? ((payload as any).agents as unknown[])
      : []

  const normalized = candidates
    .map(coerceAgent)
    .filter((a): a is RegistryAgent => Boolean(a))

  return normalized
}

export default function AgentsGrid() {
  const [agents, setAgents] = React.useState<RegistryAgent[]>(FALLBACK_REGISTRY)
  const [source, setSource] = React.useState<'fallback' | 'remote'>('fallback')
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setError(null)

        const res = await fetch('/data/telemetry.json', {
          method: 'GET',
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        })

        if (!res.ok) {
          throw new Error('Telemetry fetch failed (' + res.status + ')')
        }

        const json = (await res.json()) as unknown
        const next = extractAgents(json)

        if (!cancelled) {
          if (next.length > 0) {
            setAgents(next)
            setSource('remote')
          } else {
            setAgents(FALLBACK_REGISTRY)
            setSource('fallback')
            setError('Telemetry payload did not contain a valid agent registry.')
          }
        }
      } catch (e) {
        if (!cancelled) {
          setAgents(FALLBACK_REGISTRY)
          setSource('fallback')
          setError(e instanceof Error ? e.message : 'Telemetry fetch failed.')
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-white/90">
            Agents
          </h2>
          <p className="mt-1 text-xs text-white/50">
            Registry source: <span className="text-white/70">{source}</span>
          </p>
        </div>

        {error ? (
          <div className="rounded-md border border-amber-400/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
            {error}
          </div>
        ) : (
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
            Telemetry sync OK
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  )
}
