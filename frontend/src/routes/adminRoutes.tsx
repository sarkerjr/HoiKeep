import { lazy } from 'react';

// project imports
import Layout from '@/layout';
const Department = lazy(() => import('@/pages/admin/department'));

const DepartmentRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/department',
      element: <Department />,
    },
  ],
};

export default DepartmentRoutes;
