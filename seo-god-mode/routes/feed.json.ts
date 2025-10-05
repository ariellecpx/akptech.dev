interface JSONFeedItem {
  id: string;
  title: string;
  content_text?: string;
  content_html?: string;
  url: string;
  external_url?: string;
  summary?: string;
  image?: string;
  banner_image?: string;
  date_published: string;
  date_modified?: string;
  author?: {
    name: string;
    url?: string;
    avatar?: string;
  };
  tags?: string[];
  language?: string;
  attachments?: Array<{
    url: string;
    mime_type: string;
    title?: string;
    size_in_bytes?: number;
    duration_in_seconds?: number;
  }>;
}

interface JSONFeed {
  version: string;
  title: string;
  description?: string;
  home_page_url: string;
  feed_url: string;
  icon?: string;
  favicon?: string;
  language?: string;
  author?: {
    name: string;
    url?: string;
    avatar?: string;
  };
  hubs?: Array<{
    type: string;
    url: string;
  }>;
  items: JSONFeedItem[];
}

export async function generateJSONFeed(
  getFeedItems: () => Promise<JSONFeedItem[]> = async () => [],
  feedInfo: {
    title: string;
    description?: string;
    author?: { name: string; url?: string; avatar?: string };
    icon?: string;
    favicon?: string;
    language?: string;
    hubUrl?: string;
  } = {
    title: 'Site Feed',
    description: 'Latest updates',
    language: 'en'
  }
): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const items = await getFeedItems();

  const feed: JSONFeed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: feedInfo.title,
    description: feedInfo.description,
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    icon: feedInfo.icon ? (feedInfo.icon.startsWith('http') ? feedInfo.icon : baseUrl + feedInfo.icon) : undefined,
    favicon: feedInfo.favicon ? (feedInfo.favicon.startsWith('http') ? feedInfo.favicon : baseUrl + feedInfo.favicon) : undefined,
    language: feedInfo.language,
    author: feedInfo.author,
    hubs: feedInfo.hubUrl ? [{ type: 'WebSub', url: feedInfo.hubUrl }] : undefined,
    items: items.map(item => ({
      ...item,
      url: item.url.startsWith('http') ? item.url : baseUrl + item.url,
      external_url: item.external_url,
      image: item.image ? (item.image.startsWith('http') ? item.image : baseUrl + item.image) : undefined,
      banner_image: item.banner_image ? (item.banner_image.startsWith('http') ? item.banner_image : baseUrl + item.banner_image) : undefined
    }))
  };

  return JSON.stringify(feed, null, 2);
}

export function jsonFeedHeaders() {
  return {
    'Content-Type': 'application/feed+json; charset=utf-8',
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
  };
}