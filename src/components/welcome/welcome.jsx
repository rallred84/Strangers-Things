import { useOutletContext } from 'react-router-dom';
import './welcome.css';
import Posts from '../posts/posts';
import WelcomeScreenCover from './welcomeComponents/welcomeScreenCover';
import { useEffect } from 'react';

const Welcome = () => {
  const { myProfile, setRegisterComponent } = useOutletContext();

  return (
    <>
      {!myProfile._id && (
        <WelcomeScreenCover setRegisterComponent={setRegisterComponent} />
      )}
      <Posts />
    </>
  );
};

export default Welcome;
