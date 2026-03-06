export interface MissionControlStats {
  mindsOnline: number;
  activeJobs: number;
  highPriority: number;
  systemHealth: number;
}

const DEFAULT_STATS: MissionControlStats = {
  mindsOnline: 0,
  activeJobs: 0,
  highPriority: 0,
  systemHealth: 98,
};

export async function getMissionControlStats(): Promise<MissionControlStats> {
  try {
    const res = await fetch("/data/telemetry.json", { cache: "no-store" });
    if (!res.ok) return DEFAULT_STATS;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return DEFAULT_STATS;
  }
}
