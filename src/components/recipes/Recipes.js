// src/components/Recipes.js
import React, { useState, useEffect } from 'react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/1')
      .then(res => res.json())
      .then(data => {
        if (data.recipes) {
          setRecipes(data.recipes); // Ensure the recipes array exists in the response
        } else {
          setError(new Error('Recipes data is not available'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <img src={recipe.image} alt={recipe.title} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recipes;
