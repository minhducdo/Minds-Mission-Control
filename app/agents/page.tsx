import AgentsGrid from '@/components/AgentsGrid';
import { RegistryData } from '@/lib/data';

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Swarm Registry</h2>
        <p className="text-muted-foreground">Real-time capability and load metrics for active minds.</p>
      </div>
      <AgentsGrid agents={RegistryData} />
    </div>
  );
}
