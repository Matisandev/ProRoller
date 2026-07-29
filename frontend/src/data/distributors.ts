import type { Distributor } from '@/types';

/**
 * Directorio editorial. ProRoller no vende productos, no maneja stock y no usa
 * enlaces de afiliados: solo enlaza al sitio oficial de cada distribuidor.
 */
export const distributors: readonly Distributor[] = [
  {
    id: 'alacalufe',
    name: 'Alacalufe',
    country: 'Chile',
    description:
      'Distribuidor chileno de patinaje con catálogo de patines, componentes y protecciones. Atiende a la comunidad local de freeskate y slalom.',
    website: 'https://www.alacalufe.cl',
  },
  {
    id: 'decathlon',
    name: 'Decathlon',
    country: 'Chile',
    description:
      'Cadena internacional de artículos deportivos con tiendas en Chile. Cubre patinaje de iniciación, protecciones y accesorios.',
    website: 'https://www.decathlon.cl',
  },
];
