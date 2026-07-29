import Link from 'next/link';
import { SkateIcon } from '@/components/ui/icons';

interface LogoProps {
  href: string;
}

export function Logo({ href }: LogoProps) {
  return (
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
}
