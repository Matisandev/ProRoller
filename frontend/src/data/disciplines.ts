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
    whatToLearnFirst: [
      'Postura básica: rodillas flectadas, peso al centro y mirada al frente.',
      'Cómo caer: aprender a repartir el golpe antes de subir la velocidad.',
      'Freno en cuña y freno en T, en ese orden.',
      'Giro natural en las dos direcciones, sin cruzar los pies.',
    ],
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
    whatToLearnFirst: [
      'Equilibrio sobre un solo patín, primero detenido y después en movimiento.',
      'Cruzados alrededor del cono, la línea de 80 cm como referencia.',
      'Serpiente en paralelo para soltar los tobillos.',
      'Giros de punta para cambiar de dirección sin salir de la línea.',
    ],
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
    whatToLearnFirst: [
      'Postura baja y estable, con el tronco adelantado y la mirada lejos.',
      'Zancada completa: empujar hacia el lado y recuperar bajo el cuerpo.',
      'Cruzados en curva a baja velocidad antes de exigir el ritmo.',
      'Frenados de seguridad, porque el patín de velocidad no trae taco.',
    ],
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
    whatToLearnFirst: [
      'Aterrizaje y caída controlada, antes que la altura.',
      'Salto a dos pies sin obstáculo, buscando extensión completa.',
      'Aproximación con velocidad constante y patines paralelos.',
      'Recogida de rodillas en el aire, primero a poca altura.',
    ],
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
    whatToLearnFirst: [
      'Freno en T sólido: sin él el derrape llega antes de tiempo.',
      'Perder agarre a propósito en plano y a baja velocidad.',
      'Powerslide desde poca velocidad, con el pie adelantado estirado.',
      'Cómo caer hacia el lado cuando el derrape se pasa de largo.',
    ],
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
    whatToLearnFirst: [
      'Caer y rodar, porque en el skatepark la caída es parte del aprendizaje.',
      'Drop in en una rampa baja hasta que deje de dar miedo.',
      'Salto y aterrizaje limpios sobre plano.',
      'Soul grind en un cajón bajo antes de subir a una baranda.',
    ],
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
    id: 'downhill',
    name: 'Downhill',
    description: 'Descenso de pendientes largas con control de velocidad.',
    summary:
      'El downhill consiste en bajar pendientes de asfalto a alta velocidad. Es la disciplina donde la técnica de frenado deja de ser un complemento y pasa a ser el requisito principal: sin frenadas confiables, no hay bajada posible.',
    history: [
      'El descenso en patines nació de la práctica urbana: cualquier patinador que baja un cerro descubre rápido que el taco no alcanza para controlar la velocidad y que necesita técnicas específicas de frenado y trazado.',
      'Con el tiempo el descenso se organizó como especialidad propia, con recorridos cerrados al tránsito, cronometraje y equipamiento reforzado. World Skate reconoce el downhill dentro de sus disciplinas de patinaje.',
      'El equipo evolucionó hacia frames largos, ruedas grandes y duras y protecciones de nivel alto, incluyendo cascos integrales y guantes reforzados en las competencias más rápidas.',
    ],
    goals: [
      'Controlar la velocidad en pendiente con más de una técnica de frenado.',
      'Trazar curvas con el peso bajo y estable, sin bloquear las piernas.',
      'Leer la superficie, la pendiente y el tránsito antes de bajar.',
      'Aumentar el margen de seguridad, no la velocidad máxima.',
    ],
    whatToLearnFirst: [
      'Powerslide confiable en plano y en bajadas suaves.',
      'Freno en T y freno en cuña para bajar velocidad de forma progresiva.',
      'Postura baja y compacta, con el peso repartido entre los dos patines.',
      'Curvas amplias para disipar velocidad sin frenar en seco.',
    ],
    equipment: [
      'Patines con bota rígida y buen soporte de tobillo.',
      'Frames largos y ruedas duras, resistentes al desgaste de los derrapes.',
      'Casco siempre; en descensos rápidos, casco integral y guantes reforzados.',
      'Rodilleras, coderas y muñequeras: en pendiente la caída llega con más energía.',
    ],
    techniques: [
      {
        name: 'Posición de descenso',
        description:
          'Rodillas muy flectadas, tronco adelantado y patines estables para reducir el balanceo.',
      },
      {
        name: 'Powerslide en pendiente',
        description:
          'Derrape en paralelo para cortar la velocidad cuando el freno progresivo no alcanza.',
      },
      {
        name: 'Curvas de disipación',
        description:
          'Encadenar curvas amplias de lado a lado para controlar la velocidad sin frenar de golpe.',
      },
      {
        name: 'Lectura de la bajada',
        description:
          'Revisar la pendiente completa antes de bajar: superficie, arena, cruces y salidas de escape.',
      },
    ],
    videoIds: ['downhill-principiantes', 'downhill-control-velocidad', 'downhill-frenado'],
    articleIds: ['errores-comunes', 'como-elegir-ruedas'],
  },
];
