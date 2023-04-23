import { Link } from 'react-router-dom';
import LoginForm from '../../login/loginComponents/loginForm';

const WelcomeScreenCover = () => {
  return (
    <div id="welcome-screen-cover">
      <div id="welcome-box">
        <h2>Welcome to Stranger's Things!</h2>
        <p>
          Stranger's Things is an online community marketplace where you can
          find great deals on new and used goods, or you can list your own for
          sale!
        </p>
        <p>Login now and find your next great deal!</p>
        <h3>Log In:</h3>
        <LoginForm />
        <h3>Not a Member yet?</h3>
        <p>
          <Link to="/posts">Browse as a guest </Link>or{' '}
          <Link to="/register">register today</Link> to enjoy full access to all
          of your Stranger's Things!
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreenCover;
