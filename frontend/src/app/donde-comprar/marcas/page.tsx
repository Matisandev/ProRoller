import { BrandCard } from '@/components/cards/BrandCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getBrands } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().brands.pageTitle,
  description: getMessages().brands.pageDescription,
  path: routes.brands,
});

export default async function BrandsPage() {
  const [brands, { brands: messages, nav }] = await Promise.all([
    getBrands(),
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
          { label: nav.brands },
        ]}
      />
      <Section>
        <CardGrid
          items={brands}
          columns={3}
          getKey={(brand) => brand.id}
          renderItem={(brand) => <BrandCard brand={brand} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
