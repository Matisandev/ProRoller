import type { ContentSource } from '@/services/content-source';
import { mockContentSource } from '@/services/mock-content-source';
import type { Article, CompetitionResult, Discipline, Store, Video } from '@/types';

const contentSource: ContentSource = mockContentSource;

export const getDisciplines = (): Promise<readonly Discipline[]> => contentSource.getDisciplines();
export const getLatestArticles = (): Promise<readonly Article[]> =>
  contentSource.getLatestArticles();
export const getLatestVideos = (): Promise<readonly Video[]> => contentSource.getLatestVideos();
export const getFeaturedResults = (): Promise<readonly CompetitionResult[]> =>
  contentSource.getFeaturedResults();
export const getRecommendedStores = (): Promise<readonly Store[]> =>
  contentSource.getRecommendedStores();

export type { ContentSource };
