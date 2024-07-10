// src/components/ProductSearch.js
import React, { useState, useEffect } from 'react';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          setProducts(data.products); // Ensure the products array exists in the response
        } else {
          setError(new Error('Products data is not available'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Product Search Results</h1>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default ProductSearch;
