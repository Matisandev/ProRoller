import { ArticleCard } from '@/components/cards/ArticleCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getArticles } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().articles.pageTitle,
  description: getMessages().articles.pageDescription,
  path: routes.articles,
});

export default async function ArticlesPage() {
  const [articles, { articles: messages, nav }] = await Promise.all([
    getArticles(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.articles }]}
      />
      <Section>
        <CardGrid
          items={articles}
          columns={3}
          getKey={(article) => article.id}
          renderItem={(article) => <ArticleCard article={article} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
