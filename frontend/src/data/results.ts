import type { CompetitionResult } from '@/types';

const panamericanos2023 = {
  competition: 'Juegos Panamericanos Santiago 2023',
  discipline: 'Speed',
  location: 'Patinódromo, Santiago, Chile',
} as const;

const panamericanos2023Source = {
  name: 'Wikipedia: Roller sports at the 2023 Pan American Games',
  url: 'https://en.wikipedia.org/wiki/Roller_sports_at_the_2023_Pan_American_Games',
} as const;

/**
 * Resultados oficiales ya disputados, con su fuente pública. ProRoller no publica
 * podios estimados ni resultados sin fuente verificable.
 */
export const results: readonly CompetitionResult[] = [
  {
    id: 'panamericanos-2023-200m-varones',
    ...panamericanos2023,
    event: '200 m contrarreloj, varones',
    startDate: '2023-11-04',
    podium: [
      { position: 1, athlete: 'Emanuelle Silva', country: 'CHI' },
      { position: 2, athlete: 'Jorge Martínez', country: 'MEX' },
      { position: 3, athlete: 'Andrés Jiménez', country: 'COL' },
    ],
    source: panamericanos2023Source,
  },
  {
    id: 'panamericanos-2023-1000m-varones',
    ...panamericanos2023,
    event: '1.000 m sprint, varones',
    startDate: '2023-11-04',
    podium: [
      { position: 1, athlete: 'Juan Mantilla', country: 'COL' },
      { position: 2, athlete: 'Andrés Jiménez', country: 'COL' },
      { position: 3, athlete: 'Hugo Ramírez', country: 'CHI' },
    ],
    source: panamericanos2023Source,
  },
  {
    id: 'panamericanos-2023-1000m-damas',
    ...panamericanos2023,
    event: '1.000 m sprint, damas',
    startDate: '2023-11-04',
    podium: [
      { position: 1, athlete: 'Gabriela Rueda', country: 'COL' },
      { position: 2, athlete: 'Gabriela Vargas', country: 'ECU' },
      { position: 3, athlete: 'Angy Quintero', country: 'VEN' },
    ],
    source: panamericanos2023Source,
  },
  {
    id: 'panamericanos-2023-500m-damas',
    ...panamericanos2023,
    event: '500 m + distancia, damas',
    startDate: '2023-11-05',
    podium: [
      { position: 1, athlete: 'Erin Jackson', country: 'USA' },
      { position: 2, athlete: 'María Arias', country: 'ECU' },
      { position: 3, athlete: 'Geiny Pájaro', country: 'COL' },
    ],
    source: panamericanos2023Source,
  },
  {
    id: 'panamericanos-2023-10000m-varones',
    ...panamericanos2023,
    event: '10.000 m eliminación, varones',
    startDate: '2023-11-05',
    podium: [
      { position: 1, athlete: 'Andrés Gómez', country: 'COL' },
      { position: 2, athlete: 'Juan Mantilla', country: 'COL' },
      { position: 3, athlete: 'Hugo Ramírez', country: 'CHI' },
    ],
    source: panamericanos2023Source,
  },
  {
    id: 'panamericanos-2023-10000m-damas',
    ...panamericanos2023,
    event: '10.000 m eliminación, damas',
    startDate: '2023-11-05',
    podium: [
      { position: 1, athlete: 'Fabriana Arias', country: 'COL' },
      { position: 2, athlete: 'Gabriela Rueda', country: 'COL' },
      { position: 3, athlete: 'Gabriela Vargas', country: 'ECU' },
    ],
    source: panamericanos2023Source,
  },
];
