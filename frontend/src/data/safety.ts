import type { ProtectiveGear } from '@/types';

/**
 * Fichas por tipo de protección, no por producto comercial. ProRoller no vende, no
 * maneja stock y no publica precios: describe qué mirar antes de comprar.
 */
export const protectiveGear: readonly ProtectiveGear[] = [
  {
    id: 'cascos',
    name: 'Cascos',
    summary:
      'La protección que no se negocia. Cubre la única lesión que puede cambiarte la vida de forma permanente.',
    images: [],
    specs: [
      { label: 'Tipo', value: 'Casco de skate con cobertura trasera, o integral para descensos' },
      { label: 'Talla', value: 'Según perímetro de cabeza indicado por el fabricante' },
      { label: 'Ajuste', value: 'Ruedecilla trasera o almohadillas intercambiables' },
      { label: 'Ventilación', value: 'Variable según modelo y uso' },
      {
        label: 'Vida útil',
        value: 'Según fabricante; reemplazo obligatorio tras un impacto fuerte',
      },
    ],
    materials: [
      'Carcasa exterior de ABS o policarbonato.',
      'Espuma interior de EPS o EPP que absorbe el impacto deformándose.',
      'Almohadillas interiores lavables y correa con hebilla.',
    ],
    certifications: [
      'EN 1078: norma europea para cascos de ciclismo, patinaje y skate.',
      'ASTM F1492: norma estadounidense para cascos de skate, con impactos múltiples.',
      'CPSC 16 CFR 1203: norma estadounidense habitual en cascos de ciclismo.',
    ],
    editorialOpinion: [
      'Es la compra más importante de todo el equipo y, en general, la más barata en proporción al riesgo que cubre. Si el presupuesto obliga a elegir, preferimos un patín de gama de entrada con un buen casco antes que un patín de gama alta sin casco.',
      'Nuestro criterio: casco certificado, bien ajustado y puesto siempre, sin excepciones por trayectos cortos.',
    ],
    considerations: [
      'Un casco mal ajustado o echado hacia atrás deja expuesta la zona que más se golpea.',
      'Después de un impacto importante hay que reemplazarlo, aunque por fuera se vea intacto.',
      'Los cascos sin norma declarada no ofrecen garantías de ensayo.',
    ],
    videoIds: ['casco-elegir', 'casco-comprar-online'],
  },
  {
    id: 'munequeras',
    name: 'Muñequeras',
    summary:
      'Cubren la lesión más frecuente de los primeros meses, porque al caer la mano sale sola.',
    images: [],
    specs: [
      { label: 'Tipo', value: 'Con férula rígida en la palma' },
      { label: 'Sujeción', value: 'Velcro en muñeca y antebrazo' },
      { label: 'Movilidad', value: 'Debe permitir cerrar el puño' },
      { label: 'Talla', value: 'Según circunferencia de muñeca y antebrazo' },
    ],
    materials: [
      'Férula de plástico rígido en la palma, y a veces también en el dorso.',
      'Tejido elástico transpirable con refuerzos.',
      'Cintas de velcro para el ajuste.',
    ],
    certifications: [
      'EN 14120: norma europea de protecciones para deportes de ruedas (muñecas, codos y rodillas).',
    ],
    editorialOpinion: [
      'Si tuviéramos que elegir una sola protección además del casco, serían las muñequeras. Cambian el resultado de la caída más común del aprendizaje.',
      'Además tienen un efecto secundario útil: al usarlas se aprende a caer con el puño cerrado y deslizando, que es exactamente la técnica correcta.',
    ],
    considerations: [
      'Si la férula está doblada o partida, la muñequera dejó de proteger.',
      'Una muñequera que gira en el brazo está mal ajustada o es de talla equivocada.',
    ],
    videoIds: ['protecciones-tips', 'protecciones-completas'],
  },
  {
    id: 'rodilleras',
    name: 'Rodilleras',
    summary:
      'Permiten entrenar la caída hacia adelante, que es la caída segura y la que se enseña primero.',
    images: [],
    specs: [
      { label: 'Tipo', value: 'Elástica con almohadilla, o de carcasa dura para skatepark' },
      { label: 'Sujeción', value: 'Manga elástica y correas de velcro' },
      { label: 'Cobertura', value: 'Rótula y contorno' },
      { label: 'Talla', value: 'Según circunferencia de muslo y pantorrilla' },
    ],
    materials: [
      'Carcasa de plástico duro en modelos de skatepark.',
      'Espuma de alta densidad como almohadilla.',
      'Tejido elástico transpirable y correas de velcro.',
    ],
    certifications: [
      'EN 14120: norma europea de protecciones para deportes de ruedas (muñecas, codos y rodillas).',
    ],
    editorialOpinion: [
      'Son la protección que más confianza entrega al aprender, porque permiten arrodillarse a propósito para detener una caída en vez de resistirla.',
      'Para calle recomendamos rodilleras elásticas bien ajustadas; para rampas y cajones, carcasa dura que permita deslizar.',
    ],
    considerations: [
      'Una rodillera que baja al patinar no sirve: revisa talla y sujeción.',
      'La almohadilla comprimida de forma permanente ya no absorbe impactos.',
    ],
    videoIds: ['rodilleras-para-que-sirven', 'protecciones-completas'],
  },
  {
    id: 'coderas',
    name: 'Coderas',
    summary: 'Cubren una zona con poco tejido blando, donde el golpe llega directo al hueso.',
    images: [],
    specs: [
      { label: 'Tipo', value: 'Elástica con almohadilla o con carcasa dura' },
      { label: 'Sujeción', value: 'Manga elástica y velcro' },
      { label: 'Cobertura', value: 'Punta del codo y contorno' },
      { label: 'Talla', value: 'Según circunferencia del brazo' },
    ],
    materials: [
      'Carcasa de plástico duro en modelos de skatepark.',
      'Espuma de alta densidad.',
      'Tejido elástico transpirable.',
    ],
    certifications: [
      'EN 14120: norma europea de protecciones para deportes de ruedas (muñecas, codos y rodillas).',
    ],
    editorialOpinion: [
      'Suelen ser las primeras que se dejan de usar y las que más se echan de menos en caídas laterales. Son livianas: no hay buena razón para dejarlas en la casa.',
      'En skatepark y al entrenar derrapes las consideramos parte del equipo mínimo.',
    ],
    considerations: [
      'Si la codera gira alrededor del brazo, no protegerá en el momento del golpe.',
      'Revisa costuras y velcro de forma periódica.',
    ],
    videoIds: ['protecciones-tips', 'protecciones-patines'],
  },
  {
    id: 'shorts',
    name: 'Shorts de protección',
    summary: 'Protegen cadera y coxis, los golpes que menos se ven y más tiempo dejan fuera.',
    images: [],
    specs: [
      { label: 'Tipo', value: 'Short con almohadillas integradas' },
      { label: 'Zonas cubiertas', value: 'Cadera, glúteos y coxis' },
      { label: 'Uso', value: 'Bajo la ropa habitual' },
      { label: 'Talla', value: 'Según tabla del fabricante' },
    ],
    materials: [
      'Tejido elástico transpirable.',
      'Almohadillas de espuma de alta densidad, fijas o extraíbles.',
    ],
    certifications: [
      'Varía según fabricante y mercado; algunos modelos declaran normas de protección de impacto.',
    ],
    editorialOpinion: [
      'Son la protección menos vistosa y una de las más útiles cuando se entrenan derrapes o patinaje de espaldas, donde el impacto llega a la cadera.',
      'No reemplazan al casco ni a las muñequeras: se suman.',
    ],
    considerations: [
      'Si las almohadillas se desplazan al moverte, la talla no es la correcta.',
      'Es la prenda que más transpira: conviene que las almohadillas sean lavables.',
    ],
    videoIds: ['protecciones-patines', 'protecciones-siempre'],
  },
];

/** Guías editoriales de seguridad. Se administran como artículos. */
export const safetyGuideIds: readonly string[] = [
  'por-que-usar-casco',
  'elegir-casco',
  'elegir-munequeras',
  'elegir-rodilleras',
  'elegir-coderas',
  'elegir-shorts',
  'reemplazar-proteccion',
];
