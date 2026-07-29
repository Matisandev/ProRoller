import type { Discipline } from '@/types';

export const disciplines: readonly Discipline[] = [
  {
    id: 'freeskate',
    name: 'Freeskate',
    description: 'Patinaje urbano libre: control, frenadas y lectura de la calle.',
  },
  {
    id: 'slalom',
    name: 'Slalom',
    description: 'Trucos y precisión entre conos, la base del control fino.',
  },
  {
    id: 'speed',
    name: 'Speed',
    description: 'Velocidad y resistencia sobre pista o ruta.',
  },
  {
    id: 'jump',
    name: 'Jump',
    description: 'Saltos de altura y distancia con técnica y potencia.',
  },
  {
    id: 'slide',
    name: 'Slide',
    description: 'Derrapes controlados para frenar y dominar la inercia.',
  },
  {
    id: 'aggressive',
    name: 'Aggressive',
    description: 'Skatepark, grinds y obstáculos con patines reforzados.',
  },
  {
    id: 'quads',
    name: 'Quads',
    description: 'Patines de cuatro ruedas: rink, jam y estilo clásico.',
  },
  {
    id: 'hielo',
    name: 'Hielo',
    description: 'Deslizamiento sobre hielo y transferencia de técnica al asfalto.',
  },
];
