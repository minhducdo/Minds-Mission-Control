"use client";
import StatsBar from "../components/dashboard/StatsBar";
import KanbanBoard from "../components/dashboard/KanbanBoard";
import AgentsGrid from "../components/AgentsGrid";
import { RegistryData } from "../lib/data";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pr-20">
      <StatsBar />
      <div className="border-t border-white/5 pt-8">
        <h2 className="text-sm font-medium text-white/40 mb-6 uppercase tracking-widest">Active Operations</h2>
        <KanbanBoard />
      </div>
      <div className="border-t border-white/5 pt-8">
        <h2 className="text-sm font-medium text-white/40 mb-6 uppercase tracking-widest">Mind Registry</h2>
        <AgentsGrid agents={RegistryData} />
      </div>
    </div>
  );
}
