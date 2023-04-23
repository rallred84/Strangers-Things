import { Link, useOutletContext } from 'react-router-dom';
import './login.css';
import { useEffect, useState } from 'react';
import { loginUser } from '../../api';
import LoginForm from './loginComponents/loginForm';

const Login = () => {
  return (
    <div id="login-screen">
      <h2>Welcome back!</h2>
      <p>Please enter your username and password</p>
      <LoginForm />
      <p>
        Don't have a login?{' '}
        <Link className="form-link" to="/register">
          Register now!
        </Link>
      </p>
    </div>
  );
};

export default Login;
