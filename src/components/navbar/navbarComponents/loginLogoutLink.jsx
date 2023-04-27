import { Link } from 'react-router-dom';

const LoginLogoutLink = ({ setToken, myProfile, setMyProfile }) => {
  return myProfile._id ? (
    <Link
      to={'/'}
      onClick={() => {
        localStorage.removeItem('token');
        setMyProfile({});
        setToken('');
      }}
    >
      Logout
    </Link>
  ) : (
    <Link to={'/register'}>Login/Register</Link>
  );
};

export default LoginLogoutLink;
