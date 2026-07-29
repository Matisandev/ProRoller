import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Seal } from '@/components/ui/Seal';
import { getMessages } from '@/i18n';
import type { Distributor } from '@/types';

interface DistributorCardProps {
  distributor: Distributor;
}

export function DistributorCard({ distributor }: DistributorCardProps) {
  const { distributors: messages } = getMessages();

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex h-20 items-center justify-center rounded-xl border border-line bg-carbon text-lg font-semibold tracking-tight">
        {distributor.name}
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight">{distributor.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{distributor.description}</p>
      <div className="mt-6">
        <Seal label={messages.seal} />
      </div>
      <Button
        href={distributor.website}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="mt-6 self-start"
      >
        {messages.visitSite}
      </Button>
    </Card>
  );
}
