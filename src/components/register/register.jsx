import { useNavigate, useOutletContext } from 'react-router-dom';
import './register.css';
import { useEffect, useState } from 'react';
import { registerUser } from '../../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');
  const { token, setToken } = useOutletContext('');

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    const result = await registerUser(username, password);

    if (!result.success) {
      setFormError(result.error.message);
      return;
    }

    console.log(result);

    setToken(result.data.token);
    localStorage.setItem('token', token);
    navigate('/');
  }

  return (
    <>
      <h2 id="registration-title">Register Your Account to Get Started</h2>
      <form className="register-form" action="" onSubmit={handleRegister}>
        <input
          value={username}
          type="text"
          placeholder="Set Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Set Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Create Your Account!</button>
        <div>{formError}</div>
      </form>
    </>
  );
};

export default Register;
