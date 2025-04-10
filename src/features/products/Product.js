import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const Product = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div
    className="product-list"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "20px",
    }}
  >
    {products.map((product) => (
      <div
        key={product.id}
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 10,
          textAlign: "center",
        }}
      >
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <img
          alt={product.title}
          src={product.image}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: 5 }}
        />
        <button
          onClick={() => dispatch(addToCart(product))}
          style={{ marginTop: 10 }}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
  
  );
};

export default Product;
