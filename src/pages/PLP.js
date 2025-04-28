// src/pages/PLP.js

import { useSelector } from "react-redux";
import Filters from "../components/Filter";
import ProductCard from "../components/ProductCard";

export default function PLP() {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <div className="flex">
      <div className="w-1/4 border-r">
        <Filters />
      </div>

      <div className="w-3/4 p-4 grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
