import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';
import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Auth0Provider
      domain='dev-he76tobue6thzyrt.uk.auth0.com'
      clientId='eRUt4sNWnT6fTYCyCPR5K7CAu1Iof9v1'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    > */}
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <FilterProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </FilterProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
    {/* </Auth0Provider> */}
  </BrowserRouter>
);
