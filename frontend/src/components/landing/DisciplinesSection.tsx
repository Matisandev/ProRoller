import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { getFeaturedDisciplines } from '@/services';

export async function DisciplinesSection() {
  const [disciplines, { disciplines: messages, common }] = await Promise.all([
    getFeaturedDisciplines(4),
    getRequestMessages(),
  ]);

  return (
    <Section
      id={sectionIds.disciplines}
      eyebrow={messages.eyebrow}
      title={messages.title}
      description={messages.pageDescription}
      action={
        <Button href={routes.disciplines} variant="secondary">
          {common.seeAll}
        </Button>
      }
    >
      <CardGrid
        items={disciplines}
        columns={4}
        getKey={(discipline) => discipline.id}
        renderItem={(discipline) => <DisciplineCard discipline={discipline} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
