interface DynamicSitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export async function generateDynamicSitemap(
  getUrls: () => Promise<DynamicSitemapUrl[]> = async () => []
): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const urls = await getUrls();
  const maxUrls = 50000; // Sitemap protocol limit
  const limitedUrls = urls.slice(0, maxUrls);

  const urlEntries = limitedUrls.map(({ url, lastmod, changefreq, priority }) => `
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