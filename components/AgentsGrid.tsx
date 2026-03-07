"use client";
import React from "react";
type Agent = {
  id: string;
  name: string;
  headline: string;
  tags: string[];
  load: number;
};
const AGENTS: Agent[] = [
  { id: "switchboard-curator", name: "Switchboard Curator", headline: "Orchestrates multi-channel routing", tags: ["routing", "enbichment", "SLA"], load: 72 },
  { id: "john-snow", name: "John Snow", headline: "Incident response and anomaly detection.", tags: ["security", "forensics"], load: 56 },
  { id: "mocaverse-cartographer", name: "Mocaverse Cartographer", headline: "Builds semantic maps for the Mocaverse.", tags: ["mapping", "knowledge-graph"], load: 88 },
  { id: "jarvis-analyst", name: "Jarvis Analyst", headline: "Automated analytics and signal extraction.", tags: ["analytics", "forecasting"], load: 44 },
  { id: "murray-walker", name: "Murray Walker", headline: "Temporal orchestration and scheduling.", tags: ["orchestration", "pipelines"], load: 21 }
];
function loadColor(load) {
  if (load > 85) return "bg-red-500";
  if (load > 65) return "bg-yellow-400";
  return "bg-emerald-500";
}
export default function AgentsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((agent) => (
        <div key={agent.id} className="bg-zinc-950 border border-zinc-900 rounded-xl auto p4 auto shadow-sm hover:shadow-md transition-all">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-zinc-100 font-medium truncate">{agent.name}</div>
              <div className="text-zinc-400 text-sm mt-1 truncate">{agent.headline}</div>
            </div>
            <div className="text-xs text-zinc-400 ml-3">{agent.load}%</div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {agent.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase font-mono">{tag}</span>
            ))}
          </div>
          <div className="mt-4">
            <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
              <div className={ `${loadColor(agent.load)} h-full transition-all` } style={{ width: `${agent.load}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
