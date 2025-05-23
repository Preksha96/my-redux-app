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
        <div key={item.id} style={{ marginBottom: 10 ,display: 'flex', alignItems: 'center'}}>
<div style={{ marginRight: 10 ,border:'1px solid black', borderRadius: 5, padding: 5 }}>
<img src={item.image} width="200px" height="200px"/>

  </div>
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
