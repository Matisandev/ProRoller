import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { VideoList } from '@/components/ui/VideoList';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import {
  getArticlesByIds,
  getDisciplines,
  getTutorial,
  getTutorials,
  getVideosByIds,
} from '@/services';

interface TutorialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tutorials = await getTutorials();
  return tutorials.map((tutorial) => ({ slug: tutorial.id }));
}

export async function generateMetadata({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = await getTutorial(slug);
  if (tutorial === null) return {};

  return buildPageMetadata({
    title: tutorial.name,
    description: tutorial.summary,
    path: routes.tutorial(tutorial.id),
  });
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = await getTutorial(slug);
  if (tutorial === null) notFound();

  const {
    tutorials: messages,
    nav,
    levels,
    articles: articleMessages,
    videos: videoMessages,
  } = await getRequestMessages();

  const [videos, disciplines, relatedArticles] = await Promise.all([
    getVideosByIds(tutorial.videoIds),
    getDisciplines(),
    getArticlesByIds(tutorial.articleIds),
  ]);
  const related = disciplines.filter((discipline) =>
    tutorial.disciplineIds.includes(discipline.id),
  );

  return (
    <>
      <PageHeader
        eyebrow={nav.tutorials}
        title={tutorial.name}
        description={tutorial.summary}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.tutorials, href: routes.tutorials },
          { label: tutorial.name },
        ]}
        meta={
          <Badge>
            {messages.level}: {levels[tutorial.level]}
          </Badge>
        }
      />

      <Section title={messages.goals}>
        <div className="max-w-3xl">
          <BulletList items={tutorial.goals} />
        </div>
      </Section>

      <Section title={messages.prerequisites}>
        <div className="max-w-3xl">
          {tutorial.prerequisites.length === 0 ? (
            <p className="text-sm text-ink-muted">{messages.noPrerequisites}</p>
          ) : (
            <BulletList items={tutorial.prerequisites} />
          )}
        </div>
      </Section>

      <Section title={messages.explanation}>
        <div className="max-w-3xl space-y-4">
          {tutorial.explanation.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {tutorial.keyPoints.length > 0 && (
        <Section title={messages.keyPoints}>
          <div className="max-w-3xl">
            <BulletList items={tutorial.keyPoints} />
          </div>
        </Section>
      )}

      {videos.length > 0 && (
        <Section title={messages.relatedVideos}>
          <VideoList videos={videos} notice={videoMessages.embedNotice} />
        </Section>
      )}

      {relatedArticles.length > 0 && (
        <Section title={messages.relatedArticles}>
          <CardGrid
            items={relatedArticles}
            getKey={(article) => article.id}
            renderItem={(article) => <ArticleCard article={article} />}
            emptyMessage={articleMessages.empty}
          />
        </Section>
      )}

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
