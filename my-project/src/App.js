import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Auth from './Auth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
