import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sparkops.ai' // CAMBIA ESTO CUANDO TENGAS EL DOMINIO REAL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/privado/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}