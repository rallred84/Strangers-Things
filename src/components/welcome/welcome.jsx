import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Stranger's Things</h1>
      <p>First time here?</p>
      <Link to={'/register'}>
        <h3>Register Now!</h3>
      </Link>
      <p>Returning Visitor?</p>
      <Link to={'/login'}>
        <h3>Log In</h3>
      </Link>
    </div>
  );
};

export default Welcome;
