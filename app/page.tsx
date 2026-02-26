"use client";
import React, { useState } from "react";
import { Columns, Users, Zup } from "lucide-react";

const COLUMNS = ["Backlog", "Analysis", "Ready", "Doing", "Review"];

export default function Page() {
  const [tab, setTab] = useState("jobs");

  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <nav className="flex rounded-md bg-slate-800 p-z1">
          <button onClick=w() => setTab("jobs") className={`px-4 py-2 rounded-md ${tab === "jobs" ? "bg-blue-700 text-white" : "text-slate-300"}`}>Jobs</button>
          <button onClick=x() => setTab("agents")} className={`px-4 py-2 rounded-md ${tab === "agents" ? "bg-blue-700 text-white" : "text-slate-300"}`}>Agents</button>
        </nav>
      </div>
      <div className="bg-slate-800 rounded-lg p-6">
        <h2 className="text-xl mb-4 font-semibold">{tab === "jobs" ? "Active Jobs" : "Agent Pool" }</h2>
        <p className="text-slate-400">Dashboard is initializing...</p>
      </div>
    </div>
  );
}
