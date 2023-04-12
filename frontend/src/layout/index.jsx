import { Outlet } from 'react-router-dom';

// project imports
import Appbar from './Appbar';
import Drawer from './Drawer';

const Layout = () => {
  return (
    <>
      <Appbar />
      <Drawer />
      <Outlet />
    </>
  );
};

export default Layout;
