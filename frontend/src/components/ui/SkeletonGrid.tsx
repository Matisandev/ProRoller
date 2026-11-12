import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { cn } from '@/lib/cn';

interface SkeletonGridProps {
  label: string;
  count?: number;
  className?: string;
}

export function SkeletonGrid({ label, count = 3, className }: SkeletonGridProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-[70rem] grid-cols-1 gap-6 px-6 py-24 sm:grid-cols-3',
        className,
      )}
    >
      {Array.from({ length: count }, (_, index) => (
        <SkeletonLoader key={index} label={label} />
      ))}
    </div>
  );
}
