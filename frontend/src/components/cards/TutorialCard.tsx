import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import type { Tutorial } from '@/types';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export async function TutorialCard({ tutorial }: TutorialCardProps) {
  const { levels } = await getRequestMessages();

  return (
    <Link href={routes.tutorial(tutorial.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <Badge className="self-start">{levels[tutorial.level]}</Badge>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{tutorial.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{tutorial.summary}</p>
      </Card>
    </Link>
  );
}
