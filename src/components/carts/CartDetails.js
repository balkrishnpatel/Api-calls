// src/components/CartDetails.js
import React, { useState, useEffect } from 'react';

const CartDetails = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/1')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCart(data); // Ensure the cart data is available in the response
        } else {
          setError(new Error('Cart data is not available'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cart Details</h1>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        cart && (
          <div>
            <h2>Cart ID: {cart.id}</h2>
            <p>User ID: {cart.userId}</p>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p>Total Price: ${cart.total}</p>
            <h3>Products:</h3>
            <ul>
              {cart.products.map(product => (
                <li key={product.id}>
                  <h4>{product.title}</h4>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                  <p>Total: ${product.total}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default CartDetails;
