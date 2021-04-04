import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import WebCard from '../components/WebCard';
import Tapescape from '../images/tapeScape1.gif';
import Panda from '../images/panda1.gif';
import GoalRunner from '../images/goalRunner1.gif';
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
                bgColor={'#241938'}
                header={'Tapescape'}
                desc={'A journey through a world that is controlled by music'}
                img={Tapescape}
                tech={'Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>

            <a style={{ marginTop: '30px' }}>
              <WebCard
                bgColor={'#94dae8'}
                header={'Pandamania'}
                color={'white'}
                desc={'Grab your friends and work together in this panda puzzle platformer'}
                img={Panda}
                tech={'Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>

            <a style={{ marginTop: '30px' }}>
              <WebCard
                bgColor={'#8694a5'}
                header={'Goal Runner'}
                color={'white'}
                desc={'A mobile game where you chase balls and score goals'}
                img={GoalRunner}
                tech={'(In the making) Unity'}
                techColor={'white'}
                portfolio={false}></WebCard>
            </a>
          </div>
        </ContentLayout>
      </Headline>
    </Layout>
  );
}
