import { Link } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';

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
        <Link to={'/posts'} onClick={() => setDisplayedPosts(allPosts)}>
          View Listings
        </Link>
        {isLoggedIn && <Link to={'/profile'}>Profile</Link>}
        {isLoggedIn ? (
          <Link
            to="/"
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem('token');
              setToken('');
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
