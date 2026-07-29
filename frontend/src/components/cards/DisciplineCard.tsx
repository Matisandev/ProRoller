import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import type { Discipline } from '@/types';

interface DisciplineCardProps {
  discipline: Discipline;
}

export function DisciplineCard({ discipline }: DisciplineCardProps) {
  const { levels } = getMessages();

  return (
    <Link href={routes.discipline(discipline.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <Badge variant="neutral" className="self-start">
          {levels[discipline.recommendedLevel]}
        </Badge>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{discipline.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{discipline.description}</p>
      </Card>
    </Link>
  );
}
