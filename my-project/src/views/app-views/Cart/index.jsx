import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './cart.scss';
import paypal from '@/assets/paypal.png';
import { useCartContext } from '@/context/cart_context';
import { formatPrice } from '@/utils/helpers';
import { TfiTrash } from 'react-icons/tfi';

const Cart = () => {
  const { cart, removeItem, total_amount, shipping_fee } = useCartContext();
 
  useEffect(() => {
    document.title = 'Bag. Nike Store.';
  }, []);
  return (
    <div className='container flex justify-around mt-2 '>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl'>Bag</span>
        {cart.length < 1 ? (
          <Wrapper className='page-100'>
            <div className='empty'>
              <h2>There are no items in your bag</h2>
              <Link to='/' className='btn'>
                Buy a product
              </Link>
            </div>
          </Wrapper>
        ) : (
          cart.map((item) => {
            const { ColorsArr, Id } = item;
            const { idColor } = ColorsArr;
            return (
              <div className='flex'>
                <div>
                  <Link to={`/men/${Id}/${idColor}`}>
                    <img
                      src={ColorsArr.imgColor[0].url}
                      alt={ColorsArr.imgColor[0].filename}
                    />
                  </Link>
                </div>
                <div className='ml-5'>
                  <h1>{item.name}</h1>
                  <h2>{item.subtitle}</h2>
                  <h2>{ColorsArr.colourShown}</h2>
                  <p>{formatPrice(item.price)}</p>
                  <button
                    type='button'
                    className='remove-btn mt-4'
                    onClick={() => removeItem(idColor)}
                  >
                    <TfiTrash />
                  </button>
                </div>
              </div>
            );
          })
        )}
        <div className='mt-48'>
          Favourites?
          <Link to='/register'>
            <span className='underline opacity-70 m-4'>Join us</span>
          </Link>
          or
          <Link to='/login'>
            <span className='underline opacity-70 m-2'>Sign in</span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl'>Summary</span>
        <span>Subtotal: {formatPrice(total_amount)}</span>
        <span>Estimated Delivery & Handling: {formatPrice(shipping_fee)}</span>
        <hr />
        <span className='font-semibold'>
          Total: <span>{formatPrice(total_amount + shipping_fee)}</span>
        </span>
        <hr />
        <div className='flex flex-col buttons-cart'>
          <button disabled>Member Checkout </button>
          <button disabled className='paypal-btn'>
            <img src={paypal} alt='paypal' />
          </button>
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.main`
  .empty {
    margin-top: 1rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
export default Cart;
