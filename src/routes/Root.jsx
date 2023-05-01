import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { fetchMyProfile, fetchPosts } from '../api';
import { useEffect, useState } from 'react';

const Root = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [token, setToken] = useState('');
  const [myProfile, setMyProfile] = useState({});
  const [registerComponent, setRegisterComponent] = useState(false);

  useEffect(() => {
    //If Token exists in local storage, set it to state
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
    //If there is a token value, fetch user profile and save to state
    if (token !== '') {
      (async () => {
        const profileValues = await fetchMyProfile(token);
        setMyProfile(profileValues);
      })();
    }
  }, [token]);

  useEffect(() => {
    //Fetch Posts
    (async () => {
      const postValues =
        token === ''
          ? await fetchPosts(myProfile)
          : await fetchPosts(myProfile, token);

      setAllPosts(postValues.data.posts);
      setDisplayedPosts(postValues.data.posts);
    })();
  }, [myProfile]);

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
              registerComponent,
              setRegisterComponent,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
