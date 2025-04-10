// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, title: 'Laptop', price: 700 ,image:"https://www.istockphoto.com/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-gm1389603578-446846126"},
    { id: 2, title: 'Phone', price: 300 },
    { id: 3, title: 'Headphones', price: 100 },
  ],
  reducers: {},
});

export default productsSlice.reducer;
