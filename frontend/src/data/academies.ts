import type { Academy } from '@/types';

/**
 * Datos de ejemplo. Las escuelas, clubes y grupos reales se publicarán cuando sus
 * datos estén verificados y autorizados: estas fichas son borrador.
 */
export const academies: readonly Academy[] = [
  {
    id: 'academia-ejemplo-escuela',
    name: 'Escuela de ejemplo',
    kind: 'escuela',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo de una escuela de patinaje: clases por nivel, arriendo de equipo y grupos para adultos.',
    disciplineIds: ['freeskate', 'slalom'],
    images: [],
    socialLinks: [],
    status: 'borrador',
  },
  {
    id: 'academia-ejemplo-club',
    name: 'Club de ejemplo',
    kind: 'club',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo de un club deportivo: entrenamientos federados y participación en competencias.',
    disciplineIds: ['speed'],
    images: [],
    socialLinks: [],
    status: 'borrador',
  },
  {
    id: 'academia-ejemplo-grupo',
    name: 'Grupo de patinaje de ejemplo',
    kind: 'grupo',
    city: 'Ciudad por confirmar',
    description:
      'Ficha de ejemplo de un grupo abierto: salidas periódicas, ritmo recreativo y comunidad.',
    disciplineIds: ['freeskate'],
    images: [],
    socialLinks: [],
    status: 'borrador',
  },
];
