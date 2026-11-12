import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { routes, sectionIds } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';

export async function HeroSection() {
  const { hero } = await getRequestMessages();

  return (
    <section id={sectionIds.home} className="relative overflow-hidden px-6 pt-28 pb-32 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {hero.subtitle}
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={routes.disciplines} size="lg">
              {hero.primaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
