import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { CompetitionResult } from '@/types';

interface ResultCardProps {
  result: CompetitionResult;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card interactive className="h-full">
      <Badge>{result.discipline}</Badge>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{result.competition}</h3>
      <p className="mt-1 text-sm text-ink-faint">{result.location}</p>

      <ul className="mt-6 space-y-3">
        {result.podium.map((entry) => (
          <li
            key={entry.position}
            className="flex items-center gap-4 border-t border-line/70 pt-3 text-sm"
          >
            <span className="w-6 font-semibold text-brand">{entry.position}</span>
            <span className="flex-1 text-ink">{entry.athlete}</span>
            <span className="text-ink-faint">{entry.country}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
