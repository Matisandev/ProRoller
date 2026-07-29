import type { Discipline } from '@/types';

/**
 * Contenido de demostración del MVP, redactado por el equipo de ProRoller a partir
 * de fuentes públicas. Será reemplazado por contenido propio desde el panel.
 */
export const disciplines: readonly Discipline[] = [
  {
    id: 'freeskate',
    name: 'Freeskate',
    description: 'Patinaje urbano libre: control, frenadas y lectura de la calle.',
    summary:
      'El freeskate es patinaje urbano: se practica en la calle, aprovechando veredas, plazas, bajadas y escaleras como terreno de juego. Su base no es la velocidad sino el control absoluto del patín en cualquier superficie.',
    history: [
      'El freeskate nació a fines de los años noventa en Europa, cuando un grupo de patinadores dejó de mirar la pista y empezó a usar la ciudad completa como terreno de práctica. En vez de competir contra un cronómetro, buscaban resolver obstáculos reales: veredas rotas, bajadas largas, escaleras y tráfico.',
      'Ese cambio de mirada obligó a cambiar el equipo. Las marcas empezaron a fabricar botas más cortas y reforzadas, frames más pequeños y ruedas más duras, capaces de aguantar derrapes constantes. Así apareció la categoría de patín freeskate, distinta del patín de velocidad y del patín recreativo.',
      'Hoy el freeskate es la puerta de entrada más común para quien quiere patinar en ciudad, y la disciplina que más aporta a las demás: casi todas las técnicas de frenado y control que se usan en slalom, slide o saltos vienen de acá.',
    ],
    goals: [
      'Dominar el patín en superficies irregulares y con pendiente.',
      'Frenar de varias formas distintas, incluso en emergencia.',
      'Leer la calle y anticipar obstáculos, autos y peatones.',
      'Construir la base técnica que después usarás en cualquier otra disciplina.',
    ],
    recommendedLevel: 'principiante',
    equipment: [
      'Patines freeskate con bota reforzada y frame corto (típicamente 3x80 mm o 4x80 mm).',
      'Ruedas duras (85A o más) porque los derrapes las desgastan rápido.',
      'Casco: obligatorio, siempre.',
      'Muñequeras, rodilleras y coderas mientras aprendes a caer.',
    ],
    techniques: [
      {
        name: 'Postura básica',
        description:
          'Rodillas flectadas, peso al centro, mirada al frente. Sin esto ninguna otra técnica funciona.',
      },
      {
        name: 'Freno en T',
        description:
          'Arrastrar la rueda del pie de atrás en perpendicular para reducir velocidad de forma progresiva.',
      },
      {
        name: 'Powerslide',
        description:
          'Frenada de emergencia derrapando en paralelo. Es la técnica que te permite parar en bajada.',
      },
      {
        name: 'Bajada de escaleras',
        description:
          'Descenso escalón a escalón con el peso atrás y las rodillas absorbiendo el impacto.',
      },
    ],
    videoIds: ['freeskate-desde-cero', 'freeskate-skatepark', 'slides-roex'],
    articleIds: ['primeros-patines', 'freeskate-vs-slalom', 'errores-comunes'],
  },
  {
    id: 'slalom',
    name: 'Slalom',
    description: 'Trucos y precisión entre conos, la base del control fino.',
    summary:
      'El slalom, o freestyle slalom, consiste en ejecutar secuencias de trucos entre conos alineados. Es la disciplina más técnica del patinaje en línea y la que más rápido mejora el equilibrio y la sensibilidad de pies.',
    history: [
      'El slalom se popularizó a comienzos de los años dos mil, cuando patinadores de Europa y Asia empezaron a compartir en internet secuencias de trucos entre conos. Lo que era un juego de calle se convirtió en una disciplina con reglas, jueces y campeonatos mundiales.',
      'Las competencias se organizan principalmente en tres formatos: classic o estilo libre con música, speed slalom contra el reloj y battle, donde dos patinadores se enfrentan por turnos. Las líneas de conos estándar se separan a 50, 80 y 120 centímetros.',
      'Aunque parece un deporte de exhibición, el slalom es la mejor escuela de control fino que existe: cada truco obliga a repartir el peso con precisión milimétrica.',
    ],
    goals: [
      'Ejecutar trucos limpios entre conos sin mover ni tocar la línea.',
      'Mejorar el equilibrio sobre un solo pie y la coordinación de ambos pies.',
      'Encadenar secuencias completas con ritmo y musicalidad.',
      'Ganar sensibilidad para corregir la postura mientras patinas.',
    ],
    recommendedLevel: 'intermedio',
    equipment: [
      'Patines de bota baja y flexible en el tobillo, con frame plano de 4x80 mm.',
      'Ruedas de 80 mm y dureza media-alta para girar sin perder agarre.',
      'Conos de slalom: 20 conos separados a 80 cm para empezar.',
      'Casco y protecciones al aprender trucos nuevos.',
    ],
    techniques: [
      {
        name: 'Cruzados',
        description:
          'Cruzar un pie sobre el otro alrededor de cada cono. Es el primer truco que se aprende.',
      },
      {
        name: 'Serpiente (snake)',
        description:
          'Ondular ambos pies en paralelo entre los conos, manteniendo los patines juntos.',
      },
      {
        name: 'Mono line',
        description: 'Recorrer la línea completa sobre un solo patín, con el otro pie en el aire.',
      },
      {
        name: 'Giros de punta y talón',
        description:
          'Rotar sobre la rueda delantera o trasera para cambiar de dirección dentro de la línea.',
      },
    ],
    videoIds: ['slalom-iniciacion', 'slalom-cruzados-roex', 'slalom-conos'],
    articleIds: ['freeskate-vs-slalom', 'como-elegir-ruedas'],
  },
  {
    id: 'speed',
    name: 'Speed',
    description: 'Velocidad y resistencia sobre pista o ruta.',
    summary:
      'El patinaje de velocidad busca el máximo rendimiento: recorrer una distancia en el menor tiempo posible, en pista cerrada o en ruta. Es la disciplina más física y la más ligada al deporte federado.',
    history: [
      'El patinaje de velocidad sobre ruedas se organizó formalmente en la primera mitad del siglo veinte y creció con fuerza en Europa y América. Con la llegada del patín en línea, en los años ochenta y noventa, los tiempos bajaron drásticamente y la disciplina se profesionalizó.',
      'En América Latina el speed tiene un peso enorme: Colombia se convirtió en la potencia mundial de la especialidad y arrastró el nivel de toda la región. En Chile la disciplina crece principalmente en clubes y en circuitos de ruta.',
      'Hoy el speed se compite en distancias que van desde los 200 metros contrarreloj hasta maratones de 42 kilómetros, y forma parte del programa de los Juegos Panamericanos y de los World Skate Games.',
    ],
    goals: [
      'Desarrollar una zancada larga y eficiente que aproveche cada empuje.',
      'Sostener velocidad alta durante toda la distancia, no solo al inicio.',
      'Dominar las curvas con cruzados profundos y sin perder ritmo.',
      'Trabajar la resistencia y la fuerza específica de piernas.',
    ],
    recommendedLevel: 'avanzado',
    equipment: [
      'Patines de velocidad: bota baja de carbono, sin soporte de tobillo.',
      'Frames largos de aluminio, típicamente 3x110 mm o 4x110 mm.',
      'Ruedas grandes y blandas para pista, más duras para ruta.',
      'Casco aerodinámico y calza deportiva; en competencia, mono de una pieza.',
    ],
    techniques: [
      {
        name: 'Zancada (stride)',
        description:
          'Empuje lateral completo con extensión total de la pierna y recuperación bajo el cuerpo.',
      },
      {
        name: 'Doble empuje',
        description:
          'Técnica avanzada que agrega un segundo impulso hacia dentro antes del empuje lateral.',
      },
      {
        name: 'Cruzados en curva',
        description: 'Cruce continuo del pie exterior para mantener velocidad dentro de la curva.',
      },
      {
        name: 'Salida',
        description: 'Pasos cortos y explosivos en punta para alcanzar velocidad en pocos metros.',
      },
    ],
    videoIds: ['speed-tecnica-basica', 'speed-espacata', 'speed-tips'],
    articleIds: ['como-elegir-frame', 'por-que-no-fitness'],
  },
  {
    id: 'jump',
    name: 'Jump',
    description: 'Saltos de altura y distancia con técnica y potencia.',
    summary:
      'El jump mide cuánto puedes saltar con los patines puestos, en altura o en distancia. Requiere potencia, coordinación y, sobre todo, una caída controlada.',
    history: [
      'El salto en patines empezó como una prueba informal en encuentros de patinadores: se ponía una barra o una fila de conos y cada uno intentaba pasarla. Con el tiempo se transformó en una competencia formal, con barra ajustable y reglas de intentos parecidas al salto alto del atletismo.',
      'La disciplina se consolidó dentro del circuito de freestyle, y hoy se compite tanto en salto alto sobre barra como en salto de distancia sobre obstáculos.',
      'A diferencia de otras especialidades, el jump exige entrenar la caída antes que el salto: la técnica de aterrizaje es lo que determina si el patinador progresa o se lesiona.',
    ],
    goals: [
      'Ganar altura y distancia sin perder el control del aterrizaje.',
      'Coordinar la carrera de aproximación con el despegue.',
      'Aterrizar con las rodillas flectadas y el peso al centro.',
      'Desarrollar potencia de piernas y estabilidad de tronco.',
    ],
    recommendedLevel: 'avanzado',
    equipment: [
      'Patines con bota rígida y buen soporte de tobillo para absorber el impacto.',
      'Frames resistentes; en salto se recomienda revisar tornillos con frecuencia.',
      'Casco obligatorio y protecciones completas.',
      'Barra de salto o obstáculo blando para las primeras sesiones.',
    ],
    techniques: [
      {
        name: 'Aproximación',
        description:
          'Últimos metros antes del salto: velocidad constante y patines paralelos al despegar.',
      },
      {
        name: 'Despegue a dos pies',
        description:
          'Extensión simultánea de ambas piernas, con los brazos acompañando hacia arriba.',
      },
      {
        name: 'Recogida',
        description: 'Llevar las rodillas al pecho en el aire para superar la barra.',
      },
      {
        name: 'Aterrizaje',
        description:
          'Caer con las rodillas flectadas y un patín ligeramente adelantado para absorber el golpe.',
      },
    ],
    videoIds: ['saltar-mas-alto', 'salto-progresion', 'saltos-lista-trucos'],
    articleIds: ['errores-comunes', 'como-elegir-bota'],
  },
  {
    id: 'slide',
    name: 'Slide',
    description: 'Derrapes controlados para frenar y dominar la inercia.',
    summary:
      'El slide es el arte de derrapar: bloquear las ruedas de forma controlada para frenar, girar o simplemente marcar una línea en el suelo. Es la habilidad que más seguridad entrega en la calle.',
    history: [
      'Los derrapes aparecieron como una necesidad práctica: en una bajada larga el freno de taco no alcanza, y los patinadores urbanos tuvieron que aprender a detener la inercia atravesando las ruedas.',
      'Con el tiempo lo funcional se volvió estético. Se catalogaron decenas de variantes según la posición del cuerpo y la cantidad de ruedas que tocan el suelo, y aparecieron competencias específicas donde se juzga la limpieza y la duración del derrape.',
      'En freeskate el slide dejó de ser un truco opcional: hoy se considera parte del equipamiento de seguridad de cualquier patinador urbano.',
    ],
    goals: [
      'Frenar en cualquier pendiente sin depender del taco.',
      'Controlar la pérdida de agarre en vez de sufrirla.',
      'Ampliar el repertorio de derrapes según el espacio disponible.',
      'Reducir el desgaste irregular de las ruedas con una técnica correcta.',
    ],
    recommendedLevel: 'intermedio',
    equipment: [
      'Ruedas duras (85A o más); las blandas se destruyen derrapando.',
      'Frame corto y bota reforzada, típica del patín freeskate.',
      'Superficie lisa y sin arena para las primeras pruebas.',
      'Protecciones completas: derrapar mal termina en el suelo.',
    ],
    techniques: [
      {
        name: 'Powerslide',
        description:
          'Derrape en paralelo con el pie adelantado estirado. El frenado de emergencia por excelencia.',
      },
      {
        name: 'Parallel slide',
        description: 'Ambos patines atravesados en paralelo, con el peso repartido entre los dos.',
      },
      {
        name: 'Soul slide',
        description: 'Derrape con un patín de lado y el otro apoyado en su base, cruzando el peso.',
      },
      {
        name: 'Magic slide',
        description:
          'Giro completo sobre las ruedas mientras se pierde agarre, popular en exhibiciones.',
      },
    ],
    videoIds: ['slides-roex', 'slides-aprender-derrapar', 'parallel-slide-peludos'],
    articleIds: ['como-elegir-ruedas', 'errores-comunes'],
  },
  {
    id: 'aggressive',
    name: 'Aggressive',
    description: 'Skatepark, grinds y obstáculos con patines reforzados.',
    summary:
      'El aggressive es el patinaje de skatepark y street: rampas, barandas, cajones y escaleras. Su lenguaje son los grinds y los saltos, y su equipo es el más reforzado de todos.',
    history: [
      'El aggressive explotó en los años noventa, cuando el patín en línea entró al skatepark y apareció una generación que patinaba obstáculos en vez de recorrer distancias. La disciplina tuvo enorme exposición televisiva en competencias de deportes extremos.',
      'Tras el declive comercial de comienzos de los dos mil, la escena se sostuvo de forma independiente: marcas pequeñas, videos hechos por los propios patinadores y competencias autogestionadas mantuvieron vivo el nivel técnico.',
      'Hoy el aggressive vive un resurgimiento, con presencia estable en skateparks y una comunidad que produce contenido propio en todo el mundo.',
    ],
    goals: [
      'Dominar los grinds sobre distintos tipos de obstáculo.',
      'Controlar el aire: entrada, rotación y aterrizaje.',
      'Leer un skatepark y planificar una línea completa.',
      'Aprender a caer, porque en esta disciplina se cae mucho.',
    ],
    recommendedLevel: 'avanzado',
    equipment: [
      'Patines aggressive con bota rígida, soul plate y grindblock.',
      'Frames con espacio central (H-block) para deslizar sobre barandas.',
      'Ruedas pequeñas y duras, entre 55 y 64 mm.',
      'Casco, rodilleras y protección de muñecas obligatorias.',
    ],
    techniques: [
      {
        name: 'Soul grind',
        description:
          'Deslizar con un patín sobre su placa lateral y el otro cruzado. El grind base.',
      },
      {
        name: 'Frontside',
        description: 'Grind con el cuerpo de frente al obstáculo, deslizando sobre el H-block.',
      },
      {
        name: 'Drop in',
        description: 'Entrada a una rampa desde el borde, comprometiendo el peso hacia adelante.',
      },
      {
        name: 'Air',
        description: 'Salto desde una rampa con control del cuerpo en el aire y aterrizaje limpio.',
      },
    ],
    videoIds: ['aggressive-how-to-grind', 'soul-grind-lino', 'aggressive-park'],
    articleIds: ['como-elegir-bota', 'errores-comunes'],
  },
  {
    id: 'quads',
    name: 'Quads',
    description: 'Patines de cuatro ruedas: rink, jam y estilo clásico.',
    summary:
      'Los quads son los patines de cuatro ruedas en dos ejes. Sostienen varias disciplinas propias: patín artístico, jam y roller dance, rink hockey, derby y patinaje recreativo.',
    history: [
      'El patín de cuatro ruedas es el más antiguo de todos: su diseño de dos ejes se consolidó en el siglo diecinueve y dominó el patinaje durante más de cien años, en pistas cubiertas y salones de baile.',
      'De ahí nacieron disciplinas completas: el patín artístico con figuras y saltos, el rink hockey, el roller derby y el jam skating ligado a la música y al baile.',
      'La llegada del patín en línea desplazó a los quads en los años noventa, pero nunca los reemplazó. En la última década volvieron con fuerza, sobre todo en patinaje artístico, danza y uso recreativo.',
    ],
    goals: [
      'Aprovechar la estabilidad lateral que dan dos ejes de ruedas.',
      'Aprender figuras, giros y saltos propios del patín artístico.',
      'Desarrollar musicalidad y expresión en danza y jam.',
      'Entender un equipo distinto: placa, cojinetes y freno delantero.',
    ],
    recommendedLevel: 'principiante',
    equipment: [
      'Patines quad con bota de cuero o sintética y placa atornillada.',
      'Cojinetes de goma ajustables, que definen cuánto gira el patín.',
      'Ruedas anchas: más blandas para exterior, más duras para pista.',
      'Freno delantero (toe stop) y casco.',
    ],
    techniques: [
      {
        name: 'Postura y equilibrio',
        description:
          'Peso repartido entre los cuatro puntos de apoyo, con las rodillas siempre flectadas.',
      },
      {
        name: 'Toe stop',
        description: 'Frenado con el taco delantero, apoyando la punta del patín en el suelo.',
      },
      {
        name: 'Cruzados',
        description: 'Cruce del pie exterior en curva, base tanto del artístico como del rink.',
      },
      {
        name: 'Saltos artísticos',
        description: 'Salto de vals, salchow y axel: rotaciones con despegue y caída controlada.',
      },
    ],
    videoIds: ['quads-aprender-patinar', 'quads-artistico-saltos', 'quads-roll-line'],
    articleIds: ['primeros-patines', 'errores-comunes'],
  },
  {
    id: 'hielo',
    name: 'Patinaje sobre hielo',
    description: 'Deslizamiento sobre hielo y transferencia de técnica al asfalto.',
    summary:
      'El patinaje sobre hielo cambia las ruedas por una cuchilla. La sensación es distinta, pero la base técnica —filos, postura y equilibrio— se transfiere directamente al patín de ruedas.',
    history: [
      'Patinar sobre hielo es una práctica milenaria: se han encontrado patines de hueso de más de tres mil años de antigüedad en el norte de Europa. Con la cuchilla de metal, en los siglos siguientes, dejó de ser transporte y pasó a ser deporte.',
      'En el siglo diecinueve se separaron las dos grandes ramas: el patinaje artístico, con figuras y saltos, y el patinaje de velocidad, con carreras en óvalo. Ambas están en los Juegos Olímpicos de Invierno desde sus primeras ediciones.',
      'En Chile la práctica depende de pistas artificiales, por lo que muchos patinadores llegan al hielo desde las ruedas y no al revés. La transferencia entre ambos mundos es alta: varios patinadores de velocidad han competido en las dos superficies.',
    ],
    goals: [
      'Entender el trabajo de filos, interno y externo, sobre cada pie.',
      'Deslizar con eficiencia sin depender del empuje constante.',
      'Aprender frenados propios del hielo, como el snowplow.',
      'Aprovechar el hielo para pulir postura y equilibrio de forma más exigente.',
    ],
    recommendedLevel: 'principiante',
    equipment: [
      'Patines de hielo artísticos, de velocidad o de hockey según el objetivo.',
      'Cuchillas afiladas y protectores para caminar fuera de la pista.',
      'Calcetines delgados y ropa que permita moverse pero abrigue.',
      'Casco recomendado, y guantes siempre: las caídas son sobre hielo duro.',
    ],
    techniques: [
      {
        name: 'Marcha básica',
        description: 'Primeros desplazamientos con empujes cortos y peso adelantado.',
      },
      {
        name: 'Filos',
        description:
          'Inclinar el tobillo para deslizar sobre el filo interno o externo y trazar curvas.',
      },
      {
        name: 'Snowplow',
        description: 'Frenado abriendo la punta de los pies hacia dentro y raspando el hielo.',
      },
      {
        name: 'Cruzados sobre hielo',
        description: 'Cruce del pie exterior en curva, muy parecido al cruzado en ruedas.',
      },
    ],
    videoIds: ['hielo-principiantes', 'hielo-leccion-1', 'hielo-guia-saltos'],
    articleIds: ['errores-comunes', 'primeros-patines'],
  },
];
