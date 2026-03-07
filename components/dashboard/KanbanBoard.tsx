"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";

type JobStatus = "backlog" | "inProgress" | "blocked" | "done";

export type Job = {
  id: string;
  title: string;
  status: JobStatus;
  priority: number;
  body?: string;
};

const COLUMNS: Array<{ key: JobStatus; title: string }> = [
  { key: "backlog", title: "Backlog" },
  { key: "inProgress", title: "In Progress" },
  { key: "blocked", title: "Blocked" },
  { key: "done", title: "Done" },
];

async function fetchJobs(): Promise<Job[]> {
  try {
    const res = await fetch("/data/jobs.json", { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch jobs:", err);
    return [];
  }
}

export default function KanbanBoard() {
  const { data: jobs = [] } = useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    refetchInterval: 10_000,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {COLUMNS.map((col) => (
        <div key={col.key} className="space-y-4">
          <h3 className="text-white/40 text-xs font-bold tracking-wider uppercase px-2">
            {col.title}
          </h3>
          <div className="space-y-4 min-h-[200px]">
            {Array.isArray(jobs) && jobs.filter((j) => j.status === col.key).length > 0 ? (
              jobs
                .filter((j) => j.status === col.key)
                .map((job) => (
                  <div
                    key={job.id}
                    className="bg-[#1A1A1A] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors"
                  >
                    <p className="text-sm font-medium text-white/90">{job.title}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">
                        P{job.priority}
                        </span>
                    </div>
                </div>
                ))
             ) : (
              <div className="text-white/5 rounded-lg border border-dashed border-white/5 h-32 flex items-center justify-center text-xs">
                No Jobs
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
