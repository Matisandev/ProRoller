import Link from 'next/link';
import { footerNav, routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { Logo } from '@/components/ui/Logo';

export async function Footer() {
  const { footer, nav } = await getRequestMessages();

  return (
    <footer className="border-t border-line/60 px-4 py-12">
      <div className="mx-auto flex max-w-[70rem] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Logo href={routes.home} />
          <p className="text-sm text-ink-muted">{footer.tagline}</p>
        </div>

        <nav aria-label={nav.footerAriaLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-muted">
            {footerNav.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="transition-colors duration-300 hover:text-brand">
                  {nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-[70rem] flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:justify-between">
        <p>{footer.copyright}</p>
        <p>{footer.developedBy}</p>
      </div>
    </footer>
  );
}
