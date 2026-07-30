import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

export async function AppSection() {
  const { app } = await getRequestMessages();

  return (
    <Section id={sectionIds.app} eyebrow={app.eyebrow} title={app.title}>
      <Card className="border-brand/30 bg-brand-soft/20">
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{app.subtitle}</p>
        <div className="mt-8">
          <Button href={routes.app}>{app.eyebrow}</Button>
        </div>
        <p className="mt-6 text-xs text-ink-faint">{app.notice}</p>
      </Card>
    </Section>
  );
}
