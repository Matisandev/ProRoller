import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

export async function IntroSection() {
  const { intro } = await getRequestMessages();

  return (
    <Section id={sectionIds.intro} eyebrow={intro.eyebrow} title={intro.title}>
      <div className="max-w-3xl space-y-4">
        {intro.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-10">
        <Button href={routes.about} variant="secondary">
          {intro.cta}
        </Button>
      </div>
    </Section>
  );
}
