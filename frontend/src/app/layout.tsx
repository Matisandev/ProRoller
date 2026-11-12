import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { siteUrl } from '@/config/site';
import { defaultLocale } from '@/i18n/config';
import { getMessages } from '@/i18n';
import { getRequestLocale, getRequestMessages } from '@/i18n/server';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const { metadata: metadataMessages } = getMessages();

const MAIN_CONTENT_ID = 'contenido';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metadataMessages.title,
    template: metadataMessages.titleTemplate.replace('{title}', '%s'),
  },
  description: metadataMessages.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: defaultLocale,
    url: '/',
    siteName: metadataMessages.siteName,
    title: metadataMessages.title,
    description: metadataMessages.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataMessages.title,
    description: metadataMessages.description,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, { common, nav }] = await Promise.all([getRequestLocale(), getRequestMessages()]);

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Aplica el tema guardado antes de pintar, igual que en el portafolio y Kastigo.
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-screen bg-night font-sans text-ink antialiased">
        <a
          href={`#${MAIN_CONTENT_ID}`}
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-night"
        >
          {common.skipToContent}
        </a>
        <Navbar locale={locale} nav={nav} common={common} />
        <main id={MAIN_CONTENT_ID}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
