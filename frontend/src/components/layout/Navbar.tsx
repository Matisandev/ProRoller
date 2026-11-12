'use client';

import Link from 'next/link';
import { useState } from 'react';
import { primaryNav, routes } from '@/config/navigation';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import type { Locale } from '@/i18n/config';
import type { Messages } from '@/i18n';

interface NavbarProps {
  locale: Locale;
  nav: Messages['nav'];
  common: Messages['common'];
}

export function Navbar({ locale, nav, common }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--surface-header)] backdrop-blur-md">
      <nav
        aria-label={nav.primaryAriaLabel}
        className="mx-auto flex h-16 max-w-[70rem] items-center gap-5 px-4"
      >
        <Logo href={routes.home} withOwner />

        <ul className="hidden items-center gap-6 text-sm text-ink-muted lg:flex">
          {primaryNav.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="transition-colors duration-300 hover:text-brand">
                {nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <LanguageSelector
            locale={locale}
            label={common.language}
            ariaLabel={common.languageAriaLabel}
          />
          <ThemeToggle toLightLabel={common.themeToLight} toDarkLabel={common.themeToDark} />
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle toLightLabel={common.themeToLight} toDarkLabel={common.themeToDark} />
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? common.closeMenu : common.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-[38px] items-center justify-center rounded-xl border border-line bg-[var(--surface-card)] text-ink transition-colors duration-200 hover:border-brand/40 lg:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div id="menu-movil" className="border-t border-line px-4 py-5 lg:hidden">
          <ul className="space-y-4 text-sm text-ink-muted">
            {primaryNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-300 hover:text-brand"
                >
                  {nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <LanguageSelector
              locale={locale}
              label={common.language}
              ariaLabel={common.languageAriaLabel}
            />
          </div>
        </div>
      )}
    </header>
  );
}
