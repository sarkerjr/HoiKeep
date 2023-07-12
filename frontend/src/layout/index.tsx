import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

// project imports
import Appbar from './Appbar';
import Drawer from './Drawer';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Appbar />
      <Drawer>
        <Outlet />
      </Drawer>
    </Box>
  );
};

export default Layout;
