import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ArrowRightIcon } from '@/components/ui/icons';
import { getRequestMessages } from '@/i18n/server';
import { formatDateRange } from '@/lib/dates';
import type { UpcomingEvent } from '@/types';

interface EventCardProps {
  event: UpcomingEvent;
}

export async function EventCard({ event }: EventCardProps) {
  const { events: messages, common } = await getRequestMessages();

  return (
    <Card interactive className="flex h-full flex-col p-6">
      <div className="flex flex-wrap gap-2">
        <Badge>{messages.scopes[event.scope]}</Badge>
        <Badge variant="neutral">{event.location}</Badge>
      </div>
      <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight">{event.name}</h3>
      <p className="mt-2 text-sm text-ink-faint">
        {messages.dates}: {formatDateRange(event.startDate, event.endDate)}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{event.summary}</p>
      <p className="mt-4 text-xs text-ink-faint">
        {messages.disciplines}: {event.disciplines.join(' · ')}
      </p>
      <a
        href={event.source.url}
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
