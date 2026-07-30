import { ArticleCard } from '@/components/cards/ArticleCard';
import { GearCard } from '@/components/cards/GearCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getProtectiveGear, getSafetyGuides } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().safety.pageTitle,
  description: getMessages().safety.pageDescription,
  path: routes.safety,
});

export default async function SafetyPage() {
  const [guides, gear, { safety: messages, nav, articles: articleMessages }] = await Promise.all([
    getSafetyGuides(),
    getProtectiveGear(),
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
          { label: nav.whereToBuy, href: routes.whereToBuy },
          { label: nav.safety },
        ]}
      />

      <Section title={messages.guidesTitle} description={messages.guidesDescription}>
        <CardGrid
          items={guides}
          columns={3}
          getKey={(guide) => guide.id}
          renderItem={(guide) => <ArticleCard article={guide} />}
          emptyMessage={articleMessages.empty}
        />
      </Section>

      <Section title={messages.productsTitle} description={messages.productsDescription}>
        <CardGrid
          items={gear}
          columns={3}
          getKey={(item) => item.id}
          renderItem={(item) => <GearCard gear={item} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
