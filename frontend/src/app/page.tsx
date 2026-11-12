import { Suspense } from 'react';
import { ArticlesSection } from '@/components/landing/ArticlesSection';
import { DisciplinesSection } from '@/components/landing/DisciplinesSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { IntroSection } from '@/components/landing/IntroSection';
import { NewsSection } from '@/components/landing/NewsSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { TutorialsSection } from '@/components/landing/TutorialsSection';
import { SkeletonGrid } from '@/components/ui/SkeletonGrid';
import { getRequestMessages } from '@/i18n/server';

export default async function HomePage() {
  const { common } = await getRequestMessages();
  const fallback = <SkeletonGrid label={common.loading} />;

  return (
    <>
      <HeroSection />
      <IntroSection />
      <OfferSection />
      <Suspense fallback={fallback}>
        <DisciplinesSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <TutorialsSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <ArticlesSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <NewsSection />
      </Suspense>
    </>
  );
}
