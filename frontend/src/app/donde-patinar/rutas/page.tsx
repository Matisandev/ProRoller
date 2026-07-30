import { RouteCard } from '@/components/cards/RouteCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getSkateRoutes } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().skateRoutes.pageTitle,
  description: getMessages().skateRoutes.pageDescription,
  path: routes.skateRoutes,
});

export default async function SkateRoutesPage() {
  const [skateRoutes, { skateRoutes: messages, nav, common }] = await Promise.all([
    getSkateRoutes(),
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
          { label: nav.routes },
        ]}
      />
      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>
      <Section>
        <CardGrid
          items={skateRoutes}
          columns={3}
          getKey={(route) => route.id}
          renderItem={(route) => <RouteCard route={route} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
