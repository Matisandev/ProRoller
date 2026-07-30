export type NavKey =
  | 'home'
  | 'disciplines'
  | 'whereToBuy'
  | 'whereToSkate'
  | 'news'
  | 'app'
  | 'models'
  | 'safety'
  | 'brands'
  | 'stores'
  | 'spots'
  | 'routes'
  | 'academies'
  | 'results'
  | 'events'
  | 'tutorials'
  | 'articles'
  | 'about';

export interface NavItem {
  readonly key: NavKey;
  readonly href: string;
}

/** Los niveles pertenecen a las técnicas, tutoriales, spots y rutas, nunca a las disciplinas. */
export type SkillLevel = 'principiante' | 'intermedio' | 'avanzado';

/** Qué tan indicado está un patín para una disciplina. Es un criterio editorial, no un puntaje. */
export type DisciplineFitLevel = 'ideal' | 'apto' | 'limitado';

/**
 * Estado editorial de una ficha. Las secciones que todavía se están levantando quedan
 * publicadas como borrador para poder mostrar la estructura sin afirmar datos falsos.
 */
export type ContentStatus = 'publicado' | 'borrador';

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

export interface SourceLink {
  readonly name: string;
  readonly url: string;
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
  readonly whatToLearnFirst: readonly string[];
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

export interface DisciplineFit {
  readonly disciplineId: string;
  readonly level: DisciplineFitLevel;
}

export interface ModelCompatibility {
  readonly frames: readonly string[];
  readonly wheelSizes: readonly string[];
  readonly spareParts: readonly string[];
}

export interface SkateModel {
  readonly id: string;
  readonly name: string;
  readonly brandId: string;
  readonly description: string;
  readonly image?: ContentImage;
  /** Marca, modelo, año y país de origen. */
  readonly generalInfo: readonly SpecItem[];
  readonly specs: readonly SpecItem[];
  readonly compatibility: ModelCompatibility;
  readonly disciplineFit: readonly DisciplineFit[];
  readonly highlights: readonly string[];
  readonly considerations: readonly string[];
  /** Análisis editorial de ProRoller. Nunca un puntaje. */
  readonly editorialOpinion: readonly string[];
  readonly videoIds: readonly string[];
  readonly articleIds: readonly string[];
}

export interface ProtectiveGear {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly images: readonly ContentImage[];
  readonly specs: readonly SpecItem[];
  readonly materials: readonly string[];
  readonly certifications: readonly string[];
  readonly editorialOpinion: readonly string[];
  readonly considerations: readonly string[];
  readonly videoIds: readonly string[];
}

export interface Tutorial {
  readonly id: string;
  readonly name: string;
  readonly level: SkillLevel;
  readonly summary: string;
  readonly goals: readonly string[];
  readonly prerequisites: readonly string[];
  readonly explanation: readonly string[];
  readonly keyPoints: readonly string[];
  readonly disciplineIds: readonly string[];
  readonly videoIds: readonly string[];
  readonly articleIds: readonly string[];
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
  readonly source: SourceLink;
}

export interface PodiumEntry {
  readonly position: number;
  readonly athlete: string;
  readonly country: string;
}

/** Resultado oficial ya disputado, con su fuente pública. */
export interface CompetitionResult {
  readonly id: string;
  readonly competition: string;
  readonly event: string;
  readonly discipline: string;
  readonly location: string;
  readonly startDate: string;
  /** Solo cuando la prueba se disputó en más de un día. */
  readonly endDate?: string;
  readonly podium: readonly PodiumEntry[];
  readonly source: SourceLink;
}

export type EventScope = 'nacional' | 'internacional';

export interface UpcomingEvent {
  readonly id: string;
  readonly name: string;
  readonly scope: EventScope;
  readonly location: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly disciplines: readonly string[];
  readonly summary: string;
  readonly source: SourceLink;
}

export interface Store {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly description: string;
  readonly website: string;
  readonly logo?: ContentImage;
  readonly brandIds: readonly string[];
}

export interface Spot {
  readonly id: string;
  readonly name: string;
  readonly city: string;
  readonly description: string;
  readonly recommendedLevel: SkillLevel;
  readonly surface: string;
  readonly disciplineIds: readonly string[];
  readonly technicalRequirements: readonly string[];
  readonly safetyTips: readonly string[];
  readonly images: readonly ContentImage[];
  readonly status: ContentStatus;
}

export interface SkateRoute {
  readonly id: string;
  readonly name: string;
  readonly city: string;
  readonly distanceKm: number;
  readonly estimatedTime: string;
  readonly level: SkillLevel;
  readonly surface: string;
  readonly requirements: readonly string[];
  readonly safetyTips: readonly string[];
  readonly images: readonly ContentImage[];
  readonly mapReferenceUrl?: string;
  readonly status: ContentStatus;
}

export type AcademyKind = 'escuela' | 'club' | 'grupo';

export interface SocialLink {
  readonly network: string;
  readonly url: string;
}

export interface Academy {
  readonly id: string;
  readonly name: string;
  readonly kind: AcademyKind;
  readonly city: string;
  readonly description: string;
  readonly disciplineIds: readonly string[];
  readonly images: readonly ContentImage[];
  readonly website?: string;
  readonly socialLinks: readonly SocialLink[];
  readonly status: ContentStatus;
}

export type PlanAvailability = 'disponible' | 'proximamente';

/** Presentación de los planes de la App. En la web no hay pagos ni autenticación. */
export interface AppPlan {
  readonly id: string;
  readonly name: string;
  readonly promise: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly futureFeatures: readonly string[];
  readonly availability: PlanAvailability;
}

export interface AboutAuthor {
  readonly name: string;
  readonly city: string;
  readonly role: string;
  readonly bio: readonly string[];
  readonly website: string;
  readonly photo?: ContentImage;
}

export interface AboutContent {
  readonly origin: ContentBlock;
  readonly author: AboutAuthor;
  readonly philosophy: readonly string[];
  readonly transparency: readonly string[];
  readonly future: ContentBlock;
  readonly closingQuote: string;
}
