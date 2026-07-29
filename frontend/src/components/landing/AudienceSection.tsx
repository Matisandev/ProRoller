import { InfoCard } from '@/components/cards/InfoCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';

export function AudienceSection() {
  const { audience } = getMessages();

  return (
    <Section id={sectionIds.audience} eyebrow={audience.eyebrow} title={audience.title}>
      <CardGrid
        items={audience.items}
        getKey={(item) => item.id}
        renderItem={(item) => <InfoCard title={item.title} description={item.description} />}
        emptyMessage={audience.title}
      />
    </Section>
  );
}
