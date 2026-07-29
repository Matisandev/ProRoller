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

  getTutorials(): Promise<readonly Tutorial[]>;
  getTutorial(id: string): Promise<Tutorial | null>;

  getArticles(): Promise<readonly Article[]>;
  getArticle(id: string): Promise<Article | null>;

  getVideos(): Promise<readonly Video[]>;
  getVideosByIds(ids: readonly string[]): Promise<readonly Video[]>;

  getNews(): Promise<readonly NewsItem[]>;
  getFeaturedResults(): Promise<readonly CompetitionResult[]>;
  getRecommendedDistributors(): Promise<readonly Distributor[]>;
}
