import Link from 'next/link';
import { InfoCard } from '@/components/cards/InfoCard';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

export async function OfferSection() {
  const { offer } = await getRequestMessages();

  const items = [
    { href: routes.disciplines, ...offer.disciplines },
    { href: routes.tutorials, ...offer.tutorials },
    { href: routes.whereToBuy, ...offer.whereToBuy },
    { href: routes.safety, ...offer.safety },
    { href: routes.whereToSkate, ...offer.whereToSkate },
    { href: routes.news, ...offer.news },
  ];

  return (
    <Section id={sectionIds.offer} eyebrow={offer.eyebrow} title={offer.title}>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block h-full">
              <InfoCard title={item.title} description={item.description} />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
