export const cacheHeaders = (sMax = 86400, swr = 604800) =>
  `public, s-maxage=${sMax}, stale-while-revalidate=${swr}`;

export const securityHeaders: [string, string][] = [
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'],
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'SAMEORIGIN'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', 'geolocation=(), microphone=(), camera=()']
];

// CSP report-only starter
export const cspReportOnly =
  "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'";