# Despliegue

## Frontend en Vercel

ProRoller es un monorepo con workspaces de npm: la aplicación Next.js vive en `frontend/`, no en la raíz.

### El problema

Vercel detecta el framework leyendo el `package.json` del Root Directory del proyecto. Con el Root Directory en la raíz del repositorio (valor por defecto al importar), encuentra el `package.json` del workspace raíz, que no declara `next`, y el build termina con:

```
Error: No Next.js version detected. Make sure your package.json has "next" in either
"dependencies" or "devDependencies".
```

### La solución aplicada

El repositorio está preparado para desplegarse **sin configuración manual en Vercel**:

1. **`vercel.json` en la raíz**: instala el monorepo completo, construye solo el workspace del frontend y apunta al output de Next.js.

   ```json
   {
     "framework": "nextjs",
     "installCommand": "npm install",
     "buildCommand": "npm run build --workspace frontend",
     "outputDirectory": "frontend/.next"
   }
   ```

2. **`next`, `react` y `react-dom` declarados en el `package.json` de la raíz**, con la **misma versión exacta** que `frontend/package.json`. Existen solo para que Vercel detecte Next.js desde la raíz; npm los deduplica con los del workspace (`npm ls next react` muestra `deduped`), así que no se instalan dos copias.

   > Al subir la versión de Next.js o de React hay que hacerlo en los dos `package.json` a la vez. Si las versiones se desincronizan, npm instala dos copias de React y el build del frontend falla al prerenderizar.

3. **`frontend/vercel.json`**: cubre el caso en que el proyecto de Vercel sí apunte a `frontend` como Root Directory (la configuración recomendada oficialmente para monorepos). Ambos caminos funcionan.

4. **`prepare: husky || true`** en la raíz: en el entorno de build de Vercel no hay `.git`, y `husky` no puede instalar los hooks.

### Configuración del proyecto en Vercel

| Ajuste                                             | Valor                                           |
| -------------------------------------------------- | ----------------------------------------------- |
| Root Directory                                     | vacío (raíz) o `frontend`; ambos funcionan      |
| Framework Preset                                   | Next.js                                         |
| Build Command / Output Directory / Install Command | por defecto (los define `vercel.json`)          |
| Include source files outside of Root Directory     | activado (solo si Root Directory es `frontend`) |
| Node.js Version                                    | 20.x                                            |

### Variables de entorno

| Variable               | Valor                                            | Obligatoria          |
| ---------------------- | ------------------------------------------------ | -------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del despliegue (`https://<dominio>`) | No, pero recomendada |

Si no se define, metadata, Open Graph, `sitemap.xml` y `robots.txt` usan `http://localhost:3000`.

### Comprobación local

```bash
npm install
npm run build --workspace frontend
```

La salida debe incluir la ruta `/` como prerenderizada:

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /robots.txt
└ ○ /sitemap.xml
```

## Backend y base de datos

No se despliegan en Vercel: son un servicio NestJS de larga duración y una base PostgreSQL. La plataforma de despliegue del backend queda pendiente de definición.
