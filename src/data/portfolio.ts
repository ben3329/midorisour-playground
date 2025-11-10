export type PortfolioItem = {
  slug: string;
  title: string;
  tags?: string[];
  date?: string; // ISO date for optional sorting
};

export const PortfolioItems: PortfolioItem[] = [
  {
    slug: 'pinokiolab-a',
    title: 'A사 외부 데이터 조회 시스템',
    tags: ['web', 'react'],
    date: '2025',
  },
];

