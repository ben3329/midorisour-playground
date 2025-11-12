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
    tags: ['FastAPI'],
    date: '2025',
  },
  {
    slug: 'pinokiolab-spino',
    title: 'M사 척추/골반 지표 계산 프로그램',
    tags: ['FastAPI'],
    date: '2025',
  },
];

