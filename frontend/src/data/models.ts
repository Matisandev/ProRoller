import type { DisciplineFit, SkateModel } from '@/types';

/**
 * Fichas técnicas de demostración del MVP. Cuando un dato depende de la versión o
 * del mercado se declara así de forma explícita: ProRoller no inventa especificaciones.
 */
const pendingSpec = 'Según configuración';

const fit = (
  ideal: readonly string[],
  apto: readonly string[],
  limitado: readonly string[],
): readonly DisciplineFit[] => [
  ...ideal.map((disciplineId) => ({ disciplineId, level: 'ideal' as const })),
  ...apto.map((disciplineId) => ({ disciplineId, level: 'apto' as const })),
  ...limitado.map((disciplineId) => ({ disciplineId, level: 'limitado' as const })),
];

export const skateModels: readonly SkateModel[] = [
  {
    id: 'fr1',
    name: 'FR1',
    brandId: 'fr-skates',
    description:
      'El modelo más reconocido de FR: bota semirrígida con muy buen soporte, pensada para freeskate urbano exigente y para quien ya patina seguido.',
    generalInfo: [
      { label: 'Marca', value: 'FR Skates' },
      { label: 'Modelo', value: 'FR1' },
      { label: 'Año', value: 'En producción en distintas generaciones desde la década de 2010' },
      { label: 'País de origen de la marca', value: 'Francia' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, con refuerzo lateral y acolchado grueso' },
      { label: 'Material de la bota', value: 'Carcasa plástica reforzada con liner acolchado' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Longitud del frame', value: `${pendingSpec} (versiones de 4x80 mm y de 3 ruedas)` },
      { label: 'Material del frame', value: 'Aluminio extruido' },
      { label: 'Montaje', value: 'Estándar UFS o 165 mm según versión' },
      { label: 'Rodamientos', value: `${pendingSpec} (habitualmente ABEC 7)` },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Alrededor de 85A' },
      { label: 'Diámetro', value: '80 mm; existen versiones con ruedas mayores' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: [
        'Frames de montaje UFS y de 165 mm, según la versión de la bota.',
        'Frames cortos de freeskate y frames largos de 3 ruedas.',
      ],
      wheelSizes: [
        'Hasta 80 mm en el frame original de 4 ruedas.',
        'Hasta 110 mm en versiones con frame de 3 ruedas.',
      ],
      spareParts: [
        'Liner, cordones, hebillas y taco de freno reemplazables.',
        'Tornillería y ejes de recambio disponibles en el mercado de repuestos.',
      ],
    },
    disciplineFit: fit(
      ['freeskate', 'slide'],
      ['slalom', 'jump', 'downhill'],
      ['speed', 'aggressive'],
    ),
    highlights: [
      'Soporte lateral muy alto: la bota aguanta derrapes y bajadas sin deformarse.',
      'Repuestos y frames de recambio fáciles de encontrar.',
      'Acolchado grueso que hace cómodas las sesiones largas.',
    ],
    considerations: [
      'La rigidez resta sensibilidad, sobre todo para slalom técnico.',
      'Es un patín pensado para quien ya patina seguido, no para la primera semana.',
      'Las configuraciones cambian según año y mercado: conviene revisar la ficha del vendedor.',
    ],
    editorialOpinion: [
      'El FR1 es uno de los referentes del freeskate por su soporte, su rigidez y sus posibilidades de personalización. Es una opción muy recomendable para quien busca un patín duradero y de alto rendimiento.',
      'Si estás partiendo desde cero, el FR3 o el FRX entregan una experiencia más tolerante por bastante menos dinero. El FR1 recién muestra su valor cuando empiezas a derrapar, bajar escaleras y patinar todos los días.',
    ],
    videoIds: ['freeskate-desde-cero', 'elegir-primeros-patines', 'slides-roex'],
    articleIds: ['primeros-patines', 'como-elegir-bota', 'por-que-no-fitness'],
  },
  {
    id: 'fr2',
    name: 'FR2',
    brandId: 'fr-skates',
    description:
      'Hermano directo del FR1, con una bota algo menos rígida. Buen equilibrio entre soporte y comodidad para patinaje urbano frecuente.',
    generalInfo: [
      { label: 'Marca', value: 'FR Skates' },
      { label: 'Modelo', value: 'FR2' },
      { label: 'Año', value: 'En producción en distintas generaciones desde la década de 2010' },
      { label: 'País de origen de la marca', value: 'Francia' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, algo más flexible que el FR1' },
      { label: 'Material de la bota', value: 'Carcasa plástica con liner acolchado' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio extruido' },
      { label: 'Montaje', value: 'Estándar UFS o 165 mm según versión' },
      { label: 'Rodamientos', value: `${pendingSpec} (habitualmente ABEC 7)` },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Alrededor de 85A' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: [
        'Comparte estándares de montaje con el resto de la línea FR.',
        'Admite frames cortos de freeskate y frames largos según montaje.',
      ],
      wheelSizes: ['Hasta 80 mm en el frame original.', 'Diámetros mayores con frame compatible.'],
      spareParts: [
        'Liner, cordones, hebillas y taco reemplazables.',
        'Recambios compartidos con otros modelos de la línea.',
      ],
    },
    disciplineFit: fit(
      ['freeskate'],
      ['slalom', 'slide', 'downhill'],
      ['speed', 'jump', 'aggressive'],
    ),
    highlights: [
      'Comodidad alta desde las primeras sesiones.',
      'Sostiene bien el tobillo sin llegar a la rigidez del FR1.',
      'Mismos repuestos y frames que el resto de la línea FR.',
    ],
    considerations: [
      'En derrapes agresivos la bota cede algo más que el FR1.',
      'La diferencia de precio con el FR1 es menor que la diferencia de soporte.',
    ],
    editorialOpinion: [
      'El FR2 es la opción intermedia de la línea FR y probablemente la más equilibrada: entrega casi todo el soporte del FR1 con una bota más amable para quien está subiendo de nivel.',
      'Nos parece una compra sensata para quien ya sabe frenar y quiere un patín que aguante uso urbano constante sin exigirle rigidez de competencia.',
    ],
    videoIds: ['freeskate-desde-cero', 'elegir-primeros-patines'],
    articleIds: ['primeros-patines', 'como-elegir-bota'],
  },
  {
    id: 'fr3',
    name: 'FR3',
    brandId: 'fr-skates',
    description:
      'La entrada más recomendable de FR: bota más blanda y precio más accesible, manteniendo frame de aluminio.',
    generalInfo: [
      { label: 'Marca', value: 'FR Skates' },
      { label: 'Modelo', value: 'FR3' },
      { label: 'Año', value: 'En producción en distintas generaciones desde la década de 2010' },
      { label: 'País de origen de la marca', value: 'Francia' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida de entrada, más flexible que FR1 y FR2' },
      { label: 'Material de la bota', value: 'Carcasa plástica con liner acolchado' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: 'Estándar UFS o 165 mm según versión' },
      { label: 'Rodamientos', value: `${pendingSpec} (habitualmente ABEC 7)` },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Alrededor de 85A' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: [
        'Mismos estándares de montaje de la línea FR, según versión.',
        'Permite cambiar a frames de mayor diámetro más adelante.',
      ],
      wheelSizes: ['Hasta 80 mm en el frame original.', 'Más diámetro con frame de recambio.'],
      spareParts: ['Liner, cordones, hebillas y taco reemplazables.'],
    },
    disciplineFit: fit(
      ['freeskate'],
      ['slalom', 'slide'],
      ['speed', 'jump', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Frame de aluminio en un patín de entrada, algo poco común.',
      'Bota tolerante mientras se aprende a frenar y girar.',
      'Escala bien: se le pueden cambiar ruedas y frame con el tiempo.',
    ],
    considerations: [
      'Menos soporte para derrapes intensos o saltos.',
      'A medida que subes de nivel, la bota se siente blanda.',
    ],
    editorialOpinion: [
      'El FR3 es nuestra recomendación más frecuente para un primer patín de freeskate: aguanta el aprendizaje completo, usa componentes estándar y no obliga a cambiar de patín cuando el nivel sube.',
      'Es un patín honesto. No busca rendimiento máximo, busca que aprendas sin frustrarte y sin gastar de más.',
    ],
    videoIds: ['elegir-primeros-patines', 'freeskate-desde-cero', 'aprender-desde-cero'],
    articleIds: ['primeros-patines', 'por-que-no-fitness', 'como-elegir-bota'],
  },
  {
    id: 'frx',
    name: 'FRX',
    brandId: 'fr-skates',
    description:
      'El modelo más accesible de la línea FR, orientado a quien parte en el patinaje urbano.',
    generalInfo: [
      { label: 'Marca', value: 'FR Skates' },
      { label: 'Modelo', value: 'FRX' },
      { label: 'Año', value: 'En producción en distintas generaciones desde la década de 2010' },
      { label: 'País de origen de la marca', value: 'Francia' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'De entrada, con acolchado más simple' },
      { label: 'Material de la bota', value: 'Carcasa plástica con liner básico' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: 'Estándar de la línea FR según versión' },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Alrededor de 82A a 85A según versión' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: ['Compatible con frames de la línea FR según su montaje.'],
      wheelSizes: ['Hasta 80 mm en el frame original.'],
      spareParts: ['Liner, cordones, hebillas y taco reemplazables.'],
    },
    disciplineFit: fit(
      ['freeskate'],
      ['slalom'],
      ['speed', 'jump', 'slide', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Precio de entrada con frame de aluminio.',
      'Buena opción para saber si el freeskate te gusta antes de invertir más.',
    ],
    considerations: [
      'Acolchado y soporte menores que el FR3.',
      'No es el patín indicado para derrapes intensos ni saltos.',
    ],
    editorialOpinion: [
      'El FRX cumple un rol claro: dejar entrar al freeskate sin un gasto alto. Si tu duda es "¿me va a gustar esto?", responde bien esa pregunta.',
      'Si ya sabes que vas a patinar seguido, la diferencia con el FR3 se paga sola en comodidad y soporte.',
    ],
    videoIds: ['elegir-primeros-patines', 'aprender-desde-cero'],
    articleIds: ['primeros-patines', 'por-que-no-fitness'],
  },
  {
    id: 'powerslide-next',
    name: 'Powerslide Next',
    brandId: 'powerslide',
    description:
      'Plataforma modular de Powerslide que se arma en distintas configuraciones de ruedas, desde uso urbano hasta ruedas grandes para distancia.',
    generalInfo: [
      { label: 'Marca', value: 'Powerslide' },
      { label: 'Modelo', value: 'Next' },
      { label: 'Año', value: 'Línea con múltiples versiones y ediciones anuales' },
      { label: 'País de origen de la marca', value: 'Alemania' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida con soporte de tobillo' },
      { label: 'Material de la bota', value: 'Carcasa reforzada; algunas versiones usan carbono' },
      { label: 'Frame', value: 'Aluminio, disponible en varios largos' },
      {
        label: 'Longitud del frame',
        value: 'Según configuración: versiones para 80, 90, 100, 110 y 125 mm',
      },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: 'Trinity de tres puntos, propio de Powerslide' },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: 'Según configuración elegida' },
      {
        label: 'Dureza',
        value: 'Según configuración; más duras para derrape, más blandas para ruta',
      },
      { label: 'Diámetro', value: 'Desde 80 mm hasta 125 mm según versión' },
      { label: 'Peso aproximado', value: 'Varía según frame y ruedas' },
    ],
    compatibility: {
      frames: [
        'Frames con montaje Trinity de tres puntos.',
        'Amplia oferta de largos dentro del mismo ecosistema de la marca.',
      ],
      wheelSizes: ['Desde 80 mm hasta 125 mm, según el frame instalado.'],
      spareParts: [
        'Liner, hebillas, tornillería y frames intercambiables.',
        'Ruedas y rodamientos estándar del mercado.',
      ],
    },
    disciplineFit: fit(
      ['freeskate'],
      ['speed', 'downhill', 'slide'],
      ['slalom', 'jump', 'aggressive'],
    ),
    highlights: [
      'Modularidad real: el mismo patín cambia de carácter según el frame.',
      'El montaje Trinity baja el pie respecto del suelo y mejora la transmisión del empuje.',
      'Sirve tanto para ciudad como para distancia si se elige bien la configuración.',
    ],
    considerations: [
      'El montaje Trinity limita el recambio a frames compatibles.',
      'Elegir mal la configuración de ruedas cambia por completo la experiencia.',
    ],
    editorialOpinion: [
      'El Next es el patín más versátil de esta selección. Bien configurado sirve para ciudad, para distancia y para bajadas suaves; mal configurado se siente inestable o pesado.',
      'Lo recomendamos a quien ya sabe qué tipo de patinaje quiere hacer y valora poder cambiar de frame sin cambiar de patín.',
    ],
    videoIds: ['elegir-frames', 'freeskate-desde-cero', 'speed-tips'],
    articleIds: ['como-elegir-frame', 'como-elegir-ruedas'],
  },
  {
    id: 'flying-eagle-f5s',
    name: 'Flying Eagle F5S',
    brandId: 'flying-eagle',
    description:
      'Patín orientado a slalom y freeskate, con bota baja y frame plano. Muy presente en la escena técnica.',
    generalInfo: [
      { label: 'Marca', value: 'Flying Eagle' },
      { label: 'Modelo', value: 'F5S' },
      { label: 'Año', value: 'Línea con revisiones periódicas' },
      { label: 'País de origen de la marca', value: 'China' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Baja, con tobillo relativamente libre' },
      { label: 'Material de la bota', value: 'Carcasa plástica con refuerzos; según versión' },
      { label: 'Frame', value: 'Aluminio plano, orientado a slalom' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: pendingSpec },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Media-alta, según versión' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: ['Frames de slalom y freeskate compatibles con su montaje.'],
      wheelSizes: ['Hasta 80 mm en el frame original.'],
      spareParts: ['Liner, cordones y hebillas reemplazables según versión.'],
    },
    disciplineFit: fit(
      ['slalom'],
      ['freeskate', 'slide'],
      ['speed', 'jump', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Bota baja que deja trabajar el tobillo, clave para slalom.',
      'Frame plano que favorece los giros de punta y talón.',
      'Relación precio/rendimiento muy competitiva.',
    ],
    considerations: [
      'Menor soporte para bajadas largas o saltos.',
      'La disponibilidad de repuestos depende del distribuidor local.',
    ],
    editorialOpinion: [
      'El F5S es un patín pensado para la técnica fina. Si tu objetivo son los conos, entrega sensibilidad que un patín freeskate rígido no te va a dar.',
      'Para calle dura, escaleras y derrapes intensos preferimos una bota con más soporte.',
    ],
    videoIds: ['slalom-iniciacion', 'slalom-cruzados-roex'],
    articleIds: ['freeskate-vs-slalom', 'como-elegir-bota'],
  },
  {
    id: 'flying-eagle-f6s',
    name: 'Flying Eagle F6S',
    brandId: 'flying-eagle',
    description:
      'Evolución de la línea técnica de Flying Eagle, con mejoras de bota y frame respecto del F5S.',
    generalInfo: [
      { label: 'Marca', value: 'Flying Eagle' },
      { label: 'Modelo', value: 'F6S' },
      { label: 'Año', value: 'Línea con revisiones periódicas' },
      { label: 'País de origen de la marca', value: 'China' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Baja, orientada a slalom, con refuerzos' },
      {
        label: 'Material de la bota',
        value: `${pendingSpec}; algunas versiones incorporan carbono`,
      },
      { label: 'Frame', value: 'Aluminio plano' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: pendingSpec },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Media-alta, según versión' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: ['Frames de slalom y freeskate compatibles con su montaje.'],
      wheelSizes: ['Hasta 80 mm en el frame original.'],
      spareParts: ['Liner, cordones y hebillas reemplazables según versión.'],
    },
    disciplineFit: fit(
      ['slalom'],
      ['freeskate', 'slide'],
      ['speed', 'jump', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Más soporte que el F5S sin perder sensibilidad para conos.',
      'Buen acabado para su rango de precio.',
    ],
    considerations: [
      'Las diferencias con el F5S varían según la versión: conviene comparar fichas.',
      'Repuestos sujetos a disponibilidad del distribuidor.',
    ],
    editorialOpinion: [
      'El F6S es el paso natural para quien ya hace slalom en serio y quiere una bota que responda más rápido.',
      'Sigue siendo un patín técnico: si tu plan es bajar cerros y escaleras, hay opciones mejores.',
    ],
    videoIds: ['slalom-cruzados-roex', 'slalom-conos'],
    articleIds: ['freeskate-vs-slalom', 'como-elegir-bota'],
  },
  {
    id: 'seba-high-light',
    name: 'Seba High Light',
    brandId: 'seba',
    description:
      'Referencia histórica del slalom de alto nivel: bota alta y liviana con muy buena respuesta.',
    generalInfo: [
      { label: 'Marca', value: 'Seba' },
      { label: 'Modelo', value: 'High Light' },
      { label: 'Año', value: 'Línea con distintas generaciones' },
      { label: 'País de origen de la marca', value: 'Francia' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Alta y liviana, orientada a slalom' },
      { label: 'Material de la bota', value: `${pendingSpec}; versiones con refuerzos livianos` },
      { label: 'Frame', value: 'Aluminio plano de slalom' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: '165 mm según versión' },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Media-alta' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Bajo para su categoría; varía según talla' },
    ],
    compatibility: {
      frames: ['Frames de slalom con montaje compatible, según versión.'],
      wheelSizes: ['Hasta 80 mm en el frame original.'],
      spareParts: ['Liner, cordones, hebillas y tornillería según disponibilidad.'],
    },
    disciplineFit: fit(
      ['slalom'],
      ['freeskate'],
      ['speed', 'jump', 'slide', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Muy liviano para el nivel de soporte que entrega.',
      'Respuesta inmediata en trucos de precisión.',
      'Modelo con historia y prestigio dentro del slalom.',
    ],
    considerations: [
      'Disponibilidad irregular según mercado y generación.',
      'Precio alto para quien recién empieza.',
    ],
    editorialOpinion: [
      'El High Light es un patín de especialista. Para slalom técnico entrega una precisión difícil de igualar en su rango.',
      'No lo recomendamos como primer patín: rinde cuando ya tienes la base y sabes qué le vas a pedir.',
    ],
    videoIds: ['slalom-iniciacion', 'slalom-conos'],
    articleIds: ['freeskate-vs-slalom', 'como-elegir-bota'],
  },
  {
    id: 'micro-mt-plus',
    name: 'Micro MT Plus',
    brandId: 'micro',
    description:
      'Patín versátil de Micro, con buen acabado y una bota que funciona tanto en slalom como en ciudad.',
    generalInfo: [
      { label: 'Marca', value: 'Micro' },
      { label: 'Modelo', value: 'MT Plus' },
      { label: 'Año', value: 'Línea con distintas versiones' },
      { label: 'País de origen de la marca', value: 'Taiwán' },
    ],
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida con soporte medio de tobillo' },
      { label: 'Material de la bota', value: `${pendingSpec}` },
      { label: 'Frame', value: 'Aluminio plano' },
      { label: 'Longitud del frame', value: `${pendingSpec} (configuración habitual de 4x80 mm)` },
      { label: 'Material del frame', value: 'Aluminio' },
      { label: 'Montaje', value: '165 mm según versión' },
      { label: 'Rodamientos', value: pendingSpec },
      { label: 'Ruedas', value: '80 mm en la configuración más habitual' },
      { label: 'Dureza', value: 'Media-alta' },
      { label: 'Diámetro', value: '80 mm' },
      { label: 'Peso aproximado', value: 'Según talla y configuración' },
    ],
    compatibility: {
      frames: ['Frames con montaje de 165 mm según versión.'],
      wheelSizes: ['Hasta 80 mm en el frame original.'],
      spareParts: ['Liner, cordones y hebillas según disponibilidad del distribuidor.'],
    },
    disciplineFit: fit(
      ['slalom', 'freeskate'],
      ['slide'],
      ['speed', 'jump', 'aggressive', 'downhill'],
    ),
    highlights: [
      'Equilibrio entre soporte y sensibilidad.',
      'Buen acabado y ajuste cómodo.',
      'Funciona para quien mezcla conos con patinaje urbano.',
    ],
    considerations: [
      'Menos soporte que un freeskate rígido para escaleras y bajadas.',
      'Disponibilidad de repuestos variable según país.',
    ],
    editorialOpinion: [
      'El MT Plus es una alternativa interesante para quien no quiere elegir entre slalom y ciudad: hace las dos cosas de forma correcta sin destacar de manera extrema en ninguna.',
      'Es el tipo de patín que envejece bien: cómodo, prolijo y sin exigencias raras de mantenimiento.',
    ],
    videoIds: ['slalom-iniciacion', 'freeskate-desde-cero'],
    articleIds: ['freeskate-vs-slalom', 'primeros-patines'],
  },
];
