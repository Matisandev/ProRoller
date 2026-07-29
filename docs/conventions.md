# Convenciones

## Commits

Conventional Commits, validados por commitlint en el hook `commit-msg`.

```
feat: agrega la sección de disciplinas
fix: corrige el foco del menú móvil
docs: documenta el Design System
chore: actualiza dependencias
```

Tipos habituales: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`.

## Hooks de Git (Husky)

- `pre-commit`: Prettier sobre los archivos en staging (`lint-staged`).
- `commit-msg`: validación del mensaje con commitlint.

Se instalan con `npm install` en la raíz (script `prepare`).

## Estilo de código

- TypeScript en modo estricto en frontend y backend.
- ESLint por paquete: `eslint-config-next` en el frontend, `typescript-eslint` en el backend.
- Prettier con la configuración de `.prettierrc` (comillas simples, 100 columnas, punto y coma).
- Comentarios solo cuando aportan contexto que el código no puede expresar.

## Nombres de archivo

- Componentes React: `PascalCase.tsx`.
- Utilidades, datos, configuración y servicios: `kebab-case.ts`.

## Integración continua

`.github/workflows/ci.yml` ejecuta `format:check`, `lint`, `typecheck` y `build` en cada Pull Request.
