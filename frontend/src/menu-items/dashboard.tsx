import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

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
      icon: DashboardOutlinedIcon,
    },
  ],
};

export default dashboard;
