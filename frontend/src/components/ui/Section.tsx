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
    <section id={id} className={cn('px-4 py-12 sm:py-14', className)}>
      <div className="mx-auto max-w-[70rem]">
        {(eyebrow ?? title ?? description) !== undefined && (
          <Reveal className="mb-6 max-w-2xl">
            {eyebrow !== undefined && (
              <p className="mb-1 font-mono text-xs font-semibold tracking-[0.08em] text-brand uppercase">
                {eyebrow}
              </p>
            )}
            {title !== undefined && (
              <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-[2rem]">
                {title}
              </h2>
            )}
            {description !== undefined && (
              <p className="mt-2 text-base leading-relaxed text-ink-muted">{description}</p>
            )}
          </Reveal>
        )}
        {children}
        {action !== undefined && <div className="mt-8">{action}</div>}
      </div>
    </section>
  );
}
