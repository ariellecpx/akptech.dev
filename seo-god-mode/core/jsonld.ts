export const orgLd = (name: string, url: string, logo?: string, sameAs: string[] = []) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name,
  url,
  logo,
  sameAs
});

export const webSiteLd = (name: string, url: string, searchUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name,
  url,
  potentialAction: searchUrl ? [{
    "@type": "SearchAction",
    "target": `${searchUrl}{search_term_string}`,
    "query-input": "required name=search_term_string"
  }] : undefined
});

export const breadcrumbLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url
  }))
});

export const articleLd = (p: { url: string; title: string; image?: string; author?: string; datePublished: string; dateModified?: string; wordCount?: number }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  mainEntityOfPage: p.url,
  image: p.image,
  author: p.author ? { "@type": "Person", "name": p.author } : undefined,
  datePublished: p.datePublished,
  dateModified: p.dateModified || p.datePublished,
  wordCount: p.wordCount
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(x => ({
    "@type": "Question",
    "name": x.q,
    "acceptedAnswer": { "@type": "Answer", "text": x.a }
  }))
});

export const itemListLd = (url: string, items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": it.url,
    "name": it.name
  })),
  "url": url
});