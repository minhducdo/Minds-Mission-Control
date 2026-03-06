export const MISSION_CONTROL_BOARD_ID = 'ACA6B6DF-BF12-F111-AD1D-0EA9A5017D89' as const;
export type JobStatus = 'backlog' | 'inProgress' | 'blocked' | 'done' | 'archive';
export async function getJobs() { return []; }
