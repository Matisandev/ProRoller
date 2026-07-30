import { TutorialCard } from '@/components/cards/TutorialCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { getLatestTutorials } from '@/services';

export async function TutorialsSection() {
  const [tutorials, { tutorials: messages, common }] = await Promise.all([
    getLatestTutorials(3),
    getRequestMessages(),
  ]);

  return (
    <Section
      id={sectionIds.tutorials}
      eyebrow={messages.eyebrow}
      title={messages.title}
      action={
        <Button href={routes.tutorials} variant="secondary">
          {common.seeAll}
        </Button>
      }
    >
      <CardGrid
        items={tutorials}
        getKey={(tutorial) => tutorial.id}
        renderItem={(tutorial) => <TutorialCard tutorial={tutorial} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
