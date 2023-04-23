import { useOutletContext } from 'react-router-dom';
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
    </div>
  );
};

export default Login;
