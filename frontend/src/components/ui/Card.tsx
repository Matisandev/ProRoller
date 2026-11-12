import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-line bg-[var(--surface-card)] p-6 transition-colors duration-200 ease-out',
        interactive && 'hover:border-brand/40',
        className,
      )}
    >
      {children}
    </div>
  );
}
