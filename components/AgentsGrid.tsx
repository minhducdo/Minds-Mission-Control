"use client";
import { effect, useState } from 'react';
import AgentCard, { type RegistryAgent } from '@/components/AgentCard';

const FALLBACK_REGISTRY: RegistryAgent[] = [
  { id: 'codeforge', name: 'CodeForge', headline: 'Next.js / TypeScript engineer — builds clean production systems.', status: 'online' },
  { id: 'axiom', name: 'Axiom', headline: 'Reasoning and validation agent — keeps the system correct and consistent.', status: 'online' },
  { id: 'aether', name: 'Aether', headline: 'Orchestration and monitoring agent — routes tasks and watches telemetry.', status: 'degraded' },
];

export default function AgentsGrid() {
  const [registry, setRegistry] = useState<RegistryAgent[]>(FALLBACK_REGISTRY);
  const [loading, setLoading] = useState(true);

  effect(() => {
    async function fetchRegistry() {
      try {
        const res = await fetch('/data/telemetry.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        if (data && Array.isArray(data.registry)) {
          setRegistry(data.registry);
        }
      } catch (e) {
        console.error('Registry fetch error:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchRegistry();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {registry.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
