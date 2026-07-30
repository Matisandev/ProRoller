import type { ContentSource } from '@/services/content-source';
import { mockContentSource } from '@/services/mock-content-source';
import type {
  AboutContent,
  Academy,
  AppPlan,
  Article,
  Brand,
  CompetitionResult,
  Discipline,
  NewsItem,
  ProtectiveGear,
  SkateModel,
  SkateRoute,
  Spot,
  Store,
  Tutorial,
  UpcomingEvent,
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

export const getProtectiveGear = (): Promise<readonly ProtectiveGear[]> =>
  contentSource.getProtectiveGear();
export const getProtectiveGearItem = (id: string): Promise<ProtectiveGear | null> =>
  contentSource.getProtectiveGearItem(id);
export const getSafetyGuides = (): Promise<readonly Article[]> => contentSource.getSafetyGuides();

export const getTutorials = (): Promise<readonly Tutorial[]> => contentSource.getTutorials();
export const getTutorial = (id: string): Promise<Tutorial | null> => contentSource.getTutorial(id);

export const getArticles = (): Promise<readonly Article[]> => contentSource.getArticles();
export const getArticle = (id: string): Promise<Article | null> => contentSource.getArticle(id);

export const getVideos = (): Promise<readonly Video[]> => contentSource.getVideos();
export const getVideosByIds = (ids: readonly string[]): Promise<readonly Video[]> =>
  contentSource.getVideosByIds(ids);

export const getNews = (): Promise<readonly NewsItem[]> => contentSource.getNews();
export const getResults = (): Promise<readonly CompetitionResult[]> => contentSource.getResults();
export const getUpcomingEvents = (): Promise<readonly UpcomingEvent[]> =>
  contentSource.getUpcomingEvents();

export const getStores = (): Promise<readonly Store[]> => contentSource.getStores();

export const getSpots = (): Promise<readonly Spot[]> => contentSource.getSpots();
export const getSpot = (id: string): Promise<Spot | null> => contentSource.getSpot(id);
export const getSkateRoutes = (): Promise<readonly SkateRoute[]> => contentSource.getSkateRoutes();
export const getSkateRoute = (id: string): Promise<SkateRoute | null> =>
  contentSource.getSkateRoute(id);
export const getAcademies = (): Promise<readonly Academy[]> => contentSource.getAcademies();

export const getAppPlans = (): Promise<readonly AppPlan[]> => contentSource.getAppPlans();
export const getAbout = (): Promise<AboutContent> => contentSource.getAbout();

export const getLatestArticles = async (limit = 3): Promise<readonly Article[]> =>
  (await contentSource.getArticles()).slice(0, limit);

export const getLatestTutorials = async (limit = 3): Promise<readonly Tutorial[]> =>
  (await contentSource.getTutorials()).slice(0, limit);

export const getLatestVideos = async (limit = 3): Promise<readonly Video[]> =>
  (await contentSource.getVideos()).slice(0, limit);

export const getLatestNews = async (limit = 3): Promise<readonly NewsItem[]> =>
  (await contentSource.getNews()).slice(0, limit);

export const getFeaturedResults = async (limit = 3): Promise<readonly CompetitionResult[]> =>
  (await contentSource.getResults()).slice(0, limit);

export const getFeaturedDisciplines = async (limit = 4): Promise<readonly Discipline[]> =>
  (await contentSource.getDisciplines()).slice(0, limit);

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

/** Patines recomendados para una disciplina, derivados del criterio editorial de cada ficha. */
export const getSkateModelsByDiscipline = async (
  disciplineId: string,
): Promise<readonly SkateModel[]> =>
  (await contentSource.getSkateModels()).filter((model) =>
    model.disciplineFit.some(
      (entry) => entry.disciplineId === disciplineId && entry.level !== 'limitado',
    ),
  );

export const getStoresByBrand = async (brandId: string): Promise<readonly Store[]> =>
  (await contentSource.getStores()).filter((store) => store.brandIds.includes(brandId));

export type { ContentSource };
