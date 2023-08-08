import { Box, Divider } from '@mui/material/';

// project imports
import List from './List';

// lists
import GeneralList from './GeneralList';
import RoomList from './RoomList';
import StudentList from './StudentList';
import FeeList from './FeeList';
import ModeratorList from './ModeratorList';

const MenuList = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List itemlist={GeneralList} />
      <Divider />
      <List itemlist={StudentList} />
      <Divider />
      <List itemlist={FeeList} />
      <Divider />
      <List itemlist={RoomList} />
      <Divider />
      <List itemlist={ModeratorList} />
    </Box>
  );
};

export default MenuList;
