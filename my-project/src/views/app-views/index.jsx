import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, ItemDetail } from '@/components';
import { cardData } from '@/data/cardData';
import { toprateslaes } from '@/data/data'

const Home = React.lazy(() => import('./Home'));
const ManProducts = React.lazy(() => import('./ManProducts'));
const ProductsPage = React.lazy(() => import('../../pages/ProductsPage'));
const Cart = React.lazy(() => import('./Cart'));
const LoginForm = React.lazy(() => import('./LoginForm'));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<ManProducts endpoint={cardData} />} />
        <Route
          path='/men/:Id/:idColor'
          element={<ItemDetail endpoint={cardData} />}
        />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/products'
          element={<ProductsPage endpoint={toprateslaes} ifExists />}
        />
        <Route
          path='/login'
          element={<LoginForm />}
        />
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
