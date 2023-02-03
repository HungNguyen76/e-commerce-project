import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <main className='container'>
        <p className='reviews'>Reviews({reviews})</p>
        <div className='stars'>{tempStars}</div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  div {
    display: flex;
    align-items: center;
    span {
      color: #111;
      font-size: 1rem;
      margin-right: 0.25rem;
    }
    p {
      margin-left: 0.5rem;
      margin-bottom: 0;
    }
    margin-bottom: 0.5rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .reviews {
      font-weight: 500;
      font-size: 20px;
      line-height: 1;
    }
  }
`;
export default Stars;
