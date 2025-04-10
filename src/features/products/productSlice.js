// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, title: 'Laptop', price: 700 ,image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'},
    { id: 2, title: 'Phone', price: 300 ,image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'},
    { id: 3, title: "Headphones",  price: 89,image: "https://images.unsplash.com/photo-1580894908360-974f148a160f?auto=format&fit=crop&w=800&q=80" },  
    { id: 4, title: 'Smartwatch', price: 100 ,image:'https://images.unsplash.com/photo-1600180758890-6b94519c5a3a'},
    { id: 5, title: 'Shoes', price: 100 ,image:'https://images.unsplash.com/photo-1585386959984-a4155228d7da'},
    { id: 6, title: 'Backpack', price: 100 ,image:'https://images.unsplash.com/photo-1586864387774-59a3f2e4e17c'},
    { id: 7,  title: "Sunglasses",  price: 129,  image: "https://unsplash.com/photos/black-dslr-camera-N10auyEVst8"},
     { id: 8, title: "Camera",price: 599,  image: 'https://images.unsplash.com/photos/black-canon-eos-rebel-series-dslr-camera-W2Dta_Yiwfw'} ],
  reducers: {},
});

export default productsSlice.reducer;
