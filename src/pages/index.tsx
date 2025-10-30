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
      items: ['Python', 'FastAPI', 'Node.js', 'REST/GraphQL', 'PostgreSQL'],
    },
    {
      title: 'Frontend / Mobile',
      items: ['TypeScript', 'React', 'Flutter', 'Next.js'],
    },
    {
      title: 'Cloud / DevOps',
      items: ['AWS', 'Docker', 'CI/CD', 'Infra as Code'],
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>What I Do</Heading>
        <div className="row">
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

function Highlights(): ReactNode {
  const items = [
    {
      title: 'Built high‑traffic FastAPI backend',
      period: '2024',
      details: 'Designed and shipped a FastAPI service handling 50k+ daily requests with zero downtime, using async workers and PostgreSQL.'
    },
    {
      title: 'Flutter app from scratch',
      period: '2023',
      details: 'Led development of a cross‑platform Flutter app with CI/CD, feature flags, and analytics.'
    },
    {
      title: 'Infra/DevOps improvements',
      period: '2022',
      details: 'Dockerized services, set up GitHub Actions pipelines, and IaC for repeatable environments.'
    }
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Highlights</Heading>
        <div className={styles.timeline}>
          {items.map((h) => (
            <details key={h.title} className={styles.timelineItem} open>
              <summary>
                <span className={styles.badge}>{h.period}</span>
                <span className={styles.timelineTitle}>{h.title}</span>
              </summary>
              <p className={styles.timelineBody}>{h.details}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials(): ReactNode {
  const items = [
    {
      quote:
        'Consistently delivers clean, reliable backend code and communicates tradeoffs clearly.',
      name: 'EM, Backend Platform',
    },
    {
      quote: 'Turns ambiguous problems into shipped features with minimal oversight.',
      name: 'Product Manager',
    },
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Testimonials</Heading>
        <div className="row">
          {items.map((t) => (
            <div className="col col--6" key={t.name}>
              <div className={styles.card}>
                <p className={styles.quote}>“{t.quote}”</p>
                <p className={styles.quoteBy}>— {t.name}</p>
              </div>
            </div>
          ))}
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
        <Highlights />
        <FeaturedPosts />
        <FeaturedProjects />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}
