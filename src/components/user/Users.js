// src/components/Users.js
import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        if (data.users) {
          setUsers(data.users); // Ensure the users array exists in the response
        } else {
          setError(new Error('Users data is not available'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.firstName} {user.lastName}</h2>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Gender: {user.gender}</p>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
