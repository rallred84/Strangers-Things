import { Link, useOutletContext } from 'react-router-dom';
import './welcome.css';
import { useEffect, useState } from 'react';
import Posts from '../posts/posts';
import LoginForm from '../login/loginComponents/loginForm';
import WelcomeScreenCover from './welcomeComponents/welcomeScreenCover';

const Welcome = () => {
  const { isLoggedIn } = useOutletContext();
  console.log(isLoggedIn);

  return (
    <div>
      {!isLoggedIn && <WelcomeScreenCover />}
      <Posts />
    </div>
  );
};

export default Welcome;
