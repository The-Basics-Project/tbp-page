import React from 'react';
import Layout from '../components/Layout';
import MainSection from '../containers/MainPage';

function IndexPage() {
  return (
    <Layout>
      <MainSection />
    </Layout>
  );
}

export function Head() {
  return <title>Home | The Basics Project Foundation</title>;
}

export default IndexPage;
