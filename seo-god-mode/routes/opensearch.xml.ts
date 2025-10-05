export async function generateOpenSearchDescriptor(): Promise<string> {
  const domain = process.env.SITE_DOMAIN || 'example.com';
  const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Site Search</ShortName>
  <Description>Search the site</Description>
  <Url type="text/html" template="${baseUrl}/search?q={searchTerms}"/>
  <Url type="application/rss+xml" template="${baseUrl}/search?q={searchTerms}&amp;format=rss"/>
  <Language>en</Language>
  <OutputEncoding>UTF-8</OutputEncoding>
  <InputEncoding>UTF-8</InputEncoding>
</OpenSearchDescription>`;

  return xml;
}

export function openSearchHeaders() {
  return {
    'Content-Type': 'application/opensearchdescription+xml; charset=utf-8',
    'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800'
  };
}