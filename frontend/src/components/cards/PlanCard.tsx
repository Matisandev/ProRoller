import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { Card } from '@/components/ui/Card';
import { getRequestMessages } from '@/i18n/server';
import type { AppPlan } from '@/types';

interface PlanCardProps {
  plan: AppPlan;
}

export async function PlanCard({ plan }: PlanCardProps) {
  const { app: messages } = await getRequestMessages();

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
        <Badge variant={plan.availability === 'disponible' ? 'brand' : 'neutral'}>
          {messages.availability[plan.availability]}
        </Badge>
      </div>
      <p className="mt-3 text-sm font-mono font-semibold tracking-[0.08em] text-brand uppercase">{plan.promise}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{plan.description}</p>

      {plan.features.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">{messages.includes}</p>
          <div className="mt-4">
            <BulletList items={plan.features} />
          </div>
        </div>
      )}

      {plan.futureFeatures.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">
            {messages.futureBenefits}
          </p>
          <div className="mt-4">
            <BulletList items={plan.futureFeatures} />
          </div>
        </div>
      )}
    </Card>
  );
}
