import Image from 'next/image';
import { BulletList } from '@/components/ui/BulletList';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { interpolate } from '@/i18n';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getAbout } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().about.pageTitle,
  description: getMessages().about.pageDescription,
  path: routes.about,
});

const PHOTO_SIZE = 160;

export default async function AboutPage() {
  const [about, { about: messages, nav, common }] = await Promise.all([
    getAbout(),
    getRequestMessages(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.pageDescription}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.about }]}
      />

      <Section title={about.origin.heading}>
        <div className="max-w-3xl space-y-4">
          {about.origin.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.authorTitle}>
        <Card className="max-w-3xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="shrink-0">
              {about.author.photo === undefined ? (
                <div className="flex size-40 items-center justify-center rounded-card border border-dashed border-line bg-carbon px-4 text-center text-xs text-ink-faint">
                  {messages.photoPending}
                </div>
              ) : (
                <Image
                  src={about.author.photo.url}
                  alt={about.author.photo.alt}
                  width={PHOTO_SIZE}
                  height={PHOTO_SIZE}
                  className="size-40 rounded-card border border-line object-cover"
                />
              )}
              {about.author.photo?.credit !== undefined && (
                <p className="mt-3 text-xs text-ink-faint">
                  {interpolate(messages.photoCredit, { credit: about.author.photo.credit })}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{about.author.name}</h3>
              <p className="mt-1 text-sm text-ink-faint">
                {about.author.role} · {about.author.city}
              </p>
              <div className="mt-4 space-y-4">
                {about.author.bio.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button
                href={about.author.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                className="mt-6"
              >
                {messages.website}
              </Button>
            </div>
          </div>
        </Card>
      </Section>

      <Section title={messages.philosophyTitle}>
        <div className="max-w-3xl">
          <BulletList items={about.philosophy} />
        </div>
      </Section>

      <Section title={messages.transparencyTitle}>
        <div className="max-w-3xl">
          <BulletList items={about.transparency} />
        </div>
      </Section>

      <Section title={about.future.heading}>
        <div className="max-w-3xl space-y-4">
          {about.future.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <blockquote className="mt-12 max-w-3xl border-l-2 border-brand pl-6 text-xl leading-relaxed text-ink italic">
          {about.closingQuote}
        </blockquote>
        <p className="mt-8 text-xs text-ink-faint">{common.demoContentNotice}</p>
      </Section>
    </>
  );
}
