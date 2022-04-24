import React from 'react';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import IdeasCard from '../components/IdeasCard';
import Song1 from '../songs/aviciiMatoma1.wav';
import Song2 from '../songs/Canvai - Mistakes (Audio).wav';
import Song3 from '../songs/Canvai - Need To Know.wav';
import Song4 from '../songs/Canvai - Our Gods (Audio).wav';
import Song5 from '../songs/Canvai - PullTheTrigger.wav';
import Song6 from '../songs/Canvai - Right for me yeaaaa.wav';
import Song7 from '../songs/soMany5.wav';
import Song8 from '../songs/CanYouBeMyOwn.wav';
import Song9 from '../songs/FUn2.wav';
import Song10 from '../songs/FunSession.wav';
import Song11 from '../songs/GEILO2.wav';
import Song12 from '../songs/glock.wav';
import Song13 from '../songs/ItsAGuitarVibe.wav';
import Song14 from '../songs/jumpsnew.wav';
import Song15 from '../songs/KNACK.wav';
import Song16 from '../songs/kygoGood.wav';
import Song17 from '../songs/LIIIISA.wav';
import Song18 from '../songs/Limoncat.wav';
import Song19 from '../songs/mountainCringe.wav';
import Song20 from '../songs/New_2022_V1.wav';
import Song21 from '../songs/New_2022_V2.wav';
import Song22 from '../songs/niceAlda.wav';
import Song23 from '../songs/Oberg3.wav';
import Song24 from '../songs/piniata2.wav';
import Song25 from '../songs/SinnnnnningInTheSnow.wav';
import Song26 from '../songs/soMany.wav';
import Song27 from '../songs/Canvai stretch.wav';

import './ideas.css';

export default function ideas() {
  return (
    <Layout>
      <SEO></SEO>
      <Navbar></Navbar>
      <Headline headline={'Ideas'}>
        <h1 style={{ padding: '0px 20px' }}>unfinished but unforgotten</h1>
        <p className='beats'>
          Most ideas never get finished. But instead of forgetting them, this is their place to shine.
        </p>
        <IdeasCard
                song={Song1}>
        </IdeasCard>
        <IdeasCard
                song={Song2}>
        </IdeasCard>
        <IdeasCard
                song={Song3}>
        </IdeasCard>
        <IdeasCard
                song={Song4}>
        </IdeasCard> 
        <IdeasCard
                song={Song5}>
        </IdeasCard> 
        <IdeasCard
                song={Song6}>
        </IdeasCard> 
        <IdeasCard
                song={Song7}>
        </IdeasCard> 
        <IdeasCard
                song={Song8}>
        </IdeasCard> 
        <IdeasCard
                song={Song9}>
        </IdeasCard> 
        <IdeasCard
                song={Song10}>
        </IdeasCard> 
        <IdeasCard
                song={Song11}>
        </IdeasCard> 
        <IdeasCard
                song={Song12}>
        </IdeasCard> 
        <IdeasCard
                song={Song13}>
        </IdeasCard> 
        <IdeasCard
                song={Song14}>
        </IdeasCard> 
        <IdeasCard
                song={Song15}>
        </IdeasCard> 
        <IdeasCard
                song={Song16}>
        </IdeasCard> 
        <IdeasCard
                song={Song17}>
        </IdeasCard> 
        <IdeasCard
                song={Song18}>
        </IdeasCard> 
        <IdeasCard
                song={Song19}>
        </IdeasCard> 
        <IdeasCard
                song={Song20}>
        </IdeasCard> 
        <IdeasCard
                song={Song21}>
        </IdeasCard> 
        <IdeasCard
                song={Song22}>
        </IdeasCard> 
        <IdeasCard
                song={Song23}>
        </IdeasCard> 
        <IdeasCard
                song={Song24}>
        </IdeasCard> 
        <IdeasCard
                song={Song25}>
        </IdeasCard> 
        <IdeasCard
                song={Song26}>
        </IdeasCard> 
        <IdeasCard
                song={Song27}>
        </IdeasCard> 
      </Headline>
    </Layout>
  );
}
