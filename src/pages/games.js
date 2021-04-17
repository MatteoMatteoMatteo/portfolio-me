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
import GameMobileHolder from '../components/GameMobileHolder';

export default function games() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Games'}>
        <h1 style={{ padding: '0px 20px' }}>explore new worlds</h1>
        <div className='gamesProjectsHolder'>
          <a target='blank' href='https://mortenblaa.itch.io/tapescape'>
            <WebCard
              bgColor={'#241938'}
              header={'Tapescape'}
              desc={'A short adventure that is controlled by music'}
              img={Tapescape}
              tech={'Unity'}
              techColor={'white'}
              portfolio={false}></WebCard>
          </a>

          {/* <a
            target='blank'
            href='https://matteomatteomatteo.itch.io/pandamania'
            style={{ marginTop: '30px' }}>
            <WebCard
              bgColor={'#a17f64'}
              header={'Pandamania'}
              color={'white'}
              desc={'Grab your friends and work together in this panda puzzle platformer!'}
              img={Panda}
              tech={'Unity'}
              techColor={'white'}
              portfolio={false}></WebCard>
          </a> */}

          <a
            style={{ marginTop: '30px' }}
            target='blank'
            href='https://matteomatteomatteo.itch.io/goal-runner-ar'>
            <WebCard
              bgColor={'#00203f'}
              header={'Goal Runner'}
              color={'white'}
              desc={'An Augmented Reality car soccer crossbar challenge'}
              img={GoalRunner}
              tech={'Unity'}
              techColor={'white'}
              zusatz={''}
              portfolio={false}></WebCard>
          </a>
        </div>
        <div className='mobileHolder'>
          <a href='https://mortenblaa.itch.io/tapescape' target='blank'>
            <GameMobileHolder
              gif={Tapescape}
              title={'Tapescape'}
              text={'A short adventure that is controlled by music'}
              tech={'Unity'}
              bgColor={'#241938'}></GameMobileHolder>
          </a>

          {/* <a href='https://matteomatteomatteo.itch.io/pandamania' target='blank'>
            <GameMobileHolder
              gif={Panda}
              title={'Pandamania'}
              text={'Grab your friends and work together in this panda puzzle platformer!'}
              tech={'Unity'}
              bgColor={'#a17f64'}></GameMobileHolder>
          </a> */}
          <a href='https://matteomatteomatteo.itch.io/goal-runner-ar' target='blank'>
            <GameMobileHolder
              gif={GoalRunner}
              title={'Goal Runner'}
              text={'An Augmented Reality car soccer crossbar challenge'}
              tech={'Unity'}
              techInfo={''}
              bgColor={'#00203f'}></GameMobileHolder>
          </a>
        </div>
      </Headline>
    </Layout>
  );
}
