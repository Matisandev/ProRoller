import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/cn';

interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <Card interactive className={cn('h-full', className)}>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>
    </Card>
  );
}
