import type { Brand } from '@/types';

export const brands: readonly Brand[] = [
  {
    id: 'fr-skates',
    name: 'FR Skates',
    country: 'Francia',
    foundedYear: 2012,
    description:
      'Marca francesa centrada exclusivamente en freeskate urbano. Su línea FR es hoy el estándar de referencia para patinar en ciudad.',
    history: [
      'FR Skates nació en Francia a partir de la experiencia de Seba, uno de los proyectos que definió el patín freeskate moderno. La idea fue concentrar en una sola marca los patines pensados para la calle, con botas reforzadas y frames cortos.',
      'Su catálogo se ordena por nivel de rigidez de la bota: la línea FR va de mayor a menor soporte, y la FRX cumple el rol de puerta de entrada más accesible. Esa lógica simple explica buena parte de su popularidad: es fácil saber qué modelo corresponde a cada patinador.',
      'Hoy FR es una de las marcas más vistas en sesiones urbanas de todo el mundo, y sus modelos son habituales entre patinadores que vienen del freeskate y quieren pasar al slalom o al slide.',
    ],
    knownModels: ['FR1', 'FR2', 'FR3', 'FRX'],
    disciplineIds: ['freeskate', 'slalom', 'slide'],
    website: 'https://www.fr-skates.com',
  },
  {
    id: 'powerslide',
    name: 'Powerslide',
    country: 'Alemania',
    foundedYear: 1995,
    description:
      'Fabricante alemán con el catálogo más amplio del patinaje: freeskate, velocidad, urbano y componentes.',
    history: [
      'Powerslide se fundó en Alemania a mediados de los años noventa y creció junto al auge del patín en línea. A diferencia de marcas especializadas en una disciplina, apostó por cubrir el mercado completo.',
      'Su estrategia de componentes intercambiables —frames, ruedas, rodamientos y botas que se combinan entre líneas— la convirtió en referencia para quienes arman su propio setup. También impulsó el uso de ruedas grandes en patinaje urbano.',
      'La marca sostiene además varias submarcas y líneas propias, lo que le permite estar presente tanto en competencia de velocidad como en patinaje recreativo.',
    ],
    knownModels: ['Powerslide Next', 'Powerslide Zoom', 'Powerslide Imperial'],
    disciplineIds: ['freeskate', 'speed', 'slide'],
    website: 'https://www.powerslide.com',
  },
  {
    id: 'seba',
    name: 'Seba',
    country: 'Francia',
    foundedYear: 2005,
    description:
      'Marca francesa que definió el patín de slalom moderno y sigue siendo referencia en control fino.',
    history: [
      'Seba surgió del trabajo del patinador francés Sébastien Laffargue, que buscaba una bota capaz de responder a las exigencias del freestyle slalom: bajo soporte de tobillo, mucha sensibilidad y respuesta inmediata.',
      'El resultado marcó a toda una generación. La línea High y su versión High Light se convirtieron en el patín característico de las competencias de slalom durante años.',
      'Con el tiempo Seba amplió su catálogo al freeskate y al patinaje urbano, manteniendo su sello: botas cómodas, livianas y muy conectadas con el suelo.',
    ],
    knownModels: ['Seba High Light', 'Seba High', 'Seba FR Junior'],
    disciplineIds: ['slalom', 'freeskate'],
    website: 'https://www.seba-skate.com',
  },
  {
    id: 'flying-eagle',
    name: 'Flying Eagle',
    country: 'China',
    foundedYear: 2003,
    description:
      'Marca china de crecimiento acelerado, muy fuerte en slalom y freeskate por su relación entre precio y prestaciones.',
    history: [
      'Flying Eagle se fundó en China a comienzos de los dos mil, en un momento en que el freestyle slalom crecía con fuerza en Asia. Sus primeros modelos apuntaron directamente a ese público.',
      'Su serie F, con modelos como el F5S y el F6S, la instaló en el mercado internacional: patines con componentes de buen nivel a un precio menor que las marcas europeas equivalentes.',
      'Hoy es una de las marcas más recomendadas para quienes buscan un primer patín serio de slalom o freeskate sin llegar al presupuesto de la gama alta.',
    ],
    knownModels: ['Flying Eagle F5S', 'Flying Eagle F6S', 'Flying Eagle Enkidu'],
    disciplineIds: ['slalom', 'freeskate', 'slide'],
    website: 'https://www.flyingeagleskates.com',
  },
  {
    id: 'micro',
    name: 'Micro',
    country: 'Taiwán',
    foundedYear: 1998,
    description:
      'Marca taiwanesa reconocida por sus patines de iniciación y por la línea MT, muy usada en escuelas de patinaje.',
    history: [
      'Micro comenzó fabricando patines y equipamiento de iniciación, y se hizo conocida por ofrecer modelos estables y duraderos a precios accesibles.',
      'Su línea MT, y en particular el MT Plus, es habitual en escuelas y talleres de patinaje: una bota con buen soporte que aguanta el uso intensivo de clases.',
      'La marca también desarrolló modelos orientados al slalom, aprovechando la fabricación local de componentes en Taiwán.',
    ],
    knownModels: ['Micro MT Plus', 'Micro Delta', 'Micro Infinity'],
    disciplineIds: ['freeskate', 'slalom'],
    website: 'https://www.microskate.com',
  },
];
