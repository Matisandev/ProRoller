const MAX_RATING = 5;

interface RatingProps {
  value: number;
  ariaLabel: string;
}

export function Rating({ value, ariaLabel }: RatingProps) {
  const rounded = Math.min(Math.max(Math.round(value), 0), MAX_RATING);

  return (
    <p aria-label={ariaLabel} className="text-sm tracking-[0.3em] text-brand">
      <span aria-hidden>{'★'.repeat(rounded)}</span>
      <span aria-hidden className="text-ink-faint">
        {'★'.repeat(MAX_RATING - rounded)}
      </span>
    </p>
  );
}

export { MAX_RATING };
