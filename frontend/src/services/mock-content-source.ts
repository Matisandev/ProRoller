import { articles } from '@/data/articles';
import { brands } from '@/data/brands';
import { disciplines } from '@/data/disciplines';
import { distributors } from '@/data/distributors';
import { skateModels } from '@/data/models';
import { news } from '@/data/news';
import { results } from '@/data/results';
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

  getTutorials: () => Promise.resolve(tutorials),
  getTutorial: (id) => Promise.resolve(findById(tutorials, id)),

  getArticles: () => Promise.resolve(byPublishedAtDesc(articles)),
  getArticle: (id) => Promise.resolve(findById(articles, id)),

  getVideos: () => Promise.resolve(videos),
  getVideosByIds: (ids) =>
    Promise.resolve(ids.map((id) => findById(videos, id)).filter((video) => video !== null)),

  getNews: () => Promise.resolve(byPublishedAtDesc(news)),
  getFeaturedResults: () => Promise.resolve(results),
  getRecommendedDistributors: () => Promise.resolve(distributors),
};
