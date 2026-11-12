import { Card } from '@/components/ui/Card';
import { ArrowRightIcon } from '@/components/ui/icons';
import { interpolate } from '@/i18n';
import { getRequestMessages } from '@/i18n/server';
import type { NewsItem } from '@/types';

interface NewsCardProps {
  item: NewsItem;
}

export async function NewsCard({ item }: NewsCardProps) {
  const { news: messages, common } = await getRequestMessages();

  return (
    <Card interactive className="flex h-full flex-col p-6">
      <p className="text-xs font-mono font-semibold tracking-[0.08em] text-brand uppercase">
        {interpolate(messages.sourceLabel, { name: item.source.name })}
      </p>
      <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
      <a
        href={item.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-brand transition-opacity duration-300 hover:opacity-80"
      >
        {common.viewSource}
        <ArrowRightIcon />
      </a>
    </Card>
  );
}
