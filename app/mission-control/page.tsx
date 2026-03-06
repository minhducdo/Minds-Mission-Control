// app/mission-control/page.tsx
"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StatsBar from "@/components/dashboard/StatsBar";

const queryClient = new QueryClient();

export default function MissionControlPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-[#0A0A0A] p-8 space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold tracking-tight">Minds Mission Control</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-xs font-mono uppercase">Live Link Active</span>
          </div>
        </header>
        <StatsBar />
        <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 shadow-2xl">
          <div className="text-white text-sm opacity-50">Kanban Board (Wiring In-Progress)</div>
        </div>
      </main>
    </QueryClientProvider>
  );
}