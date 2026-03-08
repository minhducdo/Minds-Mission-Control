"use client";
import * as React from "react";
import StatsBar from "@/components/dashboard/StatsBar";
import KanbanBoard from "@/components/dashboard/KanbanBoard";

export default function MissionControlPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 space-y-6">
        <h1 className="text-white text-2xl font-bold font-semibold">Minds Mission Control</h1>
        <StatsBar />
        <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-4">
          <KanbanBoard />
        </div>
    </main>
  );
}
