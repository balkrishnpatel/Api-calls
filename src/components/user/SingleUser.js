// src/components/User.js
import React, { useState, useEffect } from 'react';

const SingleUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users/10')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Gender: {user.gender}</p>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="100" />
          </div>
        )
      )}
    </div>
  );
};

export default SingleUser;
