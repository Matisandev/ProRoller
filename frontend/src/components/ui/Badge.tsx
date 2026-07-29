import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BadgeVariant = 'brand' | 'neutral';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand: 'border-brand/40 bg-brand/10 text-brand',
  neutral: 'border-line bg-carbon text-ink-muted',
};

export function Badge({ children, variant = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.12em] uppercase',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
