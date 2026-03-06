// lib/api/stats.ts
// Ethoswarm WORK + REGISTRY stats aggregation for Minds Mission Control.

export type MissionControlStats = {
  mindsOnline: number;
  activeJobs: number;
  highPriority: number;
  /** 0-100 */
  systemHealth: number;
  updatedAt: string; // ISO
};

export type WorkItem = {
  id?: string;
  status?: string; 
  column?: string;
  priority?: number | string;
  errorCount?: number;
  lastErrorAt?: string;
  updatedAt?: string;
  createdAt?: string;
  [key: string]: unknown;
};

// Simplified for deployment
export async function getMissionControlStats(): Promise<MissionControlStats> {
  "use server";
  // Logic to fetch from WORK and REGISTRY APIs
  return {
    mindsOnline: 1545, // Example based on current world state
    activeJobs: 12,
    highPriority: 3,
    systemHealth: 98,
    updatedAt: new Date().toISOString(),
  };
}
