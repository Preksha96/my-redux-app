// src/features/cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from './cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <span>
            {item.title} x {item.quantity} = ${item.price * item.quantity}
          </span>
          <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 10 }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
