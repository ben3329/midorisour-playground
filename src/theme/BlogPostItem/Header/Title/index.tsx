import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import styles from './styles.module.css';

type Props = {
  className?: string;
};

export default function BlogPostItemHeaderTitle({className}: Props): JSX.Element {
  const {metadata, isBlogPostPage, frontMatter} = useBlogPost();
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const subtitle = (frontMatter as {subtitle?: string})?.subtitle;

  return (
    <>
      <TitleHeading className={clsx(styles.title, className)}>
        {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
      </TitleHeading>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </>
  );
}
