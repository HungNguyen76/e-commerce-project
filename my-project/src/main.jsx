import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';
import { ProductsProvider } from './context/products_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain='dev-he76tobue6thzyrt.uk.auth0.com'
      clientId='QCMqn3sowvd9ifrpMHGfsH5n11X0ABs2'
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </BrowserRouter>
);
