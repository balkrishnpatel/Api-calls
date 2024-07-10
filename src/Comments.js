// src/components/Comments.js
import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then(data => {
        setComments(data); // Assuming data is an array of comments
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map(comment => (
              <li key={comment.id}>
                <p>{comment.body}</p>
                <p>User ID: {comment.userId}</p>
                <p>Post ID: {comment.postId}</p>
              </li>
            ))
          ) : (
            <p>No comments found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;
