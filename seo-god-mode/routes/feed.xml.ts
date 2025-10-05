interface FeedItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author?: string;
  category?: string;
  guid?: string;
  enclosure?: {
    url: string;
    type: string;
    length: number;
  };
}

export async function generateRSSFeed(
  getFeedItems: () => Promise<FeedItem[]> = async () => [],
  feedInfo: {
    title: string;
    description: string;
    link: string;
    language?: string;
    managingEditor?: string;
    webMaster?: string;
    hubUrl?: string;
  } = {
    title: 'Site Feed',
    description: 'Latest updates',
    link: '/',
    language: 'en-US'
  }
): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const items = await getFeedItems();
  const feedUrl = `${baseUrl}/feed.xml`;

  const itemEntries = items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link.startsWith('http') ? item.link : baseUrl + item.link}</link>
      <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
      ${item.author ? `<author>${item.author}</author>` : ''}
      ${item.category ? `<category>${item.category}</category>` : ''}
      <guid isPermaLink="true">${item.guid || (item.link.startsWith('http') ? item.link : baseUrl + item.link)}</guid>
      ${item.enclosure ? `<enclosure url="${item.enclosure.url}" type="${item.enclosure.type}" length="${item.enclosure.length}" />` : ''}
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${feedInfo.title}]]></title>
    <description><![CDATA[${feedInfo.description}]]></description>
    <link>${baseUrl}${feedInfo.link}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${feedInfo.hubUrl ? `<atom:link href="${feedInfo.hubUrl}" rel="hub" />` : ''}
    <language>${feedInfo.language || 'en-US'}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>SEO God Mode</generator>
    ${feedInfo.managingEditor ? `<managingEditor>${feedInfo.managingEditor}</managingEditor>` : ''}
    ${feedInfo.webMaster ? `<webMaster>${feedInfo.webMaster}</webMaster>` : ''}
    ${itemEntries}
  </channel>
</rss>`;

  return xml;
}

export function feedHeaders() {
  return {
    'Content-Type': 'application/rss+xml; charset=utf-8',
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
  };
}