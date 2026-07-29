import { Button } from '@/components/ui/Button';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';

export default function NotFound() {
  const { notFound: messages } = getMessages();

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{messages.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">{messages.description}</p>
        <Button href={routes.home} className="mt-10">
          {messages.cta}
        </Button>
      </div>
    </section>
  );
}
