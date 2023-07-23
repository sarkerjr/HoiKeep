import { Box, Divider } from '@mui/material/';

// project imports
import List from './List';

// lists
import ModeratorList from './ModeratorList';

const MenuList = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List itemlist={ModeratorList} />
      <Divider />
    </Box>
  );
};

export default MenuList;
