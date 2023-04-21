import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          <Outlet
            context={{
              posts,
              username,
              setUsername,
              password,
              setPassword,
              confirmPassword,
              setConfirmPassword,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
