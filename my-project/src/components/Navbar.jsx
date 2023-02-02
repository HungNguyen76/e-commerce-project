import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import CartButtons from './CartButtons';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const [navState, setNavState] = useState(false);
  const { total_items } = useCartContext();
  // const onNavScroll = () => {
  //   if (window.scrollY > 30) {
  //     setNavState(true);
  //   } else {
  //     setNavState(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', onNavScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onNavScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <header
        className={
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50 '
            : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      > */}
      {/* <header
        className={
          'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      >
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center'>
            <Link to='/'>
              <img
                src={logo}
                alt='logo/img'
                className={`w-16 h-auto ${!navState && 'filter brightness-0'}`}
              />
            </Link>
          </div>
          <ul className='flex items-center justify-center gap-2 '>
            <li className='grid items-center'>
              <Link to='/man'>
                <li>
                  Man Products
                  <div className='yeni-cikanlar hidden'>
                    <div className='grid grid-cols-4 gap-4'>
                      <Menu options={manProducts} />
                    </div>
                  </div>
                </li>
              </Link>
            </li>
            <li className='grid items-center'>
              <AiOutlineSearch
                className={`icon-style ${
                  !navState && 'text-slate-900 transition-all duration-300'
                } `}
              />
            </li>
            {myUser ? (
              <li className='grid items-center'>
                <AiOutlineUserDelete
                  className={`icon-style ${
                    !navState && 'text-slate-900 transition-all duration-300'
                  } `}
                  onClick={() => {
                    localStorage.removeItem('user');
                    logout({ returnTo: window.location.origin });
                  }}
                />
              </li>
            ) : (
              <li className='grid items-center'>
                <AiOutlineUserAdd
                  className={`icon-style ${
                    !navState && 'text-slate-900 transition-all duration-300'
                  } `}
                  onClick={loginWithRedirect}
                />
              </li>
            )}
            <li className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
              <Link to='/cart'>
                <button type='button' className=''>
                  <HiOutlineShoppingBag
                    className={`icon-style ${
                      !navState && 'text-slate-900 transition-all duration-300'
                    } `}
                  />
                  <div
                    className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                      navState
                        ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                        : 'bg-slate-100 text-slate-900 shadow-slate-100'
                    } `}
                  >
                    {total_items}
                    <CartButtons />
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <nav className='flex justify-between items-center'>
        <div className='Logo hover:opacity-50 cursor-pointer'>
          <Link to='/'>
            <svg
              class='pre-logo-svg'
              height='60px'
              width='60px'
              fill='#111'
              viewBox='0 0 69 32'
            >
              <path d='M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z'></path>
            </svg>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <input type='checkbox' id='check' />
          <label htmlFor='check' className='checkbtn'>
            <i className='fa-solid fa-bars'></i>
          </label>

          <ul>
            <input type='checkbox' id='check' />
            <label htmlFor='check' className='checkbtn'>
              <i className='fa-solid fa-x close hidden'></i>
            </label>
            <Link to='/men'>
              <li>
                Men
                <div className='yeni-cikanlar hidden'>
                  <div className='grid grid-cols-5 gap-4'>
                    {/* <Menu options={newProducts} /> */}
                  </div>
                </div>
              </li>
            </Link>
            <Link to='/men'>
              <li>
                Women
                <div className='yeni-cikanlar hidden'>
                  <div className='grid grid-cols-5 gap-4'>
                    {/* <Menu options={newProducts} /> */}
                  </div>
                </div>
              </li>
            </Link>
            <Link to='/men'>
              <li>
                Kids
                <div className='yeni-cikanlar hidden'>
                  <div className='grid grid-cols-5 gap-4'>
                    {/* <Menu options={newProducts} /> */}
                  </div>
                </div>
              </li>
            </Link>
            <Link to='/men'>
              <li>
                Customise
                <div className='yeni-cikanlar hidden'>
                  <div className='grid grid-cols-5 gap-4'>
                    {/* <Menu options={newProducts} /> */}
                  </div>
                </div>
              </li>
            </Link>
            <Link to='/men'>
              <li>
                Sales
                <div className='yeni-cikanlar hidden'>
                  <div className='grid grid-cols-5 gap-4'>
                    {/* <Menu options={newProducts} /> */}
                  </div>
                </div>
              </li>
            </Link>
          </ul>
          <div className='absolute right-28 lg:block'>
            <i className='fa-solid fa-magnifying-glass absolute top-1.5 left-2 opacity-50 text-lg'></i>
            <input
              placeholder='Search'
              className='bg-[#f0efef] p-2 rounded-full w-40 pl-8 hover:bg-[#ebe9e9]'
              type='text'
            />
          </div>
        </div>
        <div className='mr-5 items-center flex'>
          <div className='button-right'>
            <Link to='/favorites'>
              <svg
                className=''
                width='24px'
                height='24px'
                fill='#111'
                viewBox='0 0 24 24'
              >
                <path d='M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z'></path>
              </svg>
            </Link>
          </div>
          <Link to='/cart'>
            <div className='button-right relative'>
              <svg width='24px' height='24px' fill='#111' viewBox='0 0 24 24'>
                <path d='M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z'></path>
                <path d='M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z'></path>
              </svg>
              <div
                className={`absolute top-4 right-3 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
              >
                {total_items}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
