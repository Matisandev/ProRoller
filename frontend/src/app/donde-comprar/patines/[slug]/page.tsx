import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { StoreLookup } from '@/components/sections/StoreLookup';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { CardGrid } from '@/components/ui/CardGrid';
import { DisciplineFitList } from '@/components/ui/DisciplineFitList';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { VideoList } from '@/components/ui/VideoList';
import { routes } from '@/config/navigation';
import { getRequestMessages } from '@/i18n/server';
import { buildPageMetadata } from '@/lib/metadata';
import {
  getArticlesByIds,
  getBrand,
  getDisciplines,
  getSkateModel,
  getSkateModels,
  getVideosByIds,
} from '@/services';

interface ModelPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const models = await getSkateModels();
  return models.map((model) => ({ slug: model.id }));
}

export async function generateMetadata({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = await getSkateModel(slug);
  if (model === null) return {};

  return buildPageMetadata({
    title: model.name,
    description: model.description,
    path: routes.model(model.id),
  });
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = await getSkateModel(slug);
  if (model === null) notFound();

  const {
    models: messages,
    nav,
    articles: articleMessages,
    videos: videoMessages,
  } = await getRequestMessages();

  const [brand, disciplines, videos, relatedArticles] = await Promise.all([
    getBrand(model.brandId),
    getDisciplines(),
    getVideosByIds(model.videoIds),
    getArticlesByIds(model.articleIds),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={nav.models}
        title={model.name}
        description={model.description}
        breadcrumbs={[
          { label: nav.home, href: routes.home },
          { label: nav.models, href: routes.models },
          { label: model.name },
        ]}
        meta={
          brand === null ? undefined : (
            <Link href={routes.brand(brand.id)}>
              <Badge variant="neutral">
                {messages.brand}: {brand.name}
              </Badge>
            </Link>
          )
        }
      />

      <Section title={messages.generalInfo}>
        <div className="max-w-3xl space-y-6">
          {model.image === undefined && <ImagePlaceholder label={messages.imagePending} />}
          <SpecList items={model.generalInfo} />
        </div>
      </Section>

      <Section title={messages.specs}>
        <div className="max-w-3xl">
          <SpecList items={model.specs} />
        </div>
      </Section>

      <Section title={messages.compatibility}>
        <div className="grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">
              {messages.compatibleFrames}
            </h3>
            <div className="mt-4">
              <BulletList items={model.compatibility.frames} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">
              {messages.compatibleWheelSizes}
            </h3>
            <div className="mt-4">
              <BulletList items={model.compatibility.wheelSizes} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono font-semibold tracking-[0.08em] text-ink-faint uppercase">
              {messages.spareParts}
            </h3>
            <div className="mt-4">
              <BulletList items={model.compatibility.spareParts} />
            </div>
          </div>
        </div>
      </Section>

      <Section title={messages.recommendedUse}>
        <DisciplineFitList
          fit={model.disciplineFit}
          disciplines={disciplines}
          messages={messages}
        />
      </Section>

      <Section title={messages.editorialOpinion} description={messages.editorialOpinionNotice}>
        <div className="max-w-3xl space-y-4">
          {model.editorialOpinion.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section title={messages.highlights}>
        <div className="max-w-3xl">
          <BulletList items={model.highlights} />
        </div>
      </Section>

      <Section title={messages.considerations}>
        <div className="max-w-3xl">
          <BulletList items={model.considerations} />
        </div>
      </Section>

      {videos.length > 0 && (
        <Section title={messages.relatedVideos}>
          <VideoList videos={videos} notice={videoMessages.embedNotice} />
        </Section>
      )}

      {relatedArticles.length > 0 && (
        <Section title={messages.relatedArticles}>
          <CardGrid
            items={relatedArticles}
            getKey={(article) => article.id}
            renderItem={(article) => <ArticleCard article={article} />}
            emptyMessage={articleMessages.empty}
          />
        </Section>
      )}

      <StoreLookup title={messages.whereToBuy} />
    </>
  );
}
