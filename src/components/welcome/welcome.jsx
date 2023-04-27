import { useOutletContext } from 'react-router-dom';
import './welcome.css';
import Posts from '../posts/posts';
import WelcomeScreenCover from './welcomeComponents/welcomeScreenCover';
import { useEffect } from 'react';

const Welcome = () => {
  const { myProfile } = useOutletContext();

  useEffect(() => {
    console.log(myProfile);
  }, []);

  return (
    <div>
      {!myProfile._id && <WelcomeScreenCover />}
      <Posts />
    </div>
  );
};

export default Welcome;
