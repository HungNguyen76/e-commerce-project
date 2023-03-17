import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.scss';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '@/features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  password: '',
  isMember: true,
};
const LoginForm = ({ setLogin }) => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    const username = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [username]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, isMember } = values;
    if (!password || (!isMember && !email)) {
      toast.error('Please fill out all fields');
      return;
    }
    // if (isMember) {
    //   dispatch(loginUser({ username, email, password }));
    //   return;
    // }
    dispatch(
      loginUser({ email: email, password: password })
    );
  };
  useEffect(() => {
    document.title = 'Log in';
  }, []);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
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
      <form className='form' onSubmit={onSubmit}>
        <div className='login-panel-form'>
          <input
            required
            name='email'
            type='email'
            value={values.email}
            onChange={handleChange}
            placeholder='Email Address'
          />
          <input
            required
            name='password'
            type='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Password'
          />
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
          <button className='login-panel-button' onClick={toggleMember}>
            SIGN IN
          </button>
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
