import { cn } from '@/lib/cn';

interface SkeletonLoaderProps {
  label: string;
  className?: string;
  lines?: number;
}

export function SkeletonLoader({ label, className, lines = 3 }: SkeletonLoaderProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      className={cn('rounded-card border border-line bg-navy/50 p-6', className)}
    >
      <span className="sr-only">{label}</span>
      <div className="animate-pulse space-y-3">
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={cn('h-3 rounded-full bg-line', index === 0 ? 'w-1/3' : 'w-full')}
          />
        ))}
      </div>
    </div>
  );
}
