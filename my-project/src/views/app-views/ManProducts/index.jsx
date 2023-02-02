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
      <div className='flex md:grid md:grid-cols-12'>
        <div className='m-4 mr-5 mt-4 md:mt-4 md:w-52 md:max-h-screen md:min-h-[50vh] md:overflow-scroll md:overflow-x-hidden md:col-span-2 md:sticky sm:hidden md:top-10 md:block'>
          <List />
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

        <div className='grid md:grid-cols-3 grid-cols-3 gap-4 col-span-10 h-full'>
          {items?.map((item, i) => {
            const { Id } = item;
            return (
              <Link to={`/products/${Id}`}>
                <Card key={i} {...item} />
              </Link>
            );
          })}
        </div>
        {/* <Link to='/products/:id'>
          <div className='grid md:grid-cols-3 grid-cols-3 gap-4 col-span-10 h-full'>
            <Card options={cardData} />
          </div>
        </Link> */}
      </div>
    </div>
  );
};
export default ManProducts;
