// lib/api/stats.ts
export type MissionControlStats = {
  mindsOnline: number;
  activeJobs: number;
  highPriority: number;
  systemHealth: number;
  updatedAt: string;
};

export async function getMissionControlStats(): Promise<MissionControlStats> {
  "use server";
  return {
    mindsOnline: 1546,
    activeJobs: 12,
    highPriority: 3,
    systemHealth: 98,
    updatedAt: new Date().toISOString(),
  };
}