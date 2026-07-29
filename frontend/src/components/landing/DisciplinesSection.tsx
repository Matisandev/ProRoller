import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getDisciplines } from '@/services';

export async function DisciplinesSection() {
  const { disciplines: messages } = getMessages();
  const disciplines = await getDisciplines();

  return (
    <Section id={sectionIds.disciplines} eyebrow={messages.eyebrow} title={messages.title}>
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
