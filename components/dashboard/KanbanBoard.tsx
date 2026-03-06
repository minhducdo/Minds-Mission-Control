// components/dashboard/KanbanBoard.tsx
"use client";

import * as React from "react";

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {["BACKLOG", "IN_PROGRESS", "BLOCKED", "DONE"].map((column) => (
        <div key={column} className="space-y-4">
          <h3 className="text-white/40 text-xs font-bold tracking-wider uppercase px-2">
            {column.replace(//g, " ")}
          </h3>
          <div className="space-y-4 min-h-[200px]">
            {/* Jobs will be mapped here in Phase 5 */}
            <div className="text-white/5 rounded-lg border border-dashed border-white/5 h-32 fex items-center justify-center text-xs">
              No Active Jobs
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
