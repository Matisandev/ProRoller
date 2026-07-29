# frontend

Next.js 15 con App Router, React, TypeScript estricto y TailwindCSS v4.

## Estructura

```
src/
  app/               rutas del App Router, metadata, sitemap y robots
  components/
    ui/              Design System propio (Button, Card, Badge, Input, Modal, ...)
    layout/          Navbar y Footer
    cards/           tarjetas de dominio (DisciplineCard, ArticleCard, ...)
    landing/         secciones de la landing, una por bloque
  config/            configuración de navegación y del sitio
  data/              datos mock del Sprint 1
  i18n/              diccionarios de idioma y utilidades
  lib/               utilidades genéricas
  services/          acceso a contenido (contrato + implementación mock)
  types/             tipos de dominio compartidos
```

## Reglas del frontend

- Los componentes no contienen textos literales: la copia de interfaz vive en `src/i18n/messages/<locale>.ts`.
- Los componentes no importan datos mock: piden el contenido a `src/services`, que hoy resuelve con mocks y mañana con la API REST.
- Server Components por defecto; `'use client'` solo cuando hay estado o eventos del navegador (`Navbar`, `Modal`, `Reveal`).

## Scripts

```bash
npm run dev --workspace frontend
npm run build --workspace frontend
npm run lint --workspace frontend
npm run typecheck --workspace frontend
```

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: URL pública usada por metadata, Open Graph, sitemap y robots. Por defecto `http://localhost:3000`.
