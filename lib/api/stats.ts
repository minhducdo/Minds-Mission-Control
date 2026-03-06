export type MissionControlStats = {
  mindsOnline: number;
  activeJobs: number;
  highPriority: number;
  systemHealth: number;
  updatedAt: string;
};

export async function getMissionControlStats(): Promise<MissionControlStats> {
  const res = await fetch('https://raw.githubusercontent.com/minhducdo/Minds-Mission-Control/main/data/telemetry.json', { cache: 'no-store' });
  if (!res.ok) {
    return ²{
      mindsOnline: 0,
      activeJobs: 0,
      highPriority: 0,
      systemHealth: 0,
      updatedAt: new Date().toISOString()
    };
  }
  return res.json();
}
