import { about } from '@/data/about';
import { academies } from '@/data/academies';
import { appPlans } from '@/data/app-plans';
import { articles } from '@/data/articles';
import { brands } from '@/data/brands';
import { disciplines } from '@/data/disciplines';
import { upcomingEvents } from '@/data/events';
import { skateModels } from '@/data/models';
import { news } from '@/data/news';
import { results } from '@/data/results';
import { skateRoutes } from '@/data/routes';
import { protectiveGear, safetyGuideIds } from '@/data/safety';
import { spots } from '@/data/spots';
import { stores } from '@/data/stores';
import { tutorials } from '@/data/tutorials';
import { videos } from '@/data/videos';
import type { ContentSource } from '@/services/content-source';

const findById = <TItem extends { readonly id: string }>(
  items: readonly TItem[],
  id: string,
): TItem | null => items.find((item) => item.id === id) ?? null;

const byPublishedAtDesc = <TItem extends { readonly publishedAt: string }>(
  items: readonly TItem[],
): readonly TItem[] => [...items].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const mockContentSource: ContentSource = {
  getDisciplines: () => Promise.resolve(disciplines),
  getDiscipline: (id) => Promise.resolve(findById(disciplines, id)),

  getBrands: () => Promise.resolve(brands),
  getBrand: (id) => Promise.resolve(findById(brands, id)),

  getSkateModels: () => Promise.resolve(skateModels),
  getSkateModel: (id) => Promise.resolve(findById(skateModels, id)),

  getProtectiveGear: () => Promise.resolve(protectiveGear),
  getProtectiveGearItem: (id) => Promise.resolve(findById(protectiveGear, id)),
  getSafetyGuides: () =>
    Promise.resolve(
      safetyGuideIds.map((id) => findById(articles, id)).filter((article) => article !== null),
    ),

  getTutorials: () => Promise.resolve(tutorials),
  getTutorial: (id) => Promise.resolve(findById(tutorials, id)),

  getArticles: () => Promise.resolve(byPublishedAtDesc(articles)),
  getArticle: (id) => Promise.resolve(findById(articles, id)),

  getVideos: () => Promise.resolve(videos),
  getVideosByIds: (ids) =>
    Promise.resolve(ids.map((id) => findById(videos, id)).filter((video) => video !== null)),

  getNews: () => Promise.resolve(byPublishedAtDesc(news)),
  getResults: () =>
    Promise.resolve([...results].sort((a, b) => b.startDate.localeCompare(a.startDate))),
  getUpcomingEvents: () =>
    Promise.resolve([...upcomingEvents].sort((a, b) => a.startDate.localeCompare(b.startDate))),

  getStores: () => Promise.resolve(stores),

  getSpots: () => Promise.resolve(spots),
  getSpot: (id) => Promise.resolve(findById(spots, id)),
  getSkateRoutes: () => Promise.resolve(skateRoutes),
  getSkateRoute: (id) => Promise.resolve(findById(skateRoutes, id)),
  getAcademies: () => Promise.resolve(academies),

  getAppPlans: () => Promise.resolve(appPlans),
  getAbout: () => Promise.resolve(about),
};
