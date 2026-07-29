'use client';

import Link from 'next/link';
import { useState } from 'react';
import { primaryNav, routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { SearchBar } from '@/components/ui/SearchBar';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { common, nav } = getMessages();

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-night/80 backdrop-blur-xl">
      <nav
        aria-label={nav.primaryAriaLabel}
        className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6"
      >
        <Logo href={routes.home} />

        <ul className="hidden items-center gap-6 text-sm text-ink-muted lg:flex">
          {primaryNav.map((item) => (
            <li key={item.key}>
              <Link href={item.href} className="transition-colors duration-300 hover:text-brand">
                {nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <SearchBar
            label={common.searchAriaLabel}
            placeholder={common.search}
            className="w-40 xl:w-52"
          />
          <Button size="sm">{common.signIn}</Button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? common.closeMenu : common.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto flex size-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors duration-300 hover:text-brand md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div id="menu-movil" className="border-t border-line/60 px-6 py-6 md:hidden">
          <SearchBar label={common.searchAriaLabel} placeholder={common.search} className="mb-6" />
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
          <Button className="mt-6 w-full">{common.signIn}</Button>
        </div>
      )}
    </header>
  );
}
