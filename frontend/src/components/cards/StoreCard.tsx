import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Seal } from '@/components/ui/Seal';
import { getRequestMessages } from '@/i18n/server';
import type { Brand, Store } from '@/types';

interface StoreCardProps {
  store: Store;
  brands?: readonly Brand[];
}

export async function StoreCard({ store, brands }: StoreCardProps) {
  const { stores: messages } = await getRequestMessages();
  const available = brands?.filter((brand) => store.brandIds.includes(brand.id)) ?? [];

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex h-20 items-center justify-center rounded-xl border border-dashed border-line bg-carbon text-lg font-semibold tracking-tight">
        {store.name}
      </div>
      <p className="mt-2 text-center text-xs text-ink-faint">{messages.logoPending}</p>
      <h3 className="mt-6 text-lg font-semibold tracking-tight">{store.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{store.description}</p>

      {available.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">
            {messages.availableBrands}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            {available.map((brand) => brand.name).join(' · ')}
          </p>
        </div>
      )}

      <div className="mt-6">
        <Seal label={messages.seal} />
      </div>
      <Button
        href={store.website}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="mt-6 self-start"
      >
        {messages.visitSite}
      </Button>
    </Card>
  );
}
