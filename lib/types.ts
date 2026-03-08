export type AgentStatus = 'online' | 'offline' | 'degraded' | 'unknown';

export interface RegistryAgent {
  id: string;
  name: string;
  headline: string;
  status: AgentStatus;
  capabilities?: string[];
}
