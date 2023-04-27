import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchMyProfile, fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [token, setToken] = useState('');
  const [myProfile, setMyProfile] = useState({});

  useEffect(() => {
    Promise.resolve(fetchPosts()).then((values) => {
      setAllPosts(values.data.posts);
      setDisplayedPosts(values.data.posts);
    });
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
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
        myProfile={myProfile}
        setToken={setToken}
        setDisplayedPosts={setDisplayedPosts}
        allPosts={allPosts}
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
              myProfile,
              setMyProfile,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
