import Link from 'next/link';
import { SkateIcon } from '@/components/ui/icons';

/** Sitio principal del autor: el encabezado muestra "Matisandev / ProRoller", igual que Kastigo. */
const OWNER_URL = 'https://www.matisandev.cl/';

interface LogoProps {
  href: string;
  /** Muestra "Matisandev /" antes del nombre del proyecto. */
  withOwner?: boolean;
}

export function Logo({ href, withOwner = false }: LogoProps) {
  const project = (
    <Link
      href={href}
      className="group flex items-center gap-2 text-lg font-semibold tracking-tight"
    >
      <span className="flex size-8 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
        <SkateIcon />
      </span>
      <span>
        Pro<span className="text-brand">Roller</span>
      </span>
    </Link>
  );

  if (!withOwner) return project;

  return (
    <div className="flex items-center gap-2">
      <a
        href={OWNER_URL}
        className="hidden text-sm font-medium text-ink-muted transition-colors duration-300 hover:text-brand sm:inline"
      >
        Matisandev
      </a>
      <span aria-hidden className="hidden text-ink-faint sm:inline">
        /
      </span>
      {project}
    </div>
  );
}
