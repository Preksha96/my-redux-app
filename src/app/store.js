import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
  },
});

export default store;
