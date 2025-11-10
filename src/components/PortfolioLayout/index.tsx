import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';
import {PortfolioItems} from '../../data/portfolio';

type Props = {
  children?: React.ReactNode;
};

function useActiveSlug(): string | undefined {
  const location = useLocation();
  const parts = location.pathname.replace(/\/+$/, '').split('/');
  // Expecting /portfolio or /portfolio/:slug
  if (parts.length >= 3 && parts[1] === 'portfolio') {
    return parts[2] || undefined;
  }
  return undefined;
}

export default function PortfolioLayout({children}: Props) {
  const active = useActiveSlug();

  return (
    <div className={styles.root}>
      <aside className={styles.sidebar} aria-label="Portfolio list">
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Portfolio</h2>
        </div>
        <nav className={styles.navList}>
          {PortfolioItems.map((item) => {
            const href = `/portfolio/${item.slug}`;
            const isActive = active === item.slug;
            return (
              <Link
                key={item.slug}
                href={href}
                className={styles.navItem}
                aria-current={isActive ? 'page' : undefined}>
                <div className={styles.navItemTitle}>{item.title}</div>
                {item.date ? <div className={styles.navItemMeta}>{item.date}</div> : null}
                {item.tags && item.tags.length > 0 ? (
                  <div className={styles.navItemTags}>
                    {item.tags.map((t) => (
                      <span key={t} className="badge badge--secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

