import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import WebCard from '../components/WebCard';
import Tapescape from '../images/tapescapeBig.png';
import FlyGuy from '../images/flyGuyWeb.jpg';
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
                desc={'A short jounrney where the world is controlled by music'}
                img={Tapescape}
                tech={'Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>

            <a style={{ marginTop: '30px' }}>
              <WebCard
                bgColor={'#92A332'}
                header={'Goal Runner'}
                color={'white'}
                desc={'A mobile game where you need to score goals in a creative way'}
                img={FlyGuy}
                tech={'Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>

            <a
              target='blank'
              href='https://confident-jepsen-fc4ca9.netlify.app/'
              style={{ marginTop: '30px' }}>
              <WebCard
                bgColor={'#f4db7d'}
                header={'Fly Guy'}
                color={'black'}
                desc={'A tiny Browser game optimized for Google Chrome!'}
                img={FlyGuy}
                tech={'HTML Canvas'}
                techColor={'black'}
                portfolio={false}></WebCard>
            </a>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
