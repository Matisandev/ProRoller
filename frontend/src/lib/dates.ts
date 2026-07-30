import { defaultLocale } from '@/i18n/config';

const formatter = new Intl.DateTimeFormat(defaultLocale, {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatDate = (isoDate: string): string => formatter.format(new Date(isoDate));

/** Rango de fechas de una competencia o evento. El fin solo existe si duró más de un día. */
export const formatDateRange = (startDate: string, endDate?: string): string =>
  endDate === undefined
    ? formatDate(startDate)
    : `${formatDate(startDate)} – ${formatDate(endDate)}`;
