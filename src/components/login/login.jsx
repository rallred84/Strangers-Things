import { Link, useOutletContext } from 'react-router-dom';
import './login.css';
import LoginForm from './loginComponents/loginForm';
import Register from '../register/register';
import { useState } from 'react';

const Login = () => {
  const { myProfile, registerComponent, setRegisterComponent } =
    useOutletContext();
  return (
    <div id="login-screen">
      <div id="login-content">
        {!myProfile._id ? (
          <>
            <h2>Login Now to Find Great Deals!</h2>
            <p>Please enter your username and password</p>
            <LoginForm />
            {!registerComponent && (
              <p>
                Don't have a login?{' '}
                <Link
                  className="form-link"
                  onClick={() => setRegisterComponent(true)}
                >
                  Register now!
                </Link>
              </p>
            )}
            {registerComponent && <Register />}
          </>
        ) : (
          <h1>You are already Logged In</h1>
        )}
      </div>
    </div>
  );
};

export default Login;
