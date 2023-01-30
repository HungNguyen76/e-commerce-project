import React from 'react';
import styled from 'styled-components';
import { ProductList } from '../components';

const ProductsPage = ({ ifExits, endpoint: { items } }) => {
  return (
    <main>
      <Wrapper className='page'>
        <div className='section-center products'>
          <div>
            <ProductList products={items} ifExists={ifExits} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (max-width: 1200px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default ProductsPage;
