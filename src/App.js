import React from 'react';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
