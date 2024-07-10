// src/components/Posts.js
import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}&select=title,reactions,userId`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setTotal(data.total);
        setSkip(data.skip);
        setLimit(data.limit);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError(error);
        setLoading(false);
      });
  }, [limit, skip]); // Dependency array ensures useEffect runs when limit or skip changes

  return (
    <div>
      <h1>Posts</h1>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <p>Total posts: {total}</p>
      <p>Showing posts {skip + 1} to {skip + posts.length}</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>User ID: {post.userId}</p>
              <p>Reactions: {JSON.stringify(post.reactions)}</p>
            </li>
          ))}
        </ul>
      )}
      {/* Pagination controls */}
      <button onClick={() => setSkip(prevSkip => Math.max(0, prevSkip - limit))} disabled={skip === 0}>
        Previous Page
      </button>
      <button onClick={() => setSkip(prevSkip => prevSkip + limit)} disabled={skip + limit >= total}>
        Next Page
      </button>
    </div>
  );
};

export default Posts;
