import { TutorialCard } from '@/components/cards/TutorialCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getTutorials } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().tutorials.pageTitle,
  description: getMessages().tutorials.pageDescription,
  path: routes.tutorials,
});

export default async function TutorialsPage() {
  const [tutorials, { tutorials: messages, nav }] = await Promise.all([
    getTutorials(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.tutorials }]}
      />
      <Section>
        <CardGrid
          items={tutorials}
          columns={3}
          getKey={(tutorial) => tutorial.id}
          renderItem={(tutorial) => <TutorialCard tutorial={tutorial} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
