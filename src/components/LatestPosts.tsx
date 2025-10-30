import React, {type ReactNode, useMemo} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

type ArchiveBlogPost = {
  metadata: {
    permalink: string;
    title: string;
    date: string;
    tags?: {label: string; permalink: string}[];
  };
};

function useBlogArchivePosts(): ArchiveBlogPost[] {
  // Dynamically import the generated blog archive props module.
  // The filename contains a content hash, so find it via require.context.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const req: any = (require as unknown as {context: Function}).context(
    '@generated/docusaurus-plugin-content-blog/default/p',
    false,
    /blog-archive-.*\.json$/,
  );
  const mod = req(req.keys()[0]);
  const posts: ArchiveBlogPost[] = mod.archive?.blogPosts ?? [];
  return posts;
}

export default function LatestPosts({
  title = 'Latest Posts',
  count = 4,
}: {
  title?: string;
  count?: number;
}): ReactNode {
  const posts = useBlogArchivePosts();
  const latest = useMemo(() => {
    return [...posts]
      .sort(
        (a, b) =>
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime(),
      )
      .slice(0, count);
  }, [posts, count]);

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem'}}>
        <Heading as="h2">{title}</Heading>
        <Link to="/blog">See all</Link>
      </div>
      <div className="row">
        {latest.map((p) => (
          <div className="col col--6" key={p.metadata.permalink}>
            <Link to={p.metadata.permalink} style={{textDecoration: 'none'}}>
              <div className="card" style={{padding: '1rem'}}>
                <Heading as="h3" style={{margin: 0}}>
                  {p.metadata.title}
                </Heading>
                <p style={{margin: '0.25rem 0 0.5rem 0', color: 'var(--ifm-color-emphasis-700)'}}>
                  {new Date(p.metadata.date).toLocaleDateString()}
                </p>
                {p.metadata.tags && p.metadata.tags.length > 0 ? (
                  <div style={{display: 'flex', gap: '.5rem', flexWrap: 'wrap'}}>
                    {p.metadata.tags.map((t) => (
                      <span key={t.permalink} style={{fontSize: '.85rem', border: '1px solid var(--ifm-toc-border-color)', borderRadius: 999, padding: '.1rem .5rem'}}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

