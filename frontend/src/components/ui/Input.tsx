import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'className'> {
  label: string;
  hideLabel?: boolean;
  leadingIcon?: ReactNode;
  className?: string;
  inputClassName?: string;
}

export function Input({
  label,
  hideLabel = false,
  leadingIcon,
  className,
  inputClassName,
  ...inputProps
}: InputProps) {
  return (
    <label className={cn('relative flex flex-col gap-2', className)}>
      <span className={cn('text-sm text-ink-muted', hideLabel && 'sr-only')}>{label}</span>
      <span className="relative flex items-center">
        {leadingIcon !== undefined && (
          <span className="pointer-events-none absolute left-3 flex size-4 items-center text-ink-faint">
            {leadingIcon}
          </span>
        )}
        <input
          {...inputProps}
          className={cn(
            'h-10 w-full rounded-full border border-line bg-carbon/80 px-4 text-sm text-ink transition-colors duration-300 placeholder:text-ink-faint hover:border-brand/30 focus:border-brand/60 focus:outline-none',
            leadingIcon !== undefined && 'pl-9',
            inputClassName,
          )}
        />
      </span>
    </label>
  );
}
