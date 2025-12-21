import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://macdonaldhighlandshomes.com';
  const now = new Date();
  
  const routes = [
    {
      url: '',
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/services',
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/services/selling-your-macdonald-highlands-home',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: '/services/buying-in-macdonald-highlands',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: '/services/luxury-home-valuation',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: '/services/relocation-concierge',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/investment-advisory',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/off-market-opportunities',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/about-dr-jan-duffy',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/macdonald-highlands-community',
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/listings',
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: '/sold',
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: '/testimonials',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/contact',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

