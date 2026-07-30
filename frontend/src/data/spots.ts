import type { Spot } from '@/types';

/**
 * Datos de ejemplo. La información real de cada spot está en levantamiento, por lo
 * que estas fichas se publican como borrador y la sección se muestra en desarrollo.
 */
export const spots: readonly Spot[] = [
  {
    id: 'spot-ejemplo-plaza',
    name: 'Plaza de ejemplo',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo para mostrar la estructura de un spot: explanada amplia, sin tránsito vehicular y con espacio para practicar frenadas y giros.',
    recommendedLevel: 'principiante',
    surface: 'Por confirmar',
    disciplineIds: ['freeskate', 'slalom'],
    technicalRequirements: [
      'Frenado básico resuelto (cuña o freno en T).',
      'Postura estable a velocidad baja.',
    ],
    safetyTips: [
      'Casco y protecciones completas.',
      'Revisar la superficie antes de patinar: arena y hojas hacen perder agarre.',
      'Respetar a peatones y ciclistas.',
    ],
    images: [],
    status: 'borrador',
  },
  {
    id: 'spot-ejemplo-bajada',
    name: 'Bajada de ejemplo',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo de un spot con pendiente: sirve para ilustrar qué datos pediremos antes de publicar un descenso real.',
    recommendedLevel: 'avanzado',
    surface: 'Por confirmar',
    disciplineIds: ['downhill', 'slide'],
    technicalRequirements: [
      'Powerslide confiable.',
      'Freno en T sólido a velocidad media.',
      'Experiencia previa en pendientes suaves.',
    ],
    safetyTips: [
      'Nunca bajar sin haber revisado la pendiente completa a pie.',
      'Casco siempre; en descensos rápidos, casco integral y guantes.',
      'Definir una zona de escape antes de comenzar.',
    ],
    images: [],
    status: 'borrador',
  },
  {
    id: 'spot-ejemplo-skatepark',
    name: 'Skatepark de ejemplo',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo de un skatepark: módulos, rampas y cajones para trabajar aggressive y saltos.',
    recommendedLevel: 'intermedio',
    surface: 'Por confirmar',
    disciplineIds: ['aggressive', 'jump'],
    technicalRequirements: [
      'Saltos y aterrizajes resueltos en plano.',
      'Caída controlada entrenada.',
    ],
    safetyTips: [
      'Protecciones completas, incluidas rodilleras de carcasa dura.',
      'Respetar los turnos de uso de cada módulo.',
      'Empezar por los módulos bajos.',
    ],
    images: [],
    status: 'borrador',
  },
];
