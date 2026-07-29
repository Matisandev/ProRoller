# Sugerencias pendientes de autorización

Mejoras detectadas durante el Sprint 1. Ninguna está implementada: requieren validación del Product Owner.

## Producto

- Rutas por sección (`/disciplinas`, `/articulos/<slug>`, `/tiendas`) en lugar de anclas, cuando exista contenido real.
- Buscador funcional: hoy la barra de búsqueda es visual, sin endpoint ni índice.
- Ficha de disciplina y ficha de tienda como páginas propias.
- Criterios públicos de valoración de tiendas, para hacer visible que las calificaciones no dependen de pagos.

## Frontend

- Rutas por idioma (`/[locale]/...`) con detección de idioma del navegador; la capa de i18n ya está preparada.
- `next/image` con imágenes reales de disciplinas, artículos y videos.
- Tests de componentes y test de accesibilidad automatizado.
- Página de estado vacío y de error propias (`error.tsx`, `not-found.tsx`) con el Design System.

## Backend

- Módulos de negocio y DTOs una vez definido el modelo de datos.
- Versionado de la API (`/api/v1`) antes de exponerla públicamente.
- Documentación OpenAPI/Swagger del backend.
- Observabilidad: logs estructurados y healthcheck con verificación de base de datos.

## Infraestructura

- Pipeline de despliegue y entornos (staging, producción).
- Dependabot o Renovate para actualizaciones de dependencias.
