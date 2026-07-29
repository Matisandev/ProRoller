# Sprint 2 — Contenido inicial de ProRoller (MVP)

## Qué se implementó

### Rutas nuevas

| Ruta                  | Qué contiene                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| `/disciplinas[/slug]` | Las 8 disciplinas con descripción, historia, objetivos, nivel, equipo, técnicas, videos y artículos     |
| `/marcas[/slug]`      | FR Skates, Powerslide, Seba, Flying Eagle y Micro con historia, modelos conocidos y disciplinas         |
| `/modelos[/slug]`     | 9 fichas con especificaciones generales, disciplina recomendada, compatibilidades e información técnica |
| `/tutoriales[/slug]`  | 9 tutoriales con explicación, nivel, puntos clave y videos relacionados                                 |
| `/articulos[/slug]`   | 7 artículos completos escritos para ProRoller                                                           |
| `/noticias`           | 5 noticias reales resumidas, con enlace a la fuente oficial                                             |
| `/distribuidores`     | Alacalufe y Decathlon con sello "Distribuidor recomendado por ProRoller"                                |

Cada ruta de detalle usa `generateStaticParams()`, `generateMetadata()` y `notFound()` para slugs inexistentes. El build genera 52 páginas estáticas.

### Contenido

- Redactado íntegramente para ProRoller a partir de conocimiento público; no se copiaron textos de terceros.
- Vocabulario de la comunidad chilena: "freno en T", "patines", "bota", "frame".
- 45 videos públicos de YouTube referenciados solo por su identificador y embedidos con `youtube-nocookie.com`. Se verificó uno por uno que los 45 identificadores resuelven (oEmbed 200). No se descarga ni se aloja ningún video.
- Noticias tomadas de World Skate (federación internacional): título propio, resumen propio, fecha y enlace al artículo original. Nunca el artículo completo.
- La sección de distribuidores no muestra stock, precios ni disponibilidad, y los enlaces son directos al sitio oficial (sin afiliados).

### Arquitectura de contenido

- `types/index.ts` define las entidades editoriales: `Discipline`, `Brand`, `SkateModel`, `Tutorial`, `Article`, `NewsItem`, `Distributor`, `Video`, más `ContentBlock`, `SpecItem`, `Technique` y `SkillLevel`.
- `ContentSource` se amplió con lectura de colección y de detalle por id para cada entidad. Los componentes y rutas consumen solo `services/`, nunca `data/`.
- Todo el contenido vive en `frontend/src/data/*.ts`, desacoplado de la interfaz: cuando exista el panel propio, se reemplaza la implementación mock por `HttpContentSource` sin tocar componentes.
- Las relaciones entre entidades son por id (`videoIds`, `articleIds`, `disciplineIds`, `brandId`), tal como quedarán en la base de datos.

### Design System

- Nuevos componentes de contenido: `YouTubeEmbed`, `Breadcrumbs`, `PageHeader`, `Prose`, `SpecList`, `BulletList`, `Seal`.
- Nuevas tarjetas: `BrandCard`, `ModelCard`, `TutorialCard`, `NewsCard`, `DistributorCard`. `VideoCard` ahora muestra la miniatura real del video.
- `not-found.tsx` propio, en la misma estética.
- Navbar y footer con rutas reales (`Link` de Next, no anclas). Footer actualizado a `© ProRoller` / `Aprende. Progresa. Patina.` / `Desarrollado por KODWELL`.
- Toda la copia nueva vive en `i18n/messages/es.ts`; ningún componente tiene texto literal.

## Decisiones técnicas tomadas

| Decisión                                                  | Motivo                                                                                              |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Slug = id de la entidad                                   | La URL no depende de un campo aparte y sigue siendo válida cuando el contenido venga de la API.     |
| Embeds vía `youtube-nocookie.com` con `loading="lazy"`    | Cumple "no descargar ni alojar videos" y reduce el rastreo antes de que el usuario interactúe.      |
| Miniaturas de YouTube con `next/image` y `remotePatterns` | Es la única imagen de terceros cuyo uso está claramente asociado al embed del propio video.         |
| Fichas de modelo sin imagen, con marcador visible         | No hay decisión de licencias todavía (ver pendientes); el hueco está listo en el tipo `SkateModel`. |
| Especificaciones redactadas como "configuración habitual" | Cada modelo tiene variantes por año y mercado; no se afirma un dato exacto que pueda ser falso.     |
| Noticias con fuente única (World Skate) y fecha           | Es la fuente oficial verificable del deporte; queda pendiente definir la política editorial.        |
| `lib/metadata.ts` para la metadata de página              | Una sola forma de generar título, canonical y Open Graph en todas las rutas.                        |
| Sitemap generado desde `services/`                        | Las rutas nuevas entran solas al sitemap, hoy con mocks y mañana con la API.                        |

## Problemas encontrados

- Los sitios de Alacalufe y Decathlon Chile responden `403` a peticiones automatizadas (Cloudflare), por lo que su descripción se redactó de forma conservadora y sus logos quedaron pendientes.
- Las especificaciones publicadas de un mismo modelo varían entre tiendas y años (tamaño de rueda, tipo de frame). Se optó por especificaciones generales antes que por datos exactos no verificables.
- `Video` ya no tiene `duration`: el dato no está disponible sin llamar a la API de YouTube y no aporta al MVP.

## Sugerencias para el siguiente Sprint

1. Definir el modelo de datos de estas entidades con el Product Owner; el contenido de `data/` ya sirve como esquema de referencia.
2. Exponer los primeros endpoints REST de lectura y añadir `HttpContentSource`.
3. Definir la política de imágenes (modelos, marcas, distribuidores): banco propio, cesión de las marcas o imágenes con licencia explícita.
4. Definir de dónde y cada cuánto se actualizan las noticias, y si se automatiza con un feed.
5. Activar el buscador sobre el contenido ya existente (disciplinas, modelos, tutoriales, artículos).

## Qué queda pendiente

- Imágenes de las fichas de modelo y logos de los distribuidores: pendientes de la decisión de licencias.
- Política de actualización de noticias.
- Buscador funcional, botón "Comenzar" definitivo y tarjetas de "¿Quién eres?" (siguen siendo visuales).
- El "Comparador de patines" de la sección "Aprende antes de comprar" sigue sin ruta propia.
- Login, pagos, entrenamientos, IA, progreso, Plus/Elite, panel de administración y modelo de datos: fuera del alcance autorizado.

---

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
- El primer despliegue en Vercel devolvía `404 NOT_FOUND`: al ser un monorepo, el proyecto de Vercel debe apuntar a `frontend` como Root Directory. Se añadió `frontend/vercel.json` y [docs/deployment.md](docs/deployment.md) con la configuración exacta; el código no era la causa.
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
- Dominio definitivo en `NEXT_PUBLIC_SITE_URL` para metadata, sitemap y robots (también como variable de entorno en Vercel).
- Plataforma de despliegue del backend y de PostgreSQL.
