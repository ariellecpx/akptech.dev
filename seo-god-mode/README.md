# SEO God Mode

Drop-in SEO hardening module for modern JavaScript applications. Transform your site from SEO zero to SEO hero with production-ready URL hygiene, canonicals, schema markup, sitemaps, robots, AI-engine answerability, performance optimization, accessibility, security headers, indexing pings, and CI checks.

## What it is

A self-contained SEO hardening module that retrofits existing projects with enterprise-grade SEO infrastructure without changing your content or breaking existing functionality.

## Features

- ✅ **URL Normalization**: Automatic lowercase paths, trailing slash policy, parameter stripping
- ✅ **Canonical URLs**: Enforced canonical policy with HTTP Link headers
- ✅ **JSON-LD Schema**: Valid structured data for Organization, WebSite, Article, BreadcrumbList, FAQ, Product
- ✅ **Sitemaps & Feeds**: XML sitemaps, RSS/JSON feeds with WebSub hub support
- ✅ **Robot Control**: Advanced robots.txt with AI bot directives, HTTP robots headers
- ✅ **AI Answerability**: AnswerCard components and /answer.json endpoints for search engines
- ✅ **Performance**: Image optimization, font preloading, priority hints, CLS prevention
- ✅ **Accessibility**: Skip links, heading hierarchy, focus management, ARIA support
- ✅ **Security**: HSTS, CSP, frame options, content type protection
- ✅ **Indexing**: IndexNow integration with deployment pings
- ✅ **Validation**: Automated JSON-LD validation, link checking, orphan detection
- ✅ **Lighthouse**: CI integration with performance budgets

## Quick Start

### 1. Install Dependencies

```bash
pnpm add tsx jsdom @lhci/cli
```

### 2. Configuration

Copy `.env.local.example` to `.env.local` and update:

```env
SITE_DOMAIN=yourdomain.com
DEFAULT_LOCALE=en
SEARCH_ENGINE_FRIENDLY=true
AI_ANSWER_BLOCKS=true
CONSENT_MODE=true
INDEXNOW_KEY=your-indexnow-key
```

### 3. Framework Integration

#### Vite/React (Generic)

```typescript
import { GenericSEOAdapter } from './seo-god-mode/adapters/generic';

const seo = new GenericSEOAdapter();

// Generate meta tags
const metaTags = seo.generateMetaTags({
  title: 'Page Title',
  description: 'Page description',
  path: '/current-page',
  image: '/og-image.jpg'
});

// Add to your HTML head
document.head.innerHTML += metaTags;

// Apply security headers (server-side)
const headers = seo.generateSecurityHeaders();
```

#### Next.js App Router

```typescript
import { withSEOMetadata } from './seo-god-mode/adapters/next-app-router';

export const generateMetadata = withSEOMetadata({
  title: 'Default Title',
  description: 'Default description'
});
```

#### Express.js Middleware

```typescript
import { createExpressMiddleware } from './seo-god-mode/edge/middleware';

app.use(createExpressMiddleware());
```

### 4. UI Components

```tsx
import Breadcrumbs from './seo-god-mode/ui/Breadcrumbs';
import TOC from './seo-god-mode/ui/TOC';
import ConsentGate from './seo-god-mode/ui/ConsentGate';
import { AnswerCard } from './seo-god-mode/ui/AnswerCard';

function Layout() {
  return (
    <>
      <ConsentGate />
      <main>
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Current Post', href: '/blog/current' }
        ]} />
        
        <AnswerCard 
          title="Quick Answer"
          summary="Brief summary of the content"
          points={['Key point 1', 'Key point 2', 'Key point 3']}
        />
        
        <div className="flex">
          <article>Content here</article>
          <aside><TOC /></aside>
        </div>
      </main>
    </>
  );
}
```

### 5. Route Handlers

Set up API routes for SEO endpoints:

```typescript
// /robots.txt
import { generateRobotsTxt, robotsTxtHeaders } from './seo-god-mode/routes/robots.txt';

export async function GET() {
  const content = await generateRobotsTxt();
  return new Response(content, { headers: robotsTxtHeaders() });
}

// /sitemap.xml
import { generateSitemapIndex, sitemapHeaders } from './seo-god-mode/routes/sitemap.xml';

export async function GET() {
  const content = await generateSitemapIndex();
  return new Response(content, { headers: sitemapHeaders() });
}
```

## Configuration

### Site Configuration (`config/site.config.json`)

```json
{
  "siteName": "Your Site Name",
  "domain": "yourdomain.com",
  "defaultLocale": "en",
  "locales": ["en", "es", "fr"],
  "brand": { "primary": "#0ea5e9" },
  "social": { "twitter": "@yourhandle" },
  "contactEmail": "hello@yourdomain.com",
  "logo": "/logo.png"
}
```

