import { cookies } from 'next/headers';
import { defaultLocale, isLocale, localeCookieName, type Locale } from '@/i18n/config';
import { getMessages, type Messages } from '@/i18n';

/**
 * Idioma de la petición. Se guarda en una cookie mientras no exista una ruta por idioma:
 * el contenido editorial sigue en español y solo se traduce la interfaz.
 */
export const getRequestLocale = async (): Promise<Locale> => {
  const store = await cookies();
  const value = store.get(localeCookieName)?.value;

  return isLocale(value) ? value : defaultLocale;
};

export const getRequestMessages = async (): Promise<Messages> =>
  getMessages(await getRequestLocale());
