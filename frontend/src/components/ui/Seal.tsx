import { CheckIcon } from '@/components/ui/icons';

interface SealProps {
  label: string;
}

/** Sello editorial de ProRoller. No implica relación comercial ni venta. */
export function Seal({ label }: SealProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-medium tracking-[0.08em] text-brand uppercase">
      <CheckIcon />
      {label}
    </span>
  );
}
