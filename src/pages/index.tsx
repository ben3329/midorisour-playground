import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import LatestPosts from '@site/src/components/LatestPosts';

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <div className={styles.ctaRow}>
              <Link className={clsx('button button--primary button--lg', styles.cta)} to="/blog">
                Read the Blog
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.cta)} to="/resume">
                View Resume
              </Link>
              <Link className={clsx('button button--outline button--lg', styles.cta)} to="mailto:ben3329@naver.com">
                Contact Me
              </Link>
            </div>
            <div className={styles.linksRow}>
              <Link to="https://github.com/ben3329">GitHub</Link>
              <span>•</span>
              <Link to="https://www.linkedin.com/in/weonhyeok-ji-8810ba168">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Skills(): ReactNode {
  const skills = [
    {
      title: 'Backend',
      items: ['Python', 'FastAPI', 'Flask', 'Django', 'RESTful API', 'MySQL'],
    },
    {
      title: 'Cloud / DevOps',
      items: ['AWS', 'Github Actions', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Frontend / Mobile',
      items: ['Flutter'],
    },
    {
      title: 'Others',
      items: ['C/C++'],
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>What I Do</Heading>
        <div className={clsx('row', styles.skillRow)}>
          {skills.map((s) => (
            <div className="col col--4" key={s.title}>
              <div className={styles.card}>
                <Heading as="h3" className={styles.cardTitle}>{s.title}</Heading>
                <ul className={clsx('clean-list', styles.pillList)}>
                  {s.items.map((i) => (
                    <li key={i} className={styles.pill}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPosts(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <LatestPosts title="Latest Posts" count={4} />
      </div>
    </section>
  );
}

function FeaturedProjects(): ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const showcase = require('@site/src/data/showcase') as typeof import('@site/src/data/showcase');
  const top = showcase.Projects.slice(0, 3);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Selected Projects</Heading>
          <Link to="/showcase" className={styles.moreLink}>All projects</Link>
        </div>
        <div className="row">
          {top.map((p) => (
            <div className="col col--4" key={p.title}>
              <a href={p.website} className={styles.cardLink} target="_blank" rel="noreferrer noopener">
                <div className={styles.card}>
                  <Heading as="h3" className={styles.cardTitle}>{p.title}</Heading>
                  <p className={styles.cardDesc}>{p.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Get in Touch</Heading>
        <p className={styles.lead}>Open to backend/full‑stack roles. Let’s talk.</p>
        <div className={styles.ctaRow}>
          <Link className={clsx('button button--primary button--lg', styles.cta)} to="mailto:ben3329@naver.com">Email</Link>
          <Link className={clsx('button button--secondary button--lg', styles.cta)} to="/resume">Resume</Link>
          <Link className={clsx('button button--outline button--lg', styles.cta)} to="/blog">Latest Posts</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Recruiter‑friendly tech blog homepage">
      <Hero />
      <main>
        <Skills />
        <FeaturedPosts />
        <FeaturedProjects />
        <Contact />
      </main>
    </Layout>
  );
}
