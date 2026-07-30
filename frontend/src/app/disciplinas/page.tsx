import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getDisciplines } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().disciplines.pageTitle,
  description: getMessages().disciplines.pageDescription,
  path: routes.disciplines,
});

export default async function DisciplinesPage() {
  const [disciplines, { disciplines: messages, nav }] = await Promise.all([
    getDisciplines(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.disciplines }]}
      />
      <Section>
        <CardGrid
          items={disciplines}
          columns={3}
          getKey={(discipline) => discipline.id}
          renderItem={(discipline) => <DisciplineCard discipline={discipline} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
