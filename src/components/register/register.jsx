import { useOutletContext } from 'react-router-dom';
import './register.css';
import { useState } from 'react';

const Register = () => {
  const { username } = useOutletContext();
  const { setUsername } = useOutletContext();
  const { password } = useOutletContext();
  const { setPassword } = useOutletContext();
  const { confirmPassword } = useOutletContext();
  const { setConfirmPassword } = useOutletContext();
  const [formError, setFormError] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    console.log(username + password + confirmPassword);
  }

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
        <button type="submit">Creat Your Account!</button>
        <div>{formError}</div>
      </form>
    </div>
  );
};

export default Register;
