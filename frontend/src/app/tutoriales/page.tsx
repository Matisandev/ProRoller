import { TutorialCard } from '@/components/cards/TutorialCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getTutorials } from '@/services';

const { tutorials: messages, nav } = getMessages();

export const metadata = buildPageMetadata({
  title: messages.pageTitle,
  description: messages.pageDescription,
  path: routes.tutorials,
});

export default async function TutorialsPage() {
  const tutorials = await getTutorials();

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
