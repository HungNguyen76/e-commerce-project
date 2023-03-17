import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '@/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
const initialState = {
  username: '',
  email: '',
  password: '',
  gender: '',
  date_of_birth: '',
  isMember: true,
};
const RegisterForm = ({ setLogin }) => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const username = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [username]: value });
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, gender, date_of_birth, isMember } =
      values;
    if (!email || !password || (!isMember && !username)) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(
      registerUser({ username, email, password, gender, date_of_birth })
    );
  };

  useEffect(() => {
    document.title = 'Join Us';
  }, []);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
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
      <form className='form' onSubmit={onSubmit}>
        <div className='register-panel-form'>
          <input
            required
            id='email'
            placeholder='Email address'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            className='form-input'
          />

          <input
            required
            id='password'
            placeholder='Password'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            className='form-input'
          />
          <input
            required
            id='username'
            placeholder='Full Name'
            type='username'
            name='username'
            value={values.username}
            onChange={handleChange}
            className='form-input'
          />
          <input
            required
            id='gender'
            placeholder='Gender ( male or female )'
            type='gender'
            name='gender'
            value={values.gender}
            onChange={handleChange}
            className='form-input'
          />

          <span className='text-center text-xs mt-2 text-gray-400'>
            Get a Nike Member Reward every year on your Birthday.
          </span>
          <input
            id='date_of_birth'
            onChange={handleChange}
            name='date_of_birth'
            value={values.date_of_birth}
            required
            placeholder='gg/aa/yy'
            type='date'
            className='form-input'
          />

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
          <button className='register-panel-button' onClick={toggleMember}>
            SIGN UP
          </button>
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
