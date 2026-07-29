import { defaultLocale, type Locale } from '@/i18n/config';
import { es } from '@/i18n/messages/es';

export type Messages = typeof es;

const dictionaries: Record<Locale, Messages> = { es };

export const getMessages = (locale: Locale = defaultLocale): Messages => dictionaries[locale];

type InterpolationValues = Readonly<Record<string, string | number>>;

export const interpolate = (template: string, values: InterpolationValues): string =>
  Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  );
