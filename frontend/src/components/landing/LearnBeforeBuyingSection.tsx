import { InfoCard } from '@/components/cards/InfoCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';

export function LearnBeforeBuyingSection() {
  const { learnBeforeBuying } = getMessages();

  return (
    <Section
      id={sectionIds.skates}
      eyebrow={learnBeforeBuying.eyebrow}
      title={learnBeforeBuying.title}
    >
      <CardGrid
        items={learnBeforeBuying.items}
        columns={4}
        getKey={(item) => item.id}
        renderItem={(item) => (
          <div id={item.id} className="h-full scroll-mt-24">
            <InfoCard title={item.title} description={item.description} className="p-6" />
          </div>
        )}
        emptyMessage={learnBeforeBuying.title}
      />
    </Section>
  );
}
