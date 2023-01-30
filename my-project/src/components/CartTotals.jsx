import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee:
            {shipping_fee === 0 ? (
              <span>free</span>
            ) : (
              <span>{formatPrice(shipping_fee)}</span>
            )}
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 3rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    border: 1px solid var(--clr-grey-8);
    text-transform: capitalize;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    background: rgb(17, 17, 17);
    line-height: 1.5;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    cursor: pointer;
    padding: 18px 24px;
  }
`;
export default CartTotals;
