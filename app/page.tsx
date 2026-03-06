"use client";
import StatsBar from "@/components/dashboard/StatsBar";
import KanbanBoard from "@/components/dashboard/KanbanBoard";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pr-20">
      <StatsBar />
      <div className="border-t border-white/5 pt-8">
        <h2 className="text-sm font-medium text-white/40 mb-6 uppercase tracking-widest">Active Operations</h2>
        <KanbanBoard />
      </div>
    </div>
  );
}
