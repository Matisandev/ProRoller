import { SpotCard } from '@/components/cards/SpotCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getSpots } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().spots.pageTitle,
  description: getMessages().spots.pageDescription,
  path: routes.spots,
});

export default async function SpotsPage() {
  const [spots, { spots: messages, nav, common }] = await Promise.all([
    getSpots(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.whereToSkate, href: routes.whereToSkate },
          { label: nav.spots },
        ]}
      />
      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>
      <Section>
        <CardGrid
          items={spots}
          columns={3}
          getKey={(spot) => spot.id}
          renderItem={(spot) => <SpotCard spot={spot} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
