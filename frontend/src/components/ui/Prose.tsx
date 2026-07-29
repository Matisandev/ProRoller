import type { ContentBlock } from '@/types';

interface ProseProps {
  blocks: readonly ContentBlock[];
}

export function Prose({ blocks }: ProseProps) {
  return (
    <div className="space-y-12">
      {blocks.map((block) => (
        <section key={block.heading}>
          <h2 className="text-2xl font-semibold tracking-tight">{block.heading}</h2>
          <div className="mt-4 space-y-4">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
