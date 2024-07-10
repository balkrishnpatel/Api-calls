// src/components/Todos.js
import React, { useEffect } from 'react';

const Todos = () => {
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {/* You can add UI elements or components to render todos here if needed */}
    </div>
  );
};

export default Todos;
