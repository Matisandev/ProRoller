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

/**
 * Contrato único de acceso a contenido. Hoy lo implementa una fuente mock y más
 * adelante lo implementará un cliente de la API REST, sin tocar los componentes.
 */
export interface ContentSource {
  getDisciplines(): Promise<readonly Discipline[]>;
  getDiscipline(id: string): Promise<Discipline | null>;

  getBrands(): Promise<readonly Brand[]>;
  getBrand(id: string): Promise<Brand | null>;

  getSkateModels(): Promise<readonly SkateModel[]>;
  getSkateModel(id: string): Promise<SkateModel | null>;

  getProtectiveGear(): Promise<readonly ProtectiveGear[]>;
  getProtectiveGearItem(id: string): Promise<ProtectiveGear | null>;
  getSafetyGuides(): Promise<readonly Article[]>;

  getTutorials(): Promise<readonly Tutorial[]>;
  getTutorial(id: string): Promise<Tutorial | null>;

  getArticles(): Promise<readonly Article[]>;
  getArticle(id: string): Promise<Article | null>;

  getVideos(): Promise<readonly Video[]>;
  getVideosByIds(ids: readonly string[]): Promise<readonly Video[]>;

  getNews(): Promise<readonly NewsItem[]>;
  getResults(): Promise<readonly CompetitionResult[]>;
  getUpcomingEvents(): Promise<readonly UpcomingEvent[]>;

  getStores(): Promise<readonly Store[]>;

  getSpots(): Promise<readonly Spot[]>;
  getSpot(id: string): Promise<Spot | null>;
  getSkateRoutes(): Promise<readonly SkateRoute[]>;
  getSkateRoute(id: string): Promise<SkateRoute | null>;
  getAcademies(): Promise<readonly Academy[]>;

  getAppPlans(): Promise<readonly AppPlan[]>;
  getAbout(): Promise<AboutContent>;
}
