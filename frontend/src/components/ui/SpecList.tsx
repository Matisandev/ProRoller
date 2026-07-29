import type { SpecItem } from '@/types';

interface SpecListProps {
  items: readonly SpecItem[];
}

export function SpecList({ items }: SpecListProps) {
  return (
    <dl className="divide-y divide-line/60 rounded-card border border-line bg-navy/60">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
          <dt className="text-sm text-ink-faint sm:w-56 sm:shrink-0">{item.label}</dt>
          <dd className="text-sm text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