### SEO Rules (`config/seo-rules.json`)

Control URL normalization, parameter handling, and bot access:

```json
{
  "trailingSlash": false,
  "lowercasePaths": true,
  "stripParams": ["utm_source", "utm_medium", "fbclid"],
  "paramWhitelist": {
    "/search": ["q"],
    "/blog": ["page", "category"]
  },
  "noindexPaths": ["/admin", "/preview"],
  "bots": {
    "ai": {
      "GPTBot": "allow",
      "CCBot": "allow",
      "PerplexityBot": "allow"
    }
  }
}
```

### Performance Settings (`config/performance.json`)

```json
{
  "images": { 
    "maxWidth": 1600, 
    "formats": ["image/avif", "image/webp"], 
    "quality": 75 
  },
  "fonts": { 
    "selfHost": true, 
    "preload": true, 
    "display": "swap" 
  },
  "cache": { 
    "sMaxage": 86400, 
    "staleWhileRevalidate": 604800 
  }
}
```

## Validation & Testing

```bash
# Run all SEO checks
pnpm seo:check

# Run Lighthouse CI with performance budgets
pnpm seo:lh

# Individual checks
npx tsx seo-god-mode/checks/validate-ld.ts
npx tsx seo-god-mode/checks/link-check.ts
npx tsx seo-god-mode/checks/orphan-check.ts
```

## Advanced Features

### AI Answerability

Generate structured answers for AI search engines:

```typescript
import { getClientAnswerJSON } from './seo-god-mode/routes/answer.json';

// Client-side answer extraction
const answerData = await getClientAnswerJSON();

// Server-side custom answer
const customAnswer = {
  title: 'How to optimize images',
  summary: 'Use modern formats and proper sizing',
  keyPoints: ['Use WebP/AVIF', 'Optimize file sizes', 'Add alt text'],
  canonical: '/guide/image-optimization',
  updatedAt: new Date().toISOString()
};
```

### IndexNow Integration

```typescript
import { pingIndexNow } from './seo-god-mode/routes/indexnow-key.txt';

// Ping search engines on content updates
await pingIndexNow([
  'https://yourdomain.com/new-post',
  'https://yourdomain.com/updated-page'
]);
```

### Custom Schema Markup

```typescript
import { articleLd, faqLd, breadcrumbLd } from './seo-god-mode/core/jsonld';

const schema = [
  articleLd({
    url: '/blog/post',
    title: 'Post Title',
    author: 'Author Name',
    datePublished: '2024-01-01',
    image: '/post-image.jpg'
  }),
  faqLd([
    { q: 'What is SEO?', a: 'Search Engine Optimization...' }
  ])
];
```

## Non-Next.js Projects

For Vite, Create React App, or other frameworks:

1. Use the `GenericSEOAdapter` class
2. Manually wire canonical/meta/headers 
3. Set up route handlers for your framework
4. Implement middleware using your framework's patterns

## Deploy Notes

1. **IndexNow Key**: Add your key to environment variables and serve at `/.well-known/IndexNowKey`
2. **Domain Configuration**: Set `SITE_DOMAIN` in production environment
3. **Deploy Hooks**: Enable post-deploy sitemap pings
4. **Security Headers**: Ensure CSP and security headers are applied
5. **Staging Protection**: Non-production hosts automatically get `noindex` headers

## Acceptance Criteria

The module is working correctly when:

- ✅ `pnpm build && pnpm start` succeeds
- ✅ `pnpm seo:check` passes all validations
- ✅ `pnpm seo:lh` meets Lighthouse budgets (≥95% all categories)
- ✅ Pages emit exactly one canonical URL (head + HTTP Link header agree)
- ✅ `/robots.txt`, `/sitemap.xml`, `/feed.xml` are reachable with proper cache headers
- ✅ Staging hosts return `X-Robots-Tag: noindex, nofollow`
- ✅ JSON-LD validates and appears on eligible pages
- ✅ AI bot directives work as configured

## Troubleshooting

### Common Issues

**"Module not found" errors**: Install missing dependencies with `pnpm add tsx jsdom @lhci/cli`

**Lighthouse CI fails**: Check that your build output directory matches `lhci.config.json` settings

**JSON-LD validation fails**: Ensure required schema fields are populated before rendering

**Broken links detected**: Review external links and update redirect mappings

**Orphaned pages found**: Add internal navigation links to isolated pages

### Debug Mode

Enable verbose logging:

```typescript
process.env.SEO_DEBUG = 'true';
```

## License

MIT License - See LICENSE file for details

---

**SEO God Mode** — Transform your site from zero to hero
© 2024 [ariellephoenix.com](https://ariellephoenix.com)