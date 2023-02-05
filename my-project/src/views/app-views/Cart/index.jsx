import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';
import paypal from '@/assets/paypal.png';
import { useCartContext } from '@/context/cart_context';

const Cart = () => {
  const { cart } = useCartContext();
  // console.log('🚀 ~ file: index.jsx:9 ~ Cart ~ cart', cart)
  const imagesProducts = cart.map((c) => c.color.map((m) => m.url));
  const imagesDetail = imagesProducts.map((d) => d[0]);
  console.log('🚀 ~ file: index.jsx:12 ~ Cart ~ imagesDetail', imagesDetail);
  useEffect(() => {
    document.title = 'Bag. Nike Store.';
  }, []);
  return (
    <div className='container flex justify-around mt-2 '>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl'>Bag</span>
        {/* <span>There's no item on your bag</span> */}
        {imagesDetail.map((i) => (
          <img src={i} alt={i} />
        ))}
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
        <span>Subtotal: $0,00</span>
        <span>Estimated Delivery & Handling: $0,00</span>
        <hr />
        <span className='font-semibold'>
          Total: <span>$0,00</span>
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

export default Cart;
