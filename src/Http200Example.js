// src/components/Http200Example.js
import React, { useEffect } from 'react';

const Http200Example = () => {
  useEffect(() => {
    fetch('https://dummyjson.com/http/200')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>HTTP 200 Example</h1>
    </div>
  );
};

export default Http200Example;
