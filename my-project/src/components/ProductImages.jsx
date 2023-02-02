import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      {/* <img src={main.url} alt='main' className='main' /> */}
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    .main {
        height: 700px;
        width: 1000px;
    }
    img {
        width: 470px;
        display: block;
        object-fit: cover;
    }
    .gallery {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1rem;
        column-gap: 1rem;
        img {
            height: 450px;
            cursor: pointer;
        }
    }

    @media (max-width: 576px) {
        .main {
            height: 500px;
        }
        .gallery {
            img {
                height: 75px;
            }
        }
    }
`
export default ProductImages;
