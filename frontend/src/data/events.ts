import type { UpcomingEvent } from '@/types';

/**
 * Solo eventos grandes con fecha y fuente oficial confirmadas. ProRoller no
 * promociona eventos ni vende inscripciones.
 */
export const upcomingEvents: readonly UpcomingEvent[] = [
  {
    id: 'world-skate-games-asuncion-2026',
    name: 'World Skate Games Asunción 2026',
    scope: 'internacional',
    location: 'Asunción, Paraguay',
    startDate: '2026-10-02',
    endDate: '2026-10-18',
    disciplines: ['Speed', 'Inline freestyle', 'Downhill', 'Skateboarding', 'Otras disciplinas'],
    summary:
      'El evento bienal de World Skate reúne 12 deportes y 23 disciplinas en Asunción, con más de 10.000 atletas y equipos de más de 100 países. La maratón de cierre entrega además título mundial.',
    source: {
      name: 'World Skate',
      url: 'https://www.worldskate.org/news/3919-world-skate-games-asuncion-2026-registration,-media-accreditation-now-open.html',
    },
  },
  {
    id: 'juegos-panamericanos-lima-2027',
    name: 'Juegos Panamericanos Lima 2027',
    scope: 'internacional',
    location: 'Lima, Perú',
    startDate: '2027-07-23',
    endDate: '2027-08-08',
    disciplines: ['Speed', 'Skateboarding'],
    summary:
      'La vigésima edición de los Juegos Panamericanos se disputará en Lima con 38 deportes. El patinaje de velocidad ha sido parte estable del programa panamericano.',
    source: {
      name: 'Wikipedia: 2027 Pan American Games',
      url: 'https://en.wikipedia.org/wiki/2027_Pan_American_Games',
    },
  },
];
