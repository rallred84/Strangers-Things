import { Link } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';
import ViewListingsLink from './navbarComponents/viewListingsLink';
import ProfileLink from './navbarComponents/profileLink';
import LoginLogoutLink from './navbarComponents/loginLogoutLink';
import CreatePostLink from './navbarComponents/createPostLink';

const Navbar = ({ isLoggedIn, setIsLoggedIn, setToken }) => {
  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
        <h4>Find SCARY good deals in your neighborhood!</h4>
      </div>
      <div id="links">
        <ViewListingsLink />
        <CreatePostLink isLoggedIn={isLoggedIn} />
        <ProfileLink isLoggedIn={isLoggedIn} />
        <LoginLogoutLink
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
        />
      </div>
    </div>
  );
};

export default Navbar;
