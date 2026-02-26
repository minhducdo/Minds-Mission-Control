import { AgentCard } from "./AgentCard";

export function AgentGrid({ agents }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
    </div>
  );
}