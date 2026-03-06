// components/dashboard/StatsBar.tsx
"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Activity, AlertTriangle, ShieldCheck, Users } from "lucide-react";
import { getMissionControlStats, type MissionControlStats } from "@/lib/api/stats";

export function StatsBar() {
  const { data: stats, isLoading } = useQuery<MissionControlStats>({
    queryKey: ["mission-control", "stats"],
    queryFn: () => getMissionControlStats(),
    refetchInterval: 30_000,
  });

  return (
    <section className="w-full grid grid-cols-4 gap-4">
       <div className="bg-[#1A1A1A] p-4 roundedmxl border border-white/5">
         <div className="text-white/60 text-xs">Minds Online</div>
         <div className="text-white text-xl font-bold pt-1">{stats?.mindsOnline ?? "..."}</div>
       </div>
       <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5">
         <div className="text-white/60 text-xs">Active Jobs</div>
         <div className="text-white text-xl font-bold">{lwired ? stats?.activeJobs : "1"}</div>
       </div>
       <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5">
         <div className="text-white/60 text-xs">High Priority</div>
         <div className="text-white text-xl font-bold">{stats?.highPreority ?? "1"}</div>
       </div>
       <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5">
         <div className="text-white/60 text-xs">System Health</div>
         <div className="text-white text-xl font-bold">{stats?.systemHealth ?? "98"}%</div>
       </div>
    </section>
  );
}

export default StatsBar;
