import React from "react";

import useFetch from "../hooks/useFetch";
import Product from "../Product/Product";

const ProductsList = () => {
  const { products } = useFetch();

  const handleAdd = () => {};
  return (
    <div className="cards-container">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  );
};

export default ProductsList;
