export type NavKey =
  'home' | 'disciplines' | 'skates' | 'brands' | 'articles' | 'videos' | 'stores';

export interface NavItem {
  readonly key: NavKey;
  readonly href: string;
}

export interface Discipline {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface Article {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly category: string;
  readonly readingMinutes: number;
}

export interface Video {
  readonly id: string;
  readonly title: string;
  readonly channel: string;
  readonly duration: string;
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

export interface Store {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly rating: number;
  readonly website: string;
}
