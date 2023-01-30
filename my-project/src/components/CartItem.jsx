import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { TfiTrash } from 'react-icons/tfi';
import { AmountButtons } from '../components';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            Color: <span style={{ background: color }}></span>
          </p>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <TfiTrash />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
   
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
    margin-left: 3rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-black);
      font-weight: 400;
      font-size: 0.8rem;
    }
    .name {
      font-size: .85rem;
    }
    .price {
      font-size: 0.8rem;
    }
  }
  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: .5rem;
      heigth: 0.5rem;
      background: red;
      margin-left: .5rem;
      border-radius: var(--radius);
    }
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.2rem;
    cursor: pointer;
  }
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-template-rows: 75px;
  img {
    height: 100%;
  }
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 80px 100px;
    align-items: center;
    text-align; left;
  }
`;
export default CartItem;
