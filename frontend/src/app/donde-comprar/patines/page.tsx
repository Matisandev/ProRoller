import { ModelCard } from '@/components/cards/ModelCard';
import { HelmetNotice } from '@/components/sections/HelmetNotice';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getBrands, getSkateModels } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().models.pageTitle,
  description: getMessages().models.pageDescription,
  path: routes.models,
});

const MODELS_ANCHOR = 'fichas';

export default async function ModelsPage() {
  const [models, brands, { models: messages, nav }] = await Promise.all([
    getSkateModels(),
    getBrands(),
    getRequestMessages(),
  ]);

  const brandName = (brandId: string): string | undefined =>
    brands.find((brand) => brand.id === brandId)?.name;

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.whereToBuy, href: routes.whereToBuy },
          { label: nav.models },
        ]}
      />

      <Section>
        <HelmetNotice skipHref={`${routes.models}#${MODELS_ANCHOR}`} />
      </Section>

      <Section id={MODELS_ANCHOR}>
        <CardGrid
          items={models}
          columns={3}
          getKey={(model) => model.id}
          renderItem={(model) => <ModelCard model={model} brandName={brandName(model.brandId)} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
