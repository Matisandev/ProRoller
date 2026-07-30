'use client';

import { useRef } from 'react';
import { locales, localeNames, localeShortNames, type Locale } from '@/i18n/config';
import { setLocale } from '@/i18n/actions';

interface LanguageSelectorProps {
  locale: Locale;
  label: string;
  ariaLabel: string;
}

export function LanguageSelector({ locale, label, ariaLabel }: LanguageSelectorProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={setLocale} className="flex items-center gap-2">
      <label htmlFor="selector-idioma" className="sr-only">
        {label}
      </label>
      <select
        id="selector-idioma"
        name="locale"
        defaultValue={locale}
        aria-label={ariaLabel}
        onChange={() => formRef.current?.requestSubmit()}
        className="h-9 rounded-full border border-line bg-carbon px-3 text-xs tracking-[0.12em] text-ink-muted uppercase transition-colors duration-300 hover:border-brand/50 focus:border-brand focus:outline-none"
      >
        {locales.map((option) => (
          <option key={option} value={option} className="bg-carbon text-ink">
            {localeShortNames[option]} · {localeNames[option]}
          </option>
        ))}
      </select>
      <noscript>
        <button
          type="submit"
          className="h-9 rounded-full border border-line px-3 text-xs text-ink-muted uppercase"
        >
          {label}
        </button>
      </noscript>
    </form>
  );
}
