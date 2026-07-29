import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { BulletList } from '@/components/ui/BulletList';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { routes } from '@/config/navigation';
import { getMessages } from '@/i18n';
import { buildPageMetadata } from '@/lib/metadata';
import { getBrand, getDisciplines, getSkateModel, getSkateModels } from '@/services';

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

  const { models: messages, nav } = getMessages();
  const [brand, disciplines] = await Promise.all([getBrand(model.brandId), getDisciplines()]);
  const recommended = disciplines.filter((discipline) =>
    model.recommendedDisciplineIds.includes(discipline.id),
  );

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

      <Section title={messages.specs}>
        <div className="max-w-3xl space-y-6">
          {model.image === undefined ? (
            <div className="flex aspect-video items-center justify-center rounded-card border border-dashed border-line bg-carbon text-sm text-ink-faint">
              {messages.imagePending}
            </div>
          ) : null}
          <SpecList items={model.specs} />
        </div>
      </Section>

      <Section title={messages.recommendedFor}>
        <ul className="flex flex-wrap gap-3">
          {recommended.map((discipline) => (
            <li key={discipline.id}>
              <Link href={routes.discipline(discipline.id)}>
                <Badge>{discipline.name}</Badge>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={messages.compatibility}>
        <div className="max-w-3xl">
          <BulletList items={model.compatibility} />
        </div>
      </Section>

      <Section title={messages.technicalNotes}>
        <div className="max-w-3xl">
          <BulletList items={model.technicalNotes} />
        </div>
      </Section>
    </>
  );
}
