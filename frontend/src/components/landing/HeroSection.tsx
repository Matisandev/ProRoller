import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

export async function HeroSection() {
  const { hero } = await getRequestMessages();

  return (
    <section id={sectionIds.home} className="relative px-4 pt-10 pb-6">
      <div className="relative mx-auto max-w-[70rem]">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.08em] text-brand uppercase">{hero.eyebrow}</p>
          <h1 className="mt-2.5 text-[2.125rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="inline sm:block">
                {line}{' '}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            {hero.subtitle}
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button href={routes.disciplines} size="md">
              {hero.primaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
