# Sugerencias pendientes de autorización

Mejoras detectadas durante los Sprints 1 y 2. Ninguna está implementada: requieren validación del Product Owner.

## Decisiones abiertas del Sprint 2

- **Imágenes de modelos, marcas y distribuidores**: definir el origen y la licencia (banco propio, cesión de las marcas o imágenes con licencia explícita). El tipo `SkateModel` y `Distributor` ya aceptan una imagen con crédito y enlace de atribución.
- **Noticias**: definir la fuente o fuentes oficiales definitivas, cada cuánto se actualizan y si se automatiza con un feed. Hoy hay 5 resúmenes propios de World Skate con enlace al original.
- **Descripciones de los distribuidores**: validarlas con cada distribuidor antes de publicarlas; se redactaron de forma conservadora.

## Producto

- Buscador funcional: hoy la barra de búsqueda es visual, sin endpoint ni índice.
- Comparador de patines como página propia (hoy es solo una tarjeta de acceso).
- Criterios públicos de valoración de distribuidores, para hacer visible que las recomendaciones no dependen de pagos.

## Frontend

- Rutas por idioma (`/[locale]/...`) con detección de idioma del navegador; la capa de i18n ya está preparada.
- Imágenes propias para disciplinas, artículos y fichas de modelo.
- Tests de componentes y test de accesibilidad automatizado.
- Página de error propia (`error.tsx`) con el Design System; `not-found.tsx` ya existe.

## Backend

- Módulos de negocio y DTOs una vez definido el modelo de datos.
- Versionado de la API (`/api/v1`) antes de exponerla públicamente.
- Documentación OpenAPI/Swagger del backend.
- Observabilidad: logs estructurados y healthcheck con verificación de base de datos.

## Infraestructura

- Pipeline de despliegue y entornos (staging, producción).
- Dependabot o Renovate para actualizaciones de dependencias.
