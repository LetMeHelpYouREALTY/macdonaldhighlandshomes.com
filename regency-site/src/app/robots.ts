import { MetadataRoute } from 'next';

/** Explicit AI crawler allowlist for GEO/AEO citation indexing (2026). */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
] as const;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.macdonaldhighlandshomes.com';
  const disallow = [
    '/api/',
    '/admin/',
    '/Dashboard/',
    '/Login/',
    '/Property/',
    '/image-diagnostic/',
    '/test-images/',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
