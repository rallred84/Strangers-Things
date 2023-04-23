import { Link, useOutletContext } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
        <h4>Find SCARY good deals in your neighborhood!</h4>
      </div>
      <div id="links">
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/profile'}>Profile</Link>
        {isLoggedIn ? (
          <Link
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem('token');
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to={'/login'}>Login/Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
