import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import type { SkateModel } from '@/types';

interface ModelCardProps {
  model: SkateModel;
  brandName?: string;
}

export function ModelCard({ model, brandName }: ModelCardProps) {
  return (
    <Link href={routes.model(model.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        {brandName !== undefined && (
          <Badge variant="neutral" className="self-start">
            {brandName}
          </Badge>
        )}
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{model.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{model.description}</p>
      </Card>
    </Link>
  );
}
