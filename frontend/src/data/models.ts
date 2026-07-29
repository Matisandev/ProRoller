import type { SkateModel } from '@/types';

/**
 * Fichas de modelos populares. Las especificaciones son generales y de referencia:
 * cada marca publica variantes por talla y por versión anual.
 */
export const skateModels: readonly SkateModel[] = [
  {
    id: 'fr1',
    name: 'FR1',
    brandId: 'fr-skates',
    description:
      'El modelo más reconocido de FR: bota semirrígida con muy buen soporte, pensada para freeskate urbano exigente y para quien ya patina seguido.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, con acolchado grueso y refuerzo lateral' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Intermedio a avanzado' },
    ],
    recommendedDisciplineIds: ['freeskate', 'slide', 'slalom'],
    compatibility: [
      'Frames de montaje UFS y estándar 165 mm según versión.',
      'Ruedas de hasta 80 mm en el frame original; existen versiones con frames más largos.',
      'Liner y cordones reemplazables.',
    ],
    technicalNotes: [
      'La bota del FR1 es más rígida que la del FR2 y el FR3, lo que entrega más soporte al derrapar y al bajar escaleras, a costa de algo de sensibilidad.',
      'Se fabrica en distintas configuraciones de frame y rueda según el año y el mercado, por lo que conviene revisar la ficha específica antes de comprar.',
    ],
  },
  {
    id: 'fr2',
    name: 'FR2',
    brandId: 'fr-skates',
    description:
      'Versión intermedia de la línea FR: mantiene la estructura del FR1 con una bota algo menos rígida y un precio más accesible.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, soporte medio' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Intermedio' },
    ],
    recommendedDisciplineIds: ['freeskate', 'slalom'],
    compatibility: [
      'Comparte gran parte de los componentes con el FR1.',
      'Acepta cambio de frame y de ruedas para orientarlo a slalom o a slide.',
    ],
    technicalNotes: [
      'Es la opción habitual para quien quiere un patín de freeskate serio sin llegar al precio del FR1.',
      'Al ser menos rígido, transmite mejor el movimiento del tobillo, algo que en slalom se agradece.',
    ],
  },
  {
    id: 'fr3',
    name: 'FR3',
    brandId: 'fr-skates',
    description:
      'Entrada a la familia FR con la misma lógica de construcción: bota cómoda, frame de aluminio y componentes reemplazables.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, soporte medio-bajo' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio, corto' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Principiante a intermedio' },
    ],
    recommendedDisciplineIds: ['freeskate', 'slalom'],
    compatibility: [
      'Mismos frames y ruedas que el resto de la línea FR.',
      'Permite subir de nivel cambiando ruedas y rodamientos sin cambiar el patín.',
    ],
    technicalNotes: [
      'Buena elección como primer patín de freeskate si el presupuesto es acotado pero se quiere un equipo que dure.',
      'Ofrece menos soporte lateral que el FR1, por lo que exige más trabajo de tobillo al derrapar.',
    ],
  },
  {
    id: 'frx',
    name: 'FRX',
    brandId: 'fr-skates',
    description:
      'El modelo más accesible de FR. Está pensado como primer patín urbano y comparte la filosofía de la línea: componentes que se pueden reemplazar por partes.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida de iniciación' },
      {
        label: 'Configuración habitual',
        value: '4 ruedas de 80 mm (existen versiones de 84 y 90)',
      },
      { label: 'Frame', value: 'Aluminio' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Principiante' },
    ],
    recommendedDisciplineIds: ['freeskate'],
    compatibility: [
      'Frames y ruedas intercambiables con el resto de la línea FR.',
      'Acepta freno de taco desmontable.',
    ],
    technicalNotes: [
      'Es la puerta de entrada al freeskate: patín estable y reparable, sin la rigidez de los modelos superiores.',
      'Para quien viene de patines recreativos, el cambio de sensación al frame corto es notorio y toma algunas sesiones.',
    ],
  },
  {
    id: 'powerslide-next',
    name: 'Powerslide Next',
    brandId: 'powerslide',
    description:
      'Plataforma modular de Powerslide para patinaje urbano. Se ofrece en múltiples tamaños de rueda con la misma bota, desde 80 hasta 125 mm.',
    specs: [
      { label: 'Tipo de bota', value: 'Bota urbana con soporte medio, montaje Trinity' },
      { label: 'Configuración habitual', value: 'Versiones de 3 o 4 ruedas, de 80 a 125 mm' },
      { label: 'Frame', value: 'Aluminio, largo variable según versión' },
      { label: 'Dureza de ruedas', value: 'Entre 85A y 88A según versión' },
      { label: 'Nivel', value: 'Intermedio' },
    ],
    recommendedDisciplineIds: ['freeskate', 'speed'],
    compatibility: [
      'Montaje Trinity de tres tornillos: solo acepta frames compatibles con ese estándar.',
      'Permite cambiar de frame para pasar de 80 mm urbano a 110 o 125 mm de rodada larga.',
    ],
    technicalNotes: [
      'Su gracia es la modularidad: el mismo patinador puede pasar de un setup urbano a uno de rodada larga cambiando el frame.',
      'El montaje Trinity no es compatible con frames de estándar 165 mm ni UFS, algo importante al planificar el upgrade.',
    ],
  },
  {
    id: 'flying-eagle-f5s',
    name: 'Flying Eagle F5S',
    brandId: 'flying-eagle',
    description:
      'Uno de los patines de slalom y freeskate más recomendados en relación precio-prestaciones. Bota cómoda y frame de aluminio de serie.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida con soporte medio' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Principiante a intermedio' },
    ],
    recommendedDisciplineIds: ['slalom', 'freeskate'],
    compatibility: [
      'Frames estándar de 165 mm según versión.',
      'Ruedas de 80 mm; algunas versiones aceptan 84 mm.',
    ],
    technicalNotes: [
      'Es el modelo que más aparece recomendado como primer patín de slalom con componentes decentes.',
      'La bota calza algo más angosta que otras marcas, por lo que conviene probar la talla antes de comprar.',
    ],
  },
  {
    id: 'flying-eagle-f6s',
    name: 'Flying Eagle F6S',
    brandId: 'flying-eagle',
    description:
      'Hermano mayor del F5S: misma lógica, con mejoras en bota y componentes para patinadores que ya tienen técnica.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida, mejor acolchado y refuerzo que el F5S' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Intermedio' },
    ],
    recommendedDisciplineIds: ['slalom', 'freeskate', 'slide'],
    compatibility: [
      'Componentes intercambiables con el resto de la serie F.',
      'Acepta frames de slalom más cortos para trabajo entre conos.',
    ],
    technicalNotes: [
      'La diferencia frente al F5S está en el acabado de la bota y en los componentes, más que en la geometría.',
      'Aguanta bien el uso mixto entre slalom y freeskate urbano.',
    ],
  },
  {
    id: 'seba-high-light',
    name: 'Seba High Light',
    brandId: 'seba',
    description:
      'Versión liviana del clásico Seba High, el patín asociado al freestyle slalom de competencia durante años.',
    specs: [
      { label: 'Tipo de bota', value: 'Baja, flexible en el tobillo y muy liviana' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio, plano' },
      { label: 'Dureza de ruedas', value: 'Entre 85A y 88A' },
      { label: 'Nivel', value: 'Intermedio a avanzado' },
    ],
    recommendedDisciplineIds: ['slalom'],
    compatibility: ['Frames estándar de 165 mm.', 'Ruedas de 76 a 80 mm según el frame elegido.'],
    technicalNotes: [
      'Su bajo peso y la libertad de tobillo lo hacen ideal para slalom, pero entrega menos protección que un patín de freeskate puro.',
      'No es la mejor elección si el objetivo principal es derrapar en bajadas o bajar escaleras a diario.',
    ],
  },
  {
    id: 'micro-mt-plus',
    name: 'Micro MT Plus',
    brandId: 'micro',
    description:
      'Patín muy usado en escuelas de patinaje: estable, resistente y con buen soporte para quien está aprendiendo.',
    specs: [
      { label: 'Tipo de bota', value: 'Semirrígida con buen soporte de tobillo' },
      { label: 'Configuración habitual', value: '4 ruedas de 80 mm' },
      { label: 'Frame', value: 'Aluminio' },
      { label: 'Dureza de ruedas', value: 'Alrededor de 85A' },
      { label: 'Nivel', value: 'Principiante' },
    ],
    recommendedDisciplineIds: ['freeskate', 'slalom'],
    compatibility: [
      'Frames estándar de 165 mm según versión.',
      'Ruedas de 80 mm; el liner es reemplazable.',
    ],
    technicalNotes: [
      'Aguanta el uso intensivo de clases, por eso aparece tanto en talleres y escuelas.',
      'Al ser una bota con harto soporte, perdona errores de postura al comienzo.',
    ],
  },
];
