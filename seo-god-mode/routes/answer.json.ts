interface AnswerData {
  title: string;
  summary: string;
  keyPoints: string[];
  canonical: string;
  updatedAt: string;
  headingsIndex: Array<{
    level: number;
    text: string;
    id: string;
  }>;
  sources: Array<{
    title: string;
    url: string;
    type: 'internal' | 'external';
  }>;
}

export async function generateAnswerJSON(
  getAnswerData: () => Promise<AnswerData> = async () => ({
    title: 'Page',
    summary: '',
    keyPoints: [],
    canonical: '',
    updatedAt: new Date().toISOString(),
    headingsIndex: [],
    sources: []
  })
): Promise<string> {
  // Expect host app to expose global extractor; provide safe fallback
  const data = await getAnswerData();
  
  // Validate required fields before returning
  if (!data.title || !data.canonical) {
    throw new Error('Missing required fields for answer data');
  }

  return JSON.stringify(data, null, 2);
}

export function answerJSONHeaders() {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
  };
}

// Client-side helper for browser usage
export async function getClientAnswerJSON(): Promise<AnswerData> {
  // Extract headings from current page
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
    level: parseInt(h.tagName.charAt(1)),
    text: h.textContent || '',
    id: h.id || ''
  }));

  // Extract key points from lists and paragraphs
  const keyPoints = Array.from(document.querySelectorAll('ul li, ol li'))
    .slice(0, 5)
    .map(li => li.textContent || '')
    .filter(Boolean);

  // Get summary from meta description or first paragraph
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
  const firstP = document.querySelector('main p, article p')?.textContent;
  const summary = metaDesc || firstP?.slice(0, 160) + '...' || '';

  // Find internal and external links
  const links = Array.from(document.querySelectorAll('a[href]'))
    .map(a => ({
      title: a.textContent?.trim() || '',
      url: (a as HTMLAnchorElement).href,
      type: (a as HTMLAnchorElement).href.startsWith(location.origin) ? 'internal' as const : 'external' as const
    }))
    .filter(link => link.title && link.url)
    .slice(0, 10);

  return {
    title: document.title,
    summary,
    keyPoints,
    canonical: location.href,
    updatedAt: new Date().toISOString(),
    headingsIndex: headings,
    sources: links
  };
}