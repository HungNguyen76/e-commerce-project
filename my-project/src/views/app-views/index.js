import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthWrapper,  Home, Cart, Products } from '../../pages';
import { Navbar, ItemDetail } from '../../components';
import { popularsales, toprateslaes } from '../../data/data';

const Home = React.lazy(() => import('./Home'));
const ManProducts = React.lazy(() => import('./ManProducts'));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<ManProducts />} />
        <Route path='/products/:id' element={<ItemDetail endpoint={popularsales} ifExists />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
