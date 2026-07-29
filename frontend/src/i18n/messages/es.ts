export const es = {
  metadata: {
    title: 'ProRoller | Aprende. Progresa. Patina.',
    description: 'Toda la información del patinaje en un solo lugar.',
    siteName: 'ProRoller',
  },
  common: {
    brand: 'ProRoller',
    search: 'Buscar',
    searchAriaLabel: 'Buscar en ProRoller',
    signIn: 'Iniciar sesión',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    close: 'Cerrar',
    loading: 'Cargando',
    skipToContent: 'Saltar al contenido',
    readingMinutes: 'min de lectura',
    ratingAriaLabel: 'Valoración {value} de {max}',
  },
  nav: {
    home: 'Inicio',
    disciplines: 'Disciplinas',
    skates: 'Patines',
    brands: 'Marcas',
    articles: 'Artículos',
    videos: 'Videos',
    stores: 'Tiendas',
    primaryAriaLabel: 'Navegación principal',
    footerAriaLabel: 'Navegación del pie de página',
  },
  hero: {
    titleLines: ['Aprende.', 'Progresa.', 'Patina.'],
    subtitle: 'Toda la información del patinaje en un solo lugar.',
    primaryCta: 'Comenzar',
    secondaryCta: 'Explorar disciplinas',
  },
  audience: {
    eyebrow: '¿Quién eres?',
    title: '¿Quién eres?',
    items: [
      { id: 'quiero-aprender', title: 'Quiero aprender', description: 'No tengo patines todavía.' },
      {
        id: 'ya-estoy-patinando',
        title: 'Ya estoy patinando',
        description: 'Quiero mejorar mi técnica.',
      },
      { id: 'quiero-competir', title: 'Quiero competir', description: 'Quiero llegar a competir.' },
    ],
  },
  disciplines: {
    eyebrow: 'Disciplinas',
    title: 'Disciplinas',
    empty: 'Todavía no hay disciplinas publicadas.',
  },
  learnBeforeBuying: {
    eyebrow: 'Antes de comprar',
    title: 'Aprende antes de comprar',
    items: [
      {
        id: 'comparador',
        title: 'Comparador de patines',
        description: 'Compara medidas, estructura y componentes antes de decidir.',
      },
      {
        id: 'marcas',
        title: 'Marcas',
        description: 'Quién fabrica qué y para qué tipo de patinaje.',
      },
      {
        id: 'modelos',
        title: 'Modelos',
        description: 'Fichas de modelos organizadas por nivel y uso.',
      },
      {
        id: 'guias',
        title: 'Guías',
        description: 'Guías explicadas paso a paso, sin tecnicismos.',
      },
    ],
  },
  articles: {
    eyebrow: 'Contenido',
    title: 'Últimos artículos',
    empty: 'Todavía no hay artículos publicados.',
  },
  videos: {
    eyebrow: 'Contenido',
    title: 'Últimos videos',
    empty: 'Todavía no hay videos publicados.',
  },
  results: {
    eyebrow: 'Competición',
    title: 'Resultados destacados',
    empty: 'Todavía no hay resultados publicados.',
  },
  stores: {
    eyebrow: 'Directorio',
    title: 'Tiendas recomendadas',
    visitSite: 'Ir al sitio',
    empty: 'Todavía no hay tiendas en el directorio.',
  },
  footer: {
    tagline: 'Toda la información del patinaje en un solo lugar.',
    rights: '© {year} ProRoller',
  },
} as const;
