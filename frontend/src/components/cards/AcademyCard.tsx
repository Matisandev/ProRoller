import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getRequestMessages } from '@/i18n/server';
import type { Academy } from '@/types';

interface AcademyCardProps {
  academy: Academy;
}

export async function AcademyCard({ academy }: AcademyCardProps) {
  const { academies: messages, common } = await getRequestMessages();

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex flex-wrap gap-2">
        <Badge>{messages.kinds[academy.kind]}</Badge>
        <Badge variant="neutral">{academy.city}</Badge>
        {academy.status === 'borrador' && <Badge variant="neutral">{common.draftBadge}</Badge>}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{academy.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{academy.description}</p>

      {academy.socialLinks.length > 0 && (
        <p className="mt-6 text-xs text-ink-faint">
          {messages.social}: {academy.socialLinks.map((link) => link.network).join(' · ')}
        </p>
      )}

      {academy.website !== undefined && (
        <Button
          href={academy.website}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-6 self-start"
        >
          {common.viewSite}
        </Button>
      )}
    </Card>
  );
}
