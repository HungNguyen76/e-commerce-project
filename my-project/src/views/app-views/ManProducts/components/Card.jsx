import React from 'react';
import { formatPrice } from '@/utils/helpers';
import {
  airMaxTerrascape9001
} from '@/assets/manProducts/air-max-terrascape-90';
const Card = ({ title, subtitle, description, color, image }) => {
  return (
    <>
      <div className='cursor-pointer'>
        <img
          className='mb-10'
          src={image}
          alt={title}
        />
        <div className='flex flex-col'>
          {/* {!new ? <span className='text-orange-500'>Just In</span> : ''} */}
          <span>{title}</span>
          <span className='text-gray-400'>{subtitle}</span>
          <span className='text-gray-400'>{color} Color</span>
          {/* <span className='mt-2'>{formatPrice(Price)}</span> */}
        </div>
      </div>
    </>
  );
};
export default Card;
