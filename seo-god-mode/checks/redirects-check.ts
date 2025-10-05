import redirects from '../edge/redirects.json' assert { type: 'json' };

let hasErrors = false;

for (const [from, to] of Object.entries(redirects as Record<string, string>)) {
  if (!from.startsWith('/') || !to.startsWith('/')) {
    console.error('Redirects must be path-to-path:', from, '->', to);
    hasErrors = true;
  }
  
  if (from === to) {
    console.error('Circular redirect detected:', from, '->', to);
    hasErrors = true;
  }
  
  // Check for redirect chains (basic check)
  if (redirects[to as keyof typeof redirects]) {
    console.warn('Potential redirect chain:', from, '->', to, '->', redirects[to as keyof typeof redirects]);
  }
}

if (hasErrors) {
  console.error('Redirect validation failed');
  process.exit(1);
} else {
  console.log('Redirects validation passed');
  process.exit(0);
}