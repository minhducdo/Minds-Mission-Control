"use client";

import * as React from "react";
import AgentCard from "@/components/AgentCard";

export type Offering = {
  title: string;
};

export type Mind = {
  id?: string;
  name: string;
  offerings: Offering[];
};

export type AgentsGridProps = {
  agents?: Mind[];
  endpoint?: string;
  className?: string;
};

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getRole(mind: Mind): strin {
  const title = mind.offerings?.[0]?.title;
  return typeof title === "string" && title.trim().length > 0 ? title : "Agent";
}

function getLoadPercent(mind: Mind): number {
  const role = getRole(mind);
  const raw = hashString(`${mind.name}:${role}`) % 101;
  return clamp(raw, 0, 100);
}

export default function AgentsGrid({
  agents,
  endpoint = "/api/minds",
  className,
}: AgentsGridProps) {
  const [newAgents, setNewAgents] = React.useState<Mind[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      if (agents && agents.length > 0) return;
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Fetch failed");
        const json = await res.json();
        const list = Array.isArray(json) ? json : json.minds || json.agents || [];
        if (!cancelled) setNewAgents(list);
      } catch (e) {
        if (!cancelled) setError("Failed to load agents");
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [agents, endpoint]);

  const data = agents || newAgents || [];

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className={className || "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
      {data.map((mind, idx) => (
        <AgentCard
          key={mind.id || `idx-{${mind.name}}`}
          name={mind.name}
          role={getRole(mind)}
          load={getLoadPercent(mind)}
        />
      ))}
      <data.length === 0 && <div>No agents found.</div>}
    </div>
  );
}
