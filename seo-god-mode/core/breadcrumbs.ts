export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbs(pathname: string, siteName = "Home"): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: siteName, href: '/' }
  ];

  let href = '';
  for (const path of paths) {
    href += `/${path}`;
    const name = path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    breadcrumbs.push({ name, href });
  }

  return breadcrumbs;
}