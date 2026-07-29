# Sprint 1 — Base del proyecto y Landing Page

## Qué se implementó

### Monorepo y tooling

- Monorepo con workspaces de npm: `frontend/`, `backend/`, `database/`, `docs/`.
- ESLint (por paquete), Prettier, EditorConfig.
- Husky: `pre-commit` con `lint-staged` (Prettier) y `commit-msg` con commitlint (Conventional Commits).
- Workflow de CI que ejecuta `format:check`, `lint`, `typecheck` y `build`.

### Docker

- `docker compose up -d` levanta `database` (PostgreSQL 16), `backend` (NestJS) y `frontend` (Next.js).
- Dockerfiles multi-stage con etapas `development` y `production`.
- El backend arranca solo cuando PostgreSQL pasa su `healthcheck`.
- Verificado en local: `GET /api/health` responde `{"status":"ok"}` y la landing responde 200 en el puerto 3000.

### Frontend

- Next.js 15 con App Router, React 19, TypeScript estricto y TailwindCSS v4.
- Design System propio en `components/ui/`: `Button`, `Card`, `Badge`, `Input`, `SearchBar`, `Modal`, `Section`, `CardGrid`, `EmptyState`, `SkeletonLoader`, `SkeletonGrid`, `Reveal`, `Rating`, `Logo`, iconos SVG propios. Sin librerías de componentes externas.
- Tarjetas de dominio en `components/cards/`: `InfoCard`, `DisciplineCard`, `ArticleCard`, `VideoCard`, `ResultCard`, `StoreCard`.
- Landing Page con las secciones pedidas: Header, Hero, ¿Quién eres?, Disciplinas (8), Aprende antes de comprar, Últimos artículos (3), Últimos videos (3), Resultados destacados (Juegos Panamericanos y Campeonato Nacional), Tiendas recomendadas y Footer.
- i18n preparada: toda la copia vive en `src/i18n/messages/es.ts`; ningún componente tiene texto literal.
- Capa de servicios (`src/services`) con el contrato `ContentSource`; hoy lo implementa una fuente mock.
- SEO: metadata, Open Graph, Twitter Card, `sitemap.xml` y `robots.txt`.
- Accesibilidad: HTML semántico, enlace de salto al contenido, `aria-label` en navegaciones, foco visible, menú móvil con `aria-expanded`/`aria-controls`, `Modal` con `role="dialog"` y cierre con `Escape`, `prefers-reduced-motion` respetado.

### Backend

- NestJS modular con `src/modules/<modulo>`, `src/config` tipada, prefijo global `/api`, CORS configurable y `ValidationPipe` global.
- Único módulo: `health`.

### Base de datos

- PostgreSQL en Docker y Prisma configurado en `database/prisma/schema.prisma` con `datasource` y `generator` únicamente.
- Sin modelos, sin migraciones y sin entidades, tal como se indicó.

## Decisiones técnicas tomadas

| Decisión                                                                | Motivo                                                                                         |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Workspaces de npm en la raíz                                            | Un solo `npm install` y scripts de calidad transversales, sin herramientas adicionales.        |
| i18n propia (diccionario tipado) en lugar de una librería               | Cumple "preparado para i18n" sin decidir por adelantado la librería ni la estrategia de rutas. |
| Contrato `ContentSource` entre secciones y datos                        | Al conectar la API REST solo cambia una implementación, no los componentes.                    |
| Secciones de contenido envueltas en `Suspense` con `SkeletonGrid`       | La estructura de carga ya es la definitiva cuando los datos vengan del backend.                |
| Anclas (`#disciplinas`, `#patines`, ...) en el header                   | El Sprint 1 no incluye rutas nuevas; los slugs ya son amigables para convertirse en rutas.     |
| Tokens de color como variables de tema de Tailwind v4                   | Un único lugar para la identidad visual, sin `tailwind.config.js` heredado.                    |
| `Navbar`, `Modal` y `Reveal` como Client Components; el resto en server | Menos JavaScript en el cliente.                                                                |
| Endpoint `GET /api/health`                                              | Infraestructura mínima para comprobar que el stack levanta; no es lógica de negocio.           |

## Problemas encontrados

- El repositorio estaba vacío: se creó el commit inicial en `main` con el README y todo el Sprint llega por Pull Request.
- Tailwind v4 genera utilidades a partir de los tokens de color, y llamar `base` al color de fondo colisionaba con la utilidad de tamaño de texto `text-base`; se renombró a `night`/`carbon`.
- Los contenedores instalan dependencias con `npm install` dentro de su propia etapa (no `npm ci`), porque el lockfile vive en la raíz del monorepo y cada Dockerfile solo recibe el contexto de su paquete.
- `npm audit` reporta vulnerabilidades en dependencias transitivas del scaffold de Next.js y NestJS; no se forzaron actualizaciones para no alterar las versiones del stack sin autorización.

## Sugerencias para el siguiente Sprint

Listado completo en [docs/suggestions.md](docs/suggestions.md). Las más relevantes:

1. Definir el modelo de datos con el Product Owner para poder crear los módulos del backend y las migraciones de Prisma.
2. Exponer los primeros endpoints REST de lectura y añadir `HttpContentSource` en el frontend.
3. Decidir la estrategia de rutas por idioma (`/[locale]/...`) para activar la i18n ya preparada.
4. Definir autenticación y roles del panel de administración propio.
5. Decidir el buscador: alcance, índice y endpoint.

## Qué queda pendiente

- Login, pagos, entrenamientos, IA, rutas adicionales, Plus/Elite y funcionalidades Premium: fuera del alcance del Sprint 1.
- Buscador funcional (la barra existe, sin comportamiento).
- Botón "Comenzar" y tarjetas de "¿Quién eres?": visuales, sin destino definido.
- Imágenes reales (disciplinas, artículos, videos) y su optimización con `next/image`.
- Tests de frontend y tests e2e más allá del `health` del backend.
- Dominio definitivo en `NEXT_PUBLIC_SITE_URL` para metadata, sitemap y robots.
