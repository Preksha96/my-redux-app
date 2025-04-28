// src/components/Filters.js

import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilters } from "../features/products/productSlice";

const types = ["Shirt", "Pants", "Jacket", "Electronics", "Accessories"];
const sizes = ["S", "M", "L"];
const colors = ["Red", "Blue", "Green", "Yellow"];

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products.filters);

  const handleCheckboxChange = (filterType, value) => {
    console.log(filterType, value, "ssmsk");
    dispatch(setFilter({ filterType, value }));
  };
  const handleClearFilters = () => {
    dispatch(clearFilters()); // 🛠️ NO parameters needed
  };

  return (
    <div className="p-4">
      <h3 className="font-bold">Filter by Type</h3>
      {types.map((type) => (
        <div key={type}>
          <input
            type="checkbox"
            checked={filters?.type?.includes(type) || false}
            onChange={() => handleCheckboxChange("type", type)}
          />
          <label>{type}</label>
        </div>
      ))}

      <h3 className="font-bold mt-4">Filter by Size</h3>
      {sizes.map((size) => (
        <div key={size}>
          <input
            type="checkbox"
            checked={filters?.size?.includes(size) || false}
            onChange={() => handleCheckboxChange("size", size)}
          />
          <label>{size}</label>
        </div>
      ))}

      <h3 className="font-bold mt-4">Filter by Color</h3>
      {colors.map((color) => (
        <div key={color}>
          <input
            type="checkbox"
            checked={filters?.color?.includes(color) || false}
            onChange={() => handleCheckboxChange("color", color)}
          />
          <label>{color}</label>
        </div>
      ))}

      <button
        className="mt-4 bg-red-400 text-white px-3 py-1 rounded"
        onClick={handleClearFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
}
