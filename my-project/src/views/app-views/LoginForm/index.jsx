import React, { useState, useEffect } from 'react';
import './LoginForm.scss';
import Modal from 'react-modal';
// import SelectCountries from './LoginModal-Components/SelectCountries';

const LoginForm = ({ setLogin }) => {
  useEffect(() => {
    document.title = "Log in";
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='nike-unite-swoosh'>
        <img
          src='https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png'
          alt='nike'
        />
      </div>
      <div className='header-text'>
        <span>
          YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
        </span>
      </div>
      <form>
        <div className='login-panel-form'>
          <input required placeholder='Email address' type='text' />
          <input required placeholder='Password' type='password' />
          <span className='login-panel-desc'>
            By logging in, you agree to Nike's
            <a
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=PH&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
              {' '}
              Privacy Policy{' '}
            </a>
            and <br />
            <a
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=PH&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
              Terms of Use.
            </a>
          </span>
          <button className='login-panel-button'>Sign In</button>
          <span className='text-center mt-4 text-xs'>
            Not a Member?{' '}
            <span
              className='underline cursor-pointer'
              onClick={() => setLogin(false)}
            >
              Join Us.
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
