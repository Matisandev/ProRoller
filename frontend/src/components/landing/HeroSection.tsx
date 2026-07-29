import { routes, sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function HeroSection() {
  const { hero } = getMessages();

  return (
    <section id={sectionIds.home} className="relative overflow-hidden px-6 pt-28 pb-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 animate-float rounded-full bg-brand/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-32 -z-10 h-96 bg-navy/50 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button size="lg" href={routes.tutorials}>
              {hero.primaryCta}
            </Button>
            <Button size="lg" variant="secondary" href={routes.disciplines}>
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
