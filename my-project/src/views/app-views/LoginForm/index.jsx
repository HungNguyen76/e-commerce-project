import React, { useState } from 'react';
import './LoginForm.scss';
import Modal from 'react-modal';
// import SelectCountries from './LoginModal-Components/SelectCountries';

const LoginForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Gender, setGender] = useState(undefined);
  const [RegisterModalIsOpen, RegisterIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeHandleRegister() {
    setIsOpen(false);
    openRegister();
  }
  function closeHandleLogin() {
    setIsOpen(true);
    closeRegister();
  }

  function openRegister() {
    RegisterIsOpen(true);
  }
  function closeRegister() {
    RegisterIsOpen(false);
  }
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
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
            {' '}Privacy Policy{' '}
            </a>
            and <br />
            <a
              href='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web'
              className='underline'
            >
              Terms of Use.
            </a>
          </span>
          <button className='login-panel-button'>Sign In</button>
          <span className='text-center mt-4 text-xs'>
            Not a Member?
            <span
              className='underline cursor-pointer'
              onClick={() => setOturumAc(true)}
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
