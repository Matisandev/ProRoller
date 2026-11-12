import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ProRoller se publica dentro de matisandev.cl/proroller.
  basePath: '/proroller',
  experimental: {
    // Las acciones (cambio de idioma) llegan a través del proxy de matisandev.cl.
    serverActions: { allowedOrigins: ['www.matisandev.cl', 'matisandev.cl'] },
  },
  async redirects() {
    return [{ source: '/', destination: '/proroller', basePath: false, permanent: false }];
  },
  images: {
    remotePatterns: [
      // Miniaturas de los videos públicos de YouTube que ProRoller embede.
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },
    ],
  },
};

export default nextConfig;
