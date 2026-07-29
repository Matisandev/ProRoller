# Panel de administración

ProRoller tendrá un panel de administración **propio**, construido con Next.js y NestJS. No se usará Strapi, Directus, Payload ni ningún CMS externo.

Este Sprint no implementa el panel: solo deja la arquitectura preparada.

## Cómo queda preparado

- **Frontend**: el App Router permite añadir un grupo de rutas aislado (por ejemplo `frontend/src/app/(admin)/`) con su propio layout, reutilizando el Design System de `components/ui/` sin duplicar componentes.
- **Backend**: cada módulo de negocio vivirá en `backend/src/modules/<modulo>` y expondrá sus operaciones de lectura para la web pública y de escritura para el panel, bajo el prefijo `/api`.
- **Datos**: el frontend accede al contenido únicamente a través del contrato `ContentSource`. Cuando exista la API, el panel escribirá y la web pública leerá por la misma API REST.
- **Base de datos**: Prisma ya está configurado; los modelos los definirá el Product Owner.

## Decisiones pendientes de validación

Estas decisiones afectan al producto y no se toman por iniciativa propia:

- Autenticación y roles del panel (administrador, editor, colaborador).
- Flujo editorial (borrador, revisión, publicación).
- Gestión de archivos e imágenes.
- Auditoría de cambios.
- Modelo de datos de cada módulo.
