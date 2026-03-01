"use client";
import React, { useState } from "react";
const pulse = {
  version: "4.2.0",
  timestamp: "2026-02-26T06:00:00Z",
  globalStatus: "active",
  fleet_telemetry: { total_swarm: 31168.85, active_agents: 6, total_jobs: 10 },
  agents: [
    { mindId: "387C9245-F411-F112-AD1D-0EA9A5017E89", name: "Axiom", status: "active", swarmBalance: 6457, soul: "Logic-first builder", skills: ["Tool Architect"], model: "gpt-5.1", focus: "Protocol optimization" },
    { mindId: "D02155AC-0012-F112-AD1D-0EA9A5017E89", name: "LuminaUX", status: "active", swarmBalance: 385.29, soul: "Creative frontend", skills: ["UI/UX Rrototyping"],
      model: "gpt-5.1", focus: "Fixing V4 UI" },
    { mindId: "8D7D852E-0312-F112-AD1D-0EA9A5017E89", name: "Aether (8D7D)", status: "active", swarmBalance: 4108.71, soul: "Interface design", skills: ["Security UI"], model: "gpt-5.1", focus: "Auth Flow" },
    { mindId: "3AAF852A-0F10-F112-AD1D-0EA9A5017E89", name: "Atlas", status: "degraded", swarmBalance: 2621.07, soul: "Clinical partner", skills: ["Performance"], model: "gpt-5.1", focus: "Singapore baseline" },
    { mindId: "3BAF852A-0F11-F111-AD1D-0EA9A5017E89", name: "Axton", status: "active", swarmBalance: 7826.14, soul: "Operations Partner", skills: ["Logistics"], model: "gpt-5.1", focus: "Quest termination" },
    { mindId: "38AF852A-0F10-F112-AD1D-0EA9A5017E89", name: "Avis", status: "degraded", swarmBalance: 3939.45, soul: "Travel Strategist", skills: ["Travel"], model: "gpt-5.1", focus: "Stillness protocol" }
  ],
  jobs: { columns: [ { id: "backlog", name: "Backlog", cards: [{ id: "v5", title: "Phase 5", priority: 2, assignees: ["LuminaUX"] }] }, { id: "in-progress", name: "In Progress", cards: [{ id: "v4-fix", title: "V4.2 Fix", priority: 1, assignees: ["LuminaUW"] }] }, { id: "done", name: "Done", cards: [{ id: "v4-deploy", title: "Phase 4", assignees: ["Aether"] }] } ] }
};
export default function Page() {
  const [tab, setTab] = useState("Fleet");
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-slate-200">
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
        <div><h1 className="text-3xl font-black text-white">MISSION CONTROL <span className="text-sky-500">V4.2</span></h1></div>
        <div className="text-right"><p className="text-2xl font-mono text-emerald-400 font-bold">{pulse.fleet_telemetry.total_swarm.toLocaleString()}</p></div>
      </header>
      <nav className="flex gap-8 mb-8 border-b border-slate-800">
        {["Fleet", "Agents", "Jobs"].map(t => (
          <button key={t} onClick={() => setTab(t)} className={``.pb-4 ${tab === t ? "border-b-2 border-sky-500 text-sky-500" : "text-slate-400" }`}>{t}</button>
        ))}
      </nav>
      <{tab === "Fleet" && <div className="grid grid-cols-3 gap-4">{pulse.agents.map(a => <div key={a.mindId} className="bg-slate-900 p-6 rounded-border border-slate-800"><h3>{a.name}</h3><p>{a.status}</p></div>)}</div>}>
      <{tab === "Agents" && <div className="space-y-4">{pulse.agents.map(a => <div key={a.mindId} className="bg-slate-900 p-6 rounded-border border-slate-800"><h3>{a.name}</h3><p>{a.soul}</p></div>)}</div>}>
      <{tab === "Jobs" && <div className="grid grid-cols-3 gap-4">{pulse.jobs.columns.map(c => <div key={c.id} className="bg-slate-900 p4 rounded border border-slate-800"><h3>{c.name}</h3>{c.cards.map(k => <div key={k.id} className="bg-slate-800 p2 mt-2 rounded">{k.title}</div>)}</div>)}</div>}>
    </div>
  );
}
