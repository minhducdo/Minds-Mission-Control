// Phase 2: Jobs Kanban Component
import { CircleDot, Loader2, CheckCircle2, Flag } from "lucide-react";

export function JobsKanban({ jobs }: { jobs: any[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {['Backlog', 'In Progress', 'Done'].map(status => (
        <div key={status} className="rounded-2xl border border-zinc-900 bg-zinc-950 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">{status}</h3>
          <div className="space-y-3">
            {jobs.filter(j => j.status === status).map(job => (
              <div key={job.id} className="rounded-xl border border-zinc-800 bg-black/40 p-3 hover:border-emerald-500/50 transition">
                <p className="text-xs font-medium">{job.title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10">{job.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
