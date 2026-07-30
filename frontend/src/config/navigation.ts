import type { NavItem } from '@/types';

export const routes = {
  home: '/',
  disciplines: '/disciplinas',
  discipline: (id: string) => `/disciplinas/${id}`,
  tutorials: '/tutoriales',
  tutorial: (id: string) => `/tutoriales/${id}`,
  articles: '/articulos',
  article: (id: string) => `/articulos/${id}`,
  whereToBuy: '/donde-comprar',
  models: '/donde-comprar/patines',
  model: (id: string) => `/donde-comprar/patines/${id}`,
  safety: '/donde-comprar/seguridad',
  safetyGear: (id: string) => `/donde-comprar/seguridad/${id}`,
  brands: '/donde-comprar/marcas',
  brand: (id: string) => `/donde-comprar/marcas/${id}`,
  stores: '/donde-comprar/tiendas',
  whereToSkate: '/donde-patinar',
  spots: '/donde-patinar/spots',
  spot: (id: string) => `/donde-patinar/spots/${id}`,
  skateRoutes: '/donde-patinar/rutas',
  skateRoute: (id: string) => `/donde-patinar/rutas/${id}`,
  academies: '/donde-patinar/academias',
  news: '/noticias',
  results: '/noticias/resultados',
  events: '/noticias/eventos',
  app: '/app',
  about: '/sobre-proroller',
} as const;

/** Anclas de las secciones de la portada. */
export const sectionIds = {
  home: 'inicio',
  intro: 'proroller',
  offer: 'que-encontraras',
  disciplines: 'disciplinas',
  tutorials: 'tutoriales',
  articles: 'articulos',
  news: 'noticias',
  app: 'app',
} as const;

export const primaryNav: readonly NavItem[] = [
  { key: 'home', href: routes.home },
  { key: 'disciplines', href: routes.disciplines },
  { key: 'whereToBuy', href: routes.whereToBuy },
  { key: 'whereToSkate', href: routes.whereToSkate },
  { key: 'news', href: routes.news },
  { key: 'app', href: routes.app },
];

export const footerNav: readonly NavItem[] = [
  { key: 'disciplines', href: routes.disciplines },
  { key: 'tutorials', href: routes.tutorials },
  { key: 'articles', href: routes.articles },
  { key: 'models', href: routes.models },
  { key: 'safety', href: routes.safety },
  { key: 'brands', href: routes.brands },
  { key: 'stores', href: routes.stores },
  { key: 'whereToSkate', href: routes.whereToSkate },
  { key: 'news', href: routes.news },
  { key: 'results', href: routes.results },
  { key: 'events', href: routes.events },
  { key: 'app', href: routes.app },
  { key: 'about', href: routes.about },
];
