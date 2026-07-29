import { DisciplineCard } from '@/components/cards/DisciplineCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getDisciplines } from '@/services';

const { disciplines: messages, nav } = getMessages();

export const metadata = buildPageMetadata({
  title: messages.pageTitle,
  description: messages.pageDescription,
  path: routes.disciplines,
});

export default async function DisciplinesPage() {
  const disciplines = await getDisciplines();

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
