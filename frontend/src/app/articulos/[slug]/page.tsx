import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { PageHeader } from '@/components/ui/PageHeader';
import { Prose } from '@/components/ui/Prose';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getArticle, getArticles, getDisciplines } from '@/services';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (article === null) return {};

  return buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: routes.article(article.id),
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (article === null) notFound();

  const { articles: messages, nav, common } = getMessages();
  const disciplines = await getDisciplines();
  const related = disciplines.filter((discipline) => article.disciplineIds.includes(discipline.id));

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.articles, href: routes.articles },
          { label: article.title },
        ]}
        meta={
          <>
            <Badge variant="neutral">
              {article.readingMinutes} {common.readingMinutes}
            </Badge>
            <time dateTime={article.publishedAt} className="text-xs text-ink-faint">
              {article.publishedAt}
            </time>
          </>
        }
      />

      <Section>
        <article className="max-w-3xl">
          <Prose blocks={article.body} />
        </article>
      </Section>

      {related.length > 0 && (
        <Section title={messages.relatedDisciplines}>
          <ul className="flex flex-wrap gap-3">
            {related.map((discipline) => (
              <li key={discipline.id}>
                <Link href={routes.discipline(discipline.id)}>
                  <Badge variant="neutral">{discipline.name}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
