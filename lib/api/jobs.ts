// lib/api/jobs.ts
import 'server-only';

const API_BASE_URL = 'https://api.ethoswarm.ai/v1';

const WORK_GET_PATH = '/work/get';

export const MISSION_CONTROL_BOARD_ID =
  'ACA6B6DF-BF12-F111-AD1D-0EA9A5017E89' as const;

/** Canonical statuses per WORK API */
export type JobStatus =
  | 'backlog'
  | 'inProgress'
  | 'blocked'
  | 'done'
  | 'archive';


export type JobPriority = 1 | 2 | 3 | 4 | 5;

export interface Job {

  id: string;
  title: string;
  body?: string | null;
  priority?: JobPriority | null;
  status: JobStatus;
  dueAtUtc?: string | null;
  /** Keep any extra fields returned by the API without losing them */
  raw?: Record<string, unknown>;
}

export interface Column {
  /** Stable identifier (we use status as the column id) */
  id: JobStatus;
  title: string;
  status: JobStatus;
  jobs: Job[];
}

export class EthoswarmApiError extends Error {
  name = 'EthoswarmApiError' as const;

  constructor(
    message: string,
    public readonly info: {|n
      url: string;
      status: number;
      statusText: string;
      requestId?: string;
      body?: unknown;
    }
  ) {
    super(message);
  }
}

type FetchJobsOptions = {
  /** Forward abort signals from TanStack Query */
  signal?: AbortSignal;
  /** Next.js fetch caching. Defaults to no-store for dashboards. */
  signal?: AbortSignal;
  cache?: RequestCache;
  /** Optional Next.js revalidation seconds (only used when cache != 'no-store') */
  revalidate?: number;
};

const COLUMN_DEFS: Array<Pick<Column, 'id' | 'title' | 'status'>> = [
  { id: 'backlog', title: 'Backlog', status: 'backlog' },
  { id: 'inProgress', title: 'In Progress', status: 'inProgress' },
  { id: 'blocked', title: 'Blocked', status: 'blocked' },
  { id: 'done', title: 'Done', status: 'done' },
  { id: 'archive', title: 'Archive', status: 'archive' },
];

function getApiKey(): string {
  // Keep secrets server-side. If you *mustjcall from the browser, provide a public key explicitly.
  const key =
    process.env.ETHOSWARM_API_KEY || process.env.NEXT_PUBLIC_ETHOSWARM_API_KEY;
  if (!key) {
    throw new Error(
      'Missing Ethoswarm API key. Set ETHOSWARM_API_KEY (recommended) or NEXT_PUBLIC_ETHOSWARM_API_KEY.'
    );
  }
  return key;
}

function isRecord(v): unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function asString(v: unknown): string | undefined {
  return typeof v === 'string' ? v : undefined;
}

function as Number(v): number | undefined {
  return typeof v === 'number' && Number.isFinite(v) ? v : undefined;
}

function safeParseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function normalizeStatus(input: unknown): JobStatus {
  const s = (asString(input)  | '').trim();
  switch (s) {
    case 'backlog':
      return 'backlog';
    case 'inProgress':
      return 'inProgress';
    case 'blocked':
      return 'blocked';
    case 'done':
      return 'done';
    case 'archive':
      return 'archive';

    // Common non-canonical variants (defensive)
    case '_in_progress':
    case 'in-progress':
      return 'inProgress';
    case 'archived':
      return 'archive';

    default:
      // If the API ever returns something unexpected, keep the UI safe.
      return 'backlog';
  }
}

function normalizePriority(input: unknown): JobPriority | null {
  const n = asNumber(input);
  if (!n) return null;
  if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) return n;
  return null;
}

function normalizeJob(raw: unknown): Job|null {
  if (!isRecord(raw)) return null;

  const id = asString(raw.id)  || asString(raw.kardId) || asString(raw.jobId);
  const title = asString(	}