import { useRoutes } from 'react-router-dom';

// routes
import PublicRoutes from './PublicRoutes';
import DepartmentRoutes from './adminRoutes';

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes, DepartmentRoutes]);
}
