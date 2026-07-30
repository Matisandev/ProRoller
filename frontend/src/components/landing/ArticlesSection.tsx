import { ArticleCard } from '@/components/cards/ArticleCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { getLatestArticles } from '@/services';

export async function ArticlesSection() {
  const [articles, { articles: messages, common }] = await Promise.all([
    getLatestArticles(3),
    getRequestMessages(),
  ]);

  return (
    <Section
      id={sectionIds.articles}
      eyebrow={messages.eyebrow}
      title={messages.title}
      action={
        <Button href={routes.articles} variant="secondary">
          {common.seeAll}
        </Button>
      }
    >
      <CardGrid
        items={articles}
        getKey={(article) => article.id}
        renderItem={(article) => <ArticleCard article={article} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
