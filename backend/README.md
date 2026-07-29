# backend

API REST de ProRoller construida con NestJS.

## Estado del Sprint 1

Solo infraestructura: configuración por entorno, prefijo global `/api`, CORS, `ValidationPipe` global y un módulo `health`. No hay módulos de negocio todavía.

## Estructura

```
src/
  config/            configuración tipada leída del entorno
  modules/           un directorio por módulo de negocio, independiente y con su propio controller/service/dto
    health/
  main.ts            bootstrap de la aplicación
  app.module.ts      composición de módulos
```

Cada módulo nuevo se agrega en `src/modules/<modulo>` y se importa en `AppModule`, sin acoplarse a otros módulos.

## Scripts

```bash
npm run start:dev --workspace backend   # desarrollo con watch
npm run build --workspace backend
npm run lint --workspace backend
npm run typecheck --workspace backend
npm run test --workspace backend
```

## Endpoints

- `GET /api/health` → estado del servicio.
