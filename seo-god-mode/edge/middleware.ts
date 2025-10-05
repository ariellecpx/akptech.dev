// Generic middleware for non-Next.js projects
// This would need to be adapted for the specific framework being used

interface Request {
  url: string;
  method: string;
  headers: Record<string, string>;
}

interface Response {
  headers: Record<string, string>;
  status: number;
  redirect?: string;
}

import rules from '../config/seo-rules.json';
import redirects from './redirects.json';
import gone from './gone.json';

export function seoMiddleware(req: Request): Response | null {
  const url = new URL(req.url);
  const host = url.host;
  const isProdHost = process.env.SITE_DOMAIN && host.includes(process.env.SITE_DOMAIN);
  const original = url.toString();

  // lowercase path
  url.pathname = rules.lowercasePaths ? url.pathname.toLowerCase() : url.pathname;

  // trailing slash policy
  if (!rules.trailingSlash && url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
  }

  // strip params
  const pathSegments = url.pathname.split('/');
  const allow = rules.paramWhitelist[pathSegments[1] ? `/${pathSegments[1]}` : '/'] || [];
  [...url.searchParams.keys()].forEach(k => {
    if (rules.stripParams.includes(k) || !allow.includes(k)) {
      url.searchParams.delete(k);
    }
  });

  // redirects
  const hit = (redirects as Record<string, string>)[url.pathname];
  if (hit) {
    return {
      status: 308,
      redirect: new URL(hit, url.origin).toString(),
      headers: {}
    };
  }

  // gone
  if ((gone as string[]).includes(url.pathname)) {
    return {
      status: 410,
      headers: {}
    };
  }

  // staging shield and canonical header
  const headers: Record<string, string> = {};
  if (!isProdHost) {
    headers['X-Robots-Tag'] = 'noindex, nofollow';
  }

  // canonical header
  const canonical = `${url.origin}${url.pathname}${url.search}`;
  headers['Link'] = `<${canonical}>; rel="canonical"`;

  // URL changed, redirect
  if (url.toString() !== original) {
    return {
      status: 308,
      redirect: url.toString(),
      headers
    };
  }

  // Apply headers to response
  return {
    status: 200,
    headers
  };
}

// Example integration for Express.js
export function createExpressMiddleware() {
  return (req: any, res: any, next: any) => {
    const result = seoMiddleware({
      url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
      method: req.method,
      headers: req.headers
    });

    if (result) {
      Object.entries(result.headers).forEach(([key, value]) => {
        res.set(key, value);
      });

      if (result.redirect) {
        return res.redirect(result.status, result.redirect);
      }
    }

    next();
  };
}