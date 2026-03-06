// components/dashboard/StatsBar.tsx
"use client";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMissionControlStats } from "@/lib/api/stats";

export default function StatsBar() {
  const { data: stats } = useQuery({
    queryKey: ["mission-control", "stats"],
    queryFn: () => getMissionControlStats(),
    refetchInterval: 30000,
  });

  const items = [
    { label: "Minds Online", value: stats?.mindsOnline ?? "...", icon: "Users" },
    { label: "Active Jobs", value: stats?.activeJobs ?? "...", icon: "Activity" },
    { label: "High Priority", value: stats?.highPriority ?? "...", icon: "AlertTriangle" },
    { label: "System Health", value: `${stats?.systemHealth ?? "..." }%`, icon: "ShieldCheck" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all">
          <div className="text-white/60 text-xs mb-1 uppercase tracking-wider font-semibold">{item.label}</div>
          <div className="text-white text-2xl font-bold font-mono tracking-tight">{item.value}</div>
        </div>
      ))}
    </div>
  );
}