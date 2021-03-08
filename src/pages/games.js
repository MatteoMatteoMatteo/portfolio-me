import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import WebCard from '../components/WebCard';
import Tapescape from '../images/tapescapeBig.png';
import './games.css';
import ContentLayout from '../components/ContentLayout';
import SEO from '../components/seo';

export default function games() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Games'}>
        <ContentLayout>
          <h1>explore new worlds</h1>
          <div className='gamesProjectsHolder'>
            <a target='blank' href='https://mortenblaa.itch.io/tapescape'>
              <WebCard
                bgColor={'#063346'}
                header={'Tapescape'}
                desc={'A game where the world is controlled by music'}
                img={Tapescape}
                tech={'Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
