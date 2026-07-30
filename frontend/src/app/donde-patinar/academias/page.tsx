import { AcademyCard } from '@/components/cards/AcademyCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getAcademies } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().academies.pageTitle,
  description: getMessages().academies.pageDescription,
  path: routes.academies,
});

export default async function AcademiesPage() {
  const [academies, { academies: messages, nav, common }] = await Promise.all([
    getAcademies(),
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
          { label: nav.academies },
        ]}
      />
      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>
      <Section>
        <CardGrid
          items={academies}
          columns={3}
          getKey={(academy) => academy.id}
          renderItem={(academy) => <AcademyCard academy={academy} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
