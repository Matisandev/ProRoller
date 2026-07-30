import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

interface HelmetNoticeProps {
  skipHref?: string;
}

/** La seguridad va antes que el rendimiento: aviso previo a cualquier ficha de patines. */
export async function HelmetNotice({ skipHref = routes.models }: HelmetNoticeProps) {
  const { helmetNotice: messages } = await getRequestMessages();

  return (
    <Card className="border-brand/30 bg-brand-soft/20">
      <p className="text-xs font-medium tracking-[0.2em] text-brand uppercase">{messages.title}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">{messages.question}</h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{messages.body}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={routes.safety}>{messages.primaryCta}</Button>
        <Button href={skipHref} variant="secondary">
          {messages.secondaryCta}
        </Button>
      </div>
    </Card>
  );
}
