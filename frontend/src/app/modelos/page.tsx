import { ModelCard } from '@/components/cards/ModelCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getBrands, getSkateModels } from '@/services';

const { models: messages, nav } = getMessages();

export const metadata = buildPageMetadata({
  title: messages.pageTitle,
  description: messages.pageDescription,
  path: routes.models,
});

export default async function ModelsPage() {
  const [models, brands] = await Promise.all([getSkateModels(), getBrands()]);
  const brandNames = new Map(brands.map((brand) => [brand.id, brand.name]));

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.models }]}
      />
      <Section>
        <CardGrid
          items={models}
          columns={3}
          getKey={(model) => model.id}
          renderItem={(model) => (
            <ModelCard model={model} brandName={brandNames.get(model.brandId)} />
          )}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
