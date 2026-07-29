import { Suspense } from 'react';
import { ArticlesSection } from '@/components/landing/ArticlesSection';
import { AudienceSection } from '@/components/landing/AudienceSection';
import { DisciplinesSection } from '@/components/landing/DisciplinesSection';
import { DistributorsSection } from '@/components/landing/DistributorsSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { LearnBeforeBuyingSection } from '@/components/landing/LearnBeforeBuyingSection';
import { NewsSection } from '@/components/landing/NewsSection';
import { ResultsSection } from '@/components/landing/ResultsSection';
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
        <NewsSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <ResultsSection />
      </Suspense>
      <Suspense fallback={fallback}>
        <DistributorsSection />
      </Suspense>
    </>
  );
}
