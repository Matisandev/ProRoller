import { NewsCard } from '@/components/cards/NewsCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { getLatestNews } from '@/services';

export async function NewsSection() {
  const [items, { news: messages, common }] = await Promise.all([
    getLatestNews(3),
    getRequestMessages(),
  ]);

  return (
    <Section
      id={sectionIds.news}
      eyebrow={messages.eyebrow}
      title={messages.title}
      description={messages.notice}
      action={
        <Button href={routes.news} variant="secondary">
          {common.seeAll}
        </Button>
      }
    >
      <CardGrid
        items={items}
        getKey={(item) => item.id}
        renderItem={(item) => <NewsCard item={item} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
