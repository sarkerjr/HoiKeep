import { lazy } from 'react';

// project imports

const Login = lazy(() => import('@/pages/auth/Login'));

// ==============================|| AUTH ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ],
};

export default PublicRoutes;
