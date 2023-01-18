import React from 'react'
import styled from 'styled-components';


const CartColumns = () => {
    return (
      <Wrapper>
        <div className='content'>
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
          <span></span>
        </div>
        <hr />
      </Wrapper>
    );
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      column-gap: 1rem;
      margin-top: 5rem;
      h5 {
        color: var(--clr-black);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default CartColumns;
