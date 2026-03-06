// lib/api/stats.ts
export type MissionControlStats = {
  mindsOnline: number;
  activeJobs: number;
  highPriority: number;
  systemHealth: number;
  updatedAt: string;
};

const TELEMETRY_URL =
  "https://raw.githubusercontent.com/minhducdo/Minds-Mission-Control/main/data/telemetry.json";

export async function getMissionControlStats(): Promise<MissionControlStats> {
  const res = await fetch(TELEMETRY_URL, { cache: "no-store" });
  if (!res.ok) {
    return {
      mindsOnline: 0,
      activeJobs: 0,
      highPriority: 0,
      systemHealth: 0,
      updatedAt: new Date().toISOString()
    };
  }
  return await res.json();
}
