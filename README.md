# ProRoller

Plataforma web educativa y técnica de patinaje. ProRoller no es un e-commerce: no vende productos, no gestiona stock y no cobra comisiones por ventas.

Este repositorio es el monorepo del proyecto.

```
proroller/
  frontend/    Next.js 15 (App Router) + React + TypeScript + TailwindCSS
  backend/     NestJS + TypeScript (API REST)
  database/    PostgreSQL + Prisma (esquema y migraciones)
  docs/        documentación de arquitectura y convenciones
```

## Estado actual

Sprint 1: base del proyecto y Landing Page con datos mock. Sin autenticación, sin pagos, sin entrenamientos, sin IA, sin rutas adicionales, sin funcionalidades Premium.

## Puesta en marcha con Docker

```bash
cp .env.example .env
docker compose up -d
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001/api/health
- PostgreSQL: localhost:5432

```bash
docker compose logs -f    # seguir logs
docker compose down       # detener
```

## Desarrollo local sin Docker

Requiere Node.js 20+.

```bash
npm install
npm run dev:frontend   # http://localhost:3000
npm run dev:backend    # http://localhost:3001
```

## Calidad

```bash
npm run lint         # ESLint en frontend y backend
npm run typecheck    # TypeScript en modo estricto
npm run format       # Prettier
npm run build        # build de frontend y backend
```

Husky ejecuta Prettier sobre los archivos en staging (`pre-commit`) y valida los mensajes de commit con Conventional Commits (`commit-msg`).

## Despliegue

El frontend se despliega en Vercel importando el repositorio sin configuración manual: el `vercel.json` de la raíz construye el workspace `frontend`. Detalle completo en [docs/deployment.md](docs/deployment.md).

## Documentación

- [docs/architecture.md](docs/architecture.md)
- [docs/deployment.md](docs/deployment.md)
- [docs/design-system.md](docs/design-system.md)
- [docs/admin-panel.md](docs/admin-panel.md)
- [docs/conventions.md](docs/conventions.md)
- [docs/suggestions.md](docs/suggestions.md)
- [SPRINT_SUMMARY.md](SPRINT_SUMMARY.md)
