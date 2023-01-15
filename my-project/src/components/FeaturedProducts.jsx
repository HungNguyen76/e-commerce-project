import React from 'react';
// import { useProductsContext } from '../context/products_context';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Product from './Product';
import { popularsales } from '../utils/constants';
const FeaturedProducts = () => {
  // const { products } = useProductsContext();
  return (
    // <Wrapper className='section'>
    <>
      {/* <div className='title'>
        <div className='underline'></div>
      </div> */}
      <main className='flex flex-col gap-16 relative'>
        {/* {products.slice(0, 3).map((product) => { */}
        <Product endpoint={popularsales} ifExists />
        {/* })} */}
      </main>
      {/* <Link to='/products' className='btn'>
        all products
      </Link> */}
    </>
    // </Wrapper>
  );
};
// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   .featured {
//     margin: 4rem auto;
//     display: grid;
//     gap: 2.5rem;
//     img {
//       height: 225px;
//     }
//   }
//   .btn {
//     display: block;
//     width: 148px;
//     margin: 0 auto;
//     text-align: center;
//   }
//   @media (min-width: 576px) {
//     .featured {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
// `;
export default FeaturedProducts;
