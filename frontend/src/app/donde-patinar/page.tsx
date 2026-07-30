import Link from 'next/link';
import { InfoCard } from '@/components/cards/InfoCard';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: getMessages().whereToSkate.pageTitle,
  description: getMessages().whereToSkate.pageDescription,
  path: routes.whereToSkate,
});

export default async function WhereToSkatePage() {
  const { whereToSkate: messages, nav, common } = await getRequestMessages();

  const blocks = [
    { href: routes.spots, ...messages.spots },
    { href: routes.skateRoutes, ...messages.routes },
    { href: routes.academies, ...messages.academies },
  ];

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.whereToSkate }]}
      />

      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>

      <Section>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
