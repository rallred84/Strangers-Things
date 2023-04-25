import { Link } from 'react-router-dom';

const LoginLogoutLink = ({
  isLoggedIn,
  setIsLoggedIn,
  setToken,
  setMyProfile,
}) => {
  //prettier-ignore
  return (isLoggedIn)
   ? (
    <Link
      to="/"
      onClick={() => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        setToken('');
        setMyProfile({})
      }}>Logout</Link>)
   : (
    <Link to={'/login'}>Login/Register</Link>
  );
};

export default LoginLogoutLink;
