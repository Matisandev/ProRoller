import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import type { ProtectiveGear } from '@/types';

interface GearCardProps {
  gear: ProtectiveGear;
}

export function GearCard({ gear }: GearCardProps) {
  return (
    <Link href={routes.safetyGear(gear.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{gear.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{gear.summary}</p>
      </Card>
    </Link>
  );
}
