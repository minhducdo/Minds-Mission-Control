'use client';
import * as React from 'react';
import AgentCard from './AgentCard';
import type { RegistryAgent } from '../lib/types';

interface AgentsGridProps {
  agents?: RegistryAgent[];
}

export default function AgentsGrid({ agents: initialAgents }: AgentsGridProps) {
  const [agents, setAgents] = React.useState<RegistryAgent[]>(initialAgents || []);
  const [loading, setLoading] = React.useState(!initialAgents);

  React.useEffect(() => {
    if (initialAgents && initialAgents.length > 0) {
      setAgents(initialAgents);
      setLoading(false);
      return;
    }
    
    fetch('/data/telemetry.json')
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data.agents || []);
        setAgents(list);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [initialAgents]);

  if (loading) return <div className="text-white/50 text-sm">Loading agents...</div>;
  
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map(a => (
        <AgentCard key={a.id} agent={a} />
      *i}
    </div>
  );
}
