import React, { useState, useEffect } from 'react';
// import SelectCountries from '../../LoginModal/LoginModal-Components/SelectCountries';

const RegisterForm = ({ setLogin }) => {
  const [gender, setGender] = useState(undefined);
  useEffect(() => {
    document.title = 'Join Us';
  }, []);
  return (
    <div className='flex flex-col justify-center text-center items-center'>
      <div className='nike-unite-swoosh'>
        <img
          src='https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png'
          alt='nike'
        />
      </div>
      <div className='header-text'>
        <span>BECOME A NIKE MEMBER</span>
      </div>
      <form>
        <div className='register-panel-form'>
          <input required placeholder='Email address' type='text' />
          <input required placeholder='Password' type='password' />
          <input required placeholder='First Name' type='text' />
          <input required placeholder='Last Name' type='text' />
          <span className='text-center text-xs mt-2 text-gray-400'>
            Get a Nike Member Reward every year on your Birthday.
          </span>
          <input required placeholder='gg/aa/yy' type='date' />
          {/* <SelectCountries /> */}
          <div className='flex gap-4 justify-center mt-4 items-center'>
            {gender}
            <button
              type='button'
              onClick={() => setGender(true)}
              className={`${
                gender ? 'border-black' : ''
              } border rounded-md py-2 w-full text-sm px-6`}
            >
              <i
                className={`${gender ? 'visible' : 'hidden'} fa-solid fa-check`}
              ></i>{' '}
              Male
            </button>{' '}
            <button
              type='button'
              onClick={() => setGender(false)}
              className={`${
                gender ? '' : 'border-black'
              } border rounded-md py-2 text-sm w-full px-6`}
            >
              <i
                className={`${gender ? 'hidden' : 'visible'} fa-solid fa-check`}
              ></i>{' '}
              Female
            </button>
          </div>
          <span className='register-panel-desc'>
            By creating an account, you agree to Nike's{' '}
            <a
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=PH&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
              Privacy Policy{' '}
            </a>
            and <br />{' '}
            <a
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=PH&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
              Terms of Use
            </a>
          </span>
          <button className='register-panel-button'>SIGN IN</button>
          <span className='text-xs text-center mt-4'>
            Already a member?{' '}
            <span
              onClick={() => setLogin(true)}
              className='underline cursor-pointer'
            >
              Sign In.
            </span>{' '}
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
