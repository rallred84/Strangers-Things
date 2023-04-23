import { Link, useOutletContext } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <div id="navbar">
      <div id="logo">
        <img src={logo} />
        <h4>Find SCARY good deals in your neighborhood!</h4>
      </div>
      <div id="links">
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/profile'}>Profile</Link>
        {isLoggedIn ? (
          <Link to={'/login'}>Logout</Link>
        ) : (
          <Link to={'/login'}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
