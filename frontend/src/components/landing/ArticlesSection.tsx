import { ArticleCard } from '@/components/cards/ArticleCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getLatestArticles } from '@/services';

export async function ArticlesSection() {
  const { articles: messages, common } = getMessages();
  const articles = await getLatestArticles();

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
