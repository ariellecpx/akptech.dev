import fs from 'node:fs';
import path from 'node:path';

const dir = 'dist';
let ok = true;

function walk(p: string) {
  if (!fs.existsSync(p)) {
    console.warn(`Directory ${p} does not exist, skipping JSON-LD validation`);
    return;
  }
  
  for (const f of fs.readdirSync(p)) {
    const fp = path.join(p, f);
    const s = fs.statSync(fp);
    if (s.isDirectory()) {
      walk(fp);
    } else if (f.endsWith('.html')) {
      check(fp);
    }
  }
}

function check(fp: string) {
  const h = fs.readFileSync(fp, 'utf8');
  const hasLd = /<script type="application\/ld\+json"/.test(h);
  const hasStructuredContent = /<article|itemscope|microdata/.test(h);
  
  if (!hasLd && hasStructuredContent) {
    console.error('Missing JSON-LD in', fp);
    ok = false;
  }
  
  // Validate JSON-LD syntax
  if (hasLd) {
    const ldMatches = h.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
    if (ldMatches) {
      for (const match of ldMatches) {
        const jsonContent = match.replace(/<script[^>]*>|<\/script>/gi, '').trim();
        try {
          JSON.parse(jsonContent);
        } catch (e) {
          console.error('Invalid JSON-LD syntax in', fp, ':', e);
          ok = false;
        }
      }
    }
  }
}

walk(dir);
console.log(ok ? 'JSON-LD validation passed' : 'JSON-LD validation failed');
process.exit(ok ? 0 : 1);