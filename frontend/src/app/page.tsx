import { Suspense } from 'react';
import { ArticlesSection } from '@/components/landing/ArticlesSection';
import { AudienceSection } from '@/components/landing/AudienceSection';
import { DisciplinesSection } from '@/components/landing/DisciplinesSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { LearnBeforeBuyingSection } from '@/components/landing/LearnBeforeBuyingSection';
import { ResultsSection } from '@/components/landing/ResultsSection';
import { StoresSection } from '@/components/landing/StoresSection';
import { VideosSection } from '@/components/landing/VideosSection';
import { SkeletonGrid } from '@/components/ui/SkeletonGrid';
import { getMessages } from '@/i18n';

export default function HomePage() {
  const { common } = getMessages();
  const fallback = <SkeletonGrid label={common.loading} />;

  return (
    <>
      <HeroSection />
      <AudienceSection />
      <Suspense fallback={fallback}>
        <DisciplinesSection />
      </Suspense>
      <LearnBeforeBuyingSection />
      <Suspense fallback={fallback}>
        <ArticlesSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <VideosSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <ResultsSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <StoresSection />
      </Suspense>
    </>
  );
}
