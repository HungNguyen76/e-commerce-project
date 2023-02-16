import React from 'react';
import FooterNav from './components/FooterNav';
import GridIcons from './components/GridIcons';
import Privacy from './components/Privacy';
import { gridAbout, gridApp, gridTitle, gridHelp, gridIcons } from '@/data/data';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='bg-black mt-16 h-full justify-center flex'>
      <div className='container'>
        <div className='grid grid-cols-5 md:grid-cols-5 ml-10'>
          <FooterNav
            gridTitle={gridTitle}
            gridAbout={gridAbout}
            gridHelp={gridHelp}
            gridApp={gridApp}
          />
          <div className='col-span'>
            <span className='text-white'>
              <GridIcons options={gridIcons} />
            </span>
          </div>
        </div>
        <Privacy />
      </div>
    </div>
  );
};

export default Footer;
