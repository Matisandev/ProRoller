import { footerNav, sectionIds } from '@/config/navigation';
import { getMessages, interpolate } from '@/i18n';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const { footer, nav } = getMessages();

  return (
    <footer className="border-t border-line/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Logo href={`#${sectionIds.home}`} />
          <p className="text-sm text-ink-faint">{footer.tagline}</p>
        </div>

        <nav aria-label={nav.footerAriaLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-muted">
            {footerNav.map((item) => (
              <li key={item.key}>
                <a href={item.href} className="transition-colors duration-300 hover:text-brand">
                  {nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-ink-faint">
        {interpolate(footer.rights, { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
