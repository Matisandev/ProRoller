import type { CompetitionResult } from '@/types';

export const results: readonly CompetitionResult[] = [
  {
    id: 'juegos-panamericanos',
    competition: 'Juegos Panamericanos',
    discipline: 'Speed · 500 m',
    location: 'Santiago, Chile',
    podium: [
      { position: 1, athlete: 'Nombre de ejemplo', country: 'COL' },
      { position: 2, athlete: 'Nombre de ejemplo', country: 'CHI' },
      { position: 3, athlete: 'Nombre de ejemplo', country: 'ARG' },
    ],
  },
  {
    id: 'campeonato-nacional',
    competition: 'Campeonato Nacional',
    discipline: 'Slalom · Classic',
    location: 'Santiago, Chile',
    podium: [
      { position: 1, athlete: 'Nombre de ejemplo', country: 'CHI' },
      { position: 2, athlete: 'Nombre de ejemplo', country: 'CHI' },
      { position: 3, athlete: 'Nombre de ejemplo', country: 'CHI' },
    ],
  },
];
