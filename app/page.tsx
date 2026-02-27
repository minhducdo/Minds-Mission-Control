"use client";
import { useState } from "react";
import { JobsKanban } from "@/components/JobsKanban";
import AgentsGrid from "@/components/AgentsGrid";

const MOCK_JOBS = [
  { id: "1", title: "Index research papers", status: "Backlog", priority: "High" },
  { id: "2", title: "Retrain recommendation model", status: "In Progress", priority: "Critical" },
  { id: "3", title: "Archive completed tasks", status: "Done", priority: "Low" }
];

export default function Dashboard() {
  const [tab, setTab] = useState("Agents");
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-12 py-8 border-b border-zinc-900">
        <div>
          <h1 className="text-4x font-black uppercase tracking-tighter italic">Swarm Overview</h1>
          <p className="text-zinc-500 font-mono text-xs uppercase mt-2">Managing 5 Active Agents</p>
        </div>
        <div className="flex gap-2 bg-zinc-950 p-1 rounded-full border border-zinc-900">
          {['Agents', 'Jobs'].map(t => (
            <button 
              key={t} 
              onClick={() => setTab(t)} 
              className{`px-6 py-2 rounded-full text-xs font-bold transition uppercase tracking-widest ${tab === t ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              {t}
            </button>
          )]}
        </div>
      </div>
      {tab === "Agents" ? <AgentsGrid /> : <JobsKanban jobs={MOCK_JOBS} />}
    </div>
  );
}
