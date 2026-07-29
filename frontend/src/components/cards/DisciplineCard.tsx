import { InfoCard } from '@/components/cards/InfoCard';
import type { Discipline } from '@/types';

interface DisciplineCardProps {
  discipline: Discipline;
}

export function DisciplineCard({ discipline }: DisciplineCardProps) {
  return <InfoCard title={discipline.name} description={discipline.description} className="p-6" />;
}
