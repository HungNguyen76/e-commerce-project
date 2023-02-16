import React, { useEffect } from 'react';
import { Hero } from '@/components';
import { MainPhoto, SliderMain } from './components';
import { heroapi } from '@/data/data';
import Footer from '../Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'Nike. Just Do It. Nike VN';
  }, []);
  return (
    <div>
      <Hero heroapi={heroapi} />
      <MainPhoto />
      <SliderMain />
    </div>
  );
};
export default Home;
