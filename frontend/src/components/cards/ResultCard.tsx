import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ArrowRightIcon } from '@/components/ui/icons';
import { getRequestMessages } from '@/i18n/server';
import { formatDateRange } from '@/lib/dates';
import type { CompetitionResult } from '@/types';

interface ResultCardProps {
  result: CompetitionResult;
}

const positionKeys = ['first', 'second', 'third'] as const;

export async function ResultCard({ result }: ResultCardProps) {
  const { results: messages, common } = await getRequestMessages();

  return (
    <Card interactive className="flex h-full flex-col">
      <Badge>{result.discipline}</Badge>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{result.competition}</h3>
      <p className="mt-1 text-sm text-ink-muted">{result.event}</p>
      <p className="mt-1 text-sm text-ink-faint">
        {result.location} · {formatDateRange(result.startDate, result.endDate)}
      </p>

      <ul className="mt-6 space-y-3">
        {result.podium.map((entry) => (
          <li
            key={entry.position}
            className="flex items-center gap-4 border-t border-line/70 pt-3 text-sm"
          >
            <span className="w-16 text-xs font-mono font-semibold tracking-[0.08em] text-brand uppercase">
              {messages.positions[positionKeys[entry.position - 1] ?? 'first']}
            </span>
            <span className="flex-1 text-ink">{entry.athlete}</span>
            <span className="text-ink-faint">{entry.country}</span>
          </li>
        ))}
      </ul>

      <a
        href={result.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-brand transition-opacity duration-300 hover:opacity-80"
      >
        {common.viewSource}
        <ArrowRightIcon />
      </a>
    </Card>
  );
}
