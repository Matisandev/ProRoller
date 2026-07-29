import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getMessages, interpolate } from '@/i18n';
import type { Brand } from '@/types';

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const { brands: messages } = getMessages();

  return (
    <Link href={routes.brand(brand.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <Badge variant="neutral" className="self-start">
          {brand.country}
        </Badge>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{brand.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{brand.description}</p>
        <p className="mt-6 text-xs text-ink-faint">
          {interpolate(messages.founded, { year: brand.foundedYear })}
        </p>
      </Card>
    </Link>
  );
}
