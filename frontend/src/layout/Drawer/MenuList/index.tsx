import { Box, Divider } from '@mui/material/';

// project imports
import List from './List';

// lists
import GeneralList from './GeneralList';
import ModeratorList from './ModeratorList';

const MenuList = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List itemlist={GeneralList} />
      <Divider />
      <List itemlist={ModeratorList} />
    </Box>
  );
};

export default MenuList;
