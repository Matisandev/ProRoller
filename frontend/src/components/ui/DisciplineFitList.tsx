import { cn } from '@/lib/cn';
import { interpolate } from '@/i18n';
import type { Messages } from '@/i18n';
import type { Discipline, DisciplineFit, DisciplineFitLevel } from '@/types';

interface DisciplineFitListProps {
  fit: readonly DisciplineFit[];
  disciplines: readonly Discipline[];
  messages: Messages['models'];
}

const barClasses: Record<DisciplineFitLevel, string> = {
  ideal: 'w-full bg-brand',
  apto: 'w-2/3 bg-brand/60',
  limitado: 'w-1/4 bg-line',
};

/** Uso recomendado por disciplina. Es un criterio editorial, nunca un puntaje. */
export function DisciplineFitList({ fit, disciplines, messages }: DisciplineFitListProps) {
  const named = fit
    .map((entry) => ({
      entry,
      discipline: disciplines.find((discipline) => discipline.id === entry.disciplineId),
    }))
    .filter((item) => item.discipline !== undefined);

  return (
    <div className="max-w-3xl">
      <ul className="space-y-4">
        {named.map(({ entry, discipline }) => (
          <li key={entry.disciplineId} className="flex items-center gap-4 text-sm">
            <span className="w-28 shrink-0 text-ink">{discipline?.name}</span>
            <span
              aria-hidden="true"
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/50"
            >
              <span className={cn('block h-full rounded-full', barClasses[entry.level])} />
            </span>
            <span className="w-24 shrink-0 text-right text-xs tracking-[0.12em] text-ink-muted uppercase">
              <span className="sr-only">
                {interpolate(messages.fitAriaLabel, {
                  discipline: discipline?.name ?? '',
                  level: messages.fitLevels[entry.level],
                })}
              </span>
              <span aria-hidden="true">{messages.fitLevels[entry.level]}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-ink-faint">{messages.fitLegend}</p>
    </div>
  );
}
