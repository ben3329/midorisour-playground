import React from 'react';
import clsx from 'clsx';
import type {MatchMode, SortKey, TagType} from '../../data/showcase';
import {TAG_LABELS, AllTags} from '../../data/showcase';

type Props = {
  query: string;
  setQuery: (q: string) => void;
  activeTags: TagType[];
  toggleTag: (t: TagType) => void;
  clearTags: () => void;
  matchMode: MatchMode;
  setMatchMode: (m: MatchMode) => void;
  sortBy: SortKey;
  setSortBy: (s: SortKey) => void;
  onlyFavorites: boolean;
  setOnlyFavorites: (v: boolean) => void;
};

export default function Filters(props: Props) {
  const {
    query,
    setQuery,
    activeTags,
    toggleTag,
    clearTags,
    matchMode,
    setMatchMode,
    sortBy,
    setSortBy,
    onlyFavorites,
    setOnlyFavorites,
  } = props;

  return (
    <div className="margin-bottom--lg">
      <div className="row" style={{rowGap: 12}}>
        <div className="col col--6">
          <input
            type="search"
            className="form-control"
            placeholder="Search by name, description, tag"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col col--3">
          <select
            className="form-control"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}>
            <option value="recent">Most Recent</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </div>
        <div className="col col--3" style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <label className={clsx('checkbox', 'margin--none')}>
            <input
              type="checkbox"
              checked={onlyFavorites}
              onChange={(e) => setOnlyFavorites(e.target.checked)}
            />{' '}
            Favorites
          </label>
          <div className="button-group button-group--inline">
            <button
              className={clsx('button', matchMode === 'any' ? 'button--primary' : 'button--secondary')}
              type="button"
              onClick={() => setMatchMode('any')}>
              Match any
            </button>
            <button
              className={clsx('button', matchMode === 'all' ? 'button--primary' : 'button--secondary')}
              type="button"
              onClick={() => setMatchMode('all')}>
              Match all
            </button>
          </div>
        </div>
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center'}}>
        {AllTags.map((t) => {
          const selected = activeTags.includes(t);
          return (
            <button
              key={t}
              type="button"
              className={clsx('badge', selected ? 'badge--primary' : 'badge--secondary')}
              onClick={() => toggleTag(t)}
              title={TAG_LABELS[t]}>
              {TAG_LABELS[t]}
            </button>
          );
        })}
        {activeTags.length > 0 && (
          <button type="button" className="button button--sm button--link" onClick={clearTags}>
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

