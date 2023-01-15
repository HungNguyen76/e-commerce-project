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
import { useUserContext } from '../context/user_context.jsx';

const Navbar = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY < 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  return (
    <>
      {/* <header
        className={
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50 '
            : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      > */}
      <header
        className={
          'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      >
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt='logo/img'
              className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
            />
          </div>
          <ul className='flex items-center justify-center gap-2 '>
            <li className='grid items-center'>
              <AiOutlineSearch
                className={`icon-style ${
                  navState && 'text-slate-900 transition-all duration-300'
                } `}
              />
            </li>
            {myUser ? (
              <li className='grid items-center'>
                <AiOutlineUserDelete
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
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
                    navState && 'text-slate-900 transition-all duration-300'
                  } `}
                  onClick={loginWithRedirect}
                />
              </li>
            )}
            <li className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
              <button type='button' className=''>
                <HiOutlineShoppingBag
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  } `}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900 shadow-slate-100'
                  } `}
                >
                  0
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
