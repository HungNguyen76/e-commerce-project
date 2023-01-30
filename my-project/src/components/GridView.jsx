import React from 'react';
import styled from 'styled-components';
import { Item } from '../components';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Item key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem;
  }
  
`;
export default GridView;
