import React from 'react';
import { Star, ProductImages } from '../components';
import { formatPrice } from '../utils/helpers';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const ItemDetail = ({ endpoint: { items } }) => {
  const idColorTemp = window.location.href.slice(-17, -11);

  const cardDetail = items.find(item => item.Id.slice(-6) === idColorTemp);

  const { Title, SubTitle, Desc, Stars, Reviews, Price } = cardDetail;

  return (
    <Wrapper>
      <div className='detail relative h-auto w-auto flex flex-col'>
        <div className='grid items-center justify-items-center nike-container mt-10'>
          <div className='flex items-start justify-between'>
            <ProductImages images={cardDetail} />
            <section className='content'>
              <div className='grid items-center'>
                <h1 className='text-3xl lg:text-4xl md:text-3xl  font-bold text-slate-900 filter drop-shadow-lg'>
                  {Title}
                </h1>
              </div>
              <p>{SubTitle}</p>
              <p className='price'>{formatPrice(Price)}</p>
              <AddToCart product={cardDetail} />
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
    padding: 4rem;
    padding-top: 1rem !important;
  }
`;

export default ItemDetail;
