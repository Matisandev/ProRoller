import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { interpolate } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import type { SkateRoute } from '@/types';

interface RouteCardProps {
  route: SkateRoute;
}

export async function RouteCard({ route }: RouteCardProps) {
  const { skateRoutes: messages, levels, common } = await getRequestMessages();

  return (
    <Link href={routes.skateRoute(route.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">
            {interpolate(messages.distanceValue, { value: route.distanceKm })}
          </Badge>
          <Badge>{levels[route.level]}</Badge>
          {route.status === 'borrador' && <Badge variant="neutral">{common.draftBadge}</Badge>}
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{route.name}</h3>
        <p className="mt-3 text-sm text-ink-muted">
          {route.city} · {route.estimatedTime}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{route.surface}</p>
      </Card>
    </Link>
  );
}
