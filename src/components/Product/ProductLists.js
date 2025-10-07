import React from "react";
import ProductItem from "./ProductItem";

const ProductLists = ({ products }) => {
  return (
    <div className="col-lg-9">
      <div className="row mb-4">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
