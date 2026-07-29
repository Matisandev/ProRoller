# database

Capa de datos de ProRoller: PostgreSQL + Prisma ORM.

## Contenido

- `prisma/schema.prisma`: esquema base. En el Sprint 1 solo define el `datasource` y el `generator`; todavía no hay modelos.

## Uso

Requiere `DATABASE_URL` (ver `.env.example` en la raíz).

```bash
npm run generate --workspace @proroller/database      # genera el cliente Prisma
npm run migrate:dev --workspace @proroller/database   # crea/aplica migraciones en desarrollo
npm run studio --workspace @proroller/database        # explorador de datos
```

Con Docker Compose, la base queda disponible en `database:5432` dentro de la red y en `localhost:5432` desde el host.
