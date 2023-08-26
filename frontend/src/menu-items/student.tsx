// assets
import { LoginOutlined, PeopleOutline } from '@mui/icons-material';

// icons
const icons = {
  LoginOutlined,
  PeopleOutline,
};

const pages = {
  id: 'Student_panel',
  title: 'Student',
  type: 'group',
  children: [
    {
      id: 'student',
      title: 'Student',
      type: 'item',
      url: '/student',
      icon: icons.LoginOutlined,
    },
    {
      id: 'accommodation',
      title: 'Accommodation',
      type: 'item',
      url: '/accommodation',
      icon: icons.PeopleOutline,
    },
    {
      id: 'room',
      title: 'Room',
      type: 'item',
      url: '/room',
      icon: icons.PeopleOutline,
    },
    {
      id: 'seat',
      title: 'Seat',
      type: 'item',
      url: '/seat',
      icon: icons.PeopleOutline,
    },
  ],
};

export default pages;
