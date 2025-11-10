import React, {type ReactElement} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import styles from './styles.module.css';

type Props = {
  className?: string;
};

export default function BlogPostItemHeaderTitle({className}: Props): ReactElement {
  let metadata: {permalink: string; title: string} | undefined;
  let isBlogPostPage = false;
  let frontMatter: unknown = undefined;
  try {
    const ctx = useBlogPost();
    metadata = ctx.metadata;
    isBlogPostPage = ctx.isBlogPostPage;
    frontMatter = ctx.frontMatter;
  } catch (e) {
    // When rendered outside of BlogPostProvider (e.g. unexpected usage),
    // fall back to a minimal, non-breaking render.
    metadata = {permalink: '#', title: ''};
    isBlogPostPage = false;
    frontMatter = {};
  }
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const subtitle = (frontMatter as {subtitle?: string})?.subtitle;

  return (
    <>
      <TitleHeading className={clsx(styles.title, className)}>
        {isBlogPostPage ? title : title ? <Link to={permalink}>{title}</Link> : null}
      </TitleHeading>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </>
  );
}
