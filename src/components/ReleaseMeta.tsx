import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = {
  date?: string;
};

export default function ReleaseMeta({date}: Props) {
  let releaseDate: string | undefined = date;
  if (!releaseDate) {
    try {
      const doc = useDoc();
      releaseDate = (doc as any)?.frontMatter?.releaseDate as string | undefined;
    } catch {
      // Not inside DocProvider (e.g., pages/blog). Silently ignore.
    }
  }

  if (!releaseDate) return null;

  let display = releaseDate;
  try {
    const d = new Date(releaseDate);
    if (!isNaN(d.getTime())) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      display = `${yyyy}-${mm}-${dd}`;
    }
  } catch {
    // Keep raw string if parsing fails
  }

  return (
    <div
      style={{
        margin: '0 0 12px 0',
        padding: '6px 10px',
        borderLeft: '3px solid var(--ifm-color-primary)',
        background: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
      }}
    >
      <small>Release date: {display}</small>
    </div>
  );
}
