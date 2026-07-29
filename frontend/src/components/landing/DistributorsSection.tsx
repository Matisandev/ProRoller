import { DistributorCard } from '@/components/cards/DistributorCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRecommendedDistributors } from '@/services';

export async function DistributorsSection() {
  const { distributors: messages } = getMessages();
  const distributors = await getRecommendedDistributors();

  return (
    <Section
      id={sectionIds.distributors}
      eyebrow={messages.eyebrow}
      title={messages.title}
      description={messages.notice}
    >
      <CardGrid
        items={distributors}
        columns={2}
        getKey={(distributor) => distributor.id}
        renderItem={(distributor) => <DistributorCard distributor={distributor} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
