import React from 'react';
import Product from '../features/products/Product';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Product />
      
    </div>
  )
};

export default Home;
// This component serves as the main page of the application, rendering the ProductList component.