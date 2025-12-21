import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://macdonaldhighlandshomes.com';
  
  const routes = [
    '',
    '/services',
    '/services/selling-your-macdonald-highlands-home',
    '/services/buying-in-macdonald-highlands',
    '/services/luxury-home-valuation',
    '/services/relocation-concierge',
    '/services/investment-advisory',
    '/services/off-market-opportunities',
    '/about-dr-jan-duffy',
    '/macdonald-highlands-community',
    '/listings',
    '/sold',
    '/testimonials',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}

