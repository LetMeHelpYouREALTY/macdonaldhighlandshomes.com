import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://macdonaldhighlandshomes.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/Dashboard/', '/Login/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/Dashboard/', '/Login/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

