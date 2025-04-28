// src/features/products/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { products as productsData } from "../products/ProductData";

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  filters: {
    type: [],
    size: [],
    color: [],
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { filterType, value } = action.payload;
      if (state.filters[filterType].includes(value)) {
        state.filters[filterType] = state.filters[filterType].filter(
          (ele) => ele !== value
        );
        console.log(state.filters);
      } else {
        state.filters[filterType].push(value);
      }
      state.filteredProducts = state.allProducts.filter((product) => {
        const typeMatch =
          state.filters.type.length === 0 ||
          state.filters.type.includes(product.type);
        const sizeMatch =
          state.filters.size.length === 0 ||
          state.filters.size.includes(product.size);
        const colorMatch =
          state.filters.color.length === 0 ||
          state.filters.color.includes(product.color);
        return sizeMatch && typeMatch && colorMatch;
      });
    },
    clearFilters: (state) => {
      state.filters = { filterType: [], color: [], size: [] };
      state.filteredProducts = state.allProducts;
    },
  },
});
export const { setFilter, clearFilters } = productsSlice.actions;

export default productsSlice.reducer;
