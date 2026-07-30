import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import type { Spot } from '@/types';

interface SpotCardProps {
  spot: Spot;
}

export async function SpotCard({ spot }: SpotCardProps) {
  const { levels, common } = await getRequestMessages();

  return (
    <Link href={routes.spot(spot.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">{spot.city}</Badge>
          <Badge>{levels[spot.recommendedLevel]}</Badge>
          {spot.status === 'borrador' && <Badge variant="neutral">{common.draftBadge}</Badge>}
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{spot.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{spot.description}</p>
      </Card>
    </Link>
  );
}
