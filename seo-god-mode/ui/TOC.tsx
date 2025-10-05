'use client';
import { useEffect, useState } from 'react';

export default function TOC() {
  const [heads, setHeads] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const headings = [...document.querySelectorAll('h2[id], h3[id], h4[id]')].map(h => ({
      id: (h as HTMLElement).id,
      text: h.textContent || '',
      level: parseInt(h.tagName.charAt(1))
    }));
    setHeads(headings);
  }, []);

  return heads.length ? (
    <nav aria-label="Table of contents" className="sticky top-4">
      <h3 className="font-semibold mb-2">Contents</h3>
      <ul className="space-y-1 text-sm">
        {heads.map(h => (
          <li key={h.id}>
            <a 
              href={`#${h.id}`} 
              className="text-gray-600 hover:text-blue-600 block py-1"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
}