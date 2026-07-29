import type { MetadataRoute } from 'next';
import { routes } from '@/config/navigation';
import { siteUrl } from '@/config/site';
import { getArticles, getBrands, getDisciplines, getSkateModels, getTutorials } from '@/services';

const absolute = (path: string): string => new URL(path, siteUrl).toString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [disciplines, brands, models, tutorials, articles] = await Promise.all([
    getDisciplines(),
    getBrands(),
    getSkateModels(),
    getTutorials(),
    getArticles(),
  ]);

  const lastModified = new Date();

  const indexPaths: readonly string[] = [
    routes.home,
    routes.disciplines,
    routes.brands,
    routes.models,
    routes.tutorials,
    routes.articles,
    routes.news,
    routes.distributors,
  ];

  const detailPaths: readonly string[] = [
    ...disciplines.map((discipline) => routes.discipline(discipline.id)),
    ...brands.map((brand) => routes.brand(brand.id)),
    ...models.map((model) => routes.model(model.id)),
    ...tutorials.map((tutorial) => routes.tutorial(tutorial.id)),
    ...articles.map((article) => routes.article(article.id)),
  ];

  return [
    ...indexPaths.map((path) => ({
      url: absolute(path),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === routes.home ? 1 : 0.8,
    })),
    ...detailPaths.map((path) => ({
      url: absolute(path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
