'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { defaultLocale, isLocale, localeCookieName } from '@/i18n/config';

const oneYearInSeconds = 60 * 60 * 24 * 365;

export const setLocale = async (formData: FormData): Promise<void> => {
  const value = formData.get('locale');
  const locale = typeof value === 'string' && isLocale(value) ? value : defaultLocale;
  const store = await cookies();

  store.set(localeCookieName, locale, {
    path: '/',
    maxAge: oneYearInSeconds,
    sameSite: 'lax',
  });

  revalidatePath('/', 'layout');
};
