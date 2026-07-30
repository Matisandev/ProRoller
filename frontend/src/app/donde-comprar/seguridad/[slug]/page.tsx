import { notFound } from 'next/navigation';
import { StoreLookup } from '@/components/sections/StoreLookup';
import { BulletList } from '@/components/ui/BulletList';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { VideoList } from '@/components/ui/VideoList';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getProtectiveGear, getProtectiveGearItem, getVideosByIds } from '@/services';

interface GearPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const gear = await getProtectiveGear();
  return gear.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: GearPageProps) {
  const { slug } = await params;
  const gear = await getProtectiveGearItem(slug);
  if (gear === null) return {};

  return buildPageMetadata({
    title: gear.name,
    description: gear.summary,
    path: routes.safetyGear(gear.id),
  });
}

export default async function GearPage({ params }: GearPageProps) {
  const { slug } = await params;
  const gear = await getProtectiveGearItem(slug);
  if (gear === null) notFound();

  const { safety: messages, nav, videos: videoMessages } = await getRequestMessages();
  const videos = await getVideosByIds(gear.videoIds);

  return (
    <>
      <PageHeader
        eyebrow={nav.safety}
        title={gear.name}
        description={gear.summary}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.safety, href: routes.safety },
          { label: gear.name },
        ]}
      />

      <Section title={messages.specs}>
        <div className="max-w-3xl space-y-6">
          {gear.images.length === 0 && <ImagePlaceholder label={messages.imagesPending} />}
          <SpecList items={gear.specs} />
        </div>
      </Section>

      <Section title={messages.materials}>
        <div className="max-w-3xl">
          <BulletList items={gear.materials} />
        </div>
      </Section>

      <Section title={messages.certifications}>
        <div className="max-w-3xl">
          <BulletList items={gear.certifications} />
        </div>
      </Section>

      <Section title={messages.editorialOpinion}>
        <div className="max-w-3xl space-y-4">
          {gear.editorialOpinion.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.considerations}>
        <div className="max-w-3xl">
          <BulletList items={gear.considerations} />
        </div>
      </Section>

      {videos.length > 0 && (
        <Section title={messages.relatedVideos}>
          <VideoList videos={videos} notice={videoMessages.embedNotice} />
        </Section>
      )}

      <StoreLookup title={messages.whereToBuy} />
    </>
  );
}
