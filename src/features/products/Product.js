import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const Product = ({ product }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="product">
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 10 }}>
          <span>{product.title} - ${product.price}</span>
          <img  alt="laptop" url={product.image}/>
          <button onClick={() => dispatch(addToCart(product))} style={{ marginLeft: 10 }}>
            Add to Cart
          </button>
        </div>
      ))}</div>
  );

}

export default Product