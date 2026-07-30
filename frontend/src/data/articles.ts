import type { Article } from '@/types';

export const articles: readonly Article[] = [
  {
    id: 'primeros-patines',
    title: 'Cómo elegir tus primeros patines',
    excerpt:
      'Talla, tipo de bota y disciplina: los tres criterios que definen si tu primer patín te va a ayudar o a frustrar.',
    category: 'Guía',
    readingMinutes: 8,
    publishedAt: '2026-07-01',
    disciplineIds: ['freeskate', 'slalom', 'speed'],
    body: [
      {
        heading: 'Primero define qué vas a patinar',
        paragraphs: [
          'La pregunta correcta no es "cuáles son los mejores patines" sino "qué quiero hacer con ellos". Un patín de velocidad, uno de freeskate y uno artístico son tres herramientas distintas: ninguna es mejor, son para cosas diferentes.',
          'Si tu plan es patinar en la ciudad, aprender a frenar y moverte entre veredas y plazas, la respuesta casi siempre es un patín freeskate. Si te interesan los trucos entre conos, un patín de slalom. Si quieres competir en distancia, uno de velocidad.',
        ],
      },
      {
        heading: 'La talla es más importante que la marca',
        paragraphs: [
          'Un patín debe quedar ajustado, sin que los dedos se golpeen adelante y sin que el talón se levante al flectar la rodilla. Si el pie se mueve dentro de la bota, vas a perder control y a hacerte ampollas, por muy buena que sea la marca.',
          'Las tallas no son equivalentes entre fabricantes: un 42 de una marca puede calzar como 41 en otra. Siempre que puedas, prueba el patín puesto, con calcetines delgados, y camina unos minutos antes de decidir.',
        ],
      },
      {
        heading: 'Bota, frame y ruedas: qué mirar',
        paragraphs: [
          'La bota define el soporte. Una bota más rígida entrega estabilidad y protección; una más flexible entrega sensibilidad. Para empezar en la calle conviene una bota semirrígida con buen acolchado.',
          'El frame corto y de aluminio es preferible al plástico: es más rígido, más liviano y permite cambiar ruedas y rodamientos. Para el primer patín, cuatro ruedas de 80 mm y dureza cercana a 85A es una configuración segura y versátil.',
        ],
      },
      {
        heading: 'Presupuesto y protecciones',
        paragraphs: [
          'Un error frecuente es gastar todo el presupuesto en el patín y nada en protección. El casco no es opcional, y las muñequeras evitan la lesión más común de los primeros meses.',
          'Si el presupuesto es acotado, prefiere un patín de gama de entrada con componentes reemplazables antes que un patín cerrado de gama media: podrás ir mejorando ruedas, rodamientos y frame por partes.',
        ],
      },
    ],
  },
  {
    id: 'freeskate-vs-slalom',
    title: 'Diferencias entre freeskate y slalom',
    excerpt:
      'Dos disciplinas hermanas que usan patines parecidos pero buscan cosas distintas. Cuál te conviene según lo que quieras lograr.',
    category: 'Disciplinas',
    readingMinutes: 6,
    publishedAt: '2026-07-05',
    disciplineIds: ['freeskate', 'slalom'],
    body: [
      {
        heading: 'El terreno cambia todo',
        paragraphs: [
          'El freeskate se practica en la calle: superficies irregulares, pendientes, escaleras y tráfico. El slalom se practica en una superficie lisa y plana, con una línea de conos que define el espacio de trabajo.',
          'Esa diferencia de terreno explica todo lo demás: el freeskate prioriza seguridad y control frente a lo imprevisto, mientras el slalom prioriza precisión sobre un espacio conocido.',
        ],
      },
      {
        heading: 'El equipo se parece, pero no es igual',
        paragraphs: [
          'Ambos usan botas cortas y frames pequeños, y muchos modelos sirven para las dos cosas. La diferencia está en el detalle: el patín de freeskate suele tener bota más rígida y reforzada para aguantar derrapes y golpes.',
          'El patín de slalom, en cambio, busca liviandad y libertad de tobillo, porque cada truco se ejecuta con movimientos finos del pie. Un patín de slalom en una bajada larga se siente inseguro; un patín rígido de freeskate limita algunos trucos.',
        ],
      },
      {
        heading: 'Cuál elegir primero',
        paragraphs: [
          'Si tu objetivo es moverte por la ciudad, empieza por freeskate: el freno en T y el powerslide son habilidades de seguridad, no de estilo. Si te motiva la técnica pura y tienes un lugar plano donde practicar, el slalom entrega progreso muy rápido.',
          'En la práctica, la mayoría termina mezclando: el control fino del slalom mejora el freeskate, y la seguridad del freeskate permite practicar slalom en cualquier plaza.',
        ],
      },
    ],
  },
  {
    id: 'por-que-no-fitness',
    title: '¿Por qué ProRoller no recomienda patines fitness?',
    excerpt:
      'No es un problema de marca ni de precio: es que la construcción del patín fitness limita el aprendizaje de técnicas de control.',
    category: 'Opinión técnica',
    readingMinutes: 7,
    publishedAt: '2026-07-08',
    disciplineIds: ['freeskate'],
    body: [
      {
        heading: 'Qué es un patín fitness',
        paragraphs: [
          'Se llama fitness al patín recreativo orientado a rodar en línea recta: bota alta y blanda, frame largo de plástico o aluminio, ruedas grandes y freno de taco. Está diseñado para paseos cómodos en superficie lisa.',
          'Es, de hecho, el patín más vendido del mundo, y para su uso previsto funciona bien: rodar en un parque cerrado o en una ciclovía plana sin mayores exigencias técnicas.',
        ],
      },
      {
        heading: 'El problema aparece cuando quieres aprender',
        paragraphs: [
          'El frame largo hace que el patín gire con dificultad y que muchas técnicas de control simplemente no se puedan ejecutar. Los derrapes son casi imposibles, el freno en T se vuelve incómodo y girar en poco espacio deja de ser una opción.',
          'La bota blanda y alta agrava el problema: entrega poco soporte lateral real y, al mismo tiempo, bloquea el trabajo fino del tobillo. El patinador termina dependiendo del freno de taco, que es justamente lo que no funciona en una bajada.',
        ],
      },
      {
        heading: 'La consecuencia práctica',
        paragraphs: [
          'Quien aprende en un patín fitness suele estancarse: siente que "no le da" para frenar o girar, cuando en realidad es el equipo el que no está diseñado para eso. Ese estancamiento es una de las razones más comunes por las que se abandona el patinaje.',
          'Por eso nuestra recomendación técnica para quien parte en la ciudad es un patín freeskate de gama de entrada antes que un fitness de precio equivalente. Esta postura es editorial y técnica: ninguna marca ni tienda influye en ella.',
        ],
      },
    ],
  },
  {
    id: 'como-elegir-ruedas',
    title: 'Cómo elegir ruedas',
    excerpt:
      'Diámetro, dureza y perfil. Tres números que cambian por completo cómo se siente tu patín.',
    category: 'Material',
    readingMinutes: 6,
    publishedAt: '2026-07-12',
    disciplineIds: ['freeskate', 'slalom', 'slide', 'speed'],
    body: [
      {
        heading: 'Diámetro: cuánto avanzas por vuelta',
        paragraphs: [
          'El diámetro se mide en milímetros. Ruedas chicas (entre 55 y 72 mm) aceleran rápido, giran en poco espacio y bajan el centro de gravedad. Ruedas grandes (de 100 a 125 mm) mantienen velocidad y absorben mejor el pavimento irregular.',
          'Para freeskate y slalom, 80 mm es el estándar. Para distancia y velocidad, de 110 mm hacia arriba. En aggressive se usan ruedas pequeñas y duras, porque el objetivo es maniobrabilidad y resistencia al impacto.',
        ],
      },
      {
        heading: 'Dureza: el número con A',
        paragraphs: [
          'La dureza se expresa en escala A: 78A es blanda, 85A media, 90A o más es dura. Más blanda significa más agarre y más amortiguación; más dura significa más deslizamiento y más duración.',
          'Si derrapas, necesitas ruedas duras: una rueda blanda se pela en pocas sesiones de powerslide. Si patinas en pavimento rugoso y quieres comodidad, una rueda algo más blanda ayuda.',
        ],
      },
      {
        heading: 'Perfil, rotación y desgaste',
        paragraphs: [
          'El perfil es la forma del contacto con el suelo. Un perfil redondeado facilita los giros y los derrapes; uno más plano entrega estabilidad. En slalom se prefieren perfiles redondeados.',
          'Las ruedas se desgastan de forma desigual: las del pie de arrastre y las internas se gastan más rápido. Rótalas cada cierto tiempo, invirtiendo el lado y cambiando de posición, y durarán bastante más.',
        ],
      },
    ],
  },
  {
    id: 'como-elegir-frame',
    title: 'Cómo elegir un frame',
    excerpt:
      'El frame define cuánto gira tu patín, qué ruedas acepta y qué disciplina puedes practicar.',
    category: 'Material',
    readingMinutes: 7,
    publishedAt: '2026-07-16',
    disciplineIds: ['freeskate', 'speed', 'slalom'],
    body: [
      {
        heading: 'Largo y cantidad de ruedas',
        paragraphs: [
          'Un frame corto gira en menos espacio, responde más rápido y facilita derrapes y trucos. Un frame largo entrega estabilidad y velocidad sostenida, pero exige más espacio para girar.',
          'La configuración se describe como cantidad de ruedas por diámetro: 4x80 es el estándar urbano, 3x110 y 4x110 son configuraciones de rodada larga, y 3x125 se usa para distancia y velocidad.',
        ],
      },
      {
        heading: 'Material y rigidez',
        paragraphs: [
          'El aluminio extruido es el material más común: rígido, liviano y económico. Los frames de plástico o composite se usan en patines de iniciación; flexan más y transmiten menos potencia.',
          'En competencia de velocidad se usan frames de fibra de carbono, más livianos y muy rígidos, aunque su precio es considerablemente mayor y son más sensibles a los golpes.',
        ],
      },
      {
        heading: 'Compatibilidad: el punto que más errores causa',
        paragraphs: [
          'No todos los frames calzan en todas las botas. Los estándares más habituales son el de 165 mm de distancia entre tornillos, el UFS del aggressive y el sistema Trinity de tres puntos usado por Powerslide.',
          'Antes de comprar un frame revisa qué montaje tiene tu bota. Cambiar de estándar implica cambiar la bota, no solo el frame: es el error más caro de esta parte del equipo.',
        ],
      },
    ],
  },
  {
    id: 'como-elegir-bota',
    title: 'Cómo elegir una bota',
    excerpt:
      'La bota es la parte que no se cambia por separado. Elegirla mal se siente en cada sesión.',
    category: 'Material',
    readingMinutes: 7,
    publishedAt: '2026-07-20',
    disciplineIds: ['freeskate', 'slalom', 'aggressive'],
    body: [
      {
        heading: 'Rígida, semirrígida o blanda',
        paragraphs: [
          'Una bota rígida transmite cada movimiento al patín y protege en los impactos, pero exige técnica y es menos cómoda al principio. Una bota blanda es cómoda y abrigada, pero pierde precisión y soporte lateral.',
          'Para patinar en ciudad, la semirrígida es el punto medio razonable: soporte suficiente para derrapar y flexibilidad suficiente para trabajar el tobillo.',
        ],
      },
      {
        heading: 'Calce: el criterio que manda',
        paragraphs: [
          'La bota debe sujetar el talón con firmeza. Si al flectar la rodilla el talón se levanta, la potencia se pierde y aparecen ampollas. Los dedos deben rozar apenas la punta cuando estás de pie, y separarse al flectar.',
          'El ancho importa tanto como el largo. Hay marcas de horma angosta y otras más anchas; probarse el patín sigue siendo la única forma confiable de saberlo.',
        ],
      },
      {
        heading: 'Liner, cierres y durabilidad',
        paragraphs: [
          'El liner es el acolchado interior. Los liners termoformables se adaptan al pie con el uso o con calor, mejorando bastante el calce de una bota estándar.',
          'Los cierres combinan cordones, velcro y hebilla. Cada uno aporta ajuste en una zona distinta, y conviene que la bota tenga al menos dos sistemas: solo cordones tiende a soltarse con el uso intensivo.',
        ],
      },
    ],
  },
  {
    id: 'errores-comunes',
    title: 'Errores comunes al comenzar',
    excerpt:
      'Los siete errores que más frenan el progreso en los primeros meses, y cómo corregirlos.',
    category: 'Técnica',
    readingMinutes: 6,
    publishedAt: '2026-07-24',
    disciplineIds: ['freeskate', 'slalom', 'downhill'],
    body: [
      {
        heading: 'Postura y mirada',
        paragraphs: [
          'Patinar con las rodillas estiradas y mirando los pies es el error número uno. Deja el cuerpo rígido, el peso atrás y sin capacidad de reacción ante cualquier irregularidad.',
          'La corrección es consciente: flectar rodillas hasta sentir el peso en la planta del pie, y llevar la mirada al frente. Cuesta al principio, pero cambia el patinaje completo.',
        ],
      },
      {
        heading: 'Postergar el freno',
        paragraphs: [
          'Muchos aprenden a avanzar y postergan el frenado. El resultado es que se patina siempre en zonas planas y con miedo, porque no hay forma de parar si algo sale mal.',
          'El freno en T debería aprenderse en las primeras sesiones, incluso antes de tomar velocidad. Después, el powerslide es lo que permite patinar tranquilo en calles con pendiente.',
        ],
      },
      {
        heading: 'Equipo y entorno',
        paragraphs: [
          'Otros errores frecuentes: patinar sin casco, apretar los cordones de forma desigual, no revisar tornillos ni rodamientos, y elegir un patín inadecuado para lo que se quiere hacer.',
          'A eso se suma practicar en el lugar equivocado. Superficie lisa, sin arena, sin tráfico y con espacio para caerse es lo que acelera el aprendizaje en los primeros meses.',
        ],
      },
    ],
  },
  {
    id: 'por-que-usar-casco',
    title: '¿Por qué utilizar casco?',
    excerpt:
      'La única lesión que no se rehabilita es la de la cabeza. Por eso en ProRoller el casco no se discute.',
    category: 'Seguridad',
    readingMinutes: 5,
    publishedAt: '2026-07-20',
    disciplineIds: ['freeskate', 'slalom', 'speed', 'jump', 'slide', 'aggressive', 'downhill'],
    body: [
      {
        heading: 'El riesgo no depende de tu nivel',
        paragraphs: [
          'Casi todas las caídas en patines son intrascendentes: una rodilla raspada, un golpe en la palma, un susto. El problema es que la excepción es muy grave. Un golpe en la cabeza puede tener consecuencias permanentes, y no requiere ir rápido: basta perder el equilibrio hacia atrás sobre cemento.',
          'Por eso el criterio editorial de ProRoller es simple: el casco se usa siempre, en cualquier disciplina y en cualquier nivel. La seguridad va antes que el rendimiento.',
        ],
      },
      {
        heading: 'Qué hace un casco realmente',
        paragraphs: [
          'Un casco no evita el golpe, distribuye la energía del impacto y aumenta el tiempo en que esa energía se disipa. Esa diferencia de milisegundos es la que reduce el daño.',
          'Un casco certificado cumple ensayos definidos por una norma. En patinaje se usan habitualmente cascos con norma europea EN 1078, y en el mundo del skate también la norma estadounidense ASTM F1492.',
        ],
      },
      {
        heading: 'La costumbre se construye desde el primer día',
        paragraphs: [
          'Quien aprende con casco desde la primera sesión no lo cuestiona después. Quien lo deja para "cuando patine más rápido" normalmente nunca lo incorpora.',
          'Si vas a comprar tus primeros patines, reserva parte del presupuesto para el casco. Es la compra que menos se nota y la que más importa.',
        ],
      },
    ],
  },
  {
    id: 'elegir-casco',
    title: 'Cómo elegir un casco',
    excerpt:
      'Talla, certificación, ajuste y tipo de casco: cuatro criterios objetivos antes de mirar el diseño.',
    category: 'Seguridad',
    readingMinutes: 6,
    publishedAt: '2026-07-19',
    disciplineIds: ['freeskate', 'aggressive', 'downhill'],
    body: [
      {
        heading: 'Certificación primero',
        paragraphs: [
          'Antes que la marca, revisa la etiqueta interior. Los cascos para patinaje suelen declarar la norma europea EN 1078; los cascos de skate añaden con frecuencia la norma ASTM F1492, que contempla impactos múltiples.',
          'Un casco sin ninguna norma declarada no entrega garantías de ensayo, por barato que sea.',
        ],
      },
      {
        heading: 'Ajuste: la talla no es un detalle',
        paragraphs: [
          'Mide el perímetro de tu cabeza y compáralo con la tabla del fabricante. El casco debe quedar firme sin apretar: si al mover la cabeza el casco se desplaza, está grande.',
          'La posición correcta es horizontal, cubriendo la frente. Un casco echado hacia atrás deja expuesta justamente la zona que más se golpea al caer de espaldas.',
        ],
      },
      {
        heading: 'Tipo de casco según lo que patines',
        paragraphs: [
          'Para ciudad y aprendizaje, un casco de skate con cobertura trasera es una buena elección. Para descensos rápidos existen cascos integrales, que protegen también la cara.',
          'Los cascos con ventilación amplia son más cómodos en verano; los de carcasa dura y menos ventilación resisten mejor los golpes repetidos del skatepark.',
        ],
      },
    ],
  },
  {
    id: 'elegir-munequeras',
    title: 'Cómo elegir muñequeras',
    excerpt:
      'La lesión más frecuente al empezar es de muñeca. Una muñequera con férula cambia por completo ese escenario.',
    category: 'Seguridad',
    readingMinutes: 5,
    publishedAt: '2026-07-18',
    disciplineIds: ['freeskate', 'slalom'],
    body: [
      {
        heading: 'Por qué son la protección más rentable',
        paragraphs: [
          'Al caer, el reflejo natural es estirar la mano. Todo el peso del cuerpo llega a la muñeca en una posición desfavorable, y de ahí vienen los esguinces y fracturas más comunes de los primeros meses.',
          'Una muñequera con férula rígida limita la extensión de la articulación y ofrece una superficie que desliza en vez de frenar en seco.',
        ],
      },
      {
        heading: 'Qué mirar al comprar',
        paragraphs: [
          'Busca férula en la palma, sujeción firme con velcro y una talla que no permita que la protección gire en el brazo. Las protecciones para deportes de ruedas suelen declarar la norma europea EN 14120.',
          'Deben permitirte cerrar el puño y flectar los dedos. Si te obligan a mantener la mano abierta, vas a terminar sacándotelas.',
        ],
      },
    ],
  },
  {
    id: 'elegir-rodilleras',
    title: 'Cómo elegir rodilleras',
    excerpt:
      'La rodillera es la que permite entrenar la caída hacia adelante, que es la caída segura.',
    category: 'Seguridad',
    readingMinutes: 5,
    publishedAt: '2026-07-17',
    disciplineIds: ['freeskate', 'aggressive', 'jump'],
    body: [
      {
        heading: 'Dos familias distintas',
        paragraphs: [
          'Las rodilleras elásticas con almohadilla son livianas y cómodas para aprender en la calle. Las rodilleras de carcasa dura, típicas del skatepark, permiten arrodillarse y deslizar sobre el plástico.',
          'Si tu objetivo es patinar rampas, la carcasa dura es la opción indicada; para ciudad y tutoriales básicos, una rodillera elástica bien ajustada cumple.',
        ],
      },
      {
        heading: 'Ajuste y mantenimiento',
        paragraphs: [
          'La rodillera debe quedar centrada sobre la rótula y sostenerse al flectar la rodilla. Si baja al patinar, la talla o la sujeción no son correctas.',
          'Revisa periódicamente costuras, velcros y carcasa. Las protecciones para deportes de ruedas suelen declarar la norma europea EN 14120.',
        ],
      },
    ],
  },
  {
    id: 'elegir-coderas',
    title: 'Cómo elegir coderas',
    excerpt:
      'Menos comentadas que las rodilleras, pero clave en las caídas laterales y en el skatepark.',
    category: 'Seguridad',
    readingMinutes: 4,
    publishedAt: '2026-07-16',
    disciplineIds: ['freeskate', 'aggressive'],
    body: [
      {
        heading: 'Cuándo se agradecen',
        paragraphs: [
          'En caídas laterales y hacia atrás, el codo suele ser el segundo punto de contacto después de la mano. Es una zona con poco tejido blando, así que el golpe llega directo al hueso.',
          'En skatepark y en aprendizaje de derrapes son casi tan importantes como las rodilleras.',
        ],
      },
      {
        heading: 'Qué revisar',
        paragraphs: [
          'Sujeción que no gire alrededor del brazo, almohadilla que cubra la punta del codo y libertad para estirar y flectar sin que la protección se salga.',
          'Igual que el resto del equipo de protección para deportes de ruedas, es habitual encontrar la referencia a la norma europea EN 14120.',
        ],
      },
    ],
  },
  {
    id: 'elegir-shorts',
    title: 'Cómo elegir shorts de protección',
    excerpt: 'Cadera y coxis: los golpes que menos se ven y más tiempo dejan fuera.',
    category: 'Seguridad',
    readingMinutes: 4,
    publishedAt: '2026-07-15',
    disciplineIds: ['freeskate', 'slide', 'aggressive'],
    body: [
      {
        heading: 'Para qué sirven',
        paragraphs: [
          'Los shorts de protección incorporan almohadillas en cadera, glúteos y coxis. Son especialmente útiles cuando se entrenan derrapes y caídas hacia atrás, donde el impacto llega a zonas que ninguna otra protección cubre.',
          'No evitan la caída, reducen el golpe y permiten seguir entrenando al día siguiente.',
        ],
      },
      {
        heading: 'Qué mirar',
        paragraphs: [
          'Prefiere modelos con almohadillas fijas en su posición y tela que no se desplace al moverte. Deben poder usarse bajo la ropa habitual sin limitar la flexión de cadera.',
          'Revisa que las almohadillas sean lavables o extraíbles: es la prenda que más transpira de todo el equipo.',
        ],
      },
    ],
  },
  {
    id: 'reemplazar-proteccion',
    title: 'Cuándo reemplazar una protección',
    excerpt:
      'Una protección golpeada o desgastada da una falsa sensación de seguridad. Cómo saber cuándo jubilarla.',
    category: 'Seguridad',
    readingMinutes: 5,
    publishedAt: '2026-07-14',
    disciplineIds: ['freeskate', 'aggressive', 'downhill'],
    body: [
      {
        heading: 'El casco después de un golpe fuerte',
        paragraphs: [
          'La recomendación general de los fabricantes es reemplazar el casco después de un impacto importante, incluso si por fuera se ve bien: la espuma interior absorbe la energía deformándose y esa capacidad no se recupera.',
          'Revisa además grietas en la carcasa, espuma hundida y correas o hebillas deterioradas. Muchos fabricantes indican una vida útil recomendada en años.',
        ],
      },
      {
        heading: 'Rodilleras, coderas y muñequeras',
        paragraphs: [
          'Cambia una protección cuando la carcasa esté rajada, la almohadilla comprimida de forma permanente, el velcro no sujete o las costuras estén abiertas.',
          'Un caso especial son las férulas de las muñequeras: si están dobladas o partidas, la protección dejó de cumplir su función.',
        ],
      },
      {
        heading: 'Criterio simple',
        paragraphs: [
          'Si dudas de si una protección todavía protege, ya tienes la respuesta. Es la parte más barata del equipo y la que evita las lesiones más caras.',
        ],
      },
    ],
  },
];
