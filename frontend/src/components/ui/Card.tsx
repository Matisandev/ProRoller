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
        'rounded-card border border-line bg-navy/60 p-8 backdrop-blur-sm transition-all duration-500 ease-out',
        interactive && 'hover:-translate-y-1 hover:border-brand/40 hover:bg-navy-soft/70',
        className,
      )}
    >
      {children}
    </div>
  );
}
