import { lazy } from 'react';
import Loadable from '@/components/Loadable';

// project imports
import MainLayout from '@/layout/MainLayout';
import AdminGuard from './guards/AdminGuard';
const Department = Loadable(lazy(() => import('@/pages/admin/department')));
const Authority = Loadable(lazy(() => import('@/pages/admin/authority')));
const Staff = Loadable(lazy(() => import('@/pages/admin/staff')));
const Operator = Loadable(lazy(() => import('@/pages/admin/operator')));
const Position = Loadable(lazy(() => import('@/pages/admin/position')));
const Seat = Loadable(lazy(() => import('@/pages/admin/seat')));
const Room = Loadable(lazy(() => import('@/pages/admin/room')));
const Degree = Loadable(lazy(() => import('@/pages/admin/degree')));
const Designation = Loadable(lazy(() => import('@/pages/admin/designation')));
const Student = Loadable(lazy(() => import('@/pages/admin/student')));
const Accommodation = Loadable(
  lazy(() => import('@/pages/admin/accommodation'))
);
const Fee = Loadable(lazy(() => import('@/pages/admin/fee')));
const Due = Loadable(lazy(() => import('@/pages/admin/due')));
const Dashboard = Loadable(lazy(() => import('@/pages/admin/dashboard')));

const AdminRoutes = {
  path: '/',
  element: (
    <AdminGuard>
      <MainLayout />
    </AdminGuard>
  ),
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
      path: '/position',
      element: <Position />,
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
      path: '/designation',
      element: <Designation />,
    },
    {
      path: '/student',
      element: <Student />,
    },
    {
      path: '/accommodation',
      element: <Accommodation />,
    },
    {
      path: '/fee',
      element: <Fee />,
    },
    {
      path: '/due',
      element: <Due />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ],
};

export default AdminRoutes;
