# Arquitectura

## Monorepo

| Paquete     | Responsabilidad                                              |
| ----------- | ------------------------------------------------------------ |
| `frontend/` | Interfaz pública (y en el futuro el panel de administración) |
| `backend/`  | API REST y lógica de dominio                                 |
| `database/` | Esquema Prisma y migraciones de PostgreSQL                   |
| `docs/`     | Documentación técnica                                        |

Se usan workspaces de npm: un único `npm install` en la raíz instala los tres paquetes y los scripts de calidad se ejecutan de forma transversal.

## Frontend

Capas, de fuera hacia dentro:

1. `app/` — rutas y metadata. Sin lógica de presentación.
2. `components/landing/` — una sección por bloque de la portada. Piden datos a `services/` y textos a `i18n/`.
3. `components/cards/` — tarjetas de dominio: traducen una entidad a componentes del Design System.
4. `components/ui/` — Design System propio, sin conocimiento del dominio.
5. `services/` — única puerta de acceso al contenido.
6. `data/` — contenido de demostración del MVP, consumido solo por la implementación mock de `services/`.

### Rutas

| Ruta                  | Contenido                                |
| --------------------- | ---------------------------------------- |
| `/`                   | Portada                                  |
| `/disciplinas[/slug]` | Índice y ficha de disciplina             |
| `/marcas[/slug]`      | Índice y ficha de marca                  |
| `/modelos[/slug]`     | Índice y ficha de modelo                 |
| `/tutoriales[/slug]`  | Índice y tutorial de técnica             |
| `/articulos[/slug]`   | Índice y artículo                        |
| `/noticias`           | Resúmenes con enlace a la fuente oficial |
| `/distribuidores`     | Directorio editorial de distribuidores   |

Las rutas de detalle usan `generateStaticParams()` y `generateMetadata()`, y responden `notFound()` cuando el slug no existe. Los identificadores del contenido son los slugs: al pasar a la API REST, la clave sigue siendo la misma.

### Paso de mocks a la API REST

`services/content-source.ts` define el contrato `ContentSource`. Hoy lo implementa `mock-content-source.ts`. Cuando el backend exponga endpoints, se añade `http-content-source.ts` con la misma interfaz y se cambia una sola línea en `services/index.ts`. Ninguna sección ni tarjeta necesita cambios.

### Internacionalización

- `i18n/config.ts` declara los idiomas soportados (`locales`) y el idioma por defecto.
- `i18n/messages/<locale>.ts` contiene toda la copia de interfaz.
- `i18n/index.ts` expone `getMessages(locale)` e `interpolate(template, values)`.

Ningún componente escribe texto literal. Añadir un idioma implica crear un diccionario nuevo y registrarlo; la estructura de rutas por idioma (`/[locale]/...`) queda pendiente de autorización y no se implementó en este Sprint.

### Rendimiento

- Server Components por defecto; Client Components solo en `Navbar`, `Modal` y `Reveal`.
- Las secciones que obtienen contenido se renderizan dentro de `Suspense`, con `SkeletonGrid` como fallback, de modo que al conectar la API no haya que reestructurar la página.
- `next/font` con `display: swap` para la tipografía.
- Los videos se muestran con embeds de `youtube-nocookie.com` en `iframe` con `loading="lazy"`. ProRoller no descarga ni aloja videos.
- Las miniaturas de YouTube se sirven con `next/image` (`remotePatterns` en `next.config.ts`). Las imágenes de modelos y logos de distribuidores quedan pendientes de definir su licencia.

### SEO

- Metadata y Open Graph en `app/layout.tsx`, con `metadataBase` desde `NEXT_PUBLIC_SITE_URL`.
- `app/sitemap.ts` y `app/robots.ts` generan `sitemap.xml` y `robots.txt`.
- `app/sitemap.ts` recorre el contenido desde `services/`, por lo que las rutas dinámicas entran solas al sitemap.
- Cada página construye su metadata con `lib/metadata.ts` (`title`, `description`, canonical y Open Graph).

### Accesibilidad

HTML semántico (`header`, `nav`, `main`, `section`, `footer`, listas), enlace de salto al contenido, `aria-label` en navegaciones e iconos decorativos con `aria-hidden`, estados de foco visibles, `aria-expanded`/`aria-controls` en el menú móvil, `role="dialog"` con `aria-modal` y cierre con `Escape` en `Modal`, y `prefers-reduced-motion` respetado en las animaciones.

## Backend

NestJS modular: `src/modules/<modulo>` con su propio controller, service, DTOs y tipos. `AppModule` solo compone módulos. `src/config` centraliza la configuración leída del entorno. Prefijo global `/api`, CORS configurable y `ValidationPipe` global.

En el Sprint 1 solo existe el módulo `health`. Los módulos de negocio (artículos, disciplinas, patines, marcas, videos, tiendas, resultados) se crearán cuando el Product Owner defina el modelo de datos.

## Base de datos

PostgreSQL en Docker y Prisma como ORM. `database/prisma/schema.prisma` declara únicamente `datasource` y `generator`: no hay modelos, migraciones ni entidades, tal como se indicó.

## Docker

`docker compose up -d` levanta `database`, `backend` y `frontend`. El backend espera a que PostgreSQL esté sano (`healthcheck`). Los Dockerfiles son multi-stage (`development` y `production`) para reutilizarlos en despliegue.
