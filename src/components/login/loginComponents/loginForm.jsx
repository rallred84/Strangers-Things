import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { fetchMyProfile, loginUser } from '../../../api';

const LoginForm = () => {
  const { setMyProfile, setToken } = useOutletContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const result = await loginUser(username, password);

    if (!result.success) {
      setLoginError(result.error.message);
      return;
    }
    localStorage.setItem('token', result.data.token);
    setToken(result.data.token);
    async () => {
      const result = await fetchMyProfile(token);
      setMyProfile(result);
      console.log('myProfile');
    };
    navigate('/posts');
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
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
  );
};

export default LoginForm;
