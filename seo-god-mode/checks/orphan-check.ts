import fs from 'node:fs';
import path from 'node:path';

const dir = 'dist';
const links = new Map<string, Set<string>>();
const pages = new Set<string>();

function walk(p: string) {
  if (!fs.existsSync(p)) {
    console.warn(`Directory ${p} does not exist, skipping orphan check`);
    return;
  }
  
  for (const f of fs.readdirSync(p)) {
    const fp = path.join(p, f);
    const s = fs.statSync(fp);
    if (s.isDirectory()) {
      walk(fp);
    } else if (f.endsWith('.html')) {
      const html = fs.readFileSync(fp, 'utf8');
      const route = '/' + fp.split('/dist/')[1]?.replace(/index\.html$/, '').replace(/\.html$/, '') || '/';
      
      pages.add(route);
      
      // Extract internal links
      const matches = html.match(/href="(\/[^"#?]+)"/g) || [];
      matches.forEach(h => {
        const match = h.match(/href="([^"]+)"/);
        if (match) {
          const targetRoute = match[1].replace(/\/$/, '') || '/';
          if (!links.has(targetRoute)) {
            links.set(targetRoute, new Set());
          }
          links.get(targetRoute)?.add(route);
        }
      });
    }
  }
}

walk(dir);

const orphans = [...pages].filter(p => 
  !['/', '/404', '/500'].includes(p) && 
  !(links.get(p)?.size)
);

if (orphans.length) {
  console.error('Orphaned pages found:', orphans);
  process.exit(1);
} else {
  console.log('No orphaned pages found');
  process.exit(0);
}