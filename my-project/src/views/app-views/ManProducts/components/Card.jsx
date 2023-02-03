import React from 'react';
import { formatPrice } from '@/utils/helpers';

const Card = ({ Image, Title, New, SubTitle, Desc, Color, Price }) => {
  return (
    <>
      <div className='cursor-pointer'>
        <img className='mb-2' src={Image} alt={Title} />
        <div className='flex flex-col'>
          {New ? <span className='text-orange-500'>Just In</span> : ''}
          <span>{Title}</span>
          <span className='text-gray-400'>{SubTitle}</span>
          <span className='text-gray-400'>{Color} Color</span>
          <span className='mt-2'>{formatPrice(Price)}</span>
        </div>
      </div>
    </>
  );
};
export default Card;
