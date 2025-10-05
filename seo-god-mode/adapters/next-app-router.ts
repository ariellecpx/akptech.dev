import { buildMeta } from '../core/meta';
import { headers as nextHeaders } from 'next/headers';

export function withSEOMetadata(base: { title: string; description?: string; image?: string; robots?: string }) {
  return async function generateMetadata({ params, searchParams }: any) {
    const path = `/${(params?.slug?.join('/') || '').replace(/\/+/g, '/')}` || '/';
    const m = buildMeta({ path, ...base });
    return {
      title: m.title,
      description: m.description,
      alternates: { canonical: m.canonical },
      openGraph: { title: m.title, description: m.description, url: m.canonical, images: m.og['og:image'] ? [m.og['og:image']] : [] },
      robots: { index: !/noindex/.test(m.robots), follow: !/nofollow/.test(m.robots) }
    };
  };
}