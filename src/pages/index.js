import React from 'react';
import Starter from '../components/Starter';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Music from '../pages/music';
import ContentLayout from '../components/ContentLayout';
import SEO from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <SEO></SEO>
      {/* <Headline headline={'Hello There!'} />
      <ContentLayout>
        <Starter></Starter>
      </ContentLayout> */}
      <Music></Music>
    </Layout>
  );
}
