import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Welcome from './components/welcome/welcome';
import Posts from './components/posts/posts';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
