import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchMyProfile, fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myProfile, setMyProfile] = useState({});

  useEffect(() => {
    Promise.resolve(fetchPosts()).then((values) => {
      setAllPosts(values.data.posts);
      setDisplayedPosts(values.data.posts);
    });
    if (Boolean(localStorage.getItem('token'))) {
      setIsLoggedIn(true);
      setToken(localStorage.getItem('token'));
    } else setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    if (token !== '') {
      Promise.resolve(fetchMyProfile(token)).then((values) => {
        setMyProfile(values);
      });
    }
  }, [token]);

  return (
    <div id="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setToken={setToken}
      />
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
              myProfile,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
