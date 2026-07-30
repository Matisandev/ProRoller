import { Badge } from '@/components/ui/Badge';

interface DevelopmentNoticeProps {
  label: string;
  description: string;
}

/** Aviso visible en las secciones cuya información real todavía se está levantando. */
export function DevelopmentNotice({ label, description }: DevelopmentNoticeProps) {
  return (
    <div className="rounded-card border border-dashed border-brand/40 bg-brand-soft/20 px-6 py-5">
      <Badge>{label}</Badge>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
