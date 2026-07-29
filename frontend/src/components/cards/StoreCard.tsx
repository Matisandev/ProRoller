import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MAX_RATING, Rating } from '@/components/ui/Rating';
import { getMessages, interpolate } from '@/i18n';
import type { Store } from '@/types';

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  const { common, stores } = getMessages();

  return (
    <Card interactive className="flex h-full flex-col p-6">
      <Rating
        value={store.rating}
        ariaLabel={interpolate(common.ratingAriaLabel, { value: store.rating, max: MAX_RATING })}
      />
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{store.name}</h3>
      <p className="mt-1 text-sm text-ink-faint">{store.country}</p>
      <Button
        href={store.website}
        variant="secondary"
        size="sm"
        target="_blank"
        rel="noreferrer"
        className="mt-6 self-start"
      >
        {stores.visitSite}
      </Button>
    </Card>
  );
}
