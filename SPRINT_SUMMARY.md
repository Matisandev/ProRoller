# Sprint 2 — Plataforma completa de información (MVP web)

## Qué se implementó

### Menú principal

Inicio · Disciplinas · Dónde comprar · Dónde patinar · Noticias · ProRoller App. El resto del contenido (patines, seguridad, marcas, tiendas, tutoriales, artículos, resultados, eventos, Sobre ProRoller) se alcanza desde esas páginas y desde el footer.

### Rutas

| Ruta                              | Qué contiene                                                                                                |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `/`                               | Presentación, qué encontrarás, disciplinas, tutoriales, artículos, noticias e invitación a ProRoller App    |
| `/disciplinas[/slug]`             | 7 disciplinas (Freeskate, Slalom, Speed, Jump, Slide, Aggressive, Downhill) sin dificultad                  |
| `/tutoriales[/slug]`              | 12 tutoriales con nivel, objetivos, requisitos, explicación, puntos clave, videos y artículos               |
| `/articulos[/slug]`               | Artículos y guías redactados para ProRoller                                                                 |
| `/donde-comprar`                  | Aviso de casco + los cuatro bloques: patines, seguridad, marcas y tiendas                                   |
| `/donde-comprar/patines[/slug]`   | 9 fichas con info general, especificaciones, compatibilidad, uso por disciplina, opinión editorial y videos |
| `/donde-comprar/seguridad[/slug]` | 7 guías + 5 fichas de protecciones con materiales, certificaciones, opinión y consideraciones               |
| `/donde-comprar/marcas[/slug]`    | FR Skates, Powerslide, Seba, Flying Eagle y Micro                                                           |
| `/donde-comprar/tiendas`          | Alacalufe y Decathlon con el sello "Distribuidor recomendado por ProRoller"                                 |
| `/donde-patinar`                  | Spots, rutas y academias, con aviso de sección en desarrollo                                                |
| `/donde-patinar/spots[/slug]`     | Estructura completa con datos de ejemplo                                                                    |
| `/donde-patinar/rutas[/slug]`     | Distancia, tiempo, dificultad, superficie, requisitos y seguridad, con datos de ejemplo                     |
| `/donde-patinar/academias`        | Escuelas, clubes y grupos, con datos de ejemplo                                                             |
| `/noticias`                       | Noticias resumidas con enlace a la fuente oficial                                                           |
| `/noticias/resultados`            | 6 podios verificados de Santiago 2023 (competencia, prueba, fecha, oro, plata, bronce y fuente)             |
| `/noticias/eventos`               | Próximos grandes eventos nacionales e internacionales, con enlace al organizador                            |
| `/app`                            | Landing de ProRoller App: flujo de 3 pasos y planes Experience, Plus y Elite                                |
| `/sobre-proroller`                | Proyecto personal: por qué nació, sobre Matías Sandoval, filosofía, transparencia y futuro                  |

El build genera 81 páginas. Cada ruta de detalle usa `generateStaticParams()`, `generateMetadata()` y `notFound()`.

### Decisiones técnicas

- **Contenido desacoplado**: rutas y componentes solo consumen `services/`; `ContentSource` ganó disciplinas, tutoriales, artículos, marcas, modelos, protecciones, guías, tiendas, spots, rutas, academias, noticias, resultados, eventos, planes y "Sobre ProRoller". Al llegar la API REST se cambia la implementación, no las páginas.
- **Disciplinas sin nivel**: `Discipline` ya no tiene `recommendedLevel`. El nivel vive solo en tutoriales, spots y rutas.
- **i18n por cookie**: `proroller_locale` + Server Action (`i18n/actions.ts`) y selector en la barra superior con es/en/pt. No se crearon rutas `/[locale]/...` porque no está autorizado. La interfaz se traduce; el contenido editorial sigue publicado en español y se avisa en la interfaz.
- **Seguridad antes que rendimiento**: `HelmetNotice` aparece antes de cualquier ficha de patines, en `/donde-comprar` y en `/donde-comprar/patines`.
- **Tiendas**: `StoreLookup` muestra "Puedes buscar este modelo/producto en:" con Alacalufe y Decathlon, el sello editorial y el enlace al sitio oficial. Nunca stock, precio ni disponibilidad, y sin enlaces de afiliados.
- **Uso recomendado**: `DisciplineFitList` representa criterio editorial (`ideal`, `apto`, `limitado`), no una puntuación.
- **Datos de ejemplo señalizados**: spots, rutas y academias llevan `DevelopmentNotice` y badge de dato de ejemplo, porque la información real la levanta el Product Owner.
- **Imágenes**: en todo el sitio se usan marcadores (`ImagePlaceholder`) mientras no exista política de licencias. `ContentImage` ya acepta `url`, `alt`, `credit` y `creditUrl`.
- **Resultados verificables**: solo eventos ya disputados con fuente pública. Se retiró el resultado de patinaje sobre hielo por quedar fuera del alcance de las disciplinas de ProRoller.

### Problemas encontrados

- La migración de tipos (disciplinas sin nivel, `Distributor` → `Store`, compatibilidad como objeto) dejó consumidores desalineados: se migraron `DisciplineCard`, la ficha de modelo y las rutas de marcas, y se eliminaron `DistributorCard` y `Rating`.
- `not-found.tsx` no puede leer la cookie de idioma: se prerenderiza, así que usa el diccionario por defecto.
- Los `metadata` estáticos se construyen con el idioma por defecto; el `metadata` dependiente de la cookie requeriría `generateMetadata` en cada ruta y no aporta al SEO actual.

## Qué queda pendiente (requiere decisión del Product Owner)

1. Política de licencias de imágenes (patines, protecciones, marcas, tiendas, spots, rutas, academias).
2. Información real de spots, rutas y academias.
3. Traducción del contenido editorial a inglés y portugués (la infraestructura ya está lista).
4. Frecuencia de actualización de noticias, resultados y eventos.
5. Panel de administración propio y `HttpContentSource` (Sprint siguiente, ya documentado en `docs/admin-panel.md`).
