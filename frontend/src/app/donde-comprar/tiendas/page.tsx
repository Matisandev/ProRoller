import { StoreCard } from '@/components/cards/StoreCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getBrands, getStores } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().stores.pageTitle,
  description: getMessages().stores.pageDescription,
  path: routes.stores,
});

export default async function StoresPage() {
  const [stores, brands, { stores: messages, nav }] = await Promise.all([
    getStores(),
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
          { label: nav.stores },
        ]}
      />
      <Section description={messages.notice}>
        <CardGrid
          items={stores}
          columns={2}
          getKey={(store) => store.id}
          renderItem={(store) => <StoreCard store={store} brands={brands} />}
          emptyMessage={messages.empty}
        />
      </Section>
    </>
  );
}
