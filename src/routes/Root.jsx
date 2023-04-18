import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

const Root = () => {
  return (
    <div id="app">
      <Navbar />
      <div id="main">
        <div id="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
