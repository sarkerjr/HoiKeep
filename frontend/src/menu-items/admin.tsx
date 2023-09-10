import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const student = {
  id: 'admin_panel',
  title: 'Administrative',
  type: 'group',
  children: [
    {
      id: 'authority',
      title: 'Authority',
      type: 'item',
      url: '/authority',
      icon: PersonIcon,
    },
    {
      id: 'staff',
      title: 'Staff',
      type: 'item',
      url: '/staff',
      icon: GroupsIcon,
    },
    {
      id: 'operator',
      title: 'Operator',
      type: 'item',
      url: '/operator',
      icon: PersonAddAlt1Icon,
    },
  ],
};

export default student;
