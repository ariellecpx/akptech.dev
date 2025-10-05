export function hreflangLinks(canonical: string, locales: string[], path: string) {
  const base = canonical.replace(/(https?:\/\/[^/]+).*/, '$1');
  return locales.map(l => ({ rel: 'alternate', href: `${base}/${l}${path}`, hreflang: l })).concat([{
    rel: 'alternate',
    href: canonical,
    hreflang: 'x-default'
  }]);
}