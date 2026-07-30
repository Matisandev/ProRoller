import Link from 'next/link';
import { ResultCard } from '@/components/cards/ResultCard';
import { Badge } from '@/components/ui/Badge';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getResults } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().results.pageTitle,
  description: getMessages().results.pageDescription,
  path: routes.results,
});

export default async function ResultsPage() {
  const [results, { results: messages, news: newsMessages, nav }] = await Promise.all([
    getResults(),
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
          { label: nav.results },
        ]}
        meta={
          <>
            <Link href={routes.news}>
              <Badge variant="neutral">{newsMessages.newsTab}</Badge>
            </Link>
            <Badge>{newsMessages.resultsTab}</Badge>
            <Link href={routes.events}>
              <Badge variant="neutral">{newsMessages.eventsTab}</Badge>
            </Link>
          </>
        }
      />
      <Section description={messages.notice}>
        <CardGrid
          items={results}
          columns={2}
          getKey={(result) => result.id}
          renderItem={(result) => <ResultCard result={result} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
