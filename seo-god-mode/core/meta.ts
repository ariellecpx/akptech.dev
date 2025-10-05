export function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1) + "…";
}

export function canonicalFor(path: string, domain = process.env.SITE_DOMAIN || "") {
  const base = domain.startsWith("http") ? domain : `https://${domain}`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMeta(p: {
  path: string;
  title: string;
  description?: string;
  image?: string;
  robots?: string;
  locale?: string;
}) {
  const canonical = canonicalFor(p.path);
  const title = clamp(p.title, 60);
  const description = clamp(p.description || "", 160);
  const robots = p.robots || "index,follow";
  return {
    canonical,
    title,
    description,
    robots,
    og: {
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
      "og:image": p.image
    }
  };
}