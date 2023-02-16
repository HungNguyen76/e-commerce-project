import React from 'react';

const Privacy = () => {
  return (
    <div className='mt-10 flex justify-between'>
      <span className='text-[#555] text-xs'>
        © 2023 Nike, Inc. All Rights Reserved.
      </span>
      <div className='flex gap-4 privacy'>
        <span>Guides</span>
        <span>Terms of sale</span>
        <span>Terms of Use</span>
        <span>Nike Privacy Policy</span>
      </div>
    </div>
  );
};

export default Privacy;
