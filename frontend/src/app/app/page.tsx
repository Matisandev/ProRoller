import { PlanCard } from '@/components/cards/PlanCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CardGrid } from '@/components/ui/CardGrid';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { routes } from '@/config/navigation';
import { interpolate } from '@/i18n';
import { getMessages } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import { getAppPlans } from '@/services';

export const metadata = buildPageMetadata({
  title: getMessages().app.pageTitle,
  description: getMessages().app.pageDescription,
  path: routes.app,
});

export default async function AppPage() {
  const [plans, { app: messages, nav, common }] = await Promise.all([
    getAppPlans(),
    getRequestMessages(),
  ]);

  const steps = [
    { ...messages.step1, href: routes.safety },
    { ...messages.step2, href: routes.whereToBuy },
  ];

  return (
    <>
      <PageHeader
        eyebrow={messages.eyebrow}
        title={messages.pageTitle}
        description={messages.subtitle}
        breadcrumbs={[{ label: nav.home, href: routes.home }, { label: nav.app }]}
      />

      <Section title={messages.flowTitle}>
        <ol className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.question}>
              <Card className="flex h-full flex-col p-6">
                <Badge variant="neutral">{interpolate(messages.step, { number: index + 1 })}</Badge>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.answer}</p>
                <Button href={step.href} variant="secondary" className="mt-6 self-start">
                  {step.cta}
                </Button>
              </Card>
            </li>
          ))}
          <li>
            <Card className="flex h-full flex-col border-brand/30 bg-brand-soft/20 p-6">
              <Badge>{interpolate(messages.step, { number: 3 })}</Badge>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {messages.step3.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{messages.step3.answer}</p>
            </Card>
          </li>
        </ol>
      </Section>

      <Section title={messages.plansTitle} description={messages.plansDescription}>
        <CardGrid
          items={plans}
          columns={3}
          getKey={(plan) => plan.id}
          renderItem={(plan) => <PlanCard plan={plan} />}
          emptyMessage={common.comingSoon}
        />
      </Section>

      <Section title={messages.downloadTitle} description={messages.notice}>
        <ul className="flex flex-wrap gap-4">
          <li>
            <span className="inline-flex items-center gap-3 rounded-full border border-line bg-carbon px-6 py-3 text-sm text-ink-muted">
              {messages.googlePlay}
              <Badge variant="neutral">{common.comingSoon}</Badge>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center gap-3 rounded-full border border-line bg-carbon px-6 py-3 text-sm text-ink-muted">
              {messages.appStore}
              <Badge variant="neutral">{common.comingSoon}</Badge>
            </span>
          </li>
        </ul>
      </Section>
    </>
  );
}
