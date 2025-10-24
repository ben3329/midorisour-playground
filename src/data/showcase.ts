export type TagType =
  | 'opensource'
  | 'product'
  | 'personal'
  | 'design'
  | 'i18n'
  | 'tool'
  | 'library';

export type ShowcaseProject = {
  title: string;
  description: string;
  website: string;
  source?: string;
  image: string; // path under /img or absolute URL
  tags: TagType[];
  addedAt?: string; // ISO date for sorting
  disabled?: boolean; // allow hide without deleting
};

export const TAG_LABELS: Record<TagType, string> = {
  opensource: 'Open Source',
  product: 'Product',
  personal: 'Personal',
  design: 'Design',
  i18n: 'i18n',
  tool: 'Tool',
  library: 'Library',
};

export const AllTags: TagType[] = Object.keys(TAG_LABELS) as TagType[];

// Seed with a couple of examples. Replace with your own projects.
export const Projects: ShowcaseProject[] = [
  {
    title: 'My Awesome App',
    description: 'A production-ready app with delightful UX.',
    website: 'https://example.com',
    source: 'https://github.com/example/app',
    image: '/img/showcase/placeholder.svg',
    tags: ['product', 'design'],
    addedAt: '2025-01-01',
  },
  {
    title: 'Useful CLI Tool',
    description: 'Lightweight developer tool that boosts productivity.',
    website: 'https://example.com/cli',
    source: 'https://github.com/example/cli',
    image: '/img/showcase/placeholder.svg',
    tags: ['opensource', 'tool'],
    addedAt: '2025-02-10',
  },
  {
    title: 'UI Library',
    description: 'Composable UI primitives for React.',
    website: 'https://example.com/ui',
    source: 'https://github.com/example/ui',
    image: '/img/showcase/placeholder.svg',
    tags: ['opensource', 'library', 'design'],
    addedAt: '2025-03-05',
  },
];

export function normalizeQuery(q: string) {
  return q.trim().toLowerCase();
}

export function projectMatchesQuery(p: ShowcaseProject, q: string) {
  if (!q) return true;
  const nq = normalizeQuery(q);
  return (
    p.title.toLowerCase().includes(nq) ||
    p.description.toLowerCase().includes(nq) ||
    p.tags.some((t) => TAG_LABELS[t].toLowerCase().includes(nq))
  );
}

export type MatchMode = 'any' | 'all';

export function projectMatchesTags(
  p: ShowcaseProject,
  active: TagType[],
  mode: MatchMode,
): boolean {
  if (!active.length) return true;
  return mode === 'all'
    ? active.every((t) => p.tags.includes(t))
    : active.some((t) => p.tags.includes(t));
}

export type SortKey = 'recent' | 'az' | 'za';

export function sortProjects(list: ShowcaseProject[], by: SortKey) {
  const copy = [...list];
  switch (by) {
    case 'recent':
      return copy.sort((a, b) => {
        const da = a.addedAt ? Date.parse(a.addedAt) : 0;
        const db = b.addedAt ? Date.parse(b.addedAt) : 0;
        return db - da;
      });
    case 'az':
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case 'za':
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return copy;
  }
}

