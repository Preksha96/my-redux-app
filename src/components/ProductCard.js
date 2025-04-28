// src/components/ProductCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const defaultImage = "https://via.placeholder.com/300x300?text=No+Image";

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{product.name}</h2>
      <img
        alt={product.title}
        src={product.image || defaultImage}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: 5,
        }}
      />
      <p>Type: {product.type}</p>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        style={{ marginTop: 10 }}
      >
        Add to Cart
      </button>
    </div>
  );
}
