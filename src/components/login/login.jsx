import { useOutletContext } from 'react-router-dom';
import './login.css';
import { useEffect, useState } from 'react';
import { loginUser } from '../../api';

const Login = () => {
  const { username, setUsername, password, setPassword } = useOutletContext();
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    //Resets username and password values every time the page is loaded (This prevents values from the register page from auto filling the values of the login page)
    setUsername('');
    setPassword('');
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    console.log(username + password);

    const result = await loginUser(username, password);

    if (!result.success) {
      setLoginError(result.error.message);
      return;
    }
    localStorage.setItem('token', result.data.token);
  }

  return (
    <div id="login-screen">
      <h2>Welcome back!</h2>
      <p>Please enter your username and password</p>
      <form id="login-form" onSubmit={handleLogin}>
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div>{loginError}</div>
      </form>
    </div>
  );
};

export default Login;
