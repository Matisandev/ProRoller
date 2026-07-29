import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('px-6 py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow ?? title ?? description) !== undefined && (
          <Reveal className="mb-16 max-w-2xl">
            {eyebrow !== undefined && (
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-brand uppercase">
                {eyebrow}
              </p>
            )}
            {title !== undefined && (
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {description !== undefined && (
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
            )}
          </Reveal>
        )}
        {children}
        {action !== undefined && <div className="mt-12">{action}</div>}
      </div>
    </section>
  );
}
