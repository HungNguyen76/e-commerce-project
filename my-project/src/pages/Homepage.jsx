import React from 'react'
import {Sales, Hero } from '../components'
import { heroapi, popularsales } from '../data/data';


const HomePage = () => {
    return (
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
      </main>
    );
}
export default HomePage