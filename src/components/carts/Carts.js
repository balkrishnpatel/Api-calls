// src/components/Carts.js
import React, { useState, useEffect } from 'react';

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(data => {
        if (data.carts) {
          setCarts(data.carts); // Ensure the carts array exists in the response
        } else {
          setError(new Error('Carts data is not available'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching carts:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cart Data</h1>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {carts.map(cart => (
            <li key={cart.id}>
              <h2>Cart ID: {cart.id}</h2>
              <p>User ID: {cart.userId}</p>
              <p>Total Products: {cart.totalProducts}</p>
              <p>Total Quantity: {cart.totalQuantity}</p>
              <p>Total Price: ${cart.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carts;
