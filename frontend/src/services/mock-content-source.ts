import { articles } from '@/data/articles';
import { disciplines } from '@/data/disciplines';
import { results } from '@/data/results';
import { stores } from '@/data/stores';
import { videos } from '@/data/videos';
import type { ContentSource } from '@/services/content-source';

export const mockContentSource: ContentSource = {
  getDisciplines: () => Promise.resolve(disciplines),
  getLatestArticles: () => Promise.resolve(articles),
  getLatestVideos: () => Promise.resolve(videos),
  getFeaturedResults: () => Promise.resolve(results),
  getRecommendedStores: () => Promise.resolve(stores),
};
