import Link from 'next/link';
import { InfoCard } from '@/components/cards/InfoCard';
import { HelmetNotice } from '@/components/sections/HelmetNotice';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: getMessages().whereToBuy.pageTitle,
  description: getMessages().whereToBuy.pageDescription,
  path: routes.whereToBuy,
});

export default async function WhereToBuyPage() {
  const { whereToBuy: messages, nav } = await getRequestMessages();

  const blocks = [
    { href: routes.models, ...messages.models },
    { href: routes.safety, ...messages.safety },
    { href: routes.brands, ...messages.brands },
    { href: routes.stores, ...messages.stores },
  ];

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.whereToBuy }]}
      />

      <Section>
        <HelmetNotice />
      </Section>

      <Section>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {blocks.map((block) => (
            <li key={block.href}>
              <Link href={block.href} className="block h-full">
                <InfoCard title={block.title} description={block.description} />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
