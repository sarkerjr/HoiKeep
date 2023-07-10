import { useRoutes } from 'react-router-dom';

// routes
import PublicRoutes from './PublicRoutes';

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes]);
}
