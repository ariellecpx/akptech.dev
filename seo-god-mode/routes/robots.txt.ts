import rules from '../config/seo-rules.json';

export async function generateRobotsTxt(): Promise<string> {
  const lines = [
    `User-agent: *`,
    `Allow: /`,
    ...rules.noindexPaths.map(p => `Disallow: ${p}`),
    ``,
    ...Object.entries(rules.bots.ai).map(([ua, mode]) => [
      `User-agent: ${ua}`,
      mode === 'allow' ? `Allow: /` : `Disallow: /`
    ]).flat()
  ];
  
  return lines.join('\n');
}

export function robotsTxtHeaders() {
  return {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800'
  };
}