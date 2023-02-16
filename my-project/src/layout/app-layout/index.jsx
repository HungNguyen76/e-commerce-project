import React from 'react';
import AppViews from '@/views/app-views';
import TopHeader from '@/views/app-views/Home/components/TopHeader';
// import Navbar from '../../views/app-views/Navbar';
import Navbar from '@/components/Navbar';
import Footer from '@/views/app-views/Footer';

const AppLayout = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className='mx-10 min-h-[45vh]'>
        <AppViews />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
