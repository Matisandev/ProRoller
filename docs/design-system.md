# Design System

Design System propio, sin librerías de componentes externas (ni Material UI, ni Ant Design, ni Bootstrap).

## Tokens

Definidos como variables de tema de TailwindCSS v4 en `frontend/src/app/globals.css`:

| Token            | Valor     | Uso                           |
| ---------------- | --------- | ----------------------------- |
| `night`          | `#04070c` | Fondo principal               |
| `carbon`         | `#070d17` | Fondo elevado                 |
| `navy`           | `#0a1526` | Superficie de tarjetas        |
| `navy-soft`      | `#0e1d33` | Superficie en hover           |
| `line`           | `#17263c` | Bordes y separadores          |
| `brand`          | `#00ffc9` | Color principal (turquesa)    |
| `ink`            | `#e8eef6` | Texto principal               |
| `ink-muted`      | `#94a3b8` | Texto secundario              |
| `ink-faint`      | `#64748b` | Texto de apoyo                |
| `radius-card`    | `1.25rem` | Radio de tarjetas             |
| `animate-reveal` | —         | Entrada suave al hacer scroll |
| `animate-float`  | —         | Halo del hero                 |

El blanco puro no se usa como color predominante: el texto principal es `ink`.

## Componentes

| Componente       | Tipo   | Notas                                                                                                                 |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `Button`         | Server | Variantes `primary`/`secondary`/`ghost`, tamaños `sm`/`md`/`lg`. Renderiza `<button>` o `<Link>` según reciba `href`. |
| `Card`           | Server | Superficie base, con `interactive` para hover elevado.                                                                |
| `Badge`          | Server | Etiquetas cortas, variantes `brand`/`neutral`.                                                                        |
| `Input`          | Server | Label obligatoria (ocultable con `hideLabel`), icono opcional.                                                        |
| `SearchBar`      | Server | Compone `Input` con el icono de búsqueda.                                                                             |
| `Modal`          | Client | `role="dialog"`, `aria-modal`, cierre con `Escape` y con backdrop.                                                    |
| `Section`        | Server | Contenedor de sección con eyebrow, título y descripción opcionales.                                                   |
| `CardGrid`       | Server | Rejilla genérica y tipada; muestra `EmptyState` si no hay datos.                                                      |
| `EmptyState`     | Server | Estado vacío reutilizable.                                                                                            |
| `SkeletonLoader` | Server | Placeholder de carga con `role="status"`.                                                                             |
| `SkeletonGrid`   | Server | Fallback de `Suspense` para las secciones de contenido.                                                               |
| `Reveal`         | Client | Animación de entrada con `IntersectionObserver`.                                                                      |
| `Rating`         | Server | Valoración en estrellas con etiqueta accesible.                                                                       |
| `Navbar`         | Client | Cabecera con navegación, buscador y acceso a iniciar sesión.                                                          |
| `Footer`         | Server | Pie simple con navegación secundaria.                                                                                 |
| `Logo`           | Server | Marca ProRoller.                                                                                                      |
| `icons.tsx`      | Server | Iconos SVG propios.                                                                                                   |

Las tarjetas de dominio (`InfoCard`, `DisciplineCard`, `ArticleCard`, `VideoCard`, `ResultCard`, `BrandCard`, `ModelCard`, `TutorialCard`, `NewsCard`, `DistributorCard`) viven en `components/cards/` y se construyen sobre los componentes anteriores.

Los componentes de contenido editorial son `PageHeader`, `Breadcrumbs`, `Prose`, `SpecList`, `BulletList`, `Seal` y `YouTubeEmbed`.

## Reglas

- Un componente nuevo se añade primero a `components/ui/` si no conoce el dominio.
- Espaciado generoso: secciones con `py-24`/`py-32` y rejillas con `gap-6`.
- Transiciones suaves (`duration-300`/`duration-500`) y respeto por `prefers-reduced-motion`.
- Sin textos literales: toda la copia llega desde `i18n`.
