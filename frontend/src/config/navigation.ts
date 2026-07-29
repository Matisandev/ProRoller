import type { NavItem } from '@/types';

export const routes = {
  home: '/',
  disciplines: '/disciplinas',
  discipline: (id: string) => `/disciplinas/${id}`,
  brands: '/marcas',
  brand: (id: string) => `/marcas/${id}`,
  models: '/modelos',
  model: (id: string) => `/modelos/${id}`,
  tutorials: '/tutoriales',
  tutorial: (id: string) => `/tutoriales/${id}`,
  articles: '/articulos',
  article: (id: string) => `/articulos/${id}`,
  news: '/noticias',
  distributors: '/distribuidores',
} as const;

/** Anclas de las secciones de la portada. */
export const sectionIds = {
  home: 'inicio',
  audience: 'quien-eres',
  disciplines: 'disciplinas',
  skates: 'patines',
  articles: 'articulos',
  videos: 'videos',
  news: 'noticias',
  results: 'resultados',
  distributors: 'distribuidores',
} as const;

export const primaryNav: readonly NavItem[] = [
  { key: 'home', href: routes.home },
  { key: 'disciplines', href: routes.disciplines },
  { key: 'models', href: routes.models },
  { key: 'brands', href: routes.brands },
  { key: 'tutorials', href: routes.tutorials },
  { key: 'articles', href: routes.articles },
  { key: 'news', href: routes.news },
];

export const footerNav: readonly NavItem[] = [
  { key: 'disciplines', href: routes.disciplines },
  { key: 'models', href: routes.models },
  { key: 'brands', href: routes.brands },
  { key: 'tutorials', href: routes.tutorials },
  { key: 'articles', href: routes.articles },
  { key: 'news', href: routes.news },
  { key: 'videos', href: `/#${sectionIds.videos}` },
  { key: 'distributors', href: routes.distributors },
];
