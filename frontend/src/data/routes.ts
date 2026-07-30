import type { SkateRoute } from '@/types';

/**
 * Datos de ejemplo. Las rutas reales, con distancias y mapas verificados, están en
 * levantamiento: estas fichas se publican como borrador.
 */
export const skateRoutes: readonly SkateRoute[] = [
  {
    id: 'ruta-ejemplo-urbana',
    name: 'Ruta urbana de ejemplo',
    city: 'Ciudad por confirmar',
    distanceKm: 8,
    estimatedTime: 'Por confirmar',
    level: 'principiante',
    surface: 'Por confirmar',
    requirements: ['Frenado básico resuelto.', 'Capacidad de patinar 30 minutos continuos.'],
    safetyTips: [
      'Casco y protecciones completas.',
      'Llevar agua y revisar el estado de las ruedas antes de salir.',
      'Evitar horarios de mayor tránsito.',
    ],
    images: [],
    status: 'borrador',
  },
  {
    id: 'ruta-ejemplo-larga',
    name: 'Ruta larga de ejemplo',
    city: 'Ciudad por confirmar',
    distanceKm: 20,
    estimatedTime: 'Por confirmar',
    level: 'intermedio',
    surface: 'Por confirmar',
    requirements: [
      'Zancada eficiente y resistencia para más de una hora de patinaje.',
      'Frenados confiables en bajada.',
    ],
    safetyTips: [
      'Planificar puntos de agua y de salida.',
      'Patinar acompañado en recorridos largos.',
      'Revisar rodamientos y tornillería antes de salir.',
    ],
    images: [],
    status: 'borrador',
  },
];
