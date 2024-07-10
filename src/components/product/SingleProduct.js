// src/components/Product.js
import React, { useState, useEffect } from 'react';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/12')
      .then(res => res.json())
      .then(data => {
        setProduct(data); // Assuming the API response is the product object
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {error && <p>Error: {error.message}</p>}
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.thumbnail} alt={product.title} width="150" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
