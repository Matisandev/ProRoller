import { StoreCard } from '@/components/cards/StoreCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRecommendedStores } from '@/services';

export async function StoresSection() {
  const { stores: messages } = getMessages();
  const stores = await getRecommendedStores();

  return (
    <Section id={sectionIds.stores} eyebrow={messages.eyebrow} title={messages.title}>
      <CardGrid
        items={stores}
        getKey={(store) => store.id}
        renderItem={(store) => <StoreCard store={store} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
