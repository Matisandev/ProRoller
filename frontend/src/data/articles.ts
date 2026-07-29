import type { Article } from '@/types';

export const articles: readonly Article[] = [
  {
    id: 'primeros-patines',
    title: 'Cómo elegir tus primeros patines sin equivocarte',
    excerpt: 'Talla, estructura y tipo de uso: los tres criterios que definen tu primera compra.',
    category: 'Guía',
    readingMinutes: 7,
  },
  {
    id: 'frenar-freeskate',
    title: 'Aprender a frenar: del T-stop al powerslide',
    excerpt: 'La progresión de frenadas ordenada por dificultad y por riesgo real de caída.',
    category: 'Técnica',
    readingMinutes: 9,
  },
  {
    id: 'ruedas-dureza',
    title: 'Dureza de ruedas explicada para patinadores nuevos',
    excerpt: 'Qué significa 84A, cuándo conviene más agarre y cuándo conviene más deslizamiento.',
    category: 'Material',
    readingMinutes: 5,
  },
];
