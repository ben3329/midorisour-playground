import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import type {ShowcaseProject, TagType} from '../../data/showcase';
import {TAG_LABELS} from '../../data/showcase';

type Props = {
  project: ShowcaseProject;
  isFavorite: boolean;
  onToggleFavorite: (title: string) => void;
};

export default function ShowcaseCard({project, isFavorite, onToggleFavorite}: Props) {
  const {title, description, website, source, image, tags} = project;

  return (
    <div className={clsx('card', 'shadow--sm')}>
      <div className="card__image" style={{position: 'relative'}}>
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
        <button
          type="button"
          className={clsx('button', 'button--sm')}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            borderRadius: 9999,
          }}
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(project.title);
          }}>
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className="card__body">
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <h3 style={{marginBottom: 0, flex: 1}}>{title}</h3>
          {source ? (
            <Link className="button button--xs button--secondary" href={source}>
              Source
            </Link>
          ) : null}
        </div>
        <p style={{marginTop: 8}}>{description}</p>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <Link className="button button--primary" href={website}>
            Visit
          </Link>
        </div>
        <div style={{marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6}}>
          {tags.map((t: TagType) => (
            <span key={t} className="badge badge--secondary">
              {TAG_LABELS[t]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

