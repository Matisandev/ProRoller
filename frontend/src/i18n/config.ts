export const locales = ['es', 'en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/** Nombre de cada idioma en su propio idioma, para el selector. */
export const localeNames: Readonly<Record<Locale, string>> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

/** Etiqueta corta para el selector en pantallas angostas. */
export const localeShortNames: Readonly<Record<Locale, string>> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
};

export const localeCookieName = 'proroller_locale';

export const isLocale = (value: string | undefined): value is Locale =>
  value !== undefined && (locales as readonly string[]).includes(value);
