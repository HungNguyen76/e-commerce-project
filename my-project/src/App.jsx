import { Routes, Route } from 'react-router-dom';
import { popularsales, toprateslaes } from './data/data.js';
import { Navbar, ItemDetail } from './components';
import { AuthWrapper, Home, Cart, Products } from './pages';
import ManProducts from './views/app-views/ManProducts/index.jsx';
import { cardData } from './data/cardData';


const App = () => {
  return (
    <AuthWrapper>
      <main className='flex flex-col relative'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/products/:Id'
            element={<ItemDetail endpoint={cardData} ifExists />}
          />
          <Route exact path='/cart' element={<Cart />} />
          <Route
            exact
            path='/products'
            element={<Products endpoint={toprateslaes} ifExists />}
          />
          <Route
            exact
            path='/men'
            element={<ManProducts endpoint={cardData} />}
          />
        </Routes>
      </main>
    </AuthWrapper>
  );
};

export default App;
