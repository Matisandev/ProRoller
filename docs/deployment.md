# Despliegue

## Frontend en Vercel

ProRoller es un monorepo: la aplicación Next.js vive en `frontend/`, no en la raíz. Vercel solo detecta Next.js si el proyecto apunta a ese directorio. Con el Root Directory en la raíz del repositorio, el despliegue no encuentra ninguna aplicación y `/` responde `404 NOT_FOUND`.

### Configuración del proyecto en Vercel

En **Project Settings → General**:

| Ajuste                                         | Valor                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| Root Directory                                 | `frontend`                                                                    |
| Framework Preset                               | Next.js (se detecta automáticamente)                                          |
| Build Command                                  | `npm run build` (por defecto)                                                 |
| Output Directory                               | `.next` (por defecto)                                                         |
| Install Command                                | por defecto (Vercel detecta el workspace de npm y usa el lockfile de la raíz) |
| Include source files outside of Root Directory | activado (por defecto)                                                        |
| Node.js Version                                | 20.x                                                                          |

`frontend/vercel.json` fija framework, comando de build y directorio de salida, de modo que la única opción que hay que ajustar a mano es el **Root Directory**.

### Variables de entorno

En **Project Settings → Environment Variables**:

| Variable               | Valor                                            | Obligatoria          |
| ---------------------- | ------------------------------------------------ | -------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del despliegue (`https://<dominio>`) | No, pero recomendada |

Si no se define, metadata, Open Graph, `sitemap.xml` y `robots.txt` usan `http://localhost:3000`.

### Comprobación local del build de Vercel

```bash
cd frontend
npm install
npm run build
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
