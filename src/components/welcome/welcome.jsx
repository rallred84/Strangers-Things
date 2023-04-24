import { useOutletContext } from 'react-router-dom';
import './welcome.css';
import Posts from '../posts/posts';
import WelcomeScreenCover from './welcomeComponents/welcomeScreenCover';

const Welcome = () => {
  const { isLoggedIn } = useOutletContext();

  return (
    <div>
      {!isLoggedIn && <WelcomeScreenCover />}
      <Posts />
    </div>
  );
};

export default Welcome;
