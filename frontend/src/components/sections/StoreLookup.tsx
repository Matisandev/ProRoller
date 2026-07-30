import { Seal } from '@/components/ui/Seal';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getRequestMessages } from '@/i18n/server';
import { getStores } from '@/services';

interface StoreLookupProps {
  title: string;
}

/** Dónde buscar un producto. Nunca stock, precio ni disponibilidad. */
export async function StoreLookup({ title }: StoreLookupProps) {
  const [stores, { stores: messages }] = await Promise.all([getStores(), getRequestMessages()]);

  return (
    <Section title={title} description={messages.notice}>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {stores.map((store) => (
          <li
            key={store.id}
            className="flex flex-col gap-4 rounded-card border border-line bg-navy/60 p-6"
          >
            <div>
              <p className="text-lg font-semibold tracking-tight">{store.name}</p>
              <p className="mt-1 text-xs text-ink-faint">{messages.logoPending}</p>
            </div>
            <Seal label={messages.seal} />
            <Button
              href={store.website}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="self-start"
            >
              {messages.visitSite}
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
