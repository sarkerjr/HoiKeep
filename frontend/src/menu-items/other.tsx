import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const other = {
  id: 'other_panel',
  title: 'Others',
  type: 'group',
  children: [
    {
      id: 'department',
      title: 'Departments',
      type: 'item',
      url: '/department',
      icon: SchoolIcon,
    },
    {
      id: 'position',
      title: 'Admin Positions',
      type: 'item',
      url: '/position',
      icon: ManageAccountsIcon,
    },
    {
      id: 'degree',
      title: 'Student Degrees',
      type: 'item',
      url: '/degree',
      icon: WorkspacePremiumIcon,
    },
    {
      id: 'designation',
      title: 'Faculty Designation',
      type: 'item',
      url: '/designation',
      icon: WorkspacePremiumIcon,
    },
  ],
};

export default other;
