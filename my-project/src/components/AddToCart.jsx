import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const {id, title, stock, color } = product;
  const [ amount, setAmount ] = useState(1)
  return (
    <Wrapper>
      <button
        type='button'
        className='btn button-theme bg-slate-900 shadow-slate-9 text-slate-100 py-1.5'
        onClick={() => addToCart(id, color, amount, product)}
      >
        {/* <Link to='/cart'>add to bag</Link> */}
        add to bag
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn {
    width: 80%;
    height: 4rem;
    border-radius: 2rem;
    margin: 2rem;
    text-transform: capitalize;
  }
`;
export default AddToCart;
