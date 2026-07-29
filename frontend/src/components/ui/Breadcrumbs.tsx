import Link from 'next/link';
import { getMessages } from '@/i18n';

export interface Crumb {
  readonly label: string;
  readonly href?: string;
}

interface BreadcrumbsProps {
  items: readonly Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { common } = getMessages();

  return (
    <nav aria-label={common.breadcrumbAriaLabel}>
      <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href === undefined ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition-colors duration-300 hover:text-brand">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
