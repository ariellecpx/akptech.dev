interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export async function generateStaticSitemap(urls: SitemapUrl[] = []): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  // Default static pages
  const defaultUrls: SitemapUrl[] = [
    { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { url: '/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    ...urls
  ];

  const urlEntries = defaultUrls.map(({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return xml;
}