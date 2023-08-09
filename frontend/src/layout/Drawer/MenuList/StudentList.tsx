import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import SchoolIcon from '@mui/icons-material/School';

const StudentList = [
  {
    text: 'Students',
    path: '/student',
    icon: <PeopleAltIcon />,
  },
  {
    text: 'Accommodations',
    path: '/accommodation',
    icon: <BedroomChildIcon />,
  },
  {
    text: 'Degrees',
    path: '/degree',
    icon: <SchoolIcon />,
  },
];

export default StudentList;
