import React, { useState, useEffect } from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import IdeasCard from '../components/IdeasCard';
// import Song2 from '../songs/Canvai - Mistakes (Audio).mp3';
// import Song3 from '../songs/Canvai - Need To Know.mp3';
// import Song4 from '../songs/Canvai - Our Gods (Audio).mp3';
// import Song5 from '../songs/Canvai - PullTheTrigger.mp3';
// import Song6 from '../songs/Canvai - Right for me yeaaaa.mp3';
// import Song7 from '../songs/soMany5.mp3';
// import Song8 from '../songs/CanYouBeMyOwn.mp3';
// import Song9 from '../songs/FUn2.mp3';
// import Song10 from '../songs/FunSession.mp3';
// import Song11 from '../songs/GEILO2.mp3';
// import Song12 from '../songs/glock.mp3';
// import Song13 from '../songs/ItsAGuitarVibe.mp3';
// import Song14 from '../songs/jumpsnew.mp3';
// import Song15 from '../songs/KNACK.mp3';
// import Song16 from '../songs/kygoGood.mp3';
// import Song17 from '../songs/LIIIISA.mp3';
// import Song18 from '../songs/Limoncat.mp3';
// import Song19 from '../songs/mountainCringe.mp3';
// import Song20 from '../songs/New_2022_V1.mp3';
// import Song21 from '../songs/New_2022_V2.mp3';
// import Song22 from '../songs/niceAlda.mp3';
// import Song23 from '../songs/Oberg3.mp3';
// import Song24 from '../songs/piniata2.mp3';
// import Song25 from '../songs/SinnnnnningInTheSnow.mp3';
// import Song26 from '../songs/soMany.mp3';
// import Song27 from '../songs/cv_vocal21.mp3';
// import Song28 from '../songs/cv_way_out.mp3';
// import Song29 from '../songs/cv_dropless.mp3';
// import Song30 from '../songs/cv_cyan.mp3';
// import Song31 from '../songs/cv_sing.mp3';
// import Song32 from '../songs/IUUU - Maria Demo.mp3';

import './ideas.css';

export default function ideas() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Unfinished Music'}>
        <h1 style={{ padding: '0px 20px' }}>song graveyard</h1>
        <p className='beats'>
          Dead but not forgotten! Enjoy unmixed music & creative project file names.
          <br></br>
        </p>
        {/* <IdeasCard header={'Need to know'} song={Song3}></IdeasCard>
        <IdeasCard header={'Dropless'} song={Song29}></IdeasCard>
        <IdeasCard header={'Right for me'} volume={0} song={Song6}></IdeasCard>
        <IdeasCard header={'New_2022_V2'} song={Song21}></IdeasCard>
        <IdeasCard header={'piniata2'} song={Song24}></IdeasCard>
        <IdeasCard header={'CanYouBeMyOwn'} song={Song8}></IdeasCard>
        <IdeasCard header={'IUUU'} song={Song32}></IdeasCard>
        <IdeasCard header={'glock'} song={Song12}></IdeasCard>
        <IdeasCard header={'ItsAGuitarVibe'} song={Song13}></IdeasCard>
        <IdeasCard header={'Mistakes'} song={Song2}></IdeasCard>
        <IdeasCard header={'Vocal21'} song={Song27}></IdeasCard>
        <IdeasCard header={'jumpsnew'} song={Song14}></IdeasCard>
        <IdeasCard header={'Knack'} song={Song15}></IdeasCard>
        <IdeasCard header={'kygoGood'} song={Song16}></IdeasCard>
        <IdeasCard header={'LIIIIS'} song={Song17}></IdeasCard>
        <IdeasCard header={'WayOut'} song={Song28}></IdeasCard>
        <IdeasCard header={'Limoncat'} song={Song18}></IdeasCard>
        <IdeasCard header={'mountainCringe'} song={Song19}></IdeasCard>
        <IdeasCard header={'New_2022_V1'} song={Song20}></IdeasCard>
        <IdeasCard header={'PullTheTrigger'} song={Song5}></IdeasCard>
        <IdeasCard header={'Cyan'} song={Song30}></IdeasCard>
        <IdeasCard header={'niceAlda'} song={Song22}></IdeasCard>
        <IdeasCard header={'SinnnnnningInTheSnow'} song={Song25}></IdeasCard>
        <IdeasCard header={'soMany'} song={Song26}></IdeasCard>
        <IdeasCard header={'ourGods'} song={Song4}></IdeasCard>
        <IdeasCard header={'PullTheTrigger'} song={Song31}></IdeasCard>
        <IdeasCard header={'FUn2'} song={Song9}></IdeasCard> */}
      </Headline>
    </Layout>
  );
}
