import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';

const student = {
  id: 'Student_panel',
  title: 'Student',
  type: 'group',
  children: [
    {
      id: 'student',
      title: 'Student',
      type: 'item',
      url: '/student',
      icon: PeopleAltIcon,
    },
    {
      id: 'accommodation',
      title: 'Accommodation',
      type: 'item',
      url: '/accommodation',
      icon: BedroomChildIcon,
    },
    {
      id: 'room',
      title: 'Room',
      type: 'item',
      url: '/room',
      icon: MeetingRoomIcon,
    },
    {
      id: 'seat',
      title: 'Seat',
      type: 'item',
      url: '/seat',
      icon: BedroomParentIcon,
    },
  ],
};

export default student;
