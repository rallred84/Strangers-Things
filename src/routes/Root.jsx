import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [posts, setPosts] = useState([]);
  const test = 3;

  useEffect(() => {
    Promise.resolve(fetchPosts()).then((values) => {
      setPosts(values.data.posts);
    });
  }, []);

  return (
    <div id="app">
      <Navbar />
      <div id="main">
        <div id="content">
          <Outlet context={{ test, posts }} />
        </div>
      </div>
    </div>
  );
};

export default Root;
