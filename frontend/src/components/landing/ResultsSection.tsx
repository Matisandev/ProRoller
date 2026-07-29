import { ResultCard } from '@/components/cards/ResultCard';
import { CardGrid } from '@/components/ui/CardGrid';
import { Section } from '@/components/ui/Section';
import { sectionIds } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { getFeaturedResults } from '@/services';

export async function ResultsSection() {
  const { results: messages } = getMessages();
  const results = await getFeaturedResults();

  return (
    <Section id={sectionIds.results} eyebrow={messages.eyebrow} title={messages.title}>
      <CardGrid
        items={results}
        columns={2}
        getKey={(result) => result.id}
        renderItem={(result) => <ResultCard result={result} />}
        emptyMessage={messages.empty}
      />
    </Section>
  );
}
