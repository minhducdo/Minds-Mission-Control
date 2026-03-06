"use client";
import * as React from "react";

interface JobCardProps {
  title: string;
  priority: number;
  costEst: string;
  agent: string;
}

export const JobCard = ({ title, priority, costEst, agent }: JobCardProps) => (
  <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p4 hover:border-blue-500/50 transition-all cursor-pointer">
    <div className="flex justify-between items-center mb-2">
      <span className="font-mono text-[8px] text-white/40">PRIORITY</span>
      <div className={
        `w-2 h-2 rounded-full ${
          priority === 5 ? 'bg-red-500' : 
          priority >= 3 ? 'bg-orange-500' : 
          'bg-green-500'
        }`
} />
    </div>
    <h4 className="text-white text-sm font-medium line-clamp-2 mb-4">{title}</h4>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-white/10" />
        <span className="text-white/60 text-[10px]">{agent}</span>
      </div>
      <span className="text-emerald-400 font-mono text-[10px]">{costEst}</span>
    </div>
  </div>
);
