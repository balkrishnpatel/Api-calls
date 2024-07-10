// src/components/FetchImage.js
import React, { useState, useEffect } from 'react';

const FetchImage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter'
    //'https://dummyjson.com/image/400x200/282828'
    fetch('https://dummyjson.com/products')
      .then(response => response.blob()) // Convert response to blob
      .then(blob => {
        const url = URL.createObjectURL(blob); // Create an object URL
        setImageSrc(url); // Set the object URL as the image source
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Fetched Image</h1>
      {error && <p>Error: {error.message}</p>}
      {imageSrc ? (
        <img src={imageSrc} alt="Fetched" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchImage;
