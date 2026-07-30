import { defaultLocale, type Locale } from '@/i18n/config';
import { en } from '@/i18n/messages/en';
import { es } from '@/i18n/messages/es';
import { pt } from '@/i18n/messages/pt';
import type { Messages } from '@/i18n/types';

export type { Messages };

const dictionaries: Readonly<Record<Locale, Messages>> = { es, en, pt };

export const getMessages = (locale: Locale = defaultLocale): Messages => dictionaries[locale];

type InterpolationValues = Readonly<Record<string, string | number>>;

export const interpolate = (template: string, values: InterpolationValues): string =>
  Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  );
