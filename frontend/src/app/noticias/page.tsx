import { NewsCard } from '@/components/cards/NewsCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getNews } from '@/services';

const { news: messages, nav } = getMessages();

export const metadata = buildPageMetadata({
  title: messages.pageTitle,
  description: messages.pageDescription,
  path: routes.news,
});

export default async function NewsPage() {
  const items = await getNews();

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.news }]}
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
