import { Routes, Route } from 'react-router-dom';
import { popularsales } from './data/data.js';
import { Navbar, ItemDetail } from './components';
import { AuthWrapper, Home } from './pages';

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
        </Routes>
      </main>
    </AuthWrapper>
  );
};

export default App;
