import type { MetadataRoute } from 'next';
import { routes } from '@/config/navigation';
import { siteUrl } from '@/config/site';
import {
  getArticles,
  getBrands,
  getDisciplines,
  getProtectiveGear,
  getSkateModels,
  getSkateRoutes,
  getSpots,
  getTutorials,
} from '@/services';

const absolute = (path: string): string => new URL(path, siteUrl).toString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [disciplines, brands, models, gear, tutorials, articles, spots, skateRoutes] =
    await Promise.all([
      getDisciplines(),
      getBrands(),
      getSkateModels(),
      getProtectiveGear(),
      getTutorials(),
      getArticles(),
      getSpots(),
      getSkateRoutes(),
    ]);

  const lastModified = new Date();

  const indexPaths: readonly string[] = [
    routes.home,
    routes.disciplines,
    routes.tutorials,
    routes.articles,
    routes.whereToBuy,
    routes.models,
    routes.safety,
    routes.brands,
    routes.stores,
    routes.whereToSkate,
    routes.spots,
    routes.skateRoutes,
    routes.academies,
    routes.news,
    routes.results,
    routes.events,
    routes.about,
  ];

  const detailPaths: readonly string[] = [
    ...disciplines.map((discipline) => routes.discipline(discipline.id)),
    ...brands.map((brand) => routes.brand(brand.id)),
    ...models.map((model) => routes.model(model.id)),
    ...gear.map((item) => routes.safetyGear(item.id)),
    ...tutorials.map((tutorial) => routes.tutorial(tutorial.id)),
    ...articles.map((article) => routes.article(article.id)),
    ...spots.map((spot) => routes.spot(spot.id)),
    ...skateRoutes.map((route) => routes.skateRoute(route.id)),
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
