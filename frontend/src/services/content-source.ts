import type { Article, CompetitionResult, Discipline, Store, Video } from '@/types';

/**
 * Contrato único de acceso a contenido. Hoy lo implementa una fuente mock y más
 * adelante lo implementará un cliente de la API REST, sin tocar los componentes.
 */
export interface ContentSource {
  getDisciplines(): Promise<readonly Discipline[]>;
  getLatestArticles(): Promise<readonly Article[]>;
  getLatestVideos(): Promise<readonly Video[]>;
  getFeaturedResults(): Promise<readonly CompetitionResult[]>;
  getRecommendedStores(): Promise<readonly Store[]>;
}
