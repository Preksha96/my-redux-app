import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
    const cartItems = useSelector((state) => state.cart);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
    return (
      <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', background: '#eee' }}>
        <div><Link to="/">🛍️ Shop</Link></div>
        <div>
          <Link to="/cart">🛒 Cart ({totalItems})</Link>
        </div>
      </nav>
    );
}

export default Header
