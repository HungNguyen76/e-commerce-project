import { Routes, Route } from 'react-router-dom';
import { popularsales } from './data/data.js';
import { Navbar, ItemDetail } from './components';
import { AuthWrapper, Home , Cart} from './pages';

const App = () => {
  return (
    <AuthWrapper>
      <main className='flex flex-col gap-16 relative'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/products/:id'
            element={<ItemDetail endpoint={popularsales} ifExists />}
          />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </AuthWrapper>
  );
};

export default App;
