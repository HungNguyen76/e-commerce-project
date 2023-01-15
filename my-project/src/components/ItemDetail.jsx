import React from 'react';
import { Title, Stars, ProductImages } from '../components';
import { formatPrice } from '../utils/helpers';
import styled from 'styled-components';
// import { GiMachineGun } from 'react-icons/gi';

const ItemDetail = ({ ifExists, endpoint: { items } }) => {
  const page = window.location;
  const path = JSON.stringify(page).slice(40, 45);
  const itemDetail = items.filter((item) => item.id === path);
  const {
    id,
    text,
    img,
    price,
    title: titleDetail,
    description,
    stars,
    reviews,
    images
  } = itemDetail[0];


  return (
    <Wrapper>
      <div
        className={`detail relative h-auto w-auto flex flex-col`}
      >
        <div className='grid items-center justify-items-center nike-container mt-28'>
          <Title title={titleDetail} />
          <div>
            {/* <img
              src={img}
              alt={`img/item-img/${id}`}
              className={`transitions-theme hover:-rotate-12 ${
                ifExists
                  ? 'h-100 w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                  : 'h-100 w-64'
              }`}
            /> */}
            <ProductImages images={images}/>
            <section>
              <p>{text}</p>
              <Stars stars={stars} reviews={reviews} />
              <p className='price'>{formatPrice(price)}</p>
              <p>{description}</p>
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
`;

export default ItemDetail;
