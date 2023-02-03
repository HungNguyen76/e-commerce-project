import React from 'react'
import {Sales, Hero } from '../components'
import { heroapi, popularsales } from '../data/data';
import {MainPhoto, SliderMain} from '@/views/app-views/Home/components';


const HomePage = () => {
    return (
      <main>
        <Hero heroapi={heroapi} />
        <MainPhoto />
        <SliderMain />
        {/* <Sales endpoint={popularsales} ifExists /> */}
      </main>
    );
}
export default HomePage