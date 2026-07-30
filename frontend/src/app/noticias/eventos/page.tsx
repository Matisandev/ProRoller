import Link from 'next/link';
import { EventCard } from '@/components/cards/EventCard';
import { Badge } from '@/components/ui/Badge';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getUpcomingEvents } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().events.pageTitle,
  description: getMessages().events.pageDescription,
  path: routes.events,
});

export default async function EventsPage() {
  const [events, { events: messages, news: newsMessages, nav }] = await Promise.all([
    getUpcomingEvents(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.news, href: routes.news },
          { label: nav.events },
        ]}
        meta={
          <>
            <Link href={routes.news}>
              <Badge variant="neutral">{newsMessages.newsTab}</Badge>
            </Link>
            <Link href={routes.results}>
              <Badge variant="neutral">{newsMessages.resultsTab}</Badge>
            </Link>
            <Badge>{newsMessages.eventsTab}</Badge>
          </>
        }
      />
      <Section description={messages.notice}>
        <CardGrid
          items={events}
          columns={2}
          getKey={(event) => event.id}
          renderItem={(event) => <EventCard event={event} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
