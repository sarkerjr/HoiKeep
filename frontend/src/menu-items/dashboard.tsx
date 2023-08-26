// assets
import { DashboardOutlined } from '@mui/icons-material';

// icons
const icons = {
  DashboardOutlined,
};

const dashboard = {
  id: 'group-dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
    },
  ],
};

export default dashboard;
