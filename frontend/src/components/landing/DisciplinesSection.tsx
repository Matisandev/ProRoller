import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getDisciplines } from '@/services';

export async function DisciplinesSection() {
  const { disciplines: messages, common } = getMessages();
  const disciplines = await getDisciplines();

  return (
    <Section
      id={sectionIds.disciplines}
      eyebrow={messages.eyebrow}
      title={messages.title}
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
