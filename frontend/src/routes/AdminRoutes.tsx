import { lazy } from 'react';
import Loadable from '@/components/Loadable';

// project imports
import Layout from '@/layout';
const Department = Loadable(lazy(() => import('@/pages/admin/department')));
const Authority = Loadable(lazy(() => import('@/pages/admin/authority')));
const Staff = Loadable(lazy(() => import('@/pages/admin/staff')));
const Operator = Loadable(lazy(() => import('@/pages/admin/operator')));
const Seat = Loadable(lazy(() => import('@/pages/admin/seat')));
const Room = Loadable(lazy(() => import('@/pages/admin/room')));
const Degree = Loadable(lazy(() => import('@/pages/admin/degree')));
const Student = Loadable(lazy(() => import('@/pages/admin/student')));

const AdminRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/department',
      element: <Department />,
    },
    {
      path: '/authority',
      element: <Authority />,
    },
    {
      path: '/staff',
      element: <Staff />,
    },
    {
      path: '/operator',
      element: <Operator />,
    },
    {
      path: '/seat',
      element: <Seat />,
    },
    {
      path: '/room',
      element: <Room />,
    },
    {
      path: '/degree',
      element: <Degree />,
    },
    {
      path: '/student',
      element: <Student />,
    },
  ],
};

export default AdminRoutes;
