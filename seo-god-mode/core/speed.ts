export function preloadTags() {
  return [
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-var.woff2" crossorigin>`
  ].join("");
}

export const priorityHint = (selector: string) =>
  `<script>document.querySelector('${selector}')?.setAttribute('fetchpriority','high')</script>`;