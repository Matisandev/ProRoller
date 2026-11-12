'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeToggleProps {
  toLightLabel: string;
  toDarkLabel: string;
}

/** Botón claro/oscuro con el mismo comportamiento que el portafolio y Kastigo. */
export function ThemeToggle({ toLightLabel, toDarkLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* almacenamiento no disponible */
    }
    setTheme(next);
  };

  const label = theme === 'light' ? toDarkLabel : toLightLabel;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === 'light'}
      aria-label={label}
      title={label}
      className="flex size-9 items-center justify-center rounded-xl border border-line bg-carbon text-ink-muted transition-colors duration-300 hover:border-brand/50 hover:text-brand"
    >
      {theme === 'light' ? (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
