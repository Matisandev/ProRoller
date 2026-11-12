import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: readonly Crumb[];
  meta?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, breadcrumbs, meta }: PageHeaderProps) {
  return (
    <header className="px-4 pt-10 pb-6">
      <div className="mx-auto max-w-[70rem]">
        {breadcrumbs !== undefined && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow !== undefined && (
          <p className="mt-6 font-mono text-xs font-semibold tracking-[0.08em] text-brand uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2.5 max-w-3xl text-[2.125rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description !== undefined && (
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-muted">{description}</p>
        )}
        {meta !== undefined && <div className="mt-4 flex flex-wrap items-center gap-2">{meta}</div>}
      </div>
    </header>
  );
}
