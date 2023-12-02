import React from 'react';
import ProductCard from './ProductCard';
import productsData from './products.json';

const ProductList = () => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
