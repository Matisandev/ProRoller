import Link from 'next/link';
import { InfoCard } from '@/components/cards/InfoCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';

/** Los accesos sin ruta propia todavía se muestran como tarjeta informativa. */
const itemRoutes: Readonly<Record<string, string>> = {
  marcas: routes.brands,
  modelos: routes.models,
  guias: routes.articles,
};

export function LearnBeforeBuyingSection() {
  const { learnBeforeBuying } = getMessages();

  return (
    <Section
      id={sectionIds.skates}
      eyebrow={learnBeforeBuying.eyebrow}
      title={learnBeforeBuying.title}
    >
      <CardGrid
        items={learnBeforeBuying.items}
        columns={4}
        getKey={(item) => item.id}
        renderItem={(item) => {
          const card = (
            <InfoCard title={item.title} description={item.description} className="p-6" />
          );
          const href = itemRoutes[item.id];

          return (
            <div id={item.id} className="h-full scroll-mt-24">
              {href === undefined ? (
                card
              ) : (
                <Link href={href} className="block h-full">
                  {card}
                </Link>
              )}
            </div>
          );
        }}
        emptyMessage={learnBeforeBuying.title}
      />
    </Section>
  );
}
