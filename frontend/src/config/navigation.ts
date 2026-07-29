import type { NavItem } from '@/types';

export const sectionIds = {
  home: 'inicio',
  audience: 'quien-eres',
  disciplines: 'disciplinas',
  skates: 'patines',
  brands: 'marcas',
  articles: 'articulos',
  videos: 'videos',
  results: 'resultados',
  stores: 'tiendas',
} as const;

export const primaryNav: readonly NavItem[] = [
  { key: 'home', href: `#${sectionIds.home}` },
  { key: 'disciplines', href: `#${sectionIds.disciplines}` },
  { key: 'skates', href: `#${sectionIds.skates}` },
  { key: 'brands', href: `#${sectionIds.brands}` },
  { key: 'articles', href: `#${sectionIds.articles}` },
  { key: 'videos', href: `#${sectionIds.videos}` },
];

export const footerNav: readonly NavItem[] = [
  { key: 'disciplines', href: `#${sectionIds.disciplines}` },
  { key: 'skates', href: `#${sectionIds.skates}` },
  { key: 'articles', href: `#${sectionIds.articles}` },
  { key: 'videos', href: `#${sectionIds.videos}` },
  { key: 'stores', href: `#${sectionIds.stores}` },
];
