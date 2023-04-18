import { useOutletContext } from 'react-router-dom';

const Login = () => {
  const { test } = useOutletContext();
  return <div>{test}</div>;
};

export default Login;
