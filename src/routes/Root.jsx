import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Promise.resolve(fetchPosts()).then((values) => {
      setAllPosts(values.data.posts);
      setDisplayedPosts(values.data.posts);
    });
    if (Boolean(localStorage.getItem('token'))) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, []);

  return (
    <div id="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div id="main">
        <div id="content">
          <Outlet
            context={{
              allPosts,
              setAllPosts,
              displayedPosts,
              setDisplayedPosts,
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
