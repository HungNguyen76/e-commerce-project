import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, ItemDetail } from '@/components';
import { cardData } from '@/data/cardData';
import {Cart} from '@/pages'

const Home = React.lazy(() => import('./Home'));
const ManProducts = React.lazy(() => import('./ManProducts'));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<ManProducts endpoint={cardData} />} />
        <Route path='/men/:Id/:idColor' element={<ItemDetail endpoint={cardData} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
