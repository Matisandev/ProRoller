import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import type { Discipline } from '@/types';

interface DisciplineCardProps {
  discipline: Discipline;
}

/** Las disciplinas son modalidades, no niveles: la tarjeta nunca muestra dificultad. */
export function DisciplineCard({ discipline }: DisciplineCardProps) {
  return (
    <Link href={routes.discipline(discipline.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{discipline.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{discipline.description}</p>
      </Card>
    </Link>
  );
}
