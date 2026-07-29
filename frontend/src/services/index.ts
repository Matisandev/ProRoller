import type { ContentSource } from '@/services/content-source';
import { mockContentSource } from '@/services/mock-content-source';
import type {
  Article,
  Brand,
  CompetitionResult,
  Discipline,
  Distributor,
  NewsItem,
  SkateModel,
  Tutorial,
  Video,
} from '@/types';

const contentSource: ContentSource = mockContentSource;

export const getDisciplines = (): Promise<readonly Discipline[]> => contentSource.getDisciplines();
export const getDiscipline = (id: string): Promise<Discipline | null> =>
  contentSource.getDiscipline(id);

export const getBrands = (): Promise<readonly Brand[]> => contentSource.getBrands();
export const getBrand = (id: string): Promise<Brand | null> => contentSource.getBrand(id);

export const getSkateModels = (): Promise<readonly SkateModel[]> => contentSource.getSkateModels();
export const getSkateModel = (id: string): Promise<SkateModel | null> =>
  contentSource.getSkateModel(id);

export const getTutorials = (): Promise<readonly Tutorial[]> => contentSource.getTutorials();
export const getTutorial = (id: string): Promise<Tutorial | null> => contentSource.getTutorial(id);

export const getArticles = (): Promise<readonly Article[]> => contentSource.getArticles();
export const getArticle = (id: string): Promise<Article | null> => contentSource.getArticle(id);

export const getVideos = (): Promise<readonly Video[]> => contentSource.getVideos();
export const getVideosByIds = (ids: readonly string[]): Promise<readonly Video[]> =>
  contentSource.getVideosByIds(ids);

export const getNews = (): Promise<readonly NewsItem[]> => contentSource.getNews();
export const getFeaturedResults = (): Promise<readonly CompetitionResult[]> =>
  contentSource.getFeaturedResults();
export const getRecommendedDistributors = (): Promise<readonly Distributor[]> =>
  contentSource.getRecommendedDistributors();

export const getLatestArticles = async (limit = 3): Promise<readonly Article[]> =>
  (await contentSource.getArticles()).slice(0, limit);

export const getLatestVideos = async (limit = 3): Promise<readonly Video[]> =>
  (await contentSource.getVideos()).slice(0, limit);

export const getLatestNews = async (limit = 3): Promise<readonly NewsItem[]> =>
  (await contentSource.getNews()).slice(0, limit);

export const getArticlesByIds = async (ids: readonly string[]): Promise<readonly Article[]> => {
  const all = await contentSource.getArticles();
  return ids.map((id) => all.find((article) => article.id === id)).filter((a) => a !== undefined);
};

export const getSkateModelsByBrand = async (brandId: string): Promise<readonly SkateModel[]> =>
  (await contentSource.getSkateModels()).filter((model) => model.brandId === brandId);

export const getTutorialsByDiscipline = async (
  disciplineId: string,
): Promise<readonly Tutorial[]> =>
  (await contentSource.getTutorials()).filter((tutorial) =>
    tutorial.disciplineIds.includes(disciplineId),
  );

export type { ContentSource };
