import React, { useEffect, useParams } from 'react';
import './Products.scss';
import { cardData } from '../../../data/cardData';
import List from './components/List';
import Card from './components/Card';
import HeadText from './components/HeadText';
import Gender from './components/Gender';
import { Link } from 'react-router-dom';
const ManProducts = ({ endpoint: { items } }) => {
  // console.log(items)
  useEffect(() => {
    document.title = 'Men Shoes, Clothing & Accessories. Nike PH';
  }, []);
  return (
    <div className='mt-4'>
      <HeadText />
      <div className='grid grid-cols-12'>
        <div className='mt-4 w-52 max-h-screen min-h-[50vh] overflow-scroll overflow-x-hidden col-span-2 sticky top-10 block sm:hidden'>
          <List />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />
          <hr className='mt-4' />
          <Gender />

          {/* <hr className='mt-4' />
            <Kid />
            <hr className='mt-4' />
            <Price />
            <hr className='mt-4' />
            <Spor />
            <hr className='mt-4' />
            <Colors />
            <hr className='mt-4' />
            <Brands />
            <hr className='mt-4' />
            <Icons />
            <hr className='mt-4' />
            <Design />
            <hr className='mt-4' />
            <Activities />
            <hr className='mt-4' />
            <Partner />
            <hr className='mt-4' />
            <NBA /> */}
        </div>
        <div className='grid grid-cols-3 grid-cols-3 gap-4 col-span-10 h-full'>
          {items?.map((item, i) => {
            const { Id, Colors } = item;
            const { idColor } = Colors[0];
            return (
              <Link to={`/men/${Id}/${idColor}`}>
                <Card key={i} {...item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ManProducts;
