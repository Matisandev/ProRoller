import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { TutorialCard } from '@/components/cards/TutorialCard';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import {
  getArticlesByIds,
  getDiscipline,
  getDisciplines,
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

  const { disciplines: messages, nav, levels, articles: articleMessages } = getMessages();
  const [videos, relatedArticles, relatedTutorials] = await Promise.all([
    getVideosByIds(discipline.videoIds),
    getArticlesByIds(discipline.articleIds),
    getTutorialsByDiscipline(discipline.id),
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
        meta={
          <Badge variant="neutral">
            {messages.recommendedLevel}: {levels[discipline.recommendedLevel]}
          </Badge>
        }
      />

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

      {videos.length > 0 && (
        <Section title={messages.relatedVideos}>
          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {videos.map((video) => (
              <li key={video.id}>
                <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
                <p className="mt-3 text-sm font-medium">{video.title}</p>
                <p className="text-xs text-ink-faint">{video.channel}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {relatedTutorials.length > 0 && (
        <Section title={messages.relatedTutorials}>
          <CardGrid
            items={relatedTutorials}
            getKey={(tutorial) => tutorial.id}
            renderItem={(tutorial) => <TutorialCard tutorial={tutorial} />}
            emptyMessage={messages.relatedTutorials}
          />
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
