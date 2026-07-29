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
    <header className="border-b border-line/60 px-6 pt-16 pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        {breadcrumbs !== undefined && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow !== undefined && (
          <p className="mt-6 text-xs font-medium tracking-[0.2em] text-brand uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description !== undefined && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p>
        )}
        {meta !== undefined && <div className="mt-8 flex flex-wrap items-center gap-3">{meta}</div>}
      </div>
    </header>
  );
}
