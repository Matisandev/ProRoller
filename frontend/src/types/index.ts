export type NavKey =
  | 'home'
  | 'disciplines'
  | 'models'
  | 'brands'
  | 'tutorials'
  | 'articles'
  | 'videos'
  | 'news'
  | 'distributors';

export interface NavItem {
  readonly key: NavKey;
  readonly href: string;
}

export type SkillLevel = 'principiante' | 'intermedio' | 'avanzado';

/** Bloque de contenido editorial. El panel de administración creará y ordenará estos bloques. */
export interface ContentBlock {
  readonly heading: string;
  readonly paragraphs: readonly string[];
}

export interface SpecItem {
  readonly label: string;
  readonly value: string;
}

/** Imagen con su atribución. Queda opcional mientras no exista una fuente propia de imágenes. */
export interface ContentImage {
  readonly url: string;
  readonly alt: string;
  readonly credit?: string;
  readonly creditUrl?: string;
}

export interface Video {
  readonly id: string;
  readonly title: string;
  readonly channel: string;
  /** Identificador del video en YouTube. Los videos se embeden, nunca se alojan. */
  readonly youtubeId: string;
}

export interface Technique {
  readonly name: string;
  readonly description: string;
}

export interface Discipline {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly summary: string;
  readonly history: readonly string[];
  readonly goals: readonly string[];
  readonly recommendedLevel: SkillLevel;
  readonly equipment: readonly string[];
  readonly techniques: readonly Technique[];
  readonly videoIds: readonly string[];
  readonly articleIds: readonly string[];
}

export interface Brand {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly foundedYear: number;
  readonly description: string;
  readonly history: readonly string[];
  readonly knownModels: readonly string[];
  readonly disciplineIds: readonly string[];
  readonly website: string;
}

export interface SkateModel {
  readonly id: string;
  readonly name: string;
  readonly brandId: string;
  readonly description: string;
  readonly image?: ContentImage;
  readonly specs: readonly SpecItem[];
  readonly recommendedDisciplineIds: readonly string[];
  readonly compatibility: readonly string[];
  readonly technicalNotes: readonly string[];
}

export interface Tutorial {
  readonly id: string;
  readonly name: string;
  readonly level: SkillLevel;
  readonly summary: string;
  readonly explanation: readonly string[];
  readonly keyPoints: readonly string[];
  readonly disciplineIds: readonly string[];
  readonly videoIds: readonly string[];
}

export interface Article {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly category: string;
  readonly readingMinutes: number;
  readonly publishedAt: string;
  readonly body: readonly ContentBlock[];
  readonly disciplineIds: readonly string[];
}

/** Noticia de terceros: solo resumen propio y enlace a la fuente oficial. */
export interface NewsItem {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly publishedAt: string;
  readonly image?: ContentImage;
  readonly source: {
    readonly name: string;
    readonly url: string;
  };
}

export interface Distributor {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly description: string;
  readonly website: string;
  readonly logo?: ContentImage;
}

export interface PodiumEntry {
  readonly position: number;
  readonly athlete: string;
  readonly country: string;
}

export interface CompetitionResult {
  readonly id: string;
  readonly competition: string;
  readonly discipline: string;
  readonly location: string;
  readonly podium: readonly PodiumEntry[];
}
