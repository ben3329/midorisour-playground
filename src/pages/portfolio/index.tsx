import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PortfolioLayout from '../../components/PortfolioLayout';

export default function PortfolioIndexPage() {
  return (
    <Layout
      title="Portfolio"
      description="포트폴리오 목록"
      wrapperClassName="portfolio-page">
      <Head>
        <meta name="robots" content="index,follow" />
      </Head>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Portfolio</h1>
          <p className="hero__subtitle">개인 포트폴리오와 작업 모음</p>
        </div>
      </header>
      <div className="margin-vert--lg">
        <PortfolioLayout>
          <div className="container">
            <div className="alert alert--secondary" role="status">
              왼쪽 목록에서 프로젝트를 선택하세요.
            </div>
          </div>
        </PortfolioLayout>
      </div>
    </Layout>
  );
}
