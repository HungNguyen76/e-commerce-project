import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthWrapper, Home, Cart, Products } from '@/pages';
import { Navbar, ItemDetail } from '@/components';
import { popularsales, toprateslaes } from '@/data/data';
import { cardData } from '@/data/cardData';

const Home = React.lazy(() => import('./Home'));
const ManProducts = React.lazy(() => import('./ManProducts'));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<ManProducts endpoint={cardData} />} />
        <Route path='/men/:Id' element={<ItemDetail endpoint={cardData} />} />
        {/* <Route path='/products/:id' element={<ItemDetail endpoint={popularsales} ifExists />} /> */}
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
