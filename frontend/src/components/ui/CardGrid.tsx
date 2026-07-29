import type { ReactNode } from 'react';
import { EmptyState } from '@/components/ui/EmptyState';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

type GridColumns = 2 | 3 | 4;

interface CardGridProps<TItem> {
  items: readonly TItem[];
  getKey: (item: TItem) => string;
  renderItem: (item: TItem) => ReactNode;
  emptyMessage: string;
  columns?: GridColumns;
  className?: string;
}

const columnClasses: Record<GridColumns, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const REVEAL_STEP_MS = 80;

export function CardGrid<TItem>({
  items,
  getKey,
  renderItem,
  emptyMessage,
  columns = 3,
  className,
}: CardGridProps<TItem>) {
  if (items.length === 0) return <EmptyState title={emptyMessage} />;

  return (
    <ul className={cn('grid grid-cols-1 gap-6', columnClasses[columns], className)}>
      {items.map((item, index) => (
        <li key={getKey(item)}>
          <Reveal delayMs={index * REVEAL_STEP_MS} className="h-full">
            {renderItem(item)}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
