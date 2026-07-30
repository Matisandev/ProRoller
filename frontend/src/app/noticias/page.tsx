import Link from 'next/link';
import { NewsCard } from '@/components/cards/NewsCard';
import { Badge } from '@/components/ui/Badge';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getNews } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().news.pageTitle,
  description: getMessages().news.pageDescription,
  path: routes.news,
});

export default async function NewsPage() {
  const [items, { news: messages, nav }] = await Promise.all([getNews(), getRequestMessages()]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.news }]}
        meta={
          <>
            <Badge>{messages.newsTab}</Badge>
            <Link href={routes.results}>
              <Badge variant="neutral">{messages.resultsTab}</Badge>
            </Link>
            <Link href={routes.events}>
              <Badge variant="neutral">{messages.eventsTab}</Badge>
            </Link>
          </>
        }
      />
      <Section description={messages.notice}>
        <CardGrid
          items={items}
          columns={3}
          getKey={(item) => item.id}
          renderItem={(item) => <NewsCard item={item} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
