import https from 'node:https';
import http from 'node:http';
import { JSDOM } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';

const dir = 'dist';
const urls: string[] = [];

function walk(p: string) {
  if (!fs.existsSync(p)) {
    console.warn(`Directory ${p} does not exist, skipping link check`);
    return;
  }
  
  for (const f of fs.readdirSync(p)) {
    const fp = path.join(p, f);
    const s = fs.statSync(fp);
    if (s.isDirectory()) {
      walk(fp);
    } else if (f.endsWith('.html')) {
      const doc = new JSDOM(fs.readFileSync(fp, 'utf8')).window.document;
      doc.querySelectorAll('a[href^="http"]').forEach(a => 
        urls.push((a as HTMLAnchorElement).href)
      );
    }
  }
}

function head(u: string): Promise<number> {
  return new Promise(res => {
    const client = u.startsWith('https:') ? https : http;
    const req = client.request(u, { method: 'HEAD', timeout: 5000 }, r => res(r.statusCode || 200));
    req.on('error', () => res(404));
    req.on('timeout', () => {
      req.destroy();
      res(408);
    });
    req.end();
  });
}

(async () => {
  walk(dir);
  
  if (urls.length === 0) {
    console.log('No external links found to check');
    process.exit(0);
  }
  
  console.log(`Checking ${urls.length} external links (limited to first 50)...`);
  
  let bad = 0;
  const uniqueUrls = [...new Set(urls)].slice(0, 50);
  
  for (const u of uniqueUrls) {
    const s = await head(u);
    if (s >= 400) {
      console.error('Broken link:', u, 'Status:', s);
      bad++;
    }
  }
  
  console.log(bad ? `Found ${bad} broken links` : 'All links are working');
  process.exit(bad > 0 ? 1 : 0);
})();