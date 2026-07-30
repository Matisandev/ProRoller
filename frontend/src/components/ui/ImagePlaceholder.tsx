import { cn } from '@/lib/cn';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

/** Marcador de imagen: ProRoller no publica material de terceros sin licencia aprobada. */
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex aspect-video items-center justify-center rounded-card border border-dashed border-line bg-carbon text-sm text-ink-faint',
        className,
      )}
    >
      {label}
    </div>
  );
}
