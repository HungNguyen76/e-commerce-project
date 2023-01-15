import React from 'react';

const SocialLink = ({ icon, url }) => {
  return (
    <>
      <div>
        <a href={url}>
          <img
            src={icon}
            alt='icon/social'
            className='w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110'
          />
        </a>
      </div>
    </>
  );
};

export default SocialLink;
