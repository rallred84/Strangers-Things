import { Link } from 'react-router-dom';
import logo from '../../assets/Strangers-Things-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo">
        <img src={logo} />
        <h4>Find SCARY good deals in your neighborhood!</h4>
      </div>
      <div id="links">
        <Link to={'/'}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
