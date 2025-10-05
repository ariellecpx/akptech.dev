import { buildMeta } from '../core/meta';
import { securityHeaders, cacheHeaders } from '../core/headers';
import { preloadTags } from '../core/speed';

export interface SEOConfig {
  title: string;
  description?: string;
  image?: string;
  robots?: string;
  path: string;
}

export class GenericSEOAdapter {
  generateMetaTags(config: SEOConfig): string {
    const meta = buildMeta(config);
    
    return `
      <title>${meta.title}</title>
      <meta name="description" content="${meta.description}">
      <meta name="robots" content="${meta.robots}">
      <link rel="canonical" href="${meta.canonical}">
      <meta property="og:title" content="${meta.og['og:title']}">
      <meta property="og:description" content="${meta.og['og:description']}">
      <meta property="og:url" content="${meta.og['og:url']}">
      ${meta.og['og:image'] ? `<meta property="og:image" content="${meta.og['og:image']}">` : ''}
    `.trim();
  }

  generateSecurityHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    securityHeaders.forEach(([key, value]) => {
      headers[key] = value;
    });
    return headers;
  }

  generateCacheHeaders(sMaxage = 86400, staleWhileRevalidate = 604800): string {
    return cacheHeaders(sMaxage, staleWhileRevalidate);
  }

  generatePreloadTags(): string {
    return preloadTags();
  }

  // No-op methods for frameworks that don't support these features
  generateSitemap(): string[] {
    console.warn('Sitemap generation not implemented for generic adapter');
    return [];
  }

  generateRobotsTxt(): string {
    return `User-agent: *\nAllow: /`;
  }

  generateFeed(): string {
    console.warn('Feed generation not implemented for generic adapter');
    return '';
  }
}