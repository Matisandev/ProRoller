import type { AboutContent } from '@/types';

/** Contenido de la sección Sobre ProRoller, accesible desde el footer. */
export const about: AboutContent = {
  origin: {
    heading: '¿Por qué nació ProRoller?',
    paragraphs: [
      'ProRoller nació de una frustración concreta: la información del patinaje está muy dispersa. Un video en YouTube explica una técnica, un foro discute un frame, un grupo de WhatsApp recomienda una tienda y una publicación suelta habla de protecciones. Nada de eso está reunido en un solo lugar.',
      'La idea es simple: juntar en una plataforma lo que hoy hay que buscar en diez sitios distintos. Qué disciplinas existen, qué aprender primero, cómo elegir tus patines, qué protecciones usar, dónde comprar y dónde patinar.',
      'Este no es el proyecto de una empresa. Es un patinador construyendo una herramienta para otros patinadores.',
    ],
  },
  author: {
    name: 'Matías Sandoval',
    city: 'Chile',
    role: 'Ingeniero informático y patinador',
    bio: [
      'Soy Matías Sandoval. Estudié Ingeniería Informática en Duoc UC y trabajo en el mundo de los datos y el desarrollo web. Antes de eso pasé por Pedagogía en Educación Física, que es donde apareció mi interés por enseñar y por el deporte.',
      'El patinaje inline llegó después y se quedó. ProRoller nace justamente de la unión de esas dos pasiones: la tecnología y el patinaje.',
      'Mi información pública está en mi sitio personal, y desde ahí también se puede seguir lo que hago fuera de ProRoller.',
    ],
    website: 'https://www.matisandev.cl/',
  },
  philosophy: [
    'Creo que la seguridad siempre debe estar antes que el rendimiento.',
    'No recomendaré productos que yo mismo no confiaría en utilizar.',
    'La publicidad nunca cambiará mi opinión editorial.',
    'Quiero ayudar a otros patinadores a aprender de forma más sencilla.',
    'La tecnología debe fortalecer a la comunidad.',
    'ProRoller primero debe aportar valor; el negocio viene después.',
    'Nunca sacrificaré la confianza de la comunidad por obtener ingresos.',
  ],
  transparency: [
    'ProRoller no vende productos.',
    'ProRoller no mantiene inventario.',
    'ProRoller solo recomienda distribuidores.',
    'Las colaboraciones comerciales nunca modifican la opinión editorial.',
  ],
  future: {
    heading: 'El futuro de ProRoller',
    paragraphs: [
      'Hoy ProRoller es un proyecto personal en desarrollo. El objetivo es que se convierta en la plataforma de referencia para aprender, entrenar y competir en patinaje.',
      'La web seguirá siendo gratuita y con todo el contenido educativo. La aplicación móvil llegará después, con planes pensados para quienes quieran entrenar de forma seria o competir.',
      'Más adelante existirán colaboraciones con tiendas, academias, organizadores de competencias, marcas y creadores de contenido. Todas pasarán por revisión editorial y ninguna influirá en las recomendaciones.',
    ],
  },
  closingQuote:
    'No pretendo ser el mejor patinador. Solo quiero construir la mejor herramienta para quienes aman este deporte.',
};
