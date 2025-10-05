interface ImageSitemapEntry {
  pageUrl: string;
  images: {
    url: string;
    caption?: string;
    title?: string;
    license?: string;
  }[];
}

export async function generateImagesSitemap(
  getImageEntries: () => Promise<ImageSitemapEntry[]> = async () => []
): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const entries = await getImageEntries();

  const urlEntries = entries.map(({ pageUrl, images }) => `
  <url>
    <loc>${baseUrl}${pageUrl}</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.url.startsWith('http') ? img.url : baseUrl + img.url}</image:loc>
      ${img.caption ? `<image:caption><![CDATA[${img.caption}]]></image:caption>` : ''}
      ${img.title ? `<image:title><![CDATA[${img.title}]]></image:title>` : ''}
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('')}
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return xml;
}