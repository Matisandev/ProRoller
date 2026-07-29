import { ArticleCard } from '@/components/cards/ArticleCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getLatestArticles } from '@/services';

export async function ArticlesSection() {
  const { articles: messages } = getMessages();
  const articles = await getLatestArticles();

  return (
    <Section id={sectionIds.articles} eyebrow={messages.eyebrow} title={messages.title}>
      <CardGrid
        items={articles}
        getKey={(article) => article.id}
        renderItem={(article) => <ArticleCard article={article} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
