import type { NewsItem } from '@/types';

/**
 * Noticias de terceros. ProRoller publica solo un resumen propio y enlaza a la
 * fuente oficial: nunca reproduce el artículo completo.
 */
export const news: readonly NewsItem[] = [
  {
    id: 'velopro-speed-systems',
    title: 'World Skate moderniza la gestión de las competencias de velocidad',
    summary:
      'La federación internacional acordó una alianza con Velopro Speed Systems para reemplazar planillas y cálculos manuales por una plataforma digital única, que cubre desde la inscripción de atletas hasta los resultados en vivo. La idea es que una competencia local y un campeonato internacional se administren con el mismo estándar.',
    publishedAt: '2026-07-29',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/speed/news-speed/3922-world-skate-partners-with-velopro-speed-systems-to-modernise-speed-skating-competition-management.html',
    },
  },
  {
    id: 'marathon-tour-asuncion',
    title: 'El World Skate Marathon Tour llega a Asunción',
    summary:
      'El 18 de octubre se corre en Asunción una maratón que entrega títulos de campeón del mundo y cuenta además como fecha oficial del World Skate Marathon Tour. La carrera cierra el último día de los World Skate Games ASU26, después de las fechas de Shanghái y Pamplona.',
    publishedAt: '2026-07-27',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/speed/news-speed/3921-the-world-skate-marathon-tour-heads-to-asunci%C3%B3n.html',
    },
  },
  {
    id: 'wsg-asuncion-inscripciones',
    title: 'World Skate Games Asunción 2026: inscripciones y acreditaciones abiertas',
    summary:
      'Ya están abiertas la inscripción de atletas y la acreditación de prensa para los World Skate Games de Asunción, que se realizarán en octubre en Paraguay. La organización espera más de 10.000 atletas y equipos de más de 100 países, con 23 disciplinas y 154 títulos mundiales en juego.',
    publishedAt: '2026-07-22',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/news/3919-world-skate-games-asuncion-2026-registration,-media-accreditation-now-open.html',
    },
  },
  {
    id: 'inline-freestyle-world-cup-milan',
    title: 'Milán llenó la plaza con la Copa del Mundo de Inline Freestyle',
    summary:
      'Entre el 30 de junio y el 4 de julio, la Piazza Duca d’Aosta de Milán se transformó en pista de freestyle al aire libre. El evento, gratuito, reunió a más de 500 atletas de más de 25 países y a un público masivo en pleno centro de la ciudad.',
    publishedAt: '2026-07-09',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/inline-freestyle/news-inline-freestyle/3916-milan-lights-up-the-inline-freestyle-world-cup-2026.html',
    },
  },
  {
    id: 'rink-hockey-sorteo-asuncion',
    title: 'Sorteo confirmado: grupos del rink hockey en Asunción 2026',
    summary:
      'World Skate realizó el sorteo oficial del rink hockey para los World Skate Games de Asunción y definió la fase de grupos de cuatro competencias: mundial masculino sub-19, mundial femenino, mundial masculino adulto e intercontinental masculino.',
    publishedAt: '2026-07-09',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/rink-hockey/news-rink-hockey/3915-rink-hockey-draw-confirmed-groups-set-for-the-world-skate-games-asunci%C3%B3n-2026.html',
    },
  },
];
