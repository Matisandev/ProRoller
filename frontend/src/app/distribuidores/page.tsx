import { DistributorCard } from '@/components/cards/DistributorCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getRecommendedDistributors } from '@/services';

const { distributors: messages, nav } = getMessages();

export const metadata = buildPageMetadata({
  title: messages.pageTitle,
  description: messages.pageDescription,
  path: routes.distributors,
});

export default async function DistributorsPage() {
  const distributors = await getRecommendedDistributors();

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.distributors }]}
      />
      <Section description={messages.notice}>
        <CardGrid
          items={distributors}
          columns={2}
          getKey={(distributor) => distributor.id}
          renderItem={(distributor) => <DistributorCard distributor={distributor} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
