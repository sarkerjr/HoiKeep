import { lazy } from 'react';

// project imports
import PublicGuard from './guards/PublicGuard';
import Logout from '@/pages/auth/logout';
const Login = lazy(() => import('@/pages/auth/login'));

const PublicRoutes = {
  path: '/',
  element: <PublicGuard />,
  children: [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
  ],
};

export default PublicRoutes;
