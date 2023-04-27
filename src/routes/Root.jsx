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
    (async () => {
      const postValues = await fetchPosts();
      setAllPosts(postValues.data.posts);
      setDisplayedPosts(postValues.data.posts);
    })();

    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    if (token !== '') {
      (async () => {
        const profileValues = await fetchMyProfile(token);
        setMyProfile(profileValues);
      })();
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
