import React, { useEffect, useState } from 'react';
import './Products.scss';
import { cardData } from '../../../data/cardData';
import List from './components/List';
import Card from './components/Card';
import HeadText from './components/HeadText';
import Gender from './components/Gender';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useProductsContext } from '@/context/products_context';
const ManProducts = ({ endpoint: { items } }) => {
  const {
    products_loading: loading,
    products_error: error,
    new_products: newProducts,
  } = useProductsContext();
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
        </div>
        <div className='grid grid-cols-3 gap-4 col-span-10 h-full'>
          {newProducts?.map((item, i) => {
            const { _id: idProduct, productColors } = item;
            const { _id: idColor } = productColors[0];
            return (
              <Link to={`/men/${idProduct}/${idColor}`}>
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
