// src/components/Products.js
import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(data => {
        setProducts(data); // Assuming the API response has a 'products' array
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {error && <p>Error: {error.message}</p>}
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} width="100" />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
