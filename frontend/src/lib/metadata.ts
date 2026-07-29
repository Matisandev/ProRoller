import type { Metadata } from 'next';
import { getMessages, interpolate } from '@/i18n';
import { defaultLocale } from '@/i18n/config';

interface PageMetadataInput {
  readonly title: string;
  readonly description: string;
  readonly path: string;
}

/** Metadata consistente para cada página, incluyendo canonical y Open Graph. */
export const buildPageMetadata = ({ title, description, path }: PageMetadataInput): Metadata => {
  const { metadata } = getMessages();
  const fullTitle = interpolate(metadata.titleTemplate, { title });

  return {
    // El sufijo lo agrega la plantilla del layout raíz.
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: defaultLocale,
      url: path,
      siteName: metadata.siteName,
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
};
