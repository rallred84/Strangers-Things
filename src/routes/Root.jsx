import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Promise.resolve(fetchPosts()).then((values) => {
      setPosts(values.data.posts);
    });
    if (Boolean(localStorage.getItem('token'))) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, []);

  return (
    <div id="app">
      <Navbar isLoggedIn={isLoggedIn} />
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
              token,
              setToken,
              isLoggedIn,
              setIsLoggedIn,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
