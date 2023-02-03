import React from 'react';
import { Title, Star, ProductImages } from '../components';
import { formatPrice } from '../utils/helpers';
import styled from 'styled-components';
import AddToCart from './AddToCart';

import { useParams } from 'react-router-dom'
// import { GiMachineGun } from 'react-icons/gi';

const ItemDetail = ({ ifExists, endpoint: { items } }) => {
  const url = window.location;
  const tempId = url.href.slice(-6);
  
  const itemDetail = items.find(item => {
    const { Id } = item;
    const sliceId = Id.split('').slice(-6).join('')
    return item ? sliceId == tempId : null;
  });
  const { Title, SubTitle, Desc, Stars, Reviews, Colors } = itemDetail;
  const { imgColor, priceColor } = itemDetail.Colors[0];

  return (
    <Wrapper>
      <div className={`detail relative h-auto w-auto flex flex-col`}>
        <div className='grid items-center justify-items-center nike-container mt-10'>
          <div className='flex items-start justify-between'>
            {/* <img
              src={img}
              alt={`img/item-img/${id}`}
              className={`transitions-theme hover:-rotate-12 ${
                ifExists
                ? 'h-100 w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                : 'h-100 w-64'
              }`}
            /> */}
            <ProductImages images={imgColor} />
            <section className='content'>
              <div className='grid items-center'>
                <h1 className='text-3xl lg:text-4xl md:text-3xl  font-bold text-slate-900 filter drop-shadow-lg'>
                  {Title}
                </h1>
              </div>
              {/* <p>{Title}</p> */}
              <p>{SubTitle}</p>
              <p className='price'>{formatPrice(priceColor)}</p>
              <AddToCart product={itemDetail} />
              <p className='mt-10'>{Desc}</p>
              <hr className='mt-4' />
              <Star stars={Stars} reviews={Reviews} />
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .price {
    color: var(--clr-grey-1);
    font-size: 1rem;
  }
  .content {
    width: 50%;
    padding: 3.5rem;
    padding-top: 1rem !important;
  }
`;

export default ItemDetail;
