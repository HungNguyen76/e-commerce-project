import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { Id, Title, stock, Colors, Sizes } = product;
  const [amount, setAmount] = useState(1);
  return (
    <Wrapper>
      <div className='colors'>
        <div className='colors-item mt-5'>
          {Colors.map((color) => {
            const { idColor } = color;
            const refreshPage = () => {
              window.location.reload();
            };
            return Colors.length > 1 ? (
              <button onClick={refreshPage}>
                <Link to={`/men/${Id}/${idColor}`}>               
                  <img
                    src={color.imgColor[0].url}
                    alt={color.imgColor[0].filename}
                  />
                </Link>
              </button>
            ) : null
          })}
        </div>

        <div className='sizes mt-10'>
          <h3>Select Size</h3>
          <div className='sizes-item'>
            {Colors[0].sizesColor.map((s) => (
              <span>{s.name}</span>
            ))}
          </div>
        </div>
        <button
          type='button'
          className='btn button-theme bg-slate-900 shadow-slate-9 text-slate-100 py-1.5'
          onClick={() => addToCart(Id, Colors[0].imgColor, amount, product)}
        >
          {/* <Link to='/cart'>add to bag</Link> */}
          add to bag
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn {
    width: 100%;
    height: 4rem;
    border-radius: 2rem;
    text-transform: capitalize;
    margin-top: 1rem;
  }
  .btn:hover {
    background: #757575;
  }
  .colors-item {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    img {
      max-width: 125px;
      max-height: 80px;
    }
    img:hover {
      border: 1px solid rgb(17, 17, 17);
    }
  }
  .sizes {
    span {
      background: rgb(255, 255, 255);
      color: rgb(17, 17, 17);
      box-shadow: rgb(229 229 229) 0px 0px 0px 1px;
      height: 48px;
      border-radius: 4px;
    }
    .sizes-item {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      justify-content: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span:hover {
        box-shadow: rgb(17 17 17) 0px 0px 0px 1px inset;
      }
    }
  }
`;
export default AddToCart;
