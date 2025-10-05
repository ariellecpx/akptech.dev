'use client';
import React from 'react';

export function AnswerCard({ title, summary, points }: { title: string; summary: string; points: string[] }) {
  return (
    <section data-answer data-canonical document-title={title} className="rounded-lg border p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 opacity-90">{summary}</p>
      <ul className="mt-2 list-disc pl-5">{points.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </section>
  );
}

export async function getAnswerJSON() {
  // Host app should hydrate with real page data; provide safe defaults
  return {
    title: document.title,
    summary: '',
    keyPoints: [],
    canonical: location.href,
    updatedAt: new Date().toISOString(),
    headingsIndex: [],
    sources: []
  };
}