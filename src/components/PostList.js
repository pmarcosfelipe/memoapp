import React, { useEffect, useState } from 'react';

import PostItem from './PostItem';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPosts] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(data => {
        setPosts(data);
      });
    });
  }, []);

  return (
    <>
      <input
        onChange={e => setNewPosts(e.target.value)}
        value={newPost}
      ></input>
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
      </ul>
    </>
  );
}
