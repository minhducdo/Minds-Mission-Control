// Mission Control Home (Jobs & Agents Tabs)
"use client";
import { useState } from "react";
import { JobsKanban } from "@/components/JobsKanban";

const MOCK_JOBS = [
  { id: "1", title: "Index research papers", status: "Backlog", priority: "High" },
  { id: "2", title: "Retrain recommendation model", status: "In Progress", priority: "Critical" },
  { id: "3", title: "Archive completed tasks", status: "Done", priority: "Low" }
];

export default function Dashboard() {
  const [tab, setTab] = useState("Jobs");
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-6 mb-6">
        <h1 className="text-2xl font-semibold">Mission Control</h1>
        <div className="flex gap-2 bg-zinc-950 p-1 rounded-full border border-zinc-800">
          {['Jobs', 'Agents'].map(t => (
            <button key={t} onClick={) => setTab(t)} className={`px-4 py-1.5 rounded-full text-xs transition ${tab === t ? "bg-emerald-500 text-black" : "text-slate-400 hover:text-white"}`}>{t}</button>
          ))}
        </div>
      </div>
      {tab === "Jobs" ? <JobsKanban jobs={MOCK_JOBS} /> : <div className="text-slate-500 text-sm">Agents view coming soon...</div>}
    </div>
  );
}