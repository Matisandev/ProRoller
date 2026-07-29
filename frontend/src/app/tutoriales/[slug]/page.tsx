import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getDisciplines, getTutorial, getTutorials, getVideosByIds } from '@/services';

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

  const { tutorials: messages, nav, levels } = getMessages();
  const [videos, disciplines] = await Promise.all([
    getVideosByIds(tutorial.videoIds),
    getDisciplines(),
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

      <Section>
        <div className="max-w-3xl space-y-4">
          {tutorial.explanation.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.keyPoints}>
        <div className="max-w-3xl">
          <BulletList items={tutorial.keyPoints} />
        </div>
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
