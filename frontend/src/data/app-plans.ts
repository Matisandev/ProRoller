import type { AppPlan } from '@/types';

/**
 * Presentación de los planes de ProRoller App. En la web no hay autenticación,
 * pagos ni funcionalidades de entrenamiento: solo la presentación del producto.
 */
export const appPlans: readonly AppPlan[] = [
  {
    id: 'experience',
    name: 'ProRoller Experience',
    promise: 'Aprende.',
    description:
      'Acceso gratuito a todo el contenido educativo: disciplinas, tutoriales, artículos, fichas de patines y seguridad.',
    features: [
      'Todo el contenido educativo, sin costo.',
      'Disciplinas, tutoriales y guías de material.',
      'Fichas de patines y de protecciones.',
      'Noticias y resultados del patinaje.',
    ],
    futureFeatures: [],
    availability: 'disponible',
  },
  {
    id: 'plus',
    name: 'ProRoller Plus',
    promise: 'Entrena.',
    description:
      'Pensado para quienes convierten el patinaje en un hobby serio y quieren ordenar su progreso.',
    features: [
      'Registro de entrenamientos.',
      'Ruta de aprendizaje.',
      'Logros.',
      'Objetivos.',
      'Academia personalizada.',
      'Estadísticas básicas.',
    ],
    futureFeatures: [],
    availability: 'proximamente',
  },
  {
    id: 'elite',
    name: 'ProRoller Elite',
    promise: 'Compite.',
    description:
      'Pensado para deportistas experimentados. La idea de Elite no es seguir enseñando a patinar, sino entregar herramientas para quienes buscan competir.',
    features: [],
    futureFeatures: [
      'Coach con inteligencia artificial.',
      'Estadísticas avanzadas.',
      'Nutrición.',
      'Descanso y recuperación.',
      'Preparación física.',
      'Preparación para competencias.',
      'Torneos recomendados según disciplina.',
      'Próximos torneos adecuados para comenzar a competir.',
      'Inscripción a través del enlace oficial del organizador.',
      'Resultados de otros deportistas como inspiración.',
    ],
    availability: 'proximamente',
  },
];
