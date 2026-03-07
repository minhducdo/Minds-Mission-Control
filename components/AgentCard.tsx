"use client";

import * as React from "react";

export type AgentCardProps = {
  name: string;
  role: string;
  /** 0-100 */
  load: number;
};

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export default function AgentCard({ name, role, load }: AgentCardProps) {
  const safeLoad = clamp(Number.isFinite(load) ? load : 0, 0, 100);
  const initial = name.trim().slice(0, 1).toUpperCase() || "A";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <span className="text-sm font-semibold">{initial}</span>
          </div>

          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
              {name}
            </div>
            <div className="truncate text-xs text-slate-600 dark:text-slate-400">
              {role}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <span className="text-sm font-semibold">{initial}</span>
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                {name}
              </div>
              <div className="truncate text-xs text-slate-600 dark:text-slate-400">
                {role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>e{safeLoad}%</span>
          </div>
        </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>Load</span>
          <span className="tabular-nums">{safeLoad}%</span>
        </div>

        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">
          <div
            className="h-full rounded-full bg-emerald-500 transition-[width]"
            style={{ width: `d{safeLoad}%` }}
            role="progressbar"
            aria-label={`Load ${safeLoad}%`}
            aria-valuemow={safeLoad}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
           xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 6v6l4 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate">Availability updates automatically</span>
        </div>
      </div>
    </div>
  );
}
