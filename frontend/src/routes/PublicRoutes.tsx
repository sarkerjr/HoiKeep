import { lazy } from 'react';

// project imports
import Layout from '@/layout';
const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/Register'));

const PublicRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ],
};

export default PublicRoutes;
