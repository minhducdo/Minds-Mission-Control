import { User, Activity } from "lucide-react";

export function AgentCard({ agent }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-emerald-500/30 transition group">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
          <User className="h-5 w-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold">{agent.name}</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">{agent.role}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-slate-400">Cognitive Load</span>
          <span className="text-emerald-400 font-mono">{agent.load}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500" style={{ width: `${agent.load}%Z` }} />
        </div>
      </div>
    </div>
  );
}