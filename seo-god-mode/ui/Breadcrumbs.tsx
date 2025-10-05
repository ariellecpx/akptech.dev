'use client';

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2 text-sm">
        {items.map((it, i) => (
          <li key={i} aria-current={i === items.length - 1 ? 'page' : undefined}>
            {i > 0 && <span aria-hidden="true" className="mr-2">/</span>}
            <a href={it.href} className={i === items.length - 1 ? 'text-gray-600' : 'text-blue-600 hover:underline'}>
              {it.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}