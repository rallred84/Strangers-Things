import { useOutletContext } from 'react-router-dom';
import './register.css';
import { useEffect, useState } from 'react';
import { registerUser } from '../../api';

const Register = () => {
  const { username } = useOutletContext();
  const { setUsername } = useOutletContext();
  const { password } = useOutletContext();
  const { setPassword } = useOutletContext();
  const { confirmPassword } = useOutletContext();
  const { setConfirmPassword } = useOutletContext();
  const [formError, setFormError] = useState('');
  const { token } = useOutletContext();
  const { setToken } = useOutletContext();

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
  }

  useEffect(() => {
    //Resets username and password values every time the page is loaded (This prevents values from the login page from auto filling the values of the register page)
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    console.log(token);
  }, [token]);

  return (
    <div>
      <h2>Register Your Account to Get Started</h2>
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
    </div>
  );
};

export default Register;
