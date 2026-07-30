import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { Button } from '@/components/ui/Button';
import { DevelopmentNotice } from '@/components/ui/DevelopmentNotice';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { routes } from '@/config/navigation';
import { interpolate } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getSkateRoute, getSkateRoutes } from '@/services';

interface SkateRoutePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const skateRoutes = await getSkateRoutes();
  return skateRoutes.map((route) => ({ slug: route.id }));
}

export async function generateMetadata({ params }: SkateRoutePageProps) {
  const { slug } = await params;
  const route = await getSkateRoute(slug);
  if (route === null) return {};

  return buildPageMetadata({
    title: route.name,
    description: route.surface,
    path: routes.skateRoute(route.id),
  });
}

export default async function SkateRoutePage({ params }: SkateRoutePageProps) {
  const { slug } = await params;
  const route = await getSkateRoute(slug);
  if (route === null) notFound();

  const { skateRoutes: messages, nav, common, levels } = await getRequestMessages();
  const distance = interpolate(messages.distanceValue, { value: route.distanceKm });

  return (
    <>
      <PageHeader
        eyebrow={nav.routes}
        title={route.name}
        description={`${route.city} · ${distance} · ${route.estimatedTime}`}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.routes, href: routes.skateRoutes },
          { label: route.name },
        ]}
        meta={
          <>
            <Badge variant="neutral">{distance}</Badge>
            <Badge>{levels[route.level]}</Badge>
            {route.status === 'borrador' && <Badge variant="neutral">{common.draftBadge}</Badge>}
          </>
        }
      />

      <Section>
        <DevelopmentNotice label={common.inDevelopment} description={common.inDevelopmentNotice} />
      </Section>

      <Section>
        <div className="max-w-3xl space-y-6">
          {route.images.length === 0 && <ImagePlaceholder label={common.imagePending} />}
          <SpecList
            items={[
              { label: messages.city, value: route.city },
              { label: messages.distance, value: distance },
              { label: messages.estimatedTime, value: route.estimatedTime },
              { label: messages.level, value: levels[route.level] },
              { label: messages.surface, value: route.surface },
            ]}
          />
        </div>
      </Section>

      <Section title={messages.map}>
        {route.mapReferenceUrl === undefined ? (
          <div className="max-w-3xl">
            <ImagePlaceholder label={messages.mapPending} />
          </div>
        ) : (
          <Button
            href={route.mapReferenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            {messages.viewMap}
          </Button>
        )}
      </Section>

      <Section title={messages.requirements}>
        <div className="max-w-3xl">
          <BulletList items={route.requirements} />
        </div>
      </Section>

      <Section title={messages.safetyTips}>
        <div className="max-w-3xl">
          <BulletList items={route.safetyTips} />
        </div>
      </Section>
    </>
  );
}
