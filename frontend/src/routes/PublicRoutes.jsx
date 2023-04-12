import { lazy } from 'react';

import Layout from '@/layout';

// project imports

const Login = lazy(() => import('@/pages/auth/Login'));
const Reg = lazy(() => import('@/pages/auth/Register'));

// ==============================|| AUTH ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Reg />,
    },
  ],
};

export default PublicRoutes;
