import { notFound } from 'next/navigation';
import { ModelCard } from '@/components/cards/ModelCard';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { Button } from '@/components/ui/Button';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { interpolate } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { StoreCard } from '@/components/cards/StoreCard';
import {
  getBrand,
  getBrands,
  getDisciplines,
  getSkateModelsByBrand,
  getStoresByBrand,
} from '@/services';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const brands = await getBrands();
  return brands.map((brand) => ({ slug: brand.id }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (brand === null) return {};

  return buildPageMetadata({
    title: brand.name,
    description: brand.description,
    path: routes.brand(brand.id),
  });
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (brand === null) notFound();

  const {
    brands: messages,
    nav,
    common,
    models: modelMessages,
    stores: storeMessages,
  } = await getRequestMessages();
  const [models, disciplines, stores] = await Promise.all([
    getSkateModelsByBrand(brand.id),
    getDisciplines(),
    getStoresByBrand(brand.id),
  ]);
  const disciplineNames = disciplines
    .filter((discipline) => brand.disciplineIds.includes(discipline.id))
    .map((discipline) => discipline.name);

  return (
    <>
      <PageHeader
        eyebrow={nav.brands}
        title={brand.name}
        description={brand.description}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.whereToBuy, href: routes.whereToBuy },
          { label: nav.brands, href: routes.brands },
          { label: brand.name },
        ]}
        meta={
          <>
            <Badge variant="neutral">{brand.country}</Badge>
            <Badge variant="neutral">
              {interpolate(messages.founded, { year: brand.foundedYear })}
            </Badge>
            <Button
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              {common.viewSite}
            </Button>
          </>
        }
      />

      <Section title={messages.history}>
        <div className="max-w-3xl space-y-4">
          {brand.history.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.knownModels}>
        <div className="max-w-3xl">
          <BulletList items={brand.knownModels} />
        </div>
      </Section>

      <Section title={messages.disciplines}>
        <div className="max-w-3xl">
          <BulletList items={disciplineNames} />
        </div>
      </Section>

      {models.length > 0 && (
        <Section title={messages.modelsInProRoller}>
          <CardGrid
            items={models}
            getKey={(model) => model.id}
            renderItem={(model) => <ModelCard model={model} />}
            emptyMessage={modelMessages.empty}
          />
        </Section>
      )}

      {stores.length > 0 && (
        <Section title={messages.storesWithBrand} description={storeMessages.notice}>
          <CardGrid
            items={stores}
            columns={2}
            getKey={(store) => store.id}
            renderItem={(store) => <StoreCard store={store} />}
            emptyMessage={storeMessages.empty}
          />
        </Section>
      )}
    </>
  );
}
