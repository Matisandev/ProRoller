import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Miniaturas de los videos públicos de YouTube que ProRoller embede.
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },
      // Fotografía pública del autor del proyecto.
      { protocol: 'https', hostname: 'matisandev.github.io', pathname: '/assets/img/**' },
    ],
  },
};

export default nextConfig;
