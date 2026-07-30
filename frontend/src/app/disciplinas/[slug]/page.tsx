import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { ModelCard } from '@/components/cards/ModelCard';
import { TutorialCard } from '@/components/cards/TutorialCard';
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
  getDiscipline,
  getDisciplines,
  getSkateModelsByDiscipline,
  getTutorialsByDiscipline,
  getVideosByIds,
} from '@/services';

interface DisciplinePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const disciplines = await getDisciplines();
  return disciplines.map((discipline) => ({ slug: discipline.id }));
}

export async function generateMetadata({ params }: DisciplinePageProps) {
  const { slug } = await params;
  const discipline = await getDiscipline(slug);
  if (discipline === null) return {};

  return buildPageMetadata({
    title: discipline.name,
    description: discipline.description,
    path: routes.discipline(discipline.id),
  });
}

export default async function DisciplinePage({ params }: DisciplinePageProps) {
  const { slug } = await params;
  const discipline = await getDiscipline(slug);
  if (discipline === null) notFound();

  const {
    disciplines: messages,
    nav,
    articles: articleMessages,
    models: modelMessages,
    tutorials: tutorialMessages,
    videos: videoMessages,
  } = await getRequestMessages();

  const [videos, relatedArticles, relatedTutorials, relatedModels] = await Promise.all([
    getVideosByIds(discipline.videoIds),
    getArticlesByIds(discipline.articleIds),
    getTutorialsByDiscipline(discipline.id),
    getSkateModelsByDiscipline(discipline.id),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={nav.disciplines}
        title={discipline.name}
        description={discipline.summary}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.disciplines, href: routes.disciplines },
          { label: discipline.name },
        ]}
      />

      <Section>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">{discipline.description}</p>
      </Section>

      <Section title={messages.history}>
        <div className="max-w-3xl space-y-4">
          {discipline.history.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.goals}>
        <div className="max-w-3xl">
          <BulletList items={discipline.goals} />
        </div>
      </Section>

      <Section title={messages.whatToLearnFirst}>
        <div className="max-w-3xl">
          <BulletList items={discipline.whatToLearnFirst} />
        </div>
      </Section>

      <Section title={messages.equipment}>
        <div className="max-w-3xl">
          <BulletList items={discipline.equipment} />
        </div>
      </Section>

      <Section title={messages.techniques}>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {discipline.techniques.map((technique) => (
            <li key={technique.name} className="rounded-card border border-line bg-navy/60 p-6">
              <h3 className="font-semibold tracking-tight">{technique.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{technique.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {relatedTutorials.length > 0 && (
        <Section title={messages.relatedTutorials}>
          <CardGrid
            items={relatedTutorials}
            getKey={(tutorial) => tutorial.id}
            renderItem={(tutorial) => <TutorialCard tutorial={tutorial} />}
            emptyMessage={tutorialMessages.empty}
          />
        </Section>
      )}

      {relatedModels.length > 0 && (
        <Section title={messages.relatedModels}>
          <CardGrid
            items={relatedModels}
            getKey={(model) => model.id}
            renderItem={(model) => <ModelCard model={model} />}
            emptyMessage={modelMessages.empty}
          />
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
    </>
  );
}
