import { Link } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';
import ViewListingsLink from './navbarComponents/viewListingsLink';
import ProfileLink from './navbarComponents/profileLink';
import LoginLogoutLink from './navbarComponents/loginLogoutLink';
import CreatePostLink from './navbarComponents/createPostLink';

const Navbar = ({ myProfile, setToken, setDisplayedPosts, allPosts }) => {
  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
        <h4>Find SCARY good deals in your neighborhood!</h4>
      </div>
      <div id="links">
        <ViewListingsLink
          setDisplayedPosts={setDisplayedPosts}
          allPosts={allPosts}
        />
        <CreatePostLink myProfile={myProfile} />
        <ProfileLink myProfile={myProfile} />
        <LoginLogoutLink myProfile={myProfile} setToken={setToken} />
      </div>
      {myProfile._id && (
        <div id="username-message">Logged in as {myProfile.username}</div>
      )}
    </div>
  );
};

export default Navbar;
