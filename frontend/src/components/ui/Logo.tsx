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
      className="group flex items-center gap-2.5 font-semibold"
    >
      <span className="flex size-[34px] items-center justify-center rounded-[10px] border border-brand/30 bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand/20">
        <SkateIcon />
      </span>
      <span className="font-bold tracking-tight">
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
