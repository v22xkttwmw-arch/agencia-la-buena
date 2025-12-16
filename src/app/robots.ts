import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Permitir a todos los robots (Google, Bing, etc.)
      allow: '/',     // Permitir leer toda la web
      disallow: '/private/', // (Opcional) Bloquear carpetas privadas si tuvieras
    },
    sitemap: 'https://agenciaia.ai/sitemap.xml', // Cambiaremos esto por tu dominio real luego
  };
}