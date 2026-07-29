import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-dashed border-line bg-navy/40 px-8 py-16 text-center',
        className,
      )}
    >
      <p className="text-lg font-medium">{title}</p>
      {description !== undefined && <p className="mt-2 text-sm text-ink-muted">{description}</p>}
      {action !== undefined && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}
