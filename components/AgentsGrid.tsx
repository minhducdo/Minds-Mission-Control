'use client';
import * as React from 'react';
import AgentCard from '@/components/AgentCard';
import type { RegistryAgent } from '@/lib/types';
export default function AgentsGrid() {
  const [agents, setAgents] = React.useState<RegistryAgent[]>([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('/data/telemetry.json')
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data.agents || []);
        setAgents(list);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <div className="text-white/50 text-sm">Loading agents...</div>;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map(a => <AgentCard key={a.id} agent={a} />)}
    </div>
  );
}