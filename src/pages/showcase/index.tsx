import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Filters from '../../components/Showcase/Filters';
import ShowcaseCard from '../../components/Showcase/ShowcaseCard';
import type {MatchMode, SortKey, TagType} from '../../data/showcase';
import {
  Projects,
  projectMatchesQuery,
  projectMatchesTags,
  sortProjects,
} from '../../data/showcase';

const FAVORITES_KEY = 'docusaurus.showcase.favorites';

function useFavorites() {
  const [favorites, setFavorites] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);
  const toggle = React.useCallback((title: string) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  }, []);
  return {favorites, toggle};
}

export default function ShowcasePage() {
  const {siteConfig} = useDocusaurusContext();
  const {favorites, toggle} = useFavorites();
  const [query, setQuery] = React.useState('');
  const [activeTags, setActiveTags] = React.useState<TagType[]>([]);
  const [matchMode, setMatchMode] = React.useState<MatchMode>('any');
  const [sortBy, setSortBy] = React.useState<SortKey>('recent');
  const [onlyFavorites, setOnlyFavorites] = React.useState(false);

  const toggleTag = (t: TagType) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  const clearTags = () => setActiveTags([]);

  const filtered = React.useMemo(() => {
    let list = Projects.filter((p) => !p.disabled);
    if (onlyFavorites) {
      list = list.filter((p) => favorites.includes(p.title));
    }
    list = list.filter((p) => projectMatchesQuery(p, query));
    list = list.filter((p) => projectMatchesTags(p, activeTags, matchMode));
    list = sortProjects(list, sortBy);
    return list;
  }, [query, activeTags, matchMode, sortBy, onlyFavorites, favorites]);

  return (
    <Layout title="Showcase" description="Discover featured projects and products.">
      <Head>
        <meta name="robots" content="index,follow" />
      </Head>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Showcase</h1>
          <p className="hero__subtitle">
            Explore highlighted apps, tools, libraries and more.
          </p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <Filters
          query={query}
          setQuery={setQuery}
          activeTags={activeTags}
          toggleTag={toggleTag}
          clearTags={clearTags}
          matchMode={matchMode}
          setMatchMode={setMatchMode}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onlyFavorites={onlyFavorites}
          setOnlyFavorites={setOnlyFavorites}
        />

        <p style={{opacity: 0.7}}>
          Showing {filtered.length} result{filtered.length === 1 ? '' : 's'}
          {onlyFavorites ? ' (favorites)' : ''}
        </p>

        {filtered.length === 0 ? (
          <div className="alert alert--secondary" role="status">
            No results. Try adjusting filters or search.
          </div>
        ) : (
          <div className="row" style={{rowGap: 20}}>
            {filtered.map((p) => (
              <div key={p.title} className="col col--4">
                <ShowcaseCard
                  project={p}
                  isFavorite={favorites.includes(p.title)}
                  onToggleFavorite={toggle}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}

