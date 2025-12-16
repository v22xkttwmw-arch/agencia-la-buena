/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Permitimos fotos de Unsplash
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', // Permitimos avatares generados por letras
      },
    ],
  },
};

export default nextConfig;