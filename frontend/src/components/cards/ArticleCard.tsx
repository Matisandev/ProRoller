import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import type { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { common } = getMessages();

  return (
    <Link href={routes.article(article.id)} className="block h-full">
      <Card interactive className="flex h-full flex-col p-6">
        <Badge className="self-start">{article.category}</Badge>
        <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight">{article.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
        <p className="mt-6 text-xs text-ink-faint">
          {article.readingMinutes} {common.readingMinutes}
        </p>
      </Card>
    </Link>
  );
}
