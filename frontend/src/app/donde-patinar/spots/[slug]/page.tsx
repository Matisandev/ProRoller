import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getDisciplines, getSpot, getSpots } from '@/services';

interface SpotPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const spots = await getSpots();
  return spots.map((spot) => ({ slug: spot.id }));
}

export async function generateMetadata({ params }: SpotPageProps) {
  const { slug } = await params;
  const spot = await getSpot(slug);
  if (spot === null) return {};

  return buildPageMetadata({
    title: spot.name,
    description: spot.description,
    path: routes.spot(spot.id),
  });
}

export default async function SpotPage({ params }: SpotPageProps) {
  const { slug } = await params;
  const spot = await getSpot(slug);
  if (spot === null) notFound();

  const { spots: messages, nav, common, levels } = await getRequestMessages();
  const disciplines = await getDisciplines();
  const disciplineNames = disciplines
    .filter((discipline) => spot.disciplineIds.includes(discipline.id))
    .map((discipline) => discipline.name);

  return (
    <>
      <PageHeader
        eyebrow={nav.spots}
        title={spot.name}
        description={spot.description}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.spots, href: routes.spots },
          { label: spot.name },
        ]}
        meta={
          <>
            <Badge variant="neutral">{spot.city}</Badge>
            <Badge>{levels[spot.recommendedLevel]}</Badge>
            {spot.status === 'borrador' && <Badge variant="neutral">{common.draftBadge}</Badge>}
          </>
        }
      />

      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>

      <Section>
        <div className="max-w-3xl space-y-6">
          {spot.images.length === 0 && <ImagePlaceholder label={common.imagePending} />}
          <SpecList
            items={[
              { label: messages.city, value: spot.city },
              { label: messages.recommendedLevel, value: levels[spot.recommendedLevel] },
              { label: messages.surface, value: spot.surface },
              { label: messages.disciplines, value: disciplineNames.join(' · ') },
            ]}
          />
        </div>
      </Section>

      <Section title={messages.technicalRequirements}>
        <div className="max-w-3xl">
          <BulletList items={spot.technicalRequirements} />
        </div>
      </Section>

      <Section title={messages.safetyTips}>
        <div className="max-w-3xl">
          <BulletList items={spot.safetyTips} />
        </div>
      </Section>
    </>
  );
}
